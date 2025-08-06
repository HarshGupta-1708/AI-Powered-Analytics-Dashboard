"use client";
import React, { useEffect, useState } from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend,
  LabelList,
} from "recharts";

const COLORS = [
  "#6366f1",
  "#f59e42",
  "#10b981",
  "#f43f5e",
  "#8b5cf6",
  "#06b6d4",
  "#84cc16",
  "#f97316",
  "#ec4899",
  "#14b8a6",
];

interface DataItem {
  name: string;
  value: number;
}

interface Props {
  data: DataItem[];
}

interface TooltipProps {
  active?: boolean;
  payload?: Array<{
    name: string;
    value: number;
    color: string;
    payload: {
      total: number;
    };
  }>;
}

const CustomTooltip = ({ active, payload }: TooltipProps) => {
  if (active && payload?.length) {
    const { name, value, color, payload: entry } = payload[0];
    const total = entry.total as number;
    return (
      <div className="bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-lg shadow-lg p-3">
        <p className="font-medium text-zinc-900 dark:text-white">{name}</p>
        <p className="text-zinc-600 dark:text-zinc-400" style={{ color }}>
          Value: {value.toLocaleString()}
        </p>
        <p className="text-zinc-600 dark:text-zinc-400">
          Percentage: {((value / total) * 100).toFixed(1)}%
        </p>
      </div>
    );
  }
  return null;
};

const ChartPie: React.FC<Props> = ({ data }) => {
  const [isMobile, setIsMobile] = useState(false);

  // Track screen width
  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < 640);
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // Limit to top 20 slices
  const displayData = data.length > 20 ? data.slice(0, 20) : data;
  const total = displayData.reduce((sum, d) => sum + d.value, 0);
  const dataWithTotal = displayData.map((d) => ({ ...d, total }));

  return (
    <div className="bg-white dark:bg-zinc-900 rounded-xl shadow p-4">
      <h3 className="mb-2 font-semibold text-zinc-900 dark:text-white">
        Traffic Sources
      </h3>

      <ResponsiveContainer width="100%" height={isMobile ? 280 : 350}>
        <PieChart>
          <Pie
            data={dataWithTotal}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="45%"
            outerRadius={isMobile ? 60 : 80}
            innerRadius={isMobile ? 35 : 40}
            label={false}
            labelLine={false}
          >
            {/* Desktop-only inside labels */}
            {!isMobile && (
              <LabelList
                dataKey="value"
                position="inside"
                fill="#fff"
                fontSize={12}
                formatter={(value: React.ReactNode) => {
                  if (typeof value === 'number') {
                    const entry = dataWithTotal.find(d => d.value === value);
                    if (entry) {
                      const shortName = entry.name.split(" ")[0];
                      const pct = ((value / entry.total) * 100).toFixed(0);
                      return `${shortName} ${pct}%`;
                    }
                  }
                  return value;
                }}
              />
            )}

            {/* Slice colors */}
            {dataWithTotal.map((_, idx) => (
              <Cell key={idx} fill={COLORS[idx % COLORS.length]} />
            ))}
          </Pie>

          <Tooltip content={<CustomTooltip />} />

          <Legend
            layout="horizontal"
            verticalAlign="bottom"
            align="center"
            iconSize={isMobile ? 8 : 10}
            wrapperStyle={{
              width: "100%",
              height: isMobile ? 60 : 80,
              paddingTop: isMobile ? 8 : 12,
              overflowX: isMobile ? "auto" : "visible",
              whiteSpace: isMobile ? "nowrap" : "normal",
              display: "flex",
              flexWrap: isMobile ? "nowrap" : "wrap",
              justifyContent: "center",
            }}
            formatter={(value: string) => value.split(" ")[0]}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ChartPie;