import React from "react";

const CardForProfile = ({ title, text }) => {
  return (
    <div className="bg-bg-surface w-40 h-18 rounded-lg p-3 flex flex-col justify-center  gap-1 border border-border-default">
      <h3 className="text-text-placeholder uppercase text-sm font-mono ">
        {title}
      </h3>
      <p className="font-sans font-bold text-lg text-white">{text}</p>
    </div>
  );
};

export default CardForProfile;
