import {
  BarChart,
  Bar,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

// Sample data structure
const data = [
  { month: "Jan", projection: 18, actual: 9 },
  { month: "Feb", projection: 19, actual: 11 },
  { month: "Mar", projection: 18, actual: 12 },
  { month: "Apr", projection: 16, actual: 10 },
  { month: "May", projection: 17, actual: 13 },
  { month: "Jun", projection: 20, actual: 13 },
];

const BarCharts = () => {
  return (
    <div className="h-[252px] flex flex-col gap-4 flex-1 bg-[var(--primary-light)] p-6 rounded-lg">
      <p className="font-semibold text-sm text-[var(--text-strong)]">
        Projections vs Actuals
      </p>
      <ResponsiveContainer width="100%" height={"100%"}>
        <BarChart data={data} barCategoryGap="40%">
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
            }}
          />
          <Tooltip
            formatter={(value: number) => (value / 1000000).toFixed(1) + "M"}
          />
          <Legend wrapperStyle={{ display: "none" }} />
          <Bar dataKey="projection" stackId="a" fill="#A8C5DA" barSize={20} />
          <Bar
            dataKey="actual"
            stackId="a"
            fill="#E5ECF6"
            radius={[4, 4, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BarCharts;
