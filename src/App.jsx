import { useState } from "react";
import NavBar from "./components/NavBar";
import profileImage from "./assets/profile.png";
import ProgressCard from "./components/ProgressCard";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="py-6 px-6 sm:px-12 md:px-24 lg:px-36 xl:px-48 font-JetBrains">
      <NavBar />
      <div className="flex flex-col-reverse md:flex-row items-center justify-between">
        <div className="flex-1 text-center md:text-left">
          <p className="text-sm md:text-base">Front-End Developer</p>
          <h1 className="text-3xl md:text-5xl lg:text-6xl">Hello I'm</h1>
          <span className="text-3xl md:text-5xl lg:text-6xl text-primary">
            Kareem Abdallah
          </span>
          <p className="mt-4 text-sm md:text-base">
            As a frontend developer, you are the architect of user experiences,
            translating design concepts into functional, responsive, and
            visually engaging web interfaces. Your expertise in HTML, CSS
          </p>
        </div>

        <div className="flex justify-center items-center mb-8 md:mb-0">
          <img
            className="border-primary border-2 rounded-full w-48 md:w-72 lg:w-96 border-dashed p-2"
            src={profileImage}
            alt="Profile Photo"
          />
        </div>
      </div>
      <div className="flex my-20 justify-between">
        <ProgressCard number={1} text="Years oF Experience" />
        <ProgressCard number={3} text="Projects Completed" />
        <ProgressCard number={4} text="Technologies Mastered" />
        <ProgressCard number={200} text="Commits" />
      </div>
    </div>
  );
}

export default App;
