import React from "react";
import { CiBookmark } from "react-icons/ci";
import { FaRegCopy } from "react-icons/fa6";
import { MdBlock } from "react-icons/md";
import CardForProfile from "../CardForProfile";
import { CiLocationOn } from "react-icons/ci";
import { MdAccessTime } from "react-icons/md";
import { FaGithub } from "react-icons/fa6";
import ReadMeProfileCard from "../ReadMeProfileCard";
import GithubInsightsCard from "../GitHubInsightCard";
import TopReposCard from "../TopReposCard";
import TechnicalStackCard from "../TechnicalStackCard";
const ProfileCard = () => {
  return (
    <div>
      {/* Profile top bar */}
      <div className="flex items-center justify-between p-3 h-16 border-b border-border-default sticky shrink-0">
        <div className="p-4 flex items-center gap-2">
          <h2 className="text-sm  text-text-tertiary">Discover </h2>
          <p className=" font-mono text-sm mx-3">Sarah Chen</p>
        </div>

        {/* Button */}
        <div className="flex gap-4 text-text-tertiary text-sm">
          <span className="flex items-center gap-2 border border-border-default rounded-md px-3 py-1 hover:bg-bg-elevated hover:border-border-hover">
            <CiBookmark />
            <button>Save</button>
          </span>

          <span className="flex items-center gap-2 border border-border-default rounded-md px-3 py-1 hover:bg-bg-elevated hover:border-border-hover">
            {" "}
            <MdBlock />
            <button>Ignore</button>
          </span>
          <span className="flex items-center gap-2 text-white bg-primary border border-border-default rounded-md px-6 py-2 hover:bg-primary-hover">
            {" "}
            <FaRegCopy />
            <button>Request to Connect</button>
          </span>
        </div>
      </div>

      {/* Profile Content */}

      <div className="max-w-4xl mx-auto px-8 py-12">
        {/* User INFO*/}

        <div className="flex  gap-8">
          <img
            src="https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah"
            className="w-32 h-32 rounded-xl bg-zinc-900 border border-zinc-800 shrink-0"
            alt="Sarah"
          />
          <div className="font-bold text-3xl">
            <h2>Sarah Chen</h2>
            {/* <span className="px-2 py-0.5 bg-primary border border-primary-500/20 text-primary-500 text-xs font-mono rounded-full uppercase">
              Verified
            </span> */}

            <p className="text-text-tertiary  text-lg font-normal mt-1">
              Staff Engineer @ Stripe • Distributed Systems Specialist{" "}
            </p>

            {/* Location + Last Seen + Social(github) */}
            <div className="flex items-center justify-center gap-2 mt-4 text-sm text-text-placeholder font-normal">
              <span className="flex items-center gap-2 ">
                <CiLocationOn />
                <p>San Francisco, CA</p>
              </span>

              <span className="flex items-center gap-2 ">
                <MdAccessTime />
                <p>Last Active: 2 hours ago</p>
              </span>

              <span className="flex items-center gap-2 ">
                <FaGithub />
                <p>github.com/sarahchen</p>
              </span>
            </div>
          </div>
        </div>

        {/* Card  */}
        <div className="flex gap-4 mt-4">
          <CardForProfile title="EXPERIENCE" text="8+ Years" />
          <CardForProfile title="REPOS" text="42" />
          <CardForProfile title="CONNECTIONS" text="128" />
        </div>

        {/* ReadME Profile Card */}
        <div className="flex gap-4 mt-6 ">
          {" "}
          <span className="w-120">
            {" "}
            <ReadMeProfileCard />{" "}
          </span>
          <GithubInsightsCard />
        </div>

        <div className="flex gap-4 mt-6">
          <span className="w-140">
            <TechnicalStackCard />
          </span>
          <span>
            <TopReposCard />
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
