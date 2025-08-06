import React from "react";

interface MetricCardProps {
  title: string;
  value: string;
  change: string;
  icon: string;
}

const MetricCard: React.FC<MetricCardProps> = ({ title, value, change, icon }) => (
  <div className="bg-white dark:bg-zinc-900 rounded-xl shadow p-3 sm:p-6 flex flex-col gap-1 sm:gap-2 transition-colors">
    <div className="text-2xl sm:text-3xl">{icon}</div>
    <div className="text-sm sm:text-lg font-semibold text-zinc-700 dark:text-zinc-300">{title}</div>
    <div className="text-lg sm:text-2xl font-bold text-zinc-900 dark:text-white">{value}</div>
    <div className={`text-xs sm:text-sm ${change.startsWith('+') ? 'text-green-500' : 'text-red-500'}`}>{change}</div>
  </div>
);

export default MetricCard;
