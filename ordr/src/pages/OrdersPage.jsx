import React, { useState } from "react";
import { Box, Typography, Button } from "@mui/material";

const OrdersPage = ({ onOrderClick }) => {
  const orderStatuses = [
    { label: "All", value: "all" },
    { label: "Pending", value: "pending" },
    { label: "Delivered", value: "delivered" },
    { label: "Cancelled", value: "cancelled" },
    { label: "Pickup", value: "pickup" },
  ];

  const [selectedStatus, setSelectedStatus] = useState("all");

  const orders = [
    { orderId: "ORD123", status: "pending", time: "N/A" },
    { orderId: "ORD124", status: "delivered", time: "2:30 PM" },
    { orderId: "ORD125", status: "pickup", time: "3:00 PM" },
    { orderId: "ORD126", status: "pending", time: "N/A" },
    { orderId: "ORD127", status: "delivered", time: "5:00 PM" },
    { orderId: "ORD128", status: "cancelled", time: "N/A" },
  ];

  const filteredOrders =
    selectedStatus === "all"
      ? orders
      : orders.filter((order) => order.status === selectedStatus);

  return (
    <Box mt={2}>
      {/* Header Section */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          gap: { xs: 2, sm: 0 },
          justifyContent: "space-between",
          alignItems: { xs: "flex-start", sm: "center" },
          marginBottom: 2,
          overflowY: "auto",
        }}
      >
        <Typography variant="h4">Manage Orders</Typography>
      </Box>

      {/* Status Filters */}
      <Box>
        <Box
          sx={{
            display: "flex",
            gap: 3,
            mb: 2,
            overflowY: "auto",
            flexWrap: "wrap",
          }}
        >
          {orderStatuses.map((status) => (
            <Typography
              key={status.value}
              onClick={() => setSelectedStatus(status.value)}
              sx={{
                color: selectedStatus === status.value ? "orange" : "#959595",
                cursor: "pointer",
                "&:hover": {
                  color: selectedStatus === status.value ? "#ff9c33" : "#757575",
                },
                fontWeight: "medium",
              }}
            >
              {status.label}
            </Typography>
          ))}
        </Box>
      </Box>

      <Box sx={{ height: "1px", backgroundColor: "#ccc", mb: 2 }} />

      {/* Orders List with Clickable Items */}
      <Box
        sx={{
          height: "calc(100vh - 250px)",
          overflowY: "auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 2,
          px: 2,
        }}
      >
        {filteredOrders.map((order) => (
          <Box
            key={order.orderId}
            sx={{
              display: "flex",
              flexDirection: "column",
              bgcolor: "white",
              p: 2,
              border: 1,
              borderRadius: 2,
              boxShadow: 1,
              width: "99%",
              maxWidth: "600px",
              cursor: "pointer",
              "&:hover": { backgroundColor: "#f9f9f9" },
            }}
            onClick={() => onOrderClick(order)}
          >
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Typography variant="body1" color="black">
                Order Status
              </Typography>
              <Typography variant="body1" color="black">
                Order ID: {order.orderId}
              </Typography>
            </Box>

            <Box>
              <Typography variant="body2" color="gray">
                Status: {order.status}
              </Typography>
              <Typography variant="body2" color="gray">
                Time: {order.time}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default OrdersPage;