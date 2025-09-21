import React from "react";
import LeftSidebar from "./components/Sidebar/LeftSidebar";
import RightSidebar from "./components/Sidebar/RightSidebar";
import Header from "./components/Header/Header";
import MainContent from "./components/MainContent/MainContent";
import { Route, Routes, useLocation } from "react-router-dom";
import OrderList from "./pages/OrderList";

const DashboardLayout = () => {
  const location = useLocation();
  const isRoot = location.pathname === "/";
  return (
    <div
      className={
        "min-h-screen grid grid-cols-1 " +
        (isRoot
          ? "md:grid-cols-[212px_1fr] lg:grid-cols-[212px_1fr_280px]"
          : "md:grid-cols-[212px_1fr] lg:grid-cols-[212px_1fr]")
      }
    >
      {/* Sidebar fixed on md+ */}
      <aside className="hidden md:block bg-white dark:bg-gray-800 border-r [border-color:rgba(28,28,28,0.1)] px-4 py-5">
        <LeftSidebar />
      </aside>

      {/* Main content always visible */}
      <main className="bg-white dark:bg-gray-900">
        <Header />
        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="/order-list" element={<OrderList />} />
        </Routes>
      </main>

      {/* Right panel fixed on lg+ - only show on root path */}
      {isRoot && (
        <aside className="hidden lg:block bg-white dark:bg-gray-800 border-l [border-color:rgba(28,28,28,0.1)] p-5">
          <RightSidebar />
        </aside>
      )}
    </div>
  );
};

export default DashboardLayout;
