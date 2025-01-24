import React from "react";
import { Box, Typography, Button } from "@mui/material";

const FoodCategories = () => {
  const categories = [
    { name: "Nonveg", img: "public/nonveg.png" },
    { name: "Fast Food", img: "public/fastfood.png" },
    { name: "NonVeg2", img: "public/nonveg2.png" },
    { name: "Nonveg3", img: "public/nonveg.png" },
    { name: "Fast Food2", img: "public/fastfood.png" },
    { name: "NonVeg4", img: "public/nonveg2.png" },
  ];

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 1, // Space between the header and grid
      }}
    >
      {/* Header */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: 2,
        }}
      >
        {/* Heading with Icon */}
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Typography variant="h4" sx={{ marginRight: 1 }}>
            Food Categories
          </Typography>
          <img
            src="public/foodcategories.png"
            alt="Category Icon"
            style={{ width: "32px", height: "32px" }}
          />
        </Box>

        {/* Manage Button */}
        <Button
          variant="contained"
          sx={{
            backgroundColor: "orange",
            "&:hover": {
              backgroundColor: "#ff9c33", // Slightly lighter shade on hover
            },
          }}
        >
          Manage
        </Button>
      </Box>

      {/* Scrollable Categories */}
      <Box
        sx={{
          display: "flex",
          overflowX: "auto", // Horizontal scroll
          gap: 2, // Space between categories
          paddingBottom: 1, // Add some space below the scrollable area
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
              flex: "0 0 auto", // Prevent shrinking, maintains size
              width: "160px",
              height: "253px",
              backgroundImage: `url(${category.img})`, // Set category image as background
              backgroundSize: "cover",
              backgroundPosition: "center",
              borderRadius: "8px",
              // Removed boxShadow and border to eliminate borders/shadows
            }}
          />
        ))}
      </Box>
    </Box>
  );
};

export default FoodCategories;