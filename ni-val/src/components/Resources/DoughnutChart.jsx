import React from 'react';
import {
    PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer, Label
} from 'recharts';

const data = [
    { name: 'Email', value: 60 },
    { name: 'Digital Ads', value: 20 },
    { name: 'Teliphonic', value: 20 }
];

// Function to calculate the percentage
const calculatePercentage = (value, total) => ((value / total) * 100).toFixed(2);

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const DoughnutChart = () => {
    // Calculate the total value
    const total = data.reduce((sum, entry) => sum + entry.value, 0);

    return (
        <ResponsiveContainer width="100%" height={300}>
            <PieChart>
                <Pie
                    data={data}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    outerRadius="70%"
                    innerRadius="50%"
                    fill="#8884d8"
                    paddingAngle={5}
                    labelLine={false}
                    label={({ value }) => `${calculatePercentage(value, total)}%`}  // Custom label to show percentage
                >
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                </Pie>
                <Tooltip formatter={(value) => `${calculatePercentage(value, total)}%`} />
                <Legend />
            </PieChart>
        </ResponsiveContainer>
    );
};

export default DoughnutChart;
