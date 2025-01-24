import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const data = [
  { name: 'Jan', value: 50 },
  { name: 'Feb', value: 70 },
  { name: 'Mar', value: 80 },
  { name: 'Apr', value: 60 },
  { name: 'May', value: 90 },
  { name: 'Jun', value: 75 },
];

const TotalSales = () => {
  return (
    <Box mt={2} bgcolor="white" p={2} borderRadius={2}>
      {/* Header with Total Sales and View Details button */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Typography variant="h6">Total Sales</Typography>
        <Button variant="contained" color="primary">
          View Details
        </Button>
      </Box>

      {/* Line Chart */}
      <LineChart width={600} height={400} data={data}>
        <XAxis dataKey="name" />
        <YAxis />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="value" stroke="#FF8A00" />
      </LineChart>
    </Box>
  );
};

export default TotalSales;