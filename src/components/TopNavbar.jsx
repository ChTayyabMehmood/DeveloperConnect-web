import React from "react";
import logo from "../assets/logo.png";
import { CiBellOn } from "react-icons/ci";
import { RiArrowDropDownLine } from "react-icons/ri";
import { FiSearch } from "react-icons/fi";
import { useSelector } from "react-redux";

const TopNavbar = () => {
  const user = useSelector((store) => store.user);

  return (
    <header className="flex items-center justify-between h-14 px-6 bg-bg-app border-b border-border-default shrink-0">
      {/* Left: Logo + Search */}
      <div className="flex items-center gap-8 flex-1">
        <img src={logo} alt="DeveloperConnect" className="h-7 w-auto" />

        {/* Search Bar with KBD Badge */}
        <div className="relative hidden md:block w-full max-w-md">
          <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-tertiary pointer-events-none" />
          <input
            type="text"
            placeholder="Search engineers, stacks, companies..."
            aria-label="Search developers"
            className="w-full bg-bg-surface border border-border-default rounded-md pl-9 pr-12 py-1.5 text-sm text-text-primary placeholder:text-text-tertiary focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all"
          />
          <kbd className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border border-border-default bg-bg-elevated px-1.5 font-mono text-[10px] font-medium text-text-tertiary">
            K
          </kbd>
        </div>
      </div>

      {/* Right: Notifications + Profile */}
      <div className="flex items-center gap-4 ml-auto">
        {/* Notification Bell */}
        <button
          className="p-2 text-text-tertiary hover:text-text-primary hover:bg-bg-surface rounded-md transition-colors relative"
          aria-label="Notifications"
        >
          <CiBellOn size={20} />
          {/* Unread indicator dot */}
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-primary rounded-full border-2 border-bg-app"></span>
        </button>

        {/* Divider */}
        <div className="h-6 w-px bg-border-default"></div>

        {/* Profile Dropdown Trigger */}
        <button
          className="flex items-center gap-2 px-2 py-1 rounded-md hover:bg-bg-surface transition-colors"
          aria-label="User menu"
        >
          <img
            src={
              user?.photoUrl ||
              "https://api.dicebear.com/7.x/avataaars/svg?seed=John"
            }
            alt=""
            className="w-7 h-7 rounded-full bg-bg-surface"
          />
          <span className="text-sm font-medium text-text-secondary hidden lg:inline">
            {user?.firstName || "John Doe"}
          </span>
          <RiArrowDropDownLine size={20} className="text-text-tertiary" />
        </button>
      </div>
    </header>
  );
};

export default TopNavbar;
