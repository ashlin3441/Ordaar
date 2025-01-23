import React from 'react';
import { Box, Typography } from '@mui/material';

const DailyReport = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2, // Space between the header and grid
      }}
    >
      {/* Header */}
      <Typography variant="h4" sx={{ marginBottom: 2 }}>
        Daily Report
      </Typography>

      {/* Grid Container */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", // Dynamic sizing for uniform boxes
          gap: 2, // Space between the boxes
        }}
      >
        {/* Total Sales */}
        <Box
          sx={{
            bgcolor: "white",
            p: 2,
            borderRadius: 2,
            boxShadow: 2,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography variant="h4">200</Typography>
          <Typography variant="h6">Total Sales</Typography>
        </Box>

        {/* Total Refund */}
        <Box
          sx={{
            bgcolor: "white",
            p: 2,
            borderRadius: 2,
            boxShadow: 2,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography variant="h4">254</Typography>
          <Typography variant="h6">Total Refund</Typography>
        </Box>

        {/* Cash on Delivery */}
        <Box
          sx={{
            bgcolor: "white",
            p: 2,
            borderRadius: 2,
            boxShadow: 2,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography variant="h4">2070</Typography>
          <Typography variant="h6">Cash on Delivery</Typography>
        </Box>

        {/* Online Payment */}
        <Box
          sx={{
            bgcolor: "white",
            p: 2,
            borderRadius: 2,
            boxShadow: 2,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography variant="h4">900</Typography>
          <Typography variant="h6">Online Payment</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default DailyReport;