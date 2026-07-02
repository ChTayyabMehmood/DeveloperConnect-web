import React from "react";
import SkillsCard from "./SkillsCard";

const TechnicalStackCard = () => {
  const languages = ["Rust", "Go", "C++"];
  const infrastructure = ["AWS", "Kafka", "PostgreSQL", "Kubernetes"];

  return (
    <div className="bg-bg-surface/40 border border-border-default rounded-xl p-6">
      {/* Header */}
      <h3 className="text-sm font-mono text-primary uppercase tracking-wider flex items-center gap-2 mb-6">
        Technical Stack
      </h3>

      {/* Languages Section */}
      <div className="mb-6">
        <h4 className="text-xs font-semibold text-text-secondary uppercase mb-3">
          Languages
        </h4>
        <div className="flex flex-wrap gap-2">
          {languages.map((lang) => (
            <SkillsCard key={lang} skills={lang} />
          ))}
        </div>
      </div>

      {/* Infrastructure & Tools Section */}
      <div>
        <h4 className="text-xs font-semibold text-text-secondary uppercase mb-3">
          Infrastructure & Tools
        </h4>
        <div className="flex flex-wrap gap-2">
          {infrastructure.map((tool) => (
            <SkillsCard key={tool} skills={tool} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechnicalStackCard;
