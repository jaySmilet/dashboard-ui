import React from "react";
import LeftSidebar from "./components/Sidebar/LeftSidebar";
import RightSidebar from "./components/Sidebar/RightSidebar";

const DashboardLayout = () => {
  return (
    <div
      className="
  min-h-screen 
  grid grid-cols-1 
  md:grid-cols-[212px_1fr] 
  lg:grid-cols-[212px_1fr_280px]
"
    >
      {/* Sidebar fixed on md+ */}
      <aside className="hidden md:block bg-white dark:bg-gray-800 border-r [border-color:rgba(28,28,28,0.1)] px-4 py-5">
        <LeftSidebar />
      </aside>

      {/* Main content always visible */}
      <main className="bg-gray-50 dark:bg-gray-900 p-6">Main</main>

      {/* Right panel fixed on lg+ */}
      <aside className="hidden lg:block bg-white dark:bg-gray-800 border-l [border-color:rgba(28,28,28,0.1)] p-5">
        <RightSidebar />
      </aside>
    </div>
  );
};

export default DashboardLayout;
