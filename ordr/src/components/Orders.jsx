import React, { useState } from "react";
import { Box, Typography, Grid, Button } from "@mui/material";

const Orders = () => {
  const orderStatuses = [
    { label: "All", value: "all" },
    { label: "Pending", value: "pending" },
    { label: "Delivered", value: "delivered" },
    { label: "Cancelled", value: "cancelled" },
    { label: "Pickup", value: "pickup" },
  ];

  const [selectedStatus, setSelectedStatus] = useState("all");

  // Sample fake order data
  const orders = [
    { orderId: "ORD123", status: "pending", time: "N/A" },
    { orderId: "ORD124", status: "delivered", time: "2:30 PM" },
    { orderId: "ORD125", status: "pickup", time: "3:00 PM" },
    { orderId: "ORD126", status: "pending", time: "N/A" },
    { orderId: "ORD127", status: "delivered", time: "5:00 PM" },
    { orderId: "ORD128", status: "cancelled", time: "N/A" },
  ];

  // Filter orders based on selected status
  const filteredOrders =
    selectedStatus === "all"
      ? orders
      : orders.filter((order) => order.status === selectedStatus);

  return (
    <Box mt={2}>
      {/* Header with Manage button */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 2,
        }}
      >
        <Typography variant="h6">Orders</Typography>
        <Button
          variant="contained"
          color="primary"
          sx={{
            backgroundColor: "orange",
            "&:hover": {
              backgroundColor: "#ff9c33",
            },
          }}
        >
          Manage
        </Button>
      </Box>

      {/* Order Status Buttons */}
      <Box>
        <Grid container spacing={2} mt={1}>
          {orderStatuses.map((status) => (
            <Grid item key={status.value}>
              <Button
                variant={selectedStatus === status.value ? "contained" : "outlined"}
                color="primary"
                sx={{
                  backgroundColor:
                    selectedStatus === status.value ? "orange" : "transparent",
                  color: selectedStatus === status.value ? "white" : "#959595", // Set text color to gray
                  "&:hover": {
                    backgroundColor:
                      selectedStatus === status.value ? "#ff9c33" : "#f0f0f0",
                  },
                }}
                onClick={() => setSelectedStatus(status.value)}
              >
                {status.label}
              </Button>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Separator Line */}
      <Box sx={{ height: "1px", backgroundColor: "#ccc", my: 2 }} />

      {/* Order Details */}
      <Box>
        {filteredOrders.map((order) => (
          <Box
            key={order.orderId}
            sx={{
              display: "flex",
              flexDirection: "column",
              bgcolor: "white",
              p: 2,
              borderRadius: 2,
              boxShadow: 1,
              mb: 2,
              maxHeight: "131px",
              width: "449px",
            }}
          >
            {/* Order Status & Order ID */}
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Typography variant="body1" color="black">
                Order Status
              </Typography>
              <Typography variant="body1" color="black">
                Order ID: {order.orderId}
              </Typography>
            </Box>

            {/* Order status & Time */}
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

export default Orders;