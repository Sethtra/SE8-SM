// Inside the React component that renders the chart (e.g., DashboardContent.jsx)
import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto"; // Import Chart.js

function ChartComponent() {
  const chartRef = useRef(null); // Ref to get the canvas element
  const chartInstanceRef = useRef(null); // Ref to store the chart instance

  useEffect(() => {
    // This code runs AFTER the component renders and the canvas exists
    if (chartRef.current) {
      const ctx = chartRef.current.getContext("2d");

      // Destroy previous chart instance if it exists (important for cleanup)
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
      }

      // Create the new chart
      chartInstanceRef.current = new Chart(ctx, {
        type: "bar", // Or 'line', etc.
        data: {
          labels: ["M", "T", "W", "T", "F", "S", "S"],
          datasets: [
            {
              label: "Views",
              tension: 0.4,
              borderWidth: 0,
              borderRadius: 4,
              borderSkipped: false,
              backgroundColor: "#43A047",
              data: [50, 45, 22, 28, 50, 60, 76],
              barThickness: "flex",
            },
          ],
        },
        options: {
          // ... your chart options ...
          responsive: true,
          maintainAspectRatio: false,
          // ... rest of options
        },
      });
    }

    // Cleanup function: Destroy chart when component unmounts
    return () => {
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
        chartInstanceRef.current = null;
      }
    };
  }, []); // Empty dependency array means this runs once on mount

  return (
    <div className="chart">
      {/* Add the canvas element with the ref */}
      <canvas
        ref={chartRef}
        id="chart-bars"
        className="chart-canvas"
        height="300"
      ></canvas>
      {/* Make sure IDs are unique if you have multiple charts */}
    </div>
  );
}

export default ChartComponent;
