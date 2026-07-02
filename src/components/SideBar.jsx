import React from "react";
import { NavLink } from "react-router-dom";
import {
  CiHome,
  CiChat1,
  CiUser,
  CiBookmark,
  CiSettings,
} from "react-icons/ci";

const Sidebar = () => {
  return (
    <nav className="w-60 h-full bg-bg-app border-r border-border-default flex flex-col shrink-0">
      {/* Main Navigation Items */}
      <div className="flex-1 px-3 py-4 space-y-1">
        {/* Discover - Active State Example */}
        <NavLink
          to="/feed"
          className={({ isActive }) =>
            `flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
              isActive
                ? "bg-bg-surface border border-border-default text-primary shadow-sm"
                : "text-text-tertiary hover:bg-bg-surface/50 hover:text-text-primary"
            }`
          }
        >
          <CiHome size={20} />
          <span>Discover</span>
        </NavLink>

        {/* Pending PRs - With Badge */}
        <NavLink
          to="/requests"
          className={({ isActive }) =>
            `flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
              isActive
                ? "bg-bg-surface border border-border-default text-primary shadow-sm"
                : "text-text-tertiary hover:bg-bg-surface/50 hover:text-text-primary"
            }`
          }
        >
          <CiChat1 size={20} />
          <span>Pending PRs</span>
          <span className="ml-auto bg-primary text-bg-app text-[10px] font-bold px-1.5 py-0.5 rounded-full min-w-[18px] text-center">
            3
          </span>
        </NavLink>

        {/* My Network */}
        <NavLink
          to="/network"
          className={({ isActive }) =>
            `flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
              isActive
                ? "bg-bg-surface border border-border-default text-primary shadow-sm"
                : "text-text-tertiary hover:bg-bg-surface/50 hover:text-text-primary"
            }`
          }
        >
          <CiUser size={20} />
          <span>My Network</span>
        </NavLink>

        {/* Saved */}
        <NavLink
          to="/saved"
          className={({ isActive }) =>
            `flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
              isActive
                ? "bg-bg-surface border border-border-default text-primary shadow-sm"
                : "text-text-tertiary hover:bg-bg-surface/50 hover:text-text-primary"
            }`
          }
        >
          <CiBookmark size={20} />
          <span>Saved</span>
        </NavLink>
      </div>

      {/* Bottom Settings Section */}
      <div className="px-3 pb-4 border-t border-border-default pt-4">
        <NavLink
          to="/settings"
          className={({ isActive }) =>
            `flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
              isActive
                ? "bg-bg-surface border border-border-default text-primary shadow-sm"
                : "text-text-tertiary hover:bg-bg-surface/50 hover:text-text-primary"
            }`
          }
        >
          <CiSettings size={20} />
          <span>Settings</span>
        </NavLink>
      </div>
    </nav>
  );
};

export default Sidebar;
