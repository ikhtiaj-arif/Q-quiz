import React from 'react';
import { useLoaderData } from 'react-router-dom';


import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";



const Statistics = () => {
    const stats = useLoaderData();
    const {data} = stats;
    console.log(data)
    return (
        <BarChart className='mx-auto my-6'
          width={500}
          height={300}
          data={data}
     
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="total" fill="#82ca9d" />
        </BarChart>
      );
};

export default Statistics;