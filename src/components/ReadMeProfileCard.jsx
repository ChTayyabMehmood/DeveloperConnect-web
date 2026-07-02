import React from "react";
import { FiFileText } from "react-icons/fi";

const ReadMeProfileCard = () => {
  return (
    <div className="bg-bg-surface/40 border border-border-default rounded-xl p-6">
      {/* Header */}
      <h3 className="text-sm font-mono text-primary uppercase tracking-wider flex items-center gap-2 mb-4">
        <FiFileText className="w-4 h-4" />
        README.md
      </h3>

      {/* Prose Content - Manual Typography Classes */}
      <div className="space-y-4 text-text-secondary leading-relaxed">
        <p>
          Hi, I'm Sarah. I build high-performance payment gateways and
          distributed systems at scale.
        </p>
        <p>
          I'm passionate about Rust, database internals, and mentoring junior
          engineers. Currently looking to connect with founders in the fintech
          space or other systems engineers who enjoy optimizing query planners.
        </p>

        {/* Subheading */}
        <h4 className="text-text-primary font-semibold mt-6 mb-2 text-base">
          🚀 What I'm working on
        </h4>
        <ul className="list-disc pl-5 space-y-1 text-text-secondary">
          <li>Building a custom Kafka implementation in Rust.</li>
          <li>Open source contributor to Tokio.</li>
        </ul>
      </div>
    </div>
  );
};

export default ReadMeProfileCard;
