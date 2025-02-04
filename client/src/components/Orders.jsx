// Orders.jsx
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
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: 'column', sm: 'row' },
          gap: { xs: 2, sm: 0 },
          justifyContent: "space-between",
          alignItems: { xs: 'flex-start', sm: 'center' },
          marginBottom: 2,
        }}
      >
        <Typography variant="h4">Orders</Typography>
        <Button
          variant="contained"
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

      <Box>
        <Grid container spacing={{ xs: 1, sm: 2 }} mt={1}>
          {orderStatuses.map((status) => (
            <Grid item xs={6} sm="auto" key={status.value}>
              <Button
                fullWidth
                variant={selectedStatus === status.value ? "contained" : "outlined"}
                color="primary"
                sx={{
                  backgroundColor:
                    selectedStatus === status.value ? "orange" : "transparent",
                  color: selectedStatus === status.value ? "white" : "#959595",
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

      <Box sx={{ height: "1px", backgroundColor: "#ccc", my: 2 }} />

      <Box sx={{
        display: "grid",
        gridTemplateColumns: { xs: "1fr", sm: "repeat(auto-fill, minmax(300px, 1fr))" },
        gap: 2
      }}>
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
              height: "131px",
              width: "100%",
            }}
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

export default Orders;