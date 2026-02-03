import React from "react";
import { EXPERIENCES } from "../constants/content";

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-dark relative overflow-hidden">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center text-gradient">
          Work Experience
        </h2>

        <div className="max-w-4xl mx-auto">
          {EXPERIENCES.map((exp, index) => (
            <div
              key={index}
              className="mb-12 relative pl-8 border-l-2 border-white/10 last:mb-0 hover:border-primary transition-colors duration-300"
            >
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary shadow-[0_0_10px_theme('colors.primary')]"></div>

              <div className="glass-card p-6 rounded-2xl transform hover:-translate-y-1 transition-transform duration-300">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-4">
                  <div className="flex items-center gap-4">
                    {exp.logo && (
                      <div className="w-12 h-12 rounded-full overflow-hidden bg-white/5 p-1">
                        <img
                          src={exp.logo}
                          alt={exp.company}
                          className="w-full h-full object-contain rounded-full"
                        />
                      </div>
                    )}
                    <div>
                      <h3 className="text-xl font-bold text-white">
                        {exp.role}
                      </h3>
                      <p className="text-primary font-medium">{exp.company}</p>
                    </div>
                  </div>
                  <span className="text-sm font-mono text-gray-400 bg-white/5 px-3 py-1 rounded-full border border-white/5">
                    {exp.duration}
                  </span>
                </div>
                <p className="text-gray-300 leading-relaxed text-justify">
                  {exp.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
