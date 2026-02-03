import { useRef, useEffect } from "react";
import { SKILLS } from "../../constants/content";

const SkillsLoop = () => {
  const marqueeRef = useRef(null);

  useEffect(() => {
    const marquee = marqueeRef.current;
    if (!marquee) return;
    
    // Duplicate content for infinite loop
    const content = marquee.innerHTML;
    marquee.innerHTML = content + content;
  }, []);

  return (
    <div className="py-10 relative overflow-hidden bg-dark/30 border-y border-white/5">
      {/* Gradient Masks */}
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-dark to-transparent z-10 pointer-events-none"></div>
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-dark to-transparent z-10 pointer-events-none"></div>

      <div className="flex overflow-hidden group">
        <div 
          ref={marqueeRef}
          className="flex space-x-12 animate-scroll group-hover:pause"
          style={{ animation: 'scroll 50s linear infinite' }}
        >
          {SKILLS.map((skill, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center justify-center gap-4 min-w-[100px] grayscale hover:grayscale-0 transition-all duration-300 opacity-50 hover:opacity-100 hover:scale-110 cursor-pointer"
            >
              <img 
                src={skill.image} 
                alt={skill.name} 
                className="w-16 h-16 object-contain drop-shadow-lg" 
              />
              <span className="text-sm font-medium text-gray-400">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
      
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .pause {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default SkillsLoop;
