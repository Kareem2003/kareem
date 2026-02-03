import React from "react";
import { HERO_CONTENT } from "../constants/content";

const About = () => {
  return (
    <section id="about" className="py-20 bg-dark/50 relative overflow-hidden">
        {/* Background blobs */}
        <div className="absolute top-1/2 left-0 w-64 h-64 bg-primary/10 rounded-full blur-[80px] -translate-y-1/2 pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-gradient">
          About Me
        </h2>
        
        <div className="max-w-4xl mx-auto glass-card p-8 md:p-12 rounded-3xl border border-white/5">
            <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="flex-1">
                    <p className="text-gray-300 text-lg leading-relaxed mb-6 text-justify">
                        I am a passionate <span className="text-primary font-semibold">Odoo Developer</span> and <span className="text-secondary font-semibold">Front-End Engineer</span> with a strong foundation in modern web technologies. 
                        My journey bridges the gap between complex backend systems and intuitive user interfaces.
                    </p>
                    <p className="text-gray-300 text-lg leading-relaxed mb-6 text-justify">
                        With experience in optimizing ERP solutions at <span className="text-white font-medium">Savola Foods</span> and building responsive applications, 
                        I thrive on solving real-world problems through clean, efficient code. I am constantly learning and adapting to new technologies to deliver exceptional digital experiences.
                    </p>
                    
                    <div className="grid grid-cols-2 gap-4 mt-8">
                        <div className="p-4 rounded-xl bg-white/5 border border-white/5 text-center">
                            <h3 className="text-3xl font-bold text-white mb-1">2+</h3>
                            <p className="text-sm text-gray-400">Years Experience</p>
                        </div>
                        <div className="p-4 rounded-xl bg-white/5 border border-white/5 text-center">
                            <h3 className="text-3xl font-bold text-white mb-1">10+</h3>
                            <p className="text-sm text-gray-400">Projects Completed</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default About;
