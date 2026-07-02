import React from "react";
import { FiFolder } from "react-icons/fi";

const repos = [
  {
    name: "rust-kafka-core",
    description:
      "High performance kafka client in pure rust with zero-copy deserialization",
    language: "Rust",
    langColor: "bg-red-500",
    stars: "1.2k",
  },
  {
    name: "postgres-optimizer",
    description: "Tools for analyzing and optimizing PG query execution plans",
    language: "Go",
    langColor: "bg-blue-500",
    stars: "840",
  },
];

const TopReposCard = () => {
  return (
    <div className="bg-bg-surface/40 border border-border-default rounded-xl p-6">
      {/* Header */}
      <h3 className="text-sm font-mono text-primary uppercase tracking-wider mb-4">
        Top Repositories
      </h3>

      {/* Repo List */}
      <div className="space-y-3">
        {repos.map((repo) => (
          <a
            key={repo.name}
            href="#"
            className="block p-3 hover:bg-bg-elevated rounded-lg transition-colors border border-transparent hover:border-border-default"
          >
            {/* Name Row */}
            <div className="flex items-center gap-2 mb-1">
              <FiFolder className="w-4 h-4 text-text-tertiary" />
              <span className="text-sm font-mono text-text-primary font-semibold">
                {repo.name}
              </span>
            </div>

            {/* Description */}
            <p className="text-xs text-text-tertiary line-clamp-1 mb-2">
              {repo.description}
            </p>

            {/* Meta Row */}
            <div className="flex items-center gap-3 text-xs text-text-tertiary">
              <span className="flex items-center gap-1">
                <span
                  className={`w-2 h-2 rounded-full ${repo.langColor}`}
                ></span>
                {repo.language}
              </span>
              <span>⭐ {repo.stars}</span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default TopReposCard;
