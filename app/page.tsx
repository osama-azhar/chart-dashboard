import React from "react";
import CandlestickChart from "./components/CustomCandlestickChart";
import CustomLineChart from "./components/CustomLineChart";
import CustomBarChart from "./components/CustomBarChart";
import CustomPieChart from "./components/CustomPieChart";

const Dashboard = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      <div>
        <h2>Candlestick Chart</h2>
        <CandlestickChart />
      </div>
      <div>
        <h2>Line Chart</h2>
        <CustomLineChart />
      </div>
      <div>
        <h2>Bar Chart</h2>
        <CustomBarChart />
      </div>
      <div>
        <h2>Pie Chart</h2>
        <CustomPieChart />
      </div>
    </div>
  );
};

export default Dashboard;
