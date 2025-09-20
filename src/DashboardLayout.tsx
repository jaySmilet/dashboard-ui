import React from "react";
import Sidebar from "./components/Sidebar/Sidebar";

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
        <Sidebar />
      </aside>

      {/* Main content always visible */}
      <main className="bg-gray-50 dark:bg-gray-900 p-6">Main</main>

      {/* Right panel fixed on lg+ */}
      <aside className="hidden lg:block bg-white dark:bg-gray-800 p-4">
        Right Panel
      </aside>
    </div>
  );
};

export default DashboardLayout;
