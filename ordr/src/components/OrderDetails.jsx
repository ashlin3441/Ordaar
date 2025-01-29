import React from "react";
import { Box, Typography } from "@mui/material";

const OrderDetails = ({ order }) => {
  return (
    <Box sx={{ padding: "16px", backgroundColor: "#fff", borderRadius: "8px", boxShadow: 2 }}>
      <Typography variant="h5" gutterBottom>
        Order Details
      </Typography>
      <Typography variant="body1">Order ID: {order.orderId}</Typography>
      <Typography variant="body1">Status: {order.status}</Typography>
      <Typography variant="body1">Time: {order.time}</Typography>
    </Box>
  );
};

export default OrderDetails;