import React from 'react';
import {
    BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
} from 'recharts';

const data = [
    { name: 'VP of IT', value:  10},
    { name: 'Head of IT', value: 25 },
    { name: 'IT Manager', value: 30 },
    { name: 'IT Director', value: 20 },
    { name: 'CTO', value: 15 },
];

const HorizontalBarChart = () => {
    return (
        <ResponsiveContainer width="100%" height={200}>
            <BarChart
                layout="vertical" // This makes the bar chart horizontal
                data={data}
                margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis type="number" />  {/* XAxis represents the values */}
                <YAxis type="category" dataKey="name" tick={{ fontSize: 12 }} width={90} />  {/* YAxis represents the categories */}
                <Tooltip />
                <Legend />
                <Bar dataKey="value" fill="#8884d8" />
            </BarChart>
        </ResponsiveContainer>
    );
};

export default HorizontalBarChart;
