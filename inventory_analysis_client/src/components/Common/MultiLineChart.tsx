import React, { useRef } from 'react';
import { Line } from "react-chartjs-2";
import "../../assets/css/MultiLineChart.css";

import { Chart } from 'chart.js';
import annotationPlugin from 'chartjs-plugin-annotation';

import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

Chart.register(annotationPlugin);

type MultiLineChartProps = {
  data: {
    labels: string[];
    datasets: {
      label: string;
      data: number[];
      borderColor: string;
      fill: boolean;
    }[];
  };
};


const MultiLineChart: React.FC<MultiLineChartProps> = ({ data }) => {
  const options = {
    scales: {
      x: {
        title: {
          display: true,
          text: 'Date Time' as string,
          color: 'white',
        },
        ticks:{
          color: 'white',
          maxTicksLimit: 14,
        }
      },
      y: {
        title: {
          display: true,
          text: 'RTT (μs)' as string,
          color: 'white',
        },
        ticks:{
          color: 'white'
        }
      },
    },    
    plugins: {
      legend: {
        display: true,
      },
      annotation: {
        drawTime: "afterDraw" as const,
        annotations: [],
      },
    },
    
  };

  const chartRef = useRef<HTMLDivElement>(null);

  const downloadPDF = () => {
    if (chartRef.current) {
      html2canvas(chartRef.current).then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF();
        const imgWidth = 190;
        const imgHeight = (canvas.height * imgWidth) / canvas.width;
        pdf.addImage(imgData, 'PNG', 10, 10, imgWidth, imgHeight);
        pdf.save('predictive_chart.pdf');
      });
    }
  };


  return (
    <div className="multi-line-chart-container">
      <div className="mult-line-chart" ref={chartRef}>
        <Line data={data} options={options}/>
      </div>

      <button className='btn btn-primary' onClick={downloadPDF} style={{marginTop: '5%', marginLeft: '43%', width: '17%'}}>Download as PDF</button>
    </div>
  );
};

export default MultiLineChart;
