import React, { useEffect, useState } from 'react'


import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    ArcElement,
    Tooltip,
    Legend
} from "chart.js";
import { Pie } from "react-chartjs-2"

import './aiplan.css'


ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    ArcElement,
    Tooltip,
    Legend
)

const AiPlan = () => {

    const [prompt, setPrompt] = useState(`My monthly income is ₹____.
My monthly expenses are ₹____.
My current savings are ₹____.
My financial goal is ______.
My risk level is ______ (low/medium/high).

Please create a financial plan including savings, investment, and emergency fund.`)
    const [plan, setPlan] = useState('')
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")
    



    const apiKey = import.meta.env.VITE_GEMINI_API_KEY;



    useEffect(() => {
        const savedPlan = localStorage.getItem("aiPlan");  // storage name 

        if (savedPlan) {
            setPlan(JSON.parse(savedPlan));  // string text 
        }
    }, [])



    const generatePlan = async (e) => {
        e.preventDefault();

        if (!prompt) {
            alert("Please enter a Financial details")
            return;

        }

        try {
            setLoading(true);//Start loading
            setError("")//error empty

            const response = await fetch(
                "https://generativelanguage.googleapis.com/v1beta/models/gemini-flash-latest:generateContent",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "X-goog-api-key": apiKey
                    },
                    body: JSON.stringify({
                        contents: [
                            {
                                parts: [
                                    {
                                        text: `Analyze the financial situation and return JSON data only.

User:
${prompt}

Return JSON format:
{
income: number,
expenses: number,
savings: number,
investment: number,
emergencyFund: number
}`
                                    }
                                ]
                            }
                        ]
                    })
                }

            )

            const data = await response.json();

            let text = data.candidates?.[0]?.content?.parts?.[0]?.text;

            const json = JSON.parse(text);

            setPlan(json); //  plan send  

            localStorage.setItem("aiPlan", JSON.stringify(json));  // storage 

        } catch (error) {

            console.log(error);
            

        }
        setLoading(false)

    }
    const pieData = {

labels:["Needs","Savings","Investment"],

datasets:[
{
data:[
plan?.expenses || 0,
plan?.savings || 0,
plan?.investment || 0
],
backgroundColor:["#f97316","#22c55e","#6366f1"]
}
]

};

    return (
        <div className="dashboard-container">

<h1 className="title">AI Financial Dashboard</h1>


<form onSubmit={generatePlan} className="prompt-box">

<textarea
placeholder="Example: My income is 60000 and expenses are 35000. I want to buy a house."
value={prompt}
onChange={(e)=>setPrompt(e.target.value)}
/>

<button>Generate Plan</button>

</form>




{loading && <p className="loading">AI is analyzing your finances...</p>}


{plan && (

<>

<div className="summary-cards">

<div className="card">
<h4>Total Income</h4>
<p>₹{plan.income}</p>
</div>

<div className="card">
<h4>Expenses</h4>
<p>₹{plan.expenses}</p>
</div>

<div className="card">
<h4>Monthly Savings</h4>
<p>₹{plan.savings}</p>
</div>

<div className="card">
<h4>Investment</h4>
<p>₹{plan.investment}</p>
</div>

</div>


<div className="charts">


<div className="chart-card">
<h3>Expense Breakdown</h3>
<Pie data={pieData}/>
</div>

</div>


<div className="ai-insight">

<h3>AI Recommendation</h3>

<ul>

<li>Save ₹{plan.savings} monthly</li>

<li>Build emergency fund up to ₹{plan.emergencyFund}</li>

<li>Invest ₹{plan.investment} in index funds</li>

</ul>

</div>


<div className="investment-card">

<h3>Emergency Fund Progress</h3>

<div className="progress">

<div
className="progress-fill"
style={{width:"60%"}}
/>

</div>

<p>Target: ₹{plan.emergencyFund}</p>

</div>

</>

)}

</div>

    )
}

export default AiPlan