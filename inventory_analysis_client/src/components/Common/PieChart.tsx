// PieChart.tsx
import { Pie } from "react-chartjs-2";
import ChartDataLabels from "chartjs-plugin-datalabels";
import "chart.js/auto";

import "../../assets/css/PieChart.css";

interface PieChartProps {
  data: {
    labels: string[];
    datasets: {
      data: number[];
      backgroundColor: string[];
    }[];
  };
  title: string;
}

const PieChart: React.FC<PieChartProps> = ({ data, title }) => {
  const options = {
    responsive: true,
    maintainAspectRatio: true,
    animation: {
      animateRotate: true,
      animateScale: true,
    },
    plugins: {
      legend: {
        position: "right" as const,
        labels: {
          padding: 20,
          color: "white",
        },
      },
      datalabels: {
        display: "auto",
        color: "black",
        formatter: (value: any, ctx: any) => {
          const total: any = ctx.chart.getDatasetMeta(0).total as any;
          let percentage = ((value * 100) / total).toFixed(1) + "%";
          return percentage;
        },
      },
    },
  };

  return (
    <div className="pie-chart-container">
      <h6 className="pie-chart-title">{title}</h6>
      <div className="pie-chart">
        <Pie data={data} options={options} plugins={[ChartDataLabels as any]} />
      </div>
    </div>
  );
};

export default PieChart;
