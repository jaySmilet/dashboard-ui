import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

type DataPoint = {
  month: string;
  currentWeek: number;
  previousWeek: number;
};

const data: DataPoint[] = [
  { month: "Jan", currentWeek: 20, previousWeek: 25 },
  { month: "Feb", currentWeek: 26, previousWeek: 22 },
  { month: "Mar", currentWeek: 10, previousWeek: 18 },
  { month: "Apr", currentWeek: 15, previousWeek: 13 },
  { month: "May", currentWeek: 20, previousWeek: 18 },
  { month: "Jun", currentWeek: 18, previousWeek: 20 },
];

const RevenueChart: React.FC = () => {
  return (
    <div className="h-[100%] flex flex-col gap-4 flex-1 bg-[var(--primary-light)] p-6 rounded-lg">
      <div className="flex items-center gap-4">
        <p className="font-semibold text-sm text-[var(--text-strong)]">
          Revenue
        </p>
        <div className="w-[1px] h-[20px] text-[var(--text-light)]">|</div>
        <div className="flex items-center gap-1 py-[1px] px-1">
          <div className="size-[6px] rounded-full bg-[var(--text-strong)]"></div>
          <span className="font-normal text-xs text-[var(--text-medium)]">
            Current Week
          </span>
          <span className="font-semibold text-xs text-[var(--text-strong)]">
            $58,211
          </span>
        </div>

        <div className="flex items-center gap-1 py-[1px] px-1">
          <div className="size-[6px] rounded-full bg-[var(--secondar-cyan)]"></div>
          <span className="font-normal text-xs text-[var(--text-medium)]">
            Previous Week
          </span>
          <span className="font-semibold text-xs text-[var(--text-strong)]">
            $68,768
          </span>
        </div>
      </div>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid vertical={false} horizontal={true} />
          <XAxis
            dataKey="month"
            axisLine={false}
            tickLine={false}
            tick={{
              fontSize: 12,
              fill: "rgba(28, 28, 28, 0.4)",
              fontWeight: "400",
              fontFamily: "Inter",
            }}
          />
          <YAxis
            domain={[0, 30]}
            ticks={[0, 10, 20, 30]}
            axisLine={false}
            tickLine={false}
            tickFormatter={(value) => `${value}M`}
            interval={0}
            tick={{
              fontSize: 12,
              fill: "rgba(28, 28, 28, 0.4)",
              fontWeight: "400",
              fontFamily: "Inter",
              spacing: 4,
            }}
          />
          {/* <Tooltip /> */}
          <Legend wrapperStyle={{ display: "none" }} />
          <Line
            type="monotone"
            dataKey="currentWeek"
            stroke="#000"
            strokeWidth={2}
            dot={false}
            activeDot={{ r: 8 }}
          />
          <Line
            type="monotone"
            dataKey="previousWeek"
            stroke="#00BFFF"
            strokeWidth={2}
            dot={false}
            activeDot={{ r: 8 }}
            strokeDasharray="5 5"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default RevenueChart;
