"use client"


import {Legend, Pie,PieChart,Cell, ResponsiveContainer,label, Tooltip} from "recharts"
const StatisticsData = () => {

    const data=[
        {name:"Total Donation" ,value:66.7},
        {name:"Your Donation",value:33.3}
    ]


    const colors=[
        "#FF444A",
        "#00C49F"
    ]
    
    
    return (
        <>
            <main>
            <div>
            <ResponsiveContainer  aspect={2}>
            <PieChart width={500} height={500}>
                <Pie
                data={data}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                fill="#8884d8"
                label
                >
                {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={colors[index]} />
                ))}
                
                </Pie>
                <Tooltip />
                <Legend/>
            </PieChart>
            </ResponsiveContainer>


            </div>



            </main>
            
        </>
    );
};

export default StatisticsData;