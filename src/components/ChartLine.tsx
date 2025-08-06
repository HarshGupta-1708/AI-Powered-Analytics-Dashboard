"use client";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend } from "recharts";

interface ChartDataItem {
  month: string;
  revenue: number;
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
            {`${entry.name}: $${entry.value.toLocaleString()}`}
          </p>
        ))}
      </div>
    );
  }
  return null;
};

const ChartLine: React.FC<Props> = ({ data }) => {
  // Limit data points for better performance and readability
  const displayData = data.length > 50 ? data.filter((_, index) => index % Math.ceil(data.length / 50) === 0) : data;

  return (
    <div className="bg-white dark:bg-zinc-900 rounded-xl shadow p-4">
      <h3 className="font-semibold mb-2 text-zinc-900 dark:text-white">Revenue Over Time</h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={displayData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <XAxis 
            dataKey="month" 
            tick={{ fill: '#6b7280' }}
            axisLine={{ stroke: '#e5e7eb' }}
            tickLine={{ stroke: '#e5e7eb' }}
          />
          <YAxis 
            tick={{ fill: '#6b7280' }}
            axisLine={{ stroke: '#e5e7eb' }}
            tickLine={{ stroke: '#e5e7eb' }}
            tickFormatter={(value) => `$${(value / 1000).toFixed(0)}k`}
          />
          <Tooltip content={<CustomTooltip />} />
          <Legend />
          <Line 
            type="monotone" 
            dataKey="revenue" 
            stroke="#6366f1" 
            strokeWidth={2}
            dot={{ fill: '#6366f1', strokeWidth: 2, r: 4 }}
            activeDot={{ r: 6, stroke: '#6366f1', strokeWidth: 2 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ChartLine;
