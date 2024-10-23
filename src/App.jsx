import React, { useState, useEffect } from "react";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa6";
import { MdOutlineFileDownload } from "react-icons/md";
import { assets } from "./assets/index";
import CV from "./assets/myCV.pdf";
import NavBar from "./components/NavBar";
import PopupImage from "./components/PopupImage";
import ProjectCard from "./components/ProjectCard";
import SkillsLoop from "./components/SkillsLoop";
import Spacer from "./components/Spacer";
import emailjs from "@emailjs/browser";
import ContactForm from "./components/ContactForm";
import { Slide, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const {
    profile,
    DucksRow,
    ReactCer,
    NodeCer,
    CloudCer,
    GithubCer,
    PSsolutionCer,
    SavolaCer,
    SoftSkillsCer,
    WebDevCer1,
    WebDevCer2,
  } = assets;

  const images = [
    {
      url: WebDevCer2,
      title: "Web Developer Challenger Certificate",
      description:
        "This certificate covers the fundamentals of web development, including HTML, CSS, and JavaScript, teaching how to build responsive websites from scratch. It also includes practical projects to apply these skills in real-world scenarios.",
      number: 1,
    },
    {
      url: WebDevCer1,
      title: "Web Developer Coursera Certificate",
      description:
        "This certificate covers the fundamentals of web development, including HTML, CSS, and JavaScript, teaching how to build responsive websites from scratch. It also includes practical projects to apply these skills in real-world scenarios.",
      number: 2,
    },
    {
      url: SoftSkillsCer,
      title: "Soft Skills Certificate",
      description:
        "This certificate emphasizes the development of interpersonal skills such as communication, teamwork, problem-solving, and adaptability, which are essential for effective collaboration and success in any professional environment.",
      number: 3,
    },
    {
      url: SavolaCer,
      title: "Savola Intern Certificate 2022",
      description:
        "Completed a 4-month internship at Savola Foods, contributing to the 'Marketing Budget Automation' project. Worked with Oracle ERP, Oracle SQL, and other tools to automate budget control, purchase orders, and approval processes.",
      number: 4,
    },
    {
      url: PSsolutionCer,
      title: "PSsolution Intern Certificate 2023",
      description: "",
      number: 5,
    },
    {
      url: GithubCer,
      title: "GitHub Certificate",
      description: "",
      number: 6,
    },
    {
      url: CloudCer,
      title: "Cloud Computing Basics Certificate",
      description: "",
      number: 7,
    },
    {
      url: ReactCer,
      title: "ReactJS Certificate",
      description: "",
      number: 8,
    },
    {
      url: NodeCer,
      title: "Node.js & Express Certificate",
      description: "",
      number: 8,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0); // Start from 0th index
  const [isImageLoading, setIsImageLoading] = useState(true);
  const [popupImageUrl, setPopupImageUrl] = useState(null);

  useEffect(() => {
    // Preload the next image when the currentIndex changes
    const img = new Image();
    img.src = images[currentIndex].url;
    img.onload = () => setIsImageLoading(false);
  }, [currentIndex]);

  const notify = () => toast("Success!");

  const handleNavClick = (toRight) => {
    setIsImageLoading(true); // Set to loading before changing the image
    if (toRight) {
      const nextIndex = (currentIndex + 1) % images.length;
      setCurrentIndex(nextIndex);
    } else {
      const prevIndex = (currentIndex - 1 + images.length) % images.length;
      setCurrentIndex(prevIndex);
    }
  };

  const handleCertificationClick = (imageUrl) => {
    setPopupImageUrl(imageUrl);
  };

  return (
    <>
      <div className="py-6 px-6 sm:px-12 md:px-24 lg:px-36 xl:px-48 font-JetBrains">
        <NavBar />
        {/* Home Section */}
        <div
          className="flex flex-col-reverse md:flex-row items-center sm:justify-between"
          id="home"
        >
          <div className="flex-1 text-center md:text-left">
            <p className="text-sm md:text-base">Front-End Developer</p>
            <h1 className="text-3xl md:text-5xl lg:text-6xl">{"Hello I'm"}</h1>
            <span className="text-3xl md:text-5xl lg:text-6xl text-primary">
              Kareem Abdallah
            </span>
            <p className="mt-4 text-sm md:text-base">
              As a frontend developer, you are the architect of user
              experiences, translating design concepts into functional,
              responsive, and visually engaging web interfaces.
            </p>
            <div className="flex flex-col lg:items-center lg:flex-row md:items-center md:flex-row">
              <div className="flex justify-center my-5 lg:mr-5 lg:justify-start md:mr-5 md:justify-start">
                <a href={CV} download="Kareem_Abdallah_CV.pdf" target="_blank">
                  <button className="flex text-primary border border-1 border-primary px-4 py-2 rounded-xl items-center">
                    Download CV
                    <MdOutlineFileDownload size={20} className="ml-2" />
                  </button>
                </a>
              </div>
              <div className="flex justify-center gap-2">
                <a href="https://github.com/Kareem2003" target="_blank">
                  <FaGithub size={20} className="text-primary" />
                </a>
                <a
                  href="https://www.linkedin.com/in/kareem2003"
                  target="_blank"
                >
                  <FaLinkedin size={20} className="text-primary" />
                </a>
                <a href="https://wa.me/+201090992653" target="_blank">
                  <FaWhatsapp size={20} className="text-primary" />
                </a>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center mb-8 md:mb-0">
            <img
              className="border-primary border-2 rounded-full w-48 md:w-72 lg:w-96 border-dashed p-2"
              src={profile}
              alt="Profile Photo"
            />
          </div>
        </div>
        <Spacer space={"py-2 w-full"} />
        {/* Skills */}
        <SkillsLoop />
        <Spacer space={"py-4 w-full"} />
        {/* Certifications */}
        <div className="my-12" id="certificates">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-gray-200 text-center pb-5 uppercase">
            Certifications
          </h2>
          <div>
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mt-6 mr-6 max-w-xl md:mt-0">
                <h1 className="text-7xl mt-6 text-primary">
                  {images[currentIndex].number}
                </h1>
                <h2 className="text-4xl mt-6">{images[currentIndex].title}</h2>
                <p className="text-base mt-6 mb-6 lg:mb-0 md:mb-0 text-textGray text-justify">
                  {images[currentIndex].description}
                </p>
              </div>

              <div className="relative mt-6 md:mt-0 flex justify-center">
                <div>
                  <div
                    className={`min-w-full max-w-full lg:w-[600px] md:w-[500px] h-[50vh] lg:h-[50vh] overflow-hidden rounded-lg shadow-xl relative ${
                      isImageLoading
                        ? "opacity-0 scale-95"
                        : "opacity-100 scale-100"
                    }`}
                  >
                    <img
                      src={images[currentIndex].url}
                      alt={images[currentIndex].title}
                      className={`w-full h-full object-cover transition duration-500 ease-in-out transform ${
                        isImageLoading
                          ? "opacity-0 scale-95"
                          : "opacity-100 scale-100"
                      }`}
                      onClick={() =>
                        handleCertificationClick(images[currentIndex].url)
                      }
                    />
                  </div>

                  {/* Custom Previous Button */}
                  <button
                    className="absolute top-1/2 left-4 text-dark bg-primary bg-opacity-10 hover:bg-opacity-40 p-4 rounded-full transform -translate-y-1/2 transition duration-300 ease-in-out"
                    onClick={() => handleNavClick(false)}
                  >
                    <span className="text-3xl text-gray-300 hover:text-red">
                      {"<"}
                    </span>
                  </button>

                  {/* Custom Next Button */}
                  <button
                    className="absolute top-1/2 right-4 text-dark bg-primary bg-opacity-10 hover:bg-opacity-40 p-4 rounded-full transform -translate-y-1/2 transition duration-300 ease-in-out"
                    onClick={() => handleNavClick(true)}
                  >
                    <span className="text-3xl text-gray-300 hover:text-red">
                      {">"}
                    </span>
                  </button>

                  {/* Cool Bullet Indicators */}
                  <div className="flex justify-center mt-4 space-x-2">
                    {images.map((_, index) => (
                      <button
                        key={index}
                        className={`mx-1 w-3 h-3 rounded-full transition-all ${
                          index === currentIndex
                            ? "bg-primary scale-110 shadow-lg"
                            : "bg-white hover:bg-primary hover:scale-110"
                        }`}
                        onClick={() => setCurrentIndex(index)}
                      ></button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Spacer space={"py-12 w-full"} />
        {/* Projects */}
        <div className="my-10" id="projects">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-gray-200 text-center pb-5 uppercase">
            Projects
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
            <ProjectCard
              image={DucksRow}
              title="Ducks Row"
              description="Duck's Row is a web platform that helps users find hangout spots by filtering options based on location and budget."
              anchor="https://github.com/Duck-s-Row/Duck-s-Row.github.io"
            />
            <ProjectCard
              image={DucksRow}
              title="ToDo App"
              description="A Simple ToDo app is built using React Native. The app provides a clean interface for adding, viewing, and completing tasks."
              anchor="https://github.com/Kareem2003/TodoApp"
            />
            <ProjectCard
              image={DucksRow}
              title="NCT Table"
              description="This project is a simple Flutter application to show the time table of the NCT."
              anchor="https://github.com/Kareem2003/NCT_Table"
            />
            <ProjectCard
              image={DucksRow}
              title="Wagbat"
              description="Wagbat is a food delivery application designed to facilitate food delivery service to fellow students. "
              anchor="https://github.com/Kareem2003/NCT_Table"
            />
          </div>
        </div>
        <Spacer space={"py-12 w-full"} />
        {/* Contact */}
        <div className="my-10" id="contact">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-gray-200 text-center pb-5 uppercase">
            Get In Touch
          </h2>
          <p className="text-center text-lg md:text-xl mb-8">
            You can reach out to me via the contact information below:
          </p>
          <div className="flex flex-col gap-8">
            <ContactForm />
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white bg-primary text-center py-4">
        <p className="pb-3">
          &copy; 2024 Kareem Abdallah. All rights reserved.
        </p>
        <div className="flex justify-center gap-2">
          <a
            href="https://github.com/Kareem2003"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={20} className="text-white" />
          </a>
          <a
            href="https://www.linkedin.com/in/kareem2003"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={20} className="text-white" />
          </a>
          <a
            href="https://wa.me/+201090992653"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp size={20} className="text-white" />
          </a>
        </div>
      </footer>

      {popupImageUrl && (
        <PopupImage
          imageUrl={popupImageUrl}
          onClose={() => setPopupImageUrl(null)}
        />
      )}
      <ToastContainer
        position="top-center"
        hideProgressBar
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover={false}
        theme="dark"
        transition:Slide
      />
    </>
  );
}

export default App;
