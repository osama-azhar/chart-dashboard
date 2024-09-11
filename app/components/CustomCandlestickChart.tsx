"use client";
import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import {
  ResponsiveContainer,
  ComposedChart,
  XAxis,
  YAxis,
  Tooltip,
  Bar,
  Line,
} from "recharts";

const CustomCandlestickChart = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/candlestick-data/")
      .then((response) => {
        setData(response.data.data);
      });
  }, []);

  return (
    <ResponsiveContainer width="100%" height={400}>
      <ComposedChart data={data}>
        <XAxis dataKey="x" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="high" fill="#8884d8" />
        <Bar dataKey="low" fill="#82ca9d" />
        <Line type="monotone" dataKey="close" stroke="#ff7300" />
      </ComposedChart>
    </ResponsiveContainer>
  );
};

export default CustomCandlestickChart;
