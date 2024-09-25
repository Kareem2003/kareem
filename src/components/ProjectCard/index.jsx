import React from "react";

const ProjectCard = ({ image, title, description }) => {
  return (
    <div className="border border-gray rounded-lg hover:border-primary transform transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary">
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover rounded-t-lg"
      />
      <div className="bg-white text-dark p-4 rounded-b-lg">
        <h2 className="text-xl font-bold ">{title}</h2>
        <p className="text-dark mt-2">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
