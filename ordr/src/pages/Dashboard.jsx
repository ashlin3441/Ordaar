// Dashboard.jsx
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
        gridTemplateColumns: {
          xs: "1fr",
          md: "40% 2px 60%"
        },
        gridTemplateRows: "auto auto",
        gap: { xs: "8px", sm: "16px" },
        padding: { xs: "8px", sm: "16px" },
        marginTop: { xs: "56px", sm: "64px" }
      }}
    >
      <Box sx={{ 
        gridColumn: { xs: "1", md: "1 / 2" }, 
        gridRow: "1" 
      }}>
        <DailyReport />
      </Box>

      <Box sx={{ 
        gridColumn: { xs: "1", md: "1 / 2" }, 
        gridRow: "2" 
      }}>
        <Orders />
      </Box>

      <Box
        sx={{
          display: { xs: "none", md: "block" },
          gridColumn: "2 / 3",
          gridRow: "1 / 3",
          backgroundColor: "#ccc",
        }}
      />

      <Box sx={{ 
        gridColumn: { xs: "1", md: "3 / 4" }, 
        gridRow: { xs: "3", md: "1" } 
      }}>
        <FoodCategories />
      </Box>

      <Box sx={{ 
        gridColumn: { xs: "1", md: "3 / 4" }, 
        gridRow: { xs: "4", md: "2" } 
      }}>
        <TotalSales />
      </Box>
    </Box>
  );
};

export default Dashboard;
