import React from 'react';
import { BarChart, Bar, Rectangle, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Dashboard = () => {
    const marksArray = [
        {
            id: 1,
            name: "Alice",
            bangla: 85,
            english: 78,
            math: 55
        },
        {
            id: 2,
            name: "Bob",
            bangla: 55,
            english: 80,
            math: 22
        },
        {
            id: 3,
            name: "Charlie",
            bangla: 75,
            english: 88,
            math: 65
        },
        {
            id: 4,
            name: "David",
            bangla: 82,
            english: 95,
            math: 88
        },
        {
            id: 5,
            name: "Eva",
            bangla: 45,
            english: 92,
            math: 78
        },
        {
            id: 6,
            name: "Frank",
            bangla: 79,
            english: 65,
            math: 92
        },
        {
            id: 7,
            name: "Grace",
            bangla: 91,
            english: 50,
            math: 66
        },
        {
            id: 8,
            name: "Hannah",
            bangla: 75,
            english: 32,
            math: 82
        }
    ];
    return (
        <div> 
            <h2 className='text-4xl font-bold m-5 text-center'>Students Marks Chart</h2>
                <BarChart
                    width={1200}
                    height={500}
                    data={marksArray}
                >
                    <Bar dataKey="bangla" fill="#9333EA" activeBar={<Rectangle fill="white" stroke="blue" />} />
                    <Bar dataKey="english" fill="green" />
                    <Bar dataKey="math" fill='orange' />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                </BarChart>
            
        </div>
    );
};

export default Dashboard;