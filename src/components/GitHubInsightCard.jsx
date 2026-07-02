import React from "react";
import { FaGithub } from "react-icons/fa";

const GitHubInsightCard = () => {
  // Mock contribution graph data (opacity levels)
  const contributions = [20, 40, 60, 30, 80, 50, 20];

  return (
    <div className="bg-bg-surface/40 border border-border-default rounded-xl p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-mono text-primary uppercase tracking-wider flex items-center gap-2">
          GitHub Insight
        </h3>
        <FaGithub className="w-4 h-4 text-text-tertiary" />
      </div>

      {/* Contribution Graph Mock */}
      <div className="mb-4 p-3 bg-bg-app rounded-lg border border-border-default">
        <div className="flex items-end justify-between h-16 gap-0.5">
          {contributions.map((opacity, index) => (
            <div
              key={index}
              className={`w-full bg-primary/${opacity} rounded-sm`}
              style={{ height: `${(opacity / 100) * 100}%` }}
            />
          ))}
        </div>
        <div className="flex justify-between mt-2 text-[10px] font-mono text-text-tertiary">
          <span>Mon</span>
          <span>Sun</span>
        </div>
      </div>

      {/* Stats List */}
      <div className="space-y-3">
        <div className="flex justify-between items-center text-sm">
          <span className="text-text-secondary">Total Commits (1y)</span>
          <span className="font-mono text-text-primary font-semibold">
            2,491
          </span>
        </div>
        <div className="flex justify-between items-center text-sm">
          <span className="text-text-secondary">Pull Requests</span>
          <span className="font-mono text-text-primary font-semibold">142</span>
        </div>
        <div className="flex justify-between items-center text-sm">
          <span className="text-text-secondary">Issues Opened</span>
          <span className="font-mono text-text-primary font-semibold">38</span>
        </div>
      </div>
    </div>
  );
};

export default GitHubInsightCard;
