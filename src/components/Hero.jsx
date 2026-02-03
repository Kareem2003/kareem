import React from "react";
import { MdOutlineFileDownload } from "react-icons/md";
import { HERO_CONTENT, SOCIAL_LINKS } from "../constants/content";
import { assets } from "../assets";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
    >
      {/* Background blobs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-[100px] animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-[100px] animate-pulse delay-1000"></div>

      <div className="container mx-auto px-6 z-10 flex flex-col-reverse md:flex-row items-center gap-12">
        <div className="flex-1 text-center md:text-left">
          <div className="inline-block px-4 py-2 mb-4 rounded-full glass border-primary/30 text-sm font-semibold text-primary">
            {HERO_CONTENT.title}
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            Hello, I'm <br />
            <span className="text-gradient leading-relaxed py-2">
              {HERO_CONTENT.name}
            </span>
          </h1>
          <p className="text-gray-300 text-lg mb-8 max-w-lg mx-auto md:mx-0 leading-relaxed">
            {HERO_CONTENT.description}
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
            <a
              href={HERO_CONTENT.resumeLink}
              download="Kareem_Abdallah_CV.pdf"
              className="px-8 py-3 rounded-full bg-primary hover:bg-blue-600 transition-all flex items-center gap-2 font-semibold shadow-lg shadow-primary/25 text-white hover:scale-105 active:scale-95"
            >
              Download CV <MdOutlineFileDownload size={20} />
            </a>

            <div className="flex gap-4">
              {SOCIAL_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full glass hover:bg-white/10 transition-all text-white hover:text-primary hover:-translate-y-1"
                  aria-label={link.name}
                >
                  <link.icon size={20} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="flex-1 relative flex justify-center mb-10 md:mb-0">
          <div className="relative w-72 h-72 md:w-96 md:h-96">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary to-secondary rounded-full blur-2xl opacity-20 transform rotate-6 scale-105"></div>
            <div className="relative w-full h-full rounded-full p-2 glass border-white/10">
              <img
                src={HERO_CONTENT.image}
                alt={HERO_CONTENT.name}
                className="w-full h-full object-cover rounded-full border-2 border-white/10 shadow-2xl hover:scale-[1.02] transition-transform duration-500"
              />
            </div>
            {/* Floating Tech Icons */}
            <div className="absolute top-0 right-10 bg-white/10 backdrop-blur-md p-3 rounded-full animate-float delay-0 border border-white/10 shadow-xl">
              <img src={assets.Odoo} alt="Odoo" className="w-8 h-8 md:w-10 md:h-10 object-contain" />
            </div>
            <div className="absolute bottom-10 -left-8 bg-white/10 backdrop-blur-md p-3 rounded-full animate-float delay-1000 border border-white/10 shadow-xl">
              <img src={assets.Python} alt="Python" className="w-8 h-8 md:w-10 md:h-10 object-contain" />
            </div>
            <div className="absolute top-1/2 -right-8 bg-white/10 backdrop-blur-md p-3 rounded-full animate-float delay-2000 border border-white/10 shadow-xl">
              <img src={assets.ReactImg} alt="React" className="w-8 h-8 md:w-10 md:h-10 object-contain" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
