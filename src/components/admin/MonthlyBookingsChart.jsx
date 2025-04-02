import React, { useEffect, useRef } from "react";
import * as d3 from "d3";
import axios from "axios";

const MonthlyBookingsChart = () => {
  const apiUrl = import.meta.env.VITE_BACKEND_URL;
  const chartRef = useRef();

  useEffect(() => {
    const fetchMonthlyData = async () => {
      const res = await axios.get(`${apiUrl}/bookings/get-bookings`);
      const bookings = res.data;

      const bookingsByMonth = d3.rollup(
        bookings,
        v => v.length,
        b => new Date(b.checkInDate).toLocaleString("default", { month: "short" })
      );

      const data = Array.from(bookingsByMonth, ([month, count]) => ({ month, count }));

      drawChart(data);
    };

    const drawChart = (data) => {
      const width = 400;
      const height = 200;
      const margin = { top: 20, right: 20, bottom: 30, left: 40 };

      d3.select(chartRef.current).selectAll("*").remove(); // Clear

      const svg = d3.select(chartRef.current)
        .append("svg")
        .attr("width", width)
        .attr("height", height);

      const x = d3.scaleBand()
        .domain(data.map(d => d.month))
        .range([margin.left, width - margin.right])
        .padding(0.2);

      const y = d3.scaleLinear()
        .domain([0, d3.max(data, d => d.count)])
        .nice()
        .range([height - margin.bottom, margin.top]);

      svg.append("g")
        .attr("fill", "#3b82f6")
        .selectAll("rect")
        .data(data)
        .join("rect")
        .attr("x", d => x(d.month))
        .attr("y", d => y(d.count))
        .attr("height", d => y(0) - y(d.count))
        .attr("width", x.bandwidth());

      svg.append("g")
        .attr("transform", `translate(0,${height - margin.bottom})`)
        .call(d3.axisBottom(x));

      svg.append("g")
        .attr("transform", `translate(${margin.left},0)`)
        .call(d3.axisLeft(y));
    };

    fetchMonthlyData();
  }, []);

  return (
    <div className="bg-white p-4 rounded shadow w-100">
      <h3 className="text-lg font-semibold mb-2 text-center">Monthly Bookings</h3>
      <div ref={chartRef}></div>
    </div>
  );
};

export default MonthlyBookingsChart;