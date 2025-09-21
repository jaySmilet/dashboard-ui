import React from "react";
import { useImagePath } from "../../hooks/useImagePath";
import { stats } from "../../static/static-data";

const MainContent = () => {
  const { getImage } = useImagePath();
  return (
    <div className="flex flex-col gap-4 p-[28px]">
      <div className="px-2 py-1">
        <p className="text-sm font-semibold text-[var(--text-strong)]">
          eCommerce
        </p>
      </div>
      <div className="flex flex-col gap-[28px]">
        <div className="flex gap-[28px] flex-1">
          <div className="grid grid-cols-2 gap-[28px]">
            {stats.map((stat) => {
              return (
                <div
                  className={
                    "flex flex-col gap-2 p-6 rounded-2xl " +
                    (stat.bgColor ? ` bg-[${stat.bgColor}]` : "")
                  }
                >
                  <p className="text-sm font-semibold text-[var(--text-strong)]">
                    {stat.title}
                  </p>
                  <div className="flex justify-between items-center">
                    <p className="text-2xl font-semibold text-[var(--text-strong)]">
                      {stat.value}
                    </p>
                    <div className="flex items-center gap-1">
                      <p className="text-xs font-normal text-[var(--text-strong)]">
                        {stat.change > 0 ? "+" : ""} {stat.change}
                      </p>
                      <img
                        src={getImage(
                          stat.change > 0 ? "ArrowRise.svg" : "ArrowFall.svg"
                        )}
                        alt={
                          stat.change > 0 ? "ArrowRise.svg" : "ArrowFall.svg"
                        }
                        className="size-4"
                      />
                    </div>
                  </div>
                </div>
              );
            })}
            {/* <div className="flex flex-col gap-2 p-6 rounded-2xl bg-[var(--primary-blue)]">
              <p className="text-sm font-semibold text-[var(--text-strong)]">
                Customers
              </p>
              <div className="flex justify-between items-center">
                <p className="text-2xl font-semibold text-[var(--text-strong)]">
                  3,781
                </p>
                <div className="flex items-center gap-1">
                  <p className="text-xs font-normal text-[var(--text-strong)]">
                    +11.01%
                  </p>
                  <img
                    src={getImage("ArrowRise.svg")}
                    alt="ArrowRise"
                    className="size-4"
                  />
                </div>
              </div>
            </div> */}

            {/* <div className="flex flex-col gap-2 p-6 rounded-2xl bg-[var(--primary-light)]">
              <p className="text-sm font-semibold text-[var(--text-strong)]">
                Orders
              </p>
              <div className="flex justify-between items-center">
                <p className="text-2xl font-semibold text-[var(--text-strong)]">
                  1,219
                </p>
                <div className="flex items-center gap-1">
                  <p className="text-xs font-normal text-[var(--text-strong)]">
                    +11.01%
                  </p>
                  <img
                    src={getImage("ArrowRise.svg")}
                    alt="ArrowRise"
                    className="size-4"
                  />
                </div>
              </div>
            </div>

            <div>01</div>
            <div>09</div> */}
          </div>
          <div className="flex-1"></div>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
