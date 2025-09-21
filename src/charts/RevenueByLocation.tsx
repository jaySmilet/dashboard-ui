import React from "react";
import { useImagePath } from "../hooks/useImagePath";

type LocationRevenue = {
  name: string;
  revenue: number; // in thousands
};

const locations: LocationRevenue[] = [
  { name: "New York", revenue: 72 },
  { name: "San Francisco", revenue: 39 },
  { name: "Sydney", revenue: 25 },
  { name: "Singapore", revenue: 61 },
];

const RevenueByLocation = () => {
  const { getImage } = useImagePath();
  const maxRevenue = Math.max(...locations.map((loc) => loc.revenue));

  return (
    <div className="h-[100%] flex flex-col gap-4 p-6 rounded-lg bg-[var(--primary-light)]">
      <span className="font-semibold text-sm text-[var(--text-strong)]">
        Revenue By Location
      </span>
      <img src={getImage("WorldMap.png")} alt="WorldMap" className="" />
      {locations.map((location, idx) => (
        <div key={idx}>
          <div className="flex justify-between text-xs font-normal text-[var(--text-strong)]">
            <span>{location.name}</span>
            <span>{location.revenue}K</span>
          </div>
          <div className="w-full h-[2px] bg-[var(--primary-light)] rounded mt-1">
            <div
              className="h-full bg-[var(--secondar-cyan)] rounded"
              style={{ width: `${(location.revenue / maxRevenue) * 100}%` }}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default RevenueByLocation;
