import React from "react";
import { useImagePath } from "../../hooks/useImagePath";
import { stats } from "../../static/static-data";
import BarCharts from "../../charts/BarCharts";
import RevenueChart from "../../charts/RevenueChart";
import RevenueByLocation from "../../charts/RevenueByLocation";
import TopSellingProducts from "../TopSellingProducts/TopSellingProducts";
import PieCharts from "../../charts/PieCharts";

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
          </div>
          <div className="flex-1">
            <BarCharts />
          </div>
        </div>

        <div className="flex gap-[28px] h-[318px]">
          <div className="grow h-[100%]">
            <RevenueChart />
          </div>
          <div className="w-[202px] h-[100%]">
            <RevenueByLocation />
          </div>
        </div>

        <div className="flex gap-[28px]">
          <div className="grow h-[100%]">
            <TopSellingProducts />
          </div>
          <div className="w-[202px] h-[100%]">
            <PieCharts />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
