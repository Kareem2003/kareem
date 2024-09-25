import React from "react";

const ProgressCard = ({ text, href, className }) => {
  return (
    <div
      className={`flex items-center justify-center gap-2 text-center flex-col mx-10 ${className}`}
    >
      <img src={href} alt="icon" className="w-20 h-20" />
      <h1 className="text-2xl font-bold">{text}</h1>
    </div>
  );
};

export default ProgressCard;
