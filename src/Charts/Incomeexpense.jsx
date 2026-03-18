import React from 'react'
import{
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
 LineElement,
 PointElement,
  Tooltip,
  Legend
}from "chart.js"
ChartJS.register(
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Tooltip,
  Legend
)
import{Line} from 'react-chartjs-2';
const Incomeexpense = ({incomes = [], expenses= []}) => {
  const monthNames = ["Jan","Feb","March","Apr","May","June",
    "July","Aug","Sep","Oct","Nov","Dec"
  ]

   const getMonthlyTotals = (data) => {
    const totals = {};

    data.forEach(item => {
      const month = monthNames[new Date(item.date).getMonth()];
      totals[month] = (totals[month] || 0) + item.amount;
    });

    return totals;
  };

  const incomeTotals = getMonthlyTotals(incomes);
  const expenseTotals = getMonthlyTotals(expenses);

  const allMonths = [
    ...new Set([
      ...Object.keys(incomeTotals),
      ...Object.keys(expenseTotals)
    ])
  ];

  const sortedMonths = monthNames.filter(m => allMonths.includes(m));

  const incomeData = sortedMonths.map(m => incomeTotals[m] || 0);
  const expenseData = sortedMonths.map(m => expenseTotals[m] || 0);

  const data = {
    labels: sortedMonths,
    datasets: [
      {
        label: "Income",
        data: incomeData,
        borderColor: "green",
        tension: 0.4
      },
      {
        label: "Expense",
        data: expenseData,
        borderColor: "red",
        tension: 0.4
      }
    ]
  }

  return (
    <div style={{ height: "300px" }}>
    <Line data={data} />
  </div>
  )
}

export default Incomeexpense