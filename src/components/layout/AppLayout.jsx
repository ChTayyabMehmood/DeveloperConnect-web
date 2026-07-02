import { Outlet } from "react-router-dom";
import React from "react";
import TopNavbar from "../TopNavbar";
import SideBar from "../SideBar";

const AppLayout = () => {
  return (
    <div className="h-screen flex flex-col bg-bg-app text-white">
      {/* fixed Navbar */}
      <TopNavbar />
      {/* Sidebar and main content */}
      <div className="flex flex-1 overflow-hidden">
        <SideBar />

        <main className="flex-1 overflow-y-auto scrollbar-thin">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AppLayout;
