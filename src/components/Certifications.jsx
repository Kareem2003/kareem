import React, { useState } from "react";
import { CERTIFICATIONS } from "../constants/content";
import { FaAward } from "react-icons/fa";

const Certifications = () => {
  const [activeCert, setActiveCert] = useState(CERTIFICATIONS[0]);

  return (
    <section id="certificates" className="py-20 relative bg-dark">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-gradient">
          Certifications
        </h2>

        <div className="flex flex-col lg:flex-row gap-8 h-[600px] lg:h-[500px]">
          {/* List Section */}
          <div className="lg:w-1/3 flex flex-col gap-3 overflow-y-auto pr-2 custom-scrollbar">
            {CERTIFICATIONS.map((cert, index) => (
              <div
                key={index}
                onClick={() => setActiveCert(cert)}
                className={`p-4 rounded-xl cursor-pointer transition-all duration-300 border flex items-center gap-3 ${
                  activeCert === cert
                    ? "bg-primary/20 border-primary"
                    : "bg-white/5 border-white/5 hover:bg-white/10"
                }`}
              >
                <div
                  className={`p-2 rounded-lg ${
                    activeCert === cert ? "bg-primary text-white" : "bg-white/10 text-gray-400"
                  }`}
                >
                  <FaAward size={20} />
                </div>
                <div>
                  <h3
                    className={`font-semibold text-sm ${
                      activeCert === cert ? "text-white" : "text-gray-300"
                    }`}
                  >
                    {cert.title}
                  </h3>
                  <p className="text-xs text-gray-500">{cert.issuer}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Preview Section */}
          <div className="lg:w-2/3 glass-card rounded-2xl p-2 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-t from-dark to-transparent opacity-80 z-10 lg:opacity-40 lg:group-hover:opacity-80 transition-opacity duration-500"></div>
            
            <img
              src={activeCert.image}
              alt={activeCert.title}
              key={activeCert.title} // Force re-render for animation
              className="w-full h-full object-cover rounded-xl animate-fade-in"
            />
            
            <div className="absolute bottom-0 left-0 p-8 z-20 transform lg:translate-y-4 lg:group-hover:translate-y-0 transition-transform duration-300">
              <h3 className="text-3xl font-bold text-white mb-2">{activeCert.title}</h3>
              <p className="text-primary font-medium mb-4">{activeCert.issuer}</p>
              <p className="text-gray-300 max-w-2xl leading-relaxed">
                {activeCert.description}
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <style>{`
        .animate-fade-in {
          animation: fadeIn 0.5s ease-in-out;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.98); }
          to { opacity: 1; transform: scale(1); }
        }
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
      `}</style>
    </section>
  );
};

export default Certifications;
