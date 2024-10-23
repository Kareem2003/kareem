import React from "react";

const ProjectCard = ({ image, title, description, anchor }) => {
  const openInNewTab = () => {
    const newWindow = window.open(anchor, '_blank', 'noopener,noreferrer')
    if (newWindow) newWindow.opener = null
  }
  
  return (
    <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white m-4 hover:shadow-primary hover:scale-105 transition-transform duration-300" onClick={openInNewTab}>
      <img className="w-full h-48 object-cover" src={image} alt={title} />
      <div className="px-6 py-4 text-dark">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-800 text-base">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
