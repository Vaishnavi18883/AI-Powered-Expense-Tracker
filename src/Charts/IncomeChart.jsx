import React from 'react'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    ArcElement,
    Tooltip,
    Legend
}from "chart.js"
import { useSelector } from 'react-redux'
ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    ArcElement,
    Tooltip,
    Legend
)
import {Bar} from 'react-chartjs-2'
const IncomeChart = () => {
    const incomeData = useSelector((state) => state.incomesdata.incomes);
    console.log(incomeData);


    const categorytotal = incomeData.reduce((acc,item)=>{
      if(!acc[item.category]){
        acc[item.category]= 0
      }
      acc[item.category]+= item.amount;

      return acc;
    },{})



    const labels = Object.keys(categorytotal)
  // console.log(labels);
  const values = Object.values(categorytotal)


  const chartData ={
    labels : labels,
    datasets :[
      {
        label : "Incomes By Category",
    data: values,
    backgroundColor : [
         "#6366F1",
          "#22C55E",
          "#F59E0B",
          "#EF4444",
          "#3B82F6",
          "#EC4899",
    ],
   barThickness:40,
   howerBackround : "#D17B7B"
      }
    ]
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
    <div className='w-full h-full'>

  <h2 className='text-center font-semibold pb-4'>Income Analytics</h2>

  <Bar data={chartData} options={barOptions}/>
    </div>
  )
}

export default IncomeChart