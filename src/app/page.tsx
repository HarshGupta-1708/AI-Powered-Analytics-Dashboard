import MetricCard from "@/components/MetricCard";
import ChartLine from "@/components/ChartLine";
import ChartBar from "@/components/ChartBar";
import ChartPie from "@/components/ChartPie";
import DataTable from "@/components/DataTable";
import { metrics, lineChartData, barChartData, pieChartData, tableData } from "@/data/sampleData";

export default function DashboardPage() {
  return (
    <div className="space-y-6 sm:space-y-8 px-2 sm:px-0">
      {/* Metric Cards */}
      <section>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6">
          {metrics.map((m, i) => (
            <MetricCard key={i} {...m} />
          ))}
        </div>
      </section>

      {/* Charts */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
        <div className="lg:col-span-2">
          <ChartLine data={lineChartData} />
        </div>
        <ChartBar data={barChartData} />
        <ChartPie data={pieChartData} />
      </section>

      {/* Data Table */}
      <section>
        <DataTable data={tableData} />
      </section>
    </div>
  );
}
