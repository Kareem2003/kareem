import React, { useState, useEffect } from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa6";
import { MdOutlineFileDownload } from "react-icons/md";
import SimpleImageSlider from "react-simple-image-slider";
import "react-slideshow-image/dist/styles.css";
import { assets } from "./assets/index";
import CV from "./assets/myCV.pdf";
import NavBar from "./components/NavBar";
import PopupImage from "./components/PopupImage";
import ProjectCard from "./components/ProjectCard";
import SkillsLoop from "./components/SkillsLoop";
import Spacer from "./components/Spacer";

// Reusable ContactCard component
const ContactCard = ({ icon: Icon, title, subtitle, link }) => (
  <div
    className="bg-gray-900 border border-gray-700 p-8 rounded-lg shadow-sm hover:shadow-lg hover:shadow-primary transition-shadow duration-300 cursor-pointer flex flex-col items-center"
    onClick={() => (window.location.href = link)}
  >
    <div className="bg-blue-600 p-4 rounded-full mb-4">
      <Icon size={28} className="text-white" />
    </div>
    <h3 className="text-2xl font-semibold text-gray-100 mb-2">{title}</h3>
    <p className="text-lg text-gray-400">{subtitle}</p>
  </div>
);

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

  const [popupImageUrl, setPopupImageUrl] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0); // Start from 0th index
  const [sliderDimensions, setSliderDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setSliderDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleNavClick = (toRight) => {
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
        <div className="flex flex-col-reverse md:flex-row items-center sm:justify-between">
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
        <div className="my-12">
          <h2 className="text-5xl font-bold mb-6 text-gray-200 text-center pb-5 uppercase">
            Certifications
          </h2>
          <div>
            <div className="flex flex-col md:flex-row justify-between items-start">
              <div className="mt-6 mr-6 max-w-xl md:mt-0">
                <h1 className="text-7xl mt-6 text-primary">
                  {images[currentIndex].number}
                </h1>
                <h2 className="text-4xl mt-6">{images[currentIndex].title}</h2>
                <p className="text-base mt-6 mb-6 lg:mb-0 md:mb-0 text-textGray text-justify">
                  {images[currentIndex].description}
                </p>
              </div>
              <div className="flex w-full max-w-xl max-h-xl">
                <SimpleImageSlider
                  width={
                    sliderDimensions.width < 768
                      ? sliderDimensions.width * 0.9
                      : sliderDimensions.width * 0.4
                  }
                  height={
                    sliderDimensions.height < 768
                      ? sliderDimensions.height * 0.6
                      : sliderDimensions.height * 0.4
                  }
                  images={images}
                  showNavs={true}
                  showBullets={true}
                  currentIndex={currentIndex}
                  onClickNav={(toRight) => handleNavClick(toRight)}
                  onClickBullets={(idx) => setCurrentIndex(idx)}
                  onSlideChange={(idx) => setCurrentIndex(idx)}
                  onClick={() =>
                    handleCertificationClick(images[currentIndex].url)
                  }
                />
              </div>
            </div>
          </div>
        </div>
        <Spacer space={"py-12 w-full"} />
        {/* Projects */}
        <div className="my-10">
          <h2 className="text-5xl font-bold mb-6 text-gray-200 text-center pb-5 uppercase">
            Projects
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
            <ProjectCard
              image={DucksRow}
              title="Project 1"
              description="Description 1"
            />
            <ProjectCard
              image={DucksRow}
              title="Project 2"
              description="Description 2"
            />
            <ProjectCard
              image={DucksRow}
              title="Project 3"
              description="Description 3"
            />
          </div>
        </div>
        <Spacer space={"py-12 w-full"} />
        {/* Contact */}
        <div className="my-10">
          <h2 className="text-5xl font-bold mb-6 text-gray-200 text-center pb-5 uppercase">
            Get In Touch
          </h2>
          <p className="text-center text-lg text-gray-400 mb-10">
            I’d love to hear from you! Let’s connect and work together.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 justify-center items-center">
            <ContactCard
              icon={FaPhoneAlt}
              title="Phone & WhatsApp"
              subtitle="+2 010 9099 2653"
              link="https://wa.me/201090992653"
            />
            <ContactCard
              icon={FaEnvelope}
              title="Email"
              subtitle="kareemabdallah061@gmail.com"
              link="mailto:kareemabdallah061@gmail.com"
            />
          </div>
        </div>
      </div>
      {/* Footer */}
      <footer className="bg-primary text-dark py-2 text-center">
        <p>© 2024 Kareem Abdallah. All rights reserved.</p>
      </footer>
      {/* Popup Image */}
      {popupImageUrl && (
        <PopupImage
          imageUrl={popupImageUrl}
          onClose={() => setPopupImageUrl(null)}
        />
      )}
    </>
  );
}

export default App;
