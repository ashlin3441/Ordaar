// FoodCategories.jsx
import React from "react";
import { Box, Typography, Button } from "@mui/material";

const FoodCategories = () => {
  const categories = [
    { name: "Nonveg", img: "/nonveg.png" },
    { name: "Fast Food", img: "/fastfood.png" },
    { name: "NonVeg2", img: "/nonveg2.png" },
    { name: "Nonveg3", img: "/nonveg.png" },
    { name: "Fast Food2", img: "/fastfood.png" },
    { name: "NonVeg4", img: "/nonveg2.png" },
  ];

  return (
    <Box sx={{ width: "100%" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: 'column', sm: 'row' },
          gap: { xs: 2, sm: 0 },
          alignItems: { xs: 'flex-start', sm: 'center' },
          justifyContent: "space-between",
          marginBottom: 2,
          paddingX: { xs: 1, sm: 2 },
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Typography variant="h4" sx={{ marginRight: 1 }}>
            Food Categories
          </Typography>
          <img
            src="/foodcategories.png"
            alt="Category Icon"
            style={{ width: "32px", height: "32px" }}
          />
        </Box>

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

      <Box
        sx={{
          display: "flex",
          overflowX: "auto",
          gap: { xs: 1, sm: 2 },
          paddingX: { xs: 1, sm: 2 },
          "&::-webkit-scrollbar": {
            height: "8px",
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "#ccc",
            borderRadius: "4px",
          },
          "&::-webkit-scrollbar-thumb:hover": {
            backgroundColor: "#aaa",
          },
        }}
      >
        {categories.map((category) => (
          <Box
            key={category.name}
            sx={{
              flex: "0 0 auto",
              width: { xs: "140px", sm: "160px" },
              height: { xs: "220px", sm: "253px" },
              backgroundImage: `url(${category.img})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              borderRadius: "8px",
              transition: "transform 0.2s",
              "&:hover": {
                transform: "scale(1.02)",
              },
            }}
          />
        ))}
      </Box>
    </Box>
  );
};

export default FoodCategories;