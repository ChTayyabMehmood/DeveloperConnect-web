import React from "react";
import SkillsCard from "./SkillsCard";

const QueueCard = () => {
  return (
    <div className="w-90 h-24 bg-card-default rounded  border border-border-default p-3 flex gap-2 items-center">
      <img
        src="https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah"
        alt=""
        className="w-12 h-12 rounded-full bg-bg-surface"
      />
      <div>
        <div className="flex  justify-between gap-28">
          <h2 className="text-white font-semibold font-sans">Sarah Chen</h2>
          <p className="text-primary font-mono text-xs">98% Match</p>
        </div>
        <p className="text-text-tertiary text-sm font-normal mb-1">
          Staff Engineer @ Stripe
        </p>
        <SkillsCard skills="Rust" />
        <SkillsCard skills="GO" />
        <SkillsCard skills="C#" />
      </div>

      {/* <p className="uppercase text-primary font-mono "> Match 90%</p> */}
    </div>
  );
};

export default QueueCard;
