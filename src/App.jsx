import NavBar from "./components/NavBar";
import profileImage from "./assets/profile.png";
import CV from "./assets/myCV.pdf";
import ProgressCard from "./components/ProgressCard";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { MdOutlineFileDownload } from "react-icons/md";

function App() {
  return (
    <div className="py-6 px-6 sm:px-12 md:px-24 lg:px-36 xl:px-48 font-JetBrains">
      <NavBar />
      <div className="flex flex-col-reverse md:flex-row items-center sm:justify-between">
        <div className="flex-1 text-center md:text-left">
          <p className="text-sm md:text-base">Front-End Developer</p>
          <h1 className="text-3xl md:text-5xl lg:text-6xl">{"Hello I'm"}</h1>
          <span className="text-3xl md:text-5xl lg:text-6xl text-primary">
            Kareem Abdallah
          </span>
          <p className="mt-4 text-sm md:text-base">
            As a frontend developer, you are the architect of user experiences,
            translating design concepts into functional, responsive, and
            visually engaging web interfaces. Your expertise in HTML, CSS
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
              <a href="https://www.linkedin.com/in/kareem2003" target="_blank">
                <FaLinkedin size={20} className="text-primary" />
              </a>
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center mb-8 md:mb-0">
          <img
            className="border-primary border-2 rounded-full w-48 md:w-72 lg:w-96 border-dashed p-2"
            src={profileImage}
            alt="Profile Photo"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 gap-4 my-20 text-center md:grid-cols-2 lg:grid-cols-4 items-center">
        <ProgressCard number={1} text="Years of Experience" />
        <ProgressCard number={3} text="Projects Completed" />
        <ProgressCard number={4} text="Technologies Mastered" />
        <ProgressCard number={200} text="Commits" />
      </div>
    </div>
  );
}

export default App;
