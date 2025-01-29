import React, { useState } from "react";
import { Box } from "@mui/material";
import DailyReport from "../components/DailyReport";
import FoodCategories from "../components/FoodCategories";
import TotalSales from "../components/TotalSales";
import Orders from "../components/Orders";
import OrdersPage from "./OrdersPage";
import OrderDetails from "../components/OrderDetails"; // New component for order details

const Dashboard = () => {
  const [showOrdersPage, setShowOrdersPage] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState(null);

  const handleManageClick = () => {
    setShowOrdersPage(true);
  };

  const handleOrderClick = (order) => {
    setSelectedOrder(order);
  };

  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: {
          xs: "1fr",
          md: "40% 2px 60%",
        },
        gridTemplateRows: "auto auto",
        gap: { xs: "8px", sm: "16px" },
        padding: { xs: "8px", sm: "16px" },
        marginTop: { xs: "56px", sm: "64px" },
      }}
    >
      {/* Left Section (Default: DailyReport + Orders OR OrdersPage) */}
      <Box
        sx={{
          gridColumn: { xs: "1", md: "1 / 2" },
          gridRow: "1 / 3",
          overflowY: "auto",
        }}
      >
        {showOrdersPage ? (
          <OrdersPage onOrderClick={handleOrderClick} />
        ) : (
          <>
            <DailyReport />
            <Orders onManageClick={handleManageClick} />
          </>
        )}
      </Box>

      {/* Separator */}
      <Box
        sx={{
          display: { xs: "none", md: "block" },
          gridColumn: "2 / 3",
          gridRow: "1 / 3",
          backgroundColor: "#ccc",
        }}
      />

      {/* Right Section (Food Categories + Total Sales OR Order Details) */}
      <Box sx={{ gridColumn: { xs: "1", md: "3 / 4" }, gridRow: "1 / 3" }}>
        {selectedOrder ? (
          <OrderDetails order={selectedOrder} />
        ) : (
          <>
            <FoodCategories />
            <TotalSales />
          </>
        )}
      </Box>
    </Box>
  );
};

export default Dashboard;