import React from "react";

const SkillsCard = ({ skills }) => {
  return (
    <span className="rounded-md bg-bg-surface border border-border-default text-sm text-text-placeholder py-1 px-2  mx-1 mt-auto">
      {skills}
    </span>
  );
};

export default SkillsCard;
