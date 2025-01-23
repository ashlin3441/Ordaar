import React from 'react';
import { Box,  Typography, Button } from '@mui/material';
import Grid from "@mui/material/Grid2";


const FoodCategories = () => {
  const categories = [
    { name: 'Nonveg', path: '/nonveg' },
    { name: 'Fast Food', path: '/fast-food' },
    { name: 'Nonveg', path: '/nonveg-2' },
  ];

  return (
    <Box mt={2}>
      <Grid container spacing={2}>
        {categories.map((category) => (
          <Grid item key={category.name} xs={4}>
            <Box bgcolor="white" p={2} borderRadius={2} boxShadow={2}>
              <Typography variant="h6">{category.name}</Typography>
              <Button variant="contained" color="primary">
                Edit
              </Button>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default FoodCategories;