import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Sector, Tooltip } from "recharts";
import { useSelector } from "react-redux";

const COLORS = ["#00C49F", "#0088FE"];
const RADIAN = Math.PI / 180;

const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? "start" : "end"} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const CustomActiveShape = (props) => {
  const { cx, cy, innerRadius, outerRadius, startAngle, endAngle, fill } = props;

  return (
    <g>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
    </g>
  );
};

const adjustData = (data) => {
  const total = data.reduce((sum, entry) => sum + entry.value, 0);
  if (total === 0) {
    return data.map((entry) => ({ ...entry, value: 1 }));
  } else if (data[0].value === 0 && data[1].value !== 0) {
    return [
      { ...data[0], value: 0.1 },
      { ...data[1], value: 99.9 },
    ];
  } else if (data[0].value !== 0 && data[1].value === 0) {
    return [
      { ...data[0], value: 99.9 },
      { ...data[1], value: 0.1 },
    ];
  }
  return data;
};

const PIChart = () => {
  const { expense, income } = useSelector((state) => state.finance);
  const initialData = [
    { name: "Income", value: income },
    { name: "Expense", value: expense },
  ];

  const data = adjustData(initialData);

  return (
    <div style={{ width: "100%", height: "400px" }}>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={170}
            fill="#8884d8"
            dataKey="value"
            activeShape={CustomActiveShape}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip formatter={(value, name) => [`${value === 0.1 ? 0 : value}`, name]} />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PIChart;
