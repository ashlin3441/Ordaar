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
        gridTemplateColumns: "30% 2px 30%", // Set the line's width to 2px and columns to 30% each
        gridTemplateRows: "1fr 1fr", // Two rows for the components above and below the line
        gap: "16px",
        padding: "16px",
      }}
    >
      {/* Components on the left side of the line */}
      <Box sx={{ gridColumn: "1 / 2", gridRow: "1" }}>
        <DailyReport />
      </Box>
      <Box sx={{ gridColumn: "1 / 2", gridRow: "2" }}>
        <Orders />
      </Box>

      {/* Line Separator (centered at 35%) */}
      <Box
        sx={{
          gridColumn: "2 / 3", // Line is in the center column
          gridRow: "1 / 3", // Line spans both rows
          backgroundColor: "#ccc", // Light gray color for the line
        }}
      />

      {/* Components on the right side of the line */}
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