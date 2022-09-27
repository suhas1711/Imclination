import { BarChart, XAxis, Bar, ResponsiveContainer } from "recharts";
// import React from 'react'

function BarGraph() {
  const data = [
    { name: "x", value: 10 },
    { name: "y", value: 20 },
    { name: "z", value: 15 },
    { name: "z", value: 25 },
    { name: "z", value: 35 },
    { name: "z", value: 10 },
    { name: "z", value: 60 }
  ];
  return (
    <div>
      <h1>Ausie chef shares cullinary</h1>
      <ResponsiveContainer width="85%" aspect={1}>
        <BarChart width={200} height="100%" data={data}>
          <XAxis datakey="name" />
          {/* <YAxis datakey="value"/> */}
          <Bar dataKey="value" fill="Yellow" width={50} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
export default BarGraph;
