import React, { useState, useEffect } from "react";
import { ImCancelCircle } from "react-icons/im";
import { HiMiniBars3 } from "react-icons/hi2";
import { HERO_CONTENT } from "../../constants/content";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "nav-glass py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold tracking-tighter">
          Kareem<span className="text-primary">.</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-8">
          <ul className="flex gap-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="text-sm font-medium hover:text-primary transition-colors relative group"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
            ))}
          </ul>
          <a
            href={HERO_CONTENT.resumeLink}
            download="Kareem_Abdallah_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 rounded-full border border-white/20 hover:bg-white/10 hover:border-primary/50 transition-all text-sm font-semibold"
          >
            Resume
          </a>
        </div>

        {/* Mobile Hamburger */}
        <div className="lg:hidden z-50">
          <button
            onClick={toggleMenu}
            className="text-3xl focus:outline-none transition-transform duration-300"
          >
            {isOpen ? <ImCancelCircle /> : <HiMiniBars3 />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        <div
          className={`fixed inset-0 bg-dark/95 backdrop-blur-xl flex flex-col justify-center items-center gap-8 text-2xl transition-all duration-300 ${
            isOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
          }`}
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="hover:text-primary transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
            href={HERO_CONTENT.resumeLink}
            download="Kareem_Abdallah_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 rounded-full border border-primary text-primary hover:bg-primary hover:text-white transition-all text-xl"
            onClick={() => setIsOpen(false)}
          >
            Download Resume
          </a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
