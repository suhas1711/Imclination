import React from "react";
import { ResponsiveContainer } from "recharts";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";

const data = [
  {
    name: "1",
    uv: 300,
    pv: 200,
    amt: 2400,
    pr: 100
  },
  {
    name: "2",
    uv: 200,
    pv: 0,
    amt: 2210,
    pr: 200
  },
  {
    name: "3",
    uv: 300,
    pv: 200,
    amt: 2290,
    pr: 100
  },
  {
    name: "4",
    uv: 200,
    pv: 0,
    amt: 2000,
    pr: 200
  },
  {
    name: "5",
    uv: 300,
    pv: 400,
    amt: 2181,
    pr: 0
  },
  {
    name: "6",
    uv: 100,
    pv: 200,
    amt: 2500,
    pr: 200
  },
  {
    name: "7",
    uv: 400,
    pv: 200,
    amt: 2100,
    pr: 100
  },
  {
    name: "8",
    uv: 300,
    pv: 300,
    amt: 2100,
    pr: 200
  },
  {
    name: "9",
    uv: 400,
    pv: 100,
    amt: 2100,
    pr: 100
  },
  {
    name: "10",
    uv: 300,
    pv: 300,
    amt: 2100,
    pr: 200
  },
  {
    name: "11",
    uv: 200,
    pv: 0,
    amt: 2100,
    pr: 100
  },
  {
    name: "12",
    uv: 300,
    pv: 200,
    amt: 2100,
    pr: 0
  },
  {
    name: "13",
    uv: 200,
    pv: 400,
    amt: 2100,
    pr: 200
  }
];

export default function GraphChart() {
  return (
    <div>
      <container>
        <ResponsiveContainer width="100%" height={200}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" padding={{ left: 30, right: 30 }} />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="pv" stroke="#ff3a29" />
            <Line type="monotone" dataKey="pr" stroke="#4339f2" />
            <Line type="monotone" dataKey="uv" stroke="#34b53a" />
          </LineChart>
        </ResponsiveContainer>
      </container>
    </div>
  );
}
