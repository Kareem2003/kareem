import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";

const ProjectCard = ({ image, title, description, anchor, tags }) => {
  const openInNewTab = (e) => {
    e.preventDefault();
    const newWindow = window.open(anchor, '_blank', 'noopener,noreferrer');
    if (newWindow) newWindow.opener = null;
  };

  return (
    <div 
      className="glass-card rounded-2xl overflow-hidden group hover:-translate-y-2 transition-transform duration-300 flex flex-col h-full cursor-pointer"
      onClick={openInNewTab}
    >
      <div className="relative h-48 overflow-hidden">
        <div className="absolute inset-0 bg-dark/20 group-hover:bg-transparent transition-colors duration-300 z-10"></div>
        
        {image ? (
          <img 
            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" 
            src={image} 
            alt={title} 
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-slate-800 via-slate-900 to-black group-hover:scale-110 transition-transform duration-500 flex items-center justify-center relative overflow-hidden">
             {/* Abstract Shapes for visual interest */}
             <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full blur-2xl transform translate-x-10 -translate-y-10"></div>
             <div className="absolute bottom-0 left-0 w-32 h-32 bg-secondary/20 rounded-full blur-2xl transform -translate-x-10 translate-y-10"></div>
             
             {/* Tech or Title Initials overlay */}
             <h4 className="text-4xl font-bold text-white/10 group-hover:text-white/20 transition-colors z-20">
                {title.substring(0, 2).toUpperCase()}
             </h4>
          </div>
        )}

        <div className="absolute top-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/50 p-2 rounded-full backdrop-blur-sm">
          <FaExternalLinkAlt className="text-white text-sm" />
        </div>
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="font-bold text-xl mb-3 text-white group-hover:text-primary transition-colors">
          {title}
        </h3>
        
        <p className="text-gray-400 text-sm mb-4 leading-relaxed flex-grow">
          {description}
        </p>
        
        {tags && (
          <div className="flex flex-wrap gap-2 mt-auto">
            {tags.map((tag, index) => (
              <span 
                key={index} 
                className="text-xs font-mono px-2 py-1 rounded bg-primary/10 text-primary border border-primary/20"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
