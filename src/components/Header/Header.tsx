import React from "react";
import { useImagePath } from "../../hooks/useImagePath";

const Header = () => {
  const { getImage } = useImagePath();
  return (
    <div className="flex justify-between items-ceter py-5 px-[28px] border-b [border-color:rgba(28,28,28,0.1)]">
      <div className="flex items-center gap-2">
        <div className="flex items-center gap-2 p-1">
          <img src={getImage("Sidebar.svg")} alt="Sidebar" className="size-5" />
          <img src={getImage("Star.svg")} alt="Star" className="size-5" />
        </div>
        <div className="flex items-center gap-2 py-1">
          <p className="text-sm font-normal text-[var(--text-medium)] px-2">
            Dashboards
          </p>
          <span className="text-sm font-normal text-[var(--text-light)]">
            /
          </span>
          <p className="text-sm font-normal text-[var(--text-strong)] px-2">
            Default
          </p>
        </div>
      </div>

      <div className="flex items-center gap-5">
        <div className="w-[160px] flex items-center gap-2 bg-[var(--text-extra-light1)] px-2 py-1 rounded-lg">
          <div className="flex items-center gap-1">
            <img src={getImage("Search.svg")} alt="Search" className="size-4" />
            <input
              type="text"
              placeholder="Search"
              className="w-[100%] hover:border-0 focus:border-0 hover:outline-0 placeholder:text-sm placeholder:font-normal placeholder:text-[var(--text-light)]"
            />
          </div>
          <img src={getImage("Text.svg")} alt="Text" className="size-5" />
        </div>
        <div className="flex items-center gap-2 p-1">
          <img
            src={getImage("Sun.svg")}
            alt="Sun"
            className="size-5 cursor-pointer"
          />
          <img
            src={getImage("ClockCounterClockwise.svg")}
            alt="ClockCounterClockwise"
            className="size-5 cursor-pointer"
          />
          <img
            src={getImage("Bell.svg")}
            alt="Bell"
            className="size-5 cursor-pointer"
          />
          <img
            src={getImage("Sidebar.svg")}
            alt="Sidebar"
            className="size-5 cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
