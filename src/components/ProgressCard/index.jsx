import React from "react";

const ProgressCard = ({ number, text }) => {
  return (
    <div className="flex items-center justify-center gap-2 text-center flex-col sm:flex-row">
      <h1 className="text-6xl font-bold">{number}</h1>
      <h1 className="text-xl w-28">{text}</h1>
    </div>
  );
};

export default ProgressCard;
