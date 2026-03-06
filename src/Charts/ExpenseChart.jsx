import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Tooltip,
  Legend
);

import { useSelector } from "react-redux";
import { Bar } from "react-chartjs-2";
import "./expensechart.css";

const ExpenseChart = () => {
  const expenseData = useSelector((state) => state.expensesdata.expenses);

  const categoryTotal = expenseData.reduce((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = 0;
    }

    acc[item.category] += item.amount;

    return acc;
  }, {});

  const labels = Object.keys(categoryTotal);
  const values = Object.values(categoryTotal);

  const chartData = {
    labels: labels,
    datasets: [
      {
        label: "Expenses By Category",
        data: values,
        backgroundColor: [
          "#6366F1",
          "#22C55E",
          "#F59E0B",
          "#EF4444",
          "#3B82F6",
          "#EC4899",
        ],
        
        barThickness: 40,
        hoverBackgroundColor: "#4F46E5",
      },
    ],
  };

  const barOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
        labels: {
          font: {
            size: 14,
          },
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          color: "#eee",
        },
      },
      x: {
        grid: {
          display: false,
        },
      },
    },
  };

  
    return (
  <div className="w-full h-full">
    <h2 className="text-center font-semibold mb-3">
      Expense Analytics
    </h2>

    <Bar data={chartData} options={barOptions}/>
  </div>
);
};

export default ExpenseChart;