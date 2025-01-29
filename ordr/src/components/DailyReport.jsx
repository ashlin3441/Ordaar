import React from 'react';
import { Box, Typography } from '@mui/material';

const DailyReport = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: { xs: 1, sm: 2 },
        marginLeft: "0",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: 'column', sm: 'row' },
          gap: { xs: 2, sm: 0 },
          alignItems: { xs: 'flex-start', sm: 'center' },
          justifyContent: "space-between",
          marginBottom: 2,
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <img
            src="public/dailyreport.png"
            alt="Daily Report Icon"
            style={{ width: "32px", height: "32px", marginRight: "8px" }}
          />
          <Typography variant="h4">Daily Report</Typography>
        </Box>

        <img
          src="public/calender.png"
          alt="Right Icon"
          style={{ width: "32px", height: "32px" }}
        />
      </Box>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)", // Always show 2 columns
          gap: { xs: 2, sm: 3 },
          width: "100%",
        }}
      >
        {[
          { title: "Total Sales", value: "200" },
          { title: "Total Refund", value: "254" },
          { title: "Cash on Delivery", value: "2070" },
          { title: "Online Payment", value: "900" }
        ].map((item) => (
          <Box
            key={item.title}
            sx={{
              bgcolor: "white",
              p: 2,
              border:1,
              borderRadius: 2,
              boxShadow: 2,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography variant="h4">{item.value}</Typography>
            <Typography variant="h6">{item.title}</Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default DailyReport;