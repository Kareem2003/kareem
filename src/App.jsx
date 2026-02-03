import React from "react";
import { ToastContainer, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import SkillsLoop from "./components/SkillsLoop";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import { SOCIAL_LINKS } from "./constants/content";

function App() {
  return (
    <div className="bg-dark text-white font-Inter min-h-screen selection:bg-primary/30 selection:text-white">
      <NavBar />
      
      <main>
        <Hero />
        <SkillsLoop />
        <Experience />
        <Projects />
        <Certifications />
        <Contact />
      </main>

      <footer className="bg-slate-950 py-8 border-t border-white/5">
        <div className="container mx-auto px-6 text-center">
          <div className="flex justify-center gap-6 mb-4">
            {SOCIAL_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary transition-colors"
              >
                <link.icon size={20} />
              </a>
            ))}
          </div>
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Kareem Abdallah. All rights reserved.
          </p>
        </div>
      </footer>

      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Slide}
      />
    </div>
  );
}

export default App;
