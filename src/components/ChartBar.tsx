"use client";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend } from "recharts";

interface ChartDataItem {
  name: string;
  users: number;
  conversions: number;
}

interface Props {
  data: ChartDataItem[];
}

interface TooltipProps {
  active?: boolean;
  payload?: Array<{
    name: string;
    value: number;
    color: string;
  }>;
  label?: string;
}

const CustomTooltip = ({ active, payload, label }: TooltipProps) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-lg shadow-lg p-3">
        <p className="text-zinc-900 dark:text-white font-medium">{`${label}`}</p>
        {payload.map((entry, index) => (
          <p key={index} className="text-zinc-600 dark:text-zinc-400" style={{ color: entry.color }}>
            {`${entry.name}: ${entry.value.toLocaleString()}`}
          </p>
        ))}
      </div>
    );
  }
  return null;
};

const ChartBar: React.FC<Props> = ({ data }) => {
  // Limit data points for better performance and readability
  const displayData = data.length > 30 ? data.slice(0, 30) : data;

  return (
    <div className="bg-white dark:bg-zinc-900 rounded-xl shadow p-4">
      <h3 className="font-semibold mb-2 text-zinc-900 dark:text-white">Users & Conversions</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={displayData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <XAxis 
            dataKey="name" 
            tick={{ fill: '#6b7280' }}
            axisLine={{ stroke: '#e5e7eb' }}
            tickLine={{ stroke: '#e5e7eb' }}
            angle={-45}
            textAnchor="end"
            height={80}
          />
          <YAxis 
            tick={{ fill: '#6b7280' }}
            axisLine={{ stroke: '#e5e7eb' }}
            tickLine={{ stroke: '#e5e7eb' }}
            tickFormatter={(value) => value.toLocaleString()}
          />
          <Tooltip content={<CustomTooltip />} />
          <Legend />
          <Bar 
            dataKey="users" 
            fill="#6366f1" 
            radius={[4, 4, 0, 0]}
          />
          <Bar 
            dataKey="conversions" 
            fill="#f59e42" 
            radius={[4, 4, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ChartBar;
