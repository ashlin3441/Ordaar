// TotalSales.jsx
import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

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
      <Box display="flex" 
        flexDirection={{ xs: 'column', sm: 'row' }}
        gap={{ xs: 2, sm: 0 }}
        justifyContent="space-between" 
        alignItems={{ xs: 'flex-start', sm: 'center' }}
        mb={2}
      >
        <Typography variant="h4">Total Sales</Typography>
        <Button variant="contained" color="primary">
          View Details
        </Button>
      </Box>

      <Box sx={{ width: '100%', height: { xs: '300px', sm: '400px' } }}>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <XAxis dataKey="name" />
            <YAxis />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="value" stroke="#FF8A00" />
          </LineChart>
        </ResponsiveContainer>
      </Box>
    </Box>
  );
};

export default TotalSales;