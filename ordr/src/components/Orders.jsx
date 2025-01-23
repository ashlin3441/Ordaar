import React from 'react';
import { Box, Typography, Grid, Button } from '@mui/material';

const Orders = () => {
  const orderStatuses = [
    { label: 'All', value: 'all' },
    { label: 'Pending', value: 'pending' },
    { label: 'Delivered', value: 'delivered' },
    { label: 'Cancelled', value: 'cancelled' },
    { label: 'Pickup', value: 'pickup' },
  ];

  return (
    <Box mt={2}>
      <Box bgcolor="white" p={2} borderRadius={2} boxShadow={2}>
        <Typography variant="h6">Orders</Typography>
        <Grid container spacing={2} mt={1}>
          {orderStatuses.map((status) => (
            <Grid item key={status.value}>
              <Button
                variant={status.value === 'all' ? 'contained' : 'outlined'}
                color="primary"
              >
                {status.label}
              </Button>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default Orders;