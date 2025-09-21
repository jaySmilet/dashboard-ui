import { PieChart, Pie, Cell, Tooltip } from "recharts";

const PieCharts = () => {
  const data = [
    { name: "Direct", value: 400, color: "#1C1C1C" },
    { name: "Affiliate", value: 300, color: "#BAEDBD" },
    { name: "sponsered", value: 300, color: "#95A4FC" },
    { name: "Email", value: 200, color: "#B1E3FF" },
  ];
  const COLORS = [, "#BAEDBD", "#95A4FC", "#B1E3FF"];

  return (
    <div className="h-[100%] flex flex-col gap-4 p-6 rounded-lg bg-[var(--primary-light)]">
      <span className="font-semibold text-sm text-[var(--text-strong)]">
        Total Sales
      </span>
      <div className="w-[100%] h-[100%]">
        <PieChart width={200} height={120}>
          <Pie
            data={data}
            cx={60}
            cy={55}
            innerRadius={25}
            outerRadius={45}
            fill="#8884d8"
            paddingAngle={3}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${entry.name}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </div>

      <div className="flex flex-col gap-3">
        {data.map((item, index) => (
          <div key={index} className="flex justify-between items-center">
            <div className="flex items-center gap-1 py-[2px] px-1">
              <span
                className="size-[6px] rounded-full"
                style={{ backgroundColor: item.color }}
              ></span>
              <span className="font-normal text-xs text-[var(--text-strong)]">
                {item.name}
              </span>
            </div>
            <span className="font-normal text-xs text-[var(--text-strong)]">
              ${item.value.toFixed(2)}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PieCharts;
