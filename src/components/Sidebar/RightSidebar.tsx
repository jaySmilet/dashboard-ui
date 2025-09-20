import React from "react";
import { useImagePath } from "../../hooks/useImagePath";
import { rightSidebarData } from "../../static/static-data";

const RightSidebar = () => {
  const { getImage } = useImagePath();
  return (
    <div className="flex flex-col gap-6">
      {rightSidebarData.map((section) => {
        return (
          <div className="flex flex-col gap-2">
            <div className="flex items-center py-2 px-1">
              <p className="text-sm font-semibold text-[var(--text-strong)]">
                {section.title}
              </p>
            </div>
            {section.items.map((item) => {
              return (
                <div className="flex gap-2 p-1">
                  <div
                    className={
                      "flex justify-center items-center size-6 rounded-2xl " +
                      (item.iconBgColor ? ` ${item.iconBgColor}` : "")
                    }
                  >
                    <img
                      src={getImage(item.icon)}
                      alt={item.text}
                      className={item.iconBgColor ? `w-4 h-4 ` : ""}
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <p className="text-sm font-normal text-[var(--text-strong)]">
                      {section.title === "Contacts"
                        ? item.text
                        : item.text.slice(0, 25) + "..."}
                    </p>
                    {item.timestamp && (
                      <p className="text-xs font-normal text-[var(--text-medium)]">
                        {item.timestamp}
                      </p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default RightSidebar;
