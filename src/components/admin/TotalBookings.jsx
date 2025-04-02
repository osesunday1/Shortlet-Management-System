import React, { useEffect, useRef } from "react";
import * as d3 from "d3";
import axios from "axios";

const TotalBookings = () => {
  
  const apiUrl = import.meta.env.VITE_BACKEND_URL;
  const ref = useRef();

  useEffect(() => {
    const fetchBookings = async () => {
      const res = await axios.get(`${apiUrl}/bookings/get-bookings`);
      const total = res.data.length;

      d3.select(ref.current).selectAll("*").remove(); // Clean old
      const svg = d3.select(ref.current)
        .append("svg")
        .attr("width", 200)
        .attr("height", 100);

      svg.append("text")
        .attr("x", 100)
        .attr("y", 60)
        .attr("text-anchor", "middle")
        .style("font-size", "36px")
        .style("fill", "#2563eb")
        .text(total);
    };

    fetchBookings();
  }, []);

  return (
    <div className="bg-white p-4 rounded shadow text-center w-100 justify-center items-center" >
      <h3 className="text-lg font-semibold mb-2">Total Bookings</h3>
      <div ref={ref}></div>
    </div>
  );
};

export default TotalBookings;
