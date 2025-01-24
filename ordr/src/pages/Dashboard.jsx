import React from "react";
import { Box } from "@mui/material";
import DailyReport from "../components/DailyReport";
import FoodCategories from "../components/FoodCategories";
import TotalSales from "../components/TotalSales";
import Orders from "../components/Orders";

const Dashboard = () => {
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "40% 2px 60%", // Left 40%, separator 2px, Right 60%
        gridTemplateRows: "auto auto", // Automatically adjust row heights
        gap: "16px", // Small gap between rows
        padding: "16px",
        marginTop: "64px", // Add space below the navbar if it's fixed
      }}
    >
      {/* Left side Components */}
      <Box sx={{ gridColumn: "1 / 2", gridRow: "1" }}>
        <DailyReport />
      </Box>

      <Box sx={{ gridColumn: "1 / 2", gridRow: "2" }}>
        <Orders />
      </Box>

      {/* Vertical line separator */}
      <Box
        sx={{
          gridColumn: "2 / 3", // Line positioned between left and right
          gridRow: "1 / 3", // Line spans both rows
          backgroundColor: "#ccc", // Light gray color for the line
        }}
      />

      {/* Right side Components */}
      <Box sx={{ gridColumn: "3 / 4", gridRow: "1" }}>
        <FoodCategories />
      </Box>

      <Box sx={{ gridColumn: "3 / 4", gridRow: "2" }}>
        <TotalSales />
      </Box>
    </Box>
  );
};

export default Dashboard;