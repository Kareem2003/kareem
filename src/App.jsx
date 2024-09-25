import NavBar from "./components/NavBar";
import CV from "./assets/myCV.pdf";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { MdOutlineFileDownload } from "react-icons/md";
import { assets } from "./assets/index";
import SkillsLoop from "./components/SkillsLoop";
import ProjectCard from "./components/ProjectCard";
import { sendEmail } from "./api/service/EmailService"; // Import the sendEmail function

function App() {
  const { profile, DucksRow } = assets;

  const handleSubmit = (event) => {
    event.preventDefault();
    const { name, email, message } = event.target.elements;

    const payload = {
      name: name.value,
      email: email.value,
      message: message.value,
    };

    sendEmail(
      payload,
      (response) => {
        alert("Email sent successfully!");
      },
      (error) => {
        alert("Failed to send email.");
      },
      () => {
        console.log("Email send attempt finished.");
      }
    );
  };

  return (
    <>
      <div className="py-6 px-6 sm:px-12 md:px-24 lg:px-36 xl:px-48 font-JetBrains">
        <NavBar />
        {/* Home */}
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
              responsive, and visually engaging web interfaces. Your expertise
              in HTML, CSS
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
        {/* Skills */}
        <SkillsLoop />
        {/* Projects */}
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
        {/* Contact */}
        <div className="mt-10">
          <h2 className="text-3xl font-bold text-center mb-5">Contact Me</h2>
          <h2 className="text-xl text-center">
            If you have any questions or want to work together, feel free to
            reach out!
          </h2>
          <form className="max-w-lg mx-auto p-8 rounded-lg shadow-lg text-dark" onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="name"
              >
                Name
              </label>
              <input
                className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-primary focus:shadow-outline focus:ring-2 focus:ring-primary"
                id="name"
                type="text"
                placeholder="Your Name"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-primary"
                id="email"
                type="email"
                placeholder="Your Email"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-primary"
                id="message"
                rows="5"
                placeholder="Your Message"
              ></textarea>
            </div>
            <div className="flex items-center justify-center">
              <button
                className="bg-primary hover:bg-blue-700 text-white font-bold py-2 px-9 rounded-xl focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
      {/* Footer */}
      <footer className="bg-primary text-dark py-2">
        <div className="container mx-auto text-center">
          <p>© 2024 Kareem Abdallah. All rights reserved.</p>
          <div className="flex justify-center mt-4">
            <a
              href="https://www.linkedin.com/in/kareem-abdallah"
              className="text-dark hover:text-blue-700 mx-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin size={20} className="text-dark" />
            </a>
            <a
              href="https://github.com/kareem2003"
              className="text-dark hover:text-blue-700 mx-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub size={20} className="text-dark" />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
