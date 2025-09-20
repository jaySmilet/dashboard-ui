import React from "react";
import { useImagePath } from "../../hooks/useImagePath";
import { menus, type Menu, type MenuChild } from "../../static/static-data";

const Sidebar = () => {
  const { getImage } = useImagePath();
  const [myMenu, setmyMenu] = React.useState<Menu[]>(menus);

  const clicked = (menu: MenuChild) => {
    // menu.isActive = !menu.isActive;
    menu.isCollapsed = !menu.isCollapsed;
    setmyMenu([...myMenu]);
  };
  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-2 items-center p-1">
        <img
          src={getImage("ByeWind.png")}
          alt="user"
          className="w-6 h-6 rounded-full"
        />
        <p className="text-sm font-normal text-[var(--text-strong)]">ByeWind</p>
      </div>

      <div className="flex flex-col gap-1">
        <div className="flex gap-2 items-center">
          <div className="flex items-center px-2 py-1 cursor-pointer">
            <p className="text-sm font-normal text-[var(--text-medium)]">
              Favorites
            </p>
          </div>
          <div className="flex items-center px-2 py-1 cursor-pointer">
            <p className="text-sm font-normal text-[var(--text-light)]">
              Recently
            </p>
          </div>
        </div>

        <div className="flex items-center px-2 py-1">
          <div className="flex items-center gap-1">
            <div className="w-4 h-4 flex items-center justify-center">
              <div className="size-[6px] rounded-sm bg-[var(--text-light)]"></div>
            </div>
            <div className="flex items-center">
              <p className="text-sm font-normal text-[var(--text-strong)]">
                Overview
              </p>
            </div>
          </div>
        </div>
        <div className="flex items-center px-2 py-1">
          <div className="flex items-center gap-1">
            <div className="w-4 h-4 flex items-center justify-center">
              <div className="size-[6px] rounded-sm bg-[var(--text-light)]"></div>
            </div>
            <div className="flex items-center">
              <p className="text-sm font-normal text-[var(--text-strong)]">
                Projects
              </p>
            </div>
          </div>
        </div>
      </div>

      {menus.map((menu: Menu) => {
        return (
          <div className="flex flex-col gap-1">
            <div className="flex items-center px-3 py-1 cursor-pointer">
              <p className="text-sm font-normal text-[var(--text-medium)]">
                {menu.title}
              </p>
            </div>
            {menu.menuChild.map((mc) => {
              return (
                <>
                  <div
                    className={
                      "relative flex items-center gap-1 px-2 py-1 cursor-pointer " +
                      (mc.isActive === true
                        ? "bg-[var(--text-extra-light)] rounded-[8px] left-active-border"
                        : "")
                    }
                    onClick={() => clicked(mc)}
                  >
                    <img
                      src={getImage(
                        mc.isCollapsed
                          ? "ArrowLineDown.svg"
                          : "ArrowLineRight.svg"
                      )}
                      alt={
                        mc.isCollapsed
                          ? "ArrowLineDown.svg"
                          : "ArrowLineRight.svg"
                      }
                      className={
                        "w-4 h-4 " + (mc.isActive === true ? "invisible" : "")
                      }
                    />

                    <div className="flex items-center gap-1">
                      <img
                        src={getImage(mc.icon)}
                        alt={mc.title}
                        className="w-5 h-5"
                      />
                      <p className="text-sm font-normal text-[var(--text-strong)]">
                        {mc.title}
                      </p>
                    </div>
                  </div>
                  {mc.children &&
                    mc.isCollapsed &&
                    mc.children.map((ch) => {
                      return (
                        <div className="flex items-center gap-1 px-2 py-1 cursor-pointer">
                          <div className="w-4 h-4"></div>
                          <div className="flex items-center gap-1">
                            <div className="w-5 h-5"></div>
                            <p className="text-sm font-normal text-[var(--text-strong)]">
                              {ch}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                </>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default Sidebar;
