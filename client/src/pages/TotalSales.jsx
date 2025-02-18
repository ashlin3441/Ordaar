import React, { useState } from "react";
import { Box, Typography, Card, Button, TextField } from "@mui/material";
import { Star } from "@mui/icons-material";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { DiningStyles } from "../styles/DiningStyles";
import { styles1 } from "../styles/DashBoardStyles";

const salesData = [
  { month: "Jul", sales: 75000 },
  { month: "Aug", sales: 60000 },
  { month: "Sep", sales: 40000 },
  { month: "Oct", sales: 78000 },
  { month: "nov" },
  { month: "dec" },
];

const restaurants = Array(5).fill({
  name: "Rose Garden Rstuaaurant",
  location: "EranaKulam, Kochi",
  sales: 8561,
  rating: 5.0,
  img: "https://via.placeholder.com/50",
});

const TotalSales = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredRestaurants = restaurants.filter((r) =>
    r.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Box sx={DiningStyles.container}>
      <Box sx={DiningStyles.leftPanel}>
        <Box sx={DiningStyles.BackButtonBox}>
          <Typography sx={styles1.headerText}>Total Sales</Typography>
          <Button sx={DiningStyles.BackButton}>Back</Button>
        </Box>
        <Card sx={DiningStyles.LeftCard}>
          <Box mb={15}>
            <Typography variant="h6" fontWeight="bold">
              07-05-2024
            </Typography>
            <Typography variant="h4" color="orange" fontWeight="bold">
              2050
            </Typography>
          </Box>
          <img src="https://via.placeholder.com/100" alt="sales" />
        </Card>
        <ResponsiveContainer width="100%" height={280}>
          <LineChart data={salesData}>
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="sales"
              stroke="orange"
              strokeWidth={2}
              dot={{ fill: "orange" }}
            />
          </LineChart>
        </ResponsiveContainer>
      </Box>
      <Box sx={DiningStyles.rightPanel}>
        <Box>
          <TextField
            fullWidth
            variant="outlined"
            placeholder="Search restaurants..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            size="small"
            InputProps={DiningStyles.SearchBar}
          />
        </Box>
        <Box sx={styles1.ScrollBar7}>
          {filteredRestaurants.map((res, index) => (
            <Card key={index} sx={DiningStyles.RestaurantCard}>
              <Box sx={DiningStyles.ImageBox}>
                <img
                  src={res.img}
                  alt="restaurant"
                  style={DiningStyles.Image}
                />
                <Box flex={1}>
                  <Typography fontWeight="bold">{res.name}</Typography>
                  <Typography color="text.secondary">{res.location}</Typography>
                </Box>
                <Box sx={DiningStyles.RatingBox}>
                  <Star fontSize="small" />
                  <Typography>{res.rating}</Typography>
                </Box>
              </Box>
              <Box sx={DiningStyles.CardBox}>
                <Typography variant="caption" color="text.secondary">
                  No of sale
                </Typography>
                <Typography variant="h6" fontWeight="bold">
                  {res.sales}
                </Typography>
              </Box>
            </Card>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default TotalSales;
