import React from "react";

import QueueCard from "../components/QueueCard";
import ProfileCard from "../components/layout/ProfileCard";
import { CiFilter } from "react-icons/ci";
import RequestLayOut from "../components/layout/RequestLayOut";
const Requests = () => {
  return (
    <div className="flex h-full">
      <div className="text-white h-full overflow-y-auto scrollbar-thin shrink-0 w-80 xl:w-96 border-r border-border-default">
        {/* Discover Div */}

        <div className="flex items-center justify-between p-3  h-16 border-b border-border-default sticky shrink-0">
          <div>
            <h2 className="text-md">Pending PRs</h2>
            <p className="text-text-tertiary font-mono text-xs">
              3 Requests Awaiting Reviews
            </p>
          </div>

          <CiFilter size={24} />
        </div>

        <div className="flex flex-col gap-2 p-3">
          <QueueCard />
          <QueueCard />
          <QueueCard />
        </div>
      </div>

      {/* PROFILE CARD */}
      {/* Right Side */}
      <div className="flex-1 h-full overflow-y-auto scrollbar-thin">
        <RequestLayOut />
      </div>
    </div>
  );
};

export default Requests;
