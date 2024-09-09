import { useState } from "react";
import NavBar from "./components/NavBar";
import profileImage from "./assets/profile.png";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="py-12 px-36 font-JetBrains">
      <NavBar />
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <p className="">Front-End Developer</p>
          <h1 className="text-6xl">Hello I'm</h1>
          <span className="text-6xl text-primary">Kareem Abdallah</span>
          <p>
            As a frontend developer, you are the architect of user experiences,
            translating design concepts into functional, responsive, and
            visually engaging web interfaces. Your expertise in HTML, CSS
          </p>
        </div>

        <div className="flex justify-center items-center">
          <img
            className=" border-primary border-2 rounded-full w-96 border-dashed p-2"
            src={profileImage}
            alt="Profile Photo"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
