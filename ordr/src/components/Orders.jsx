import React, { useState } from "react";
import { Box, Typography, Button } from "@mui/material";

const Orders = ({ onManageClick }) => {
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

  const filteredOrders = selectedStatus === "all"
    ? orders
    : orders.filter((order) => order.status === selectedStatus);

  return (
    <Box mt={2}>
      {/* Header Section */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 2,
        }}
      >
        <Typography variant="h4">Orders</Typography>
        <Button
          variant="contained"
          sx={{ backgroundColor: "orange", "&:hover": { backgroundColor: "#ff9c33" } }}
          onClick={onManageClick} // Collapse Orders
        >
          Manage
        </Button>
      </Box>

      {/* Status Filters */}
      <Box sx={{ display: "flex", gap: 3, mb: 2, flexWrap: "wrap" }}>
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

      <Box sx={{ height: "1px", backgroundColor: "#ccc", mb: 2 }} />

      {/* Orders List */}
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        {filteredOrders.map((order) => (
          <Box
            key={order.orderId}
            sx={{
              bgcolor: "white",
              p: 2,
              border: 1,
              borderRadius: 2,
              boxShadow: 1,
            }}
          >
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Typography variant="body1">Order ID: {order.orderId}</Typography>
              <Typography variant="body1">Status: {order.status}</Typography>
            </Box>
            <Typography variant="body2" color="gray">Time: {order.time}</Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Orders;