import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    { name: 'EMEA', value: 40 },
    { name: 'APAC', value: 30 },
    { name: 'North America', value: 30 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];

const PieChartComponent = () => {
    return (
        <ResponsiveContainer width="100%" height={250}>
            <PieChart>
                <Pie
                    data={data}
                    cx="50%"  // Center X position
                    cy="50%"  // Center Y position
                    outerRadius={70}  // Radius of the pie chart
                    fill="#8884d8"
                    dataKey="value"  // Value to be displayed in the chart
                    label
                >
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                </Pie>
                <Legend />
                <Tooltip />
                
            </PieChart>
        </ResponsiveContainer>
    );
};

export default PieChartComponent;
