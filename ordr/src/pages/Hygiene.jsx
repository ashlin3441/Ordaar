import { Box, Typography, InputBase, Card, CardContent, CardMedia, Avatar } from "@mui/material";
import React, { useState } from "react";
import { Search } from "@mui/icons-material";
import Grid from '@mui/material/Grid2';
import StarIcon from "@mui/icons-material/Star";

const restaurants = [
  { 
    id: 1, 
    name: "Kitchen Cafe & Resto", 
    image: "restaurant.jpg", 
    rating: "⭐ 4.5", 
    address: "EzoneKulam, Kochi", 
    status: "Open", 
    mainImage: "restaurant.jpg", 
    overallRating: 4.8, 
    reviews: [
      {
        id: 1,
        author: "Elizabeth D. Thoman",
        avatar: "elizabeth.jpg",
        timeAgo: "1 hr Ago",
        rating: 5.0,
        categoryRatings: {
          hygiene: 4.9,
          staff: 4.8,
          cooking: 5.0,
          taste: 5.0,
          price: 4.5
        },
        images: [
          "food1.png",
          "food2.png"
        ]
      }
    ]
  },
  { 
    id: 2, 
    name: "Flavors of India", 
    image: "resto2.png", 
    rating: "⭐ 4.2", 
    address: "456 Spice Avenue, City", 
    status: "Closed", 
    mainImage: "resto2.png", 
    overallRating: 4.2, 
    reviews: [
      {
        id: 1,
        author: "John Doe",
        avatar: "john.jpg",
        timeAgo: "2 hrs Ago",
        rating: 4.5,
        categoryRatings: {
          hygiene: 4.5,
          staff: 4.0,
          cooking: 4.7,
          taste: 4.8,
          price: 4.2
        },
        images: [
          "food1.png",
          "food2.png"
        ]
      }
    ]
  },
  { 
    id: 3, 
    name: "Kitchen Cafe & Resto", 
    image: "restaurant.jpg", 
    rating: "⭐ 4.5", 
    address: "EzoneKulam, Kochi", 
    status: "Open", 
    mainImage: "restaurant.jpg", 
    overallRating: 4.8, 
    reviews: [
      {
        id: 1,
        author: "Elizabeth D. Thoman",
        avatar: "elizabeth.jpg",
        timeAgo: "1 hr Ago",
        rating: 5.0,
        categoryRatings: {
          hygiene: 4.9,
          staff: 4.8,
          cooking: 5.0,
          taste: 5.0,
          price: 4.5
        },
        images: [
          "food1.png",
          "food2.png"
        ]
      }
    ]
  },
  { 
    id: 4, 
    name: "Kitchen Cafe & Resto", 
    image: "restaurant.jpg", 
    rating: "⭐ 4.5", 
    address: "EzoneKulam, Kochi", 
    status: "Open", 
    mainImage: "restaurant.jpg", 
    overallRating: 4.8, 
    reviews: [
      {
        id: 1,
        author: "Elizabeth D. Thoman",
        avatar: "elizabeth.jpg",
        timeAgo: "1 hr Ago",
        rating: 5.0,
        categoryRatings: {
          hygiene: 4.9,
          staff: 4.8,
          cooking: 5.0,
          taste: 5.0,
          price: 4.5
        },
        images: [
          "food1.png",
          "food2.png"
        ]
      }
    ]
  },
  { 
    id: 5, 
    name: "Kitchen Cafe & Resto", 
    image: "restaurant.jpg", 
    rating: "⭐ 4.5", 
    address: "EzoneKulam, Kochi", 
    status: "Open", 
    mainImage: "restaurant.jpg", 
    overallRating: 4.8, 
    reviews: [
      {
        id: 1,
        author: "Elizabeth D. Thoman",
        avatar: "elizabeth.jpg",
        timeAgo: "1 hr Ago",
        rating: 5.0,
        categoryRatings: {
          hygiene: 4.9,
          staff: 4.8,
          cooking: 5.0,
          taste: 5.0,
          price: 4.5
        },
        images: [
          "food1.png",
          "food2.png"
        ]
      }
    ]
  },
  { 
    id: 6, 
    name: "Kitchen Cafe & Resto", 
    image: "restaurant.jpg", 
    rating: "⭐ 4.5", 
    address: "EzoneKulam, Kochi", 
    status: "Open", 
    mainImage: "restaurant.jpg", 
    overallRating: 4.8, 
    reviews: [
      {
        id: 1,
        author: "Elizabeth D. Thoman",
        avatar: "elizabeth.jpg",
        timeAgo: "1 hr Ago",
        rating: 5.0,
        categoryRatings: {
          hygiene: 4.9,
          staff: 4.8,
          cooking: 5.0,
          taste: 5.0,
          price: 4.5
        },
        images: [
          "food1.png",
          "food2.png"
        ]
      }
    ]
  },
  { 
    id: 7, 
    name: "Kitchen Cafe & Resto", 
    image: "restaurant.jpg", 
    rating: "⭐ 4.5", 
    address: "EzoneKulam, Kochi", 
    status: "Open", 
    mainImage: "restaurant.jpg", 
    overallRating: 4.8, 
    reviews: [
      {
        id: 1,
        author: "Elizabeth D. Thoman",
        avatar: "elizabeth.jpg",
        timeAgo: "1 hr Ago",
        rating: 5.0,
        categoryRatings: {
          hygiene: 4.9,
          staff: 4.8,
          cooking: 5.0,
          taste: 5.0,
          price: 4.5
        },
        images: [
          "food1.png",
          "food2.png"
        ]
      }
    ]
  },
  { 
    id: 8, 
    name: "Kitchen Cafe & Resto", 
    image: "restaurant.jpg", 
    rating: "⭐ 4.5", 
    address: "EzoneKulam, Kochi", 
    status: "Open", 
    mainImage: "restaurant.jpg", 
    overallRating: 4.8, 
    reviews: [
      {
        id: 1,
        author: "Elizabeth D. Thoman",
        avatar: "elizabeth.jpg",
        timeAgo: "1 hr Ago",
        rating: 5.0,
        categoryRatings: {
          hygiene: 4.9,
          staff: 4.8,
          cooking: 5.0,
          taste: 5.0,
          price: 4.5
        },
        images: [
          "food1.png",
          "food2.png"
        ]
      }
    ]
  },
  
  // Add more restaurants as needed
];

// Category images and ratings
const categoryImages = [
  { image: "hygiene/hygiene.png", rating: 4.9 },
  { image: "hygiene/staffs.png", rating: 4.8 },
  { image: "hygiene/cooking.png", rating: 5.0 },
  { image: "hygiene/taste.png", rating: 5.0 },
  { image: "hygiene/price.png", rating: 4.5 }
];

function Hygiene() {
  const [selectedRestaurant, setSelectedRestaurant] = useState(restaurants[0]); // Default to the first restaurant

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        gap: { xs: "8px", sm: "16px" },
        padding: { xs: "8px", sm: "16px" },
        marginTop: { xs: "56px", sm: "64px" },
        height: "calc(100vh - 64px)",
        overflow: "hidden",
      }}
    >
      {/* Left Section */}
      <Box sx={{ flex: 4, display: "flex", flexDirection: "column", height: "100%" }}>
        {/* Heading Section */}
        <Box sx={{ display: "flex", alignItems: "center", marginTop: "18px",width: "100%" }}>
          <img src="hygiene.png" alt="Hygiene Icon" style={{ width: "24px", height: "24px", marginRight: "8px" }} />
          <Typography variant="h5">Today's Hygiene Update</Typography>
        </Box>

        {/* Search Bar - Fixed at the Top */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            backgroundColor: "white",
            borderRadius: "15px",
            border: "1px solid #E5E5E5",
            padding: "8px 16px",
            width: "90%",
            maxWidth: { xs: "100%", sm: "700px" },
            height: "40px",
            boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.05)",
            marginTop: "28px",
          }}
        >
          <Search sx={{ color: "#FF8A00", fontSize: { xs: "24px", sm: "32px" }, marginRight: "12px" }} />
          <InputBase
            placeholder="Search foods, restaurant by name"
            sx={{
              flexGrow: 1,
              width: "100%",
              maxWidth: "100%",
              "& input": {
                fontSize: { xs: "16px", sm: "18px" },
                fontFamily: "Outfit",
                color: "#959595",
                "&::placeholder": {
                  color: "#959595",
                  opacity: 1,
                  fontSize: { xs: "16px", sm: "18px" },
                  fontFamily: "Outfit",
                },
              },
            }}
          />
        </Box>
        
        {/* Scrollable Restaurant List */}
        <Box
          sx={{
            flexGrow: 1,
            overflowY: "auto",
            marginTop: "16px",
            paddingRight: "8px",
            width: "100%",
          
          }}
        >
          <Grid container spacing={2}>
            {restaurants.map((restaurant) => (
              <Grid item xs={12} sm={6} md={4} key={restaurant.id}>
                <Card 
                  sx={{ 
                    height: "180px", 
                    width: "90vh",
                    borderRadius: "16px",
                    display: "flex", 
                    flexDirection: "column",
                    cursor: "pointer",
                    transition: "transform 0.2s",
                    "&:hover": { transform: "scale(1.02)" },
                  }}
                  onClick={() => setSelectedRestaurant(restaurant)}
                >
                  {/* Image Section */}
                  <CardMedia
                    component="img"
                    image={restaurant.image}
                    alt={restaurant.name}
                    sx={{ height: "100%", width: "100%" }}
                  />
                  {/* Details Section */}
                  <CardContent sx={{ flexGrow: 1, padding: "8px" }}>
                    <Typography variant="subtitle1" fontWeight="bold">{restaurant.name}</Typography>
                    <Typography variant="body2" color="text.secondary">{restaurant.rating}</Typography>
                    <Typography variant="body2" color="text.secondary">{restaurant.address}</Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>

      {/* Vertical Separator - Visible on md and above */}
      <Box sx={{ width: "2px", backgroundColor: "#ccc", display: { xs: "none", md: "block" } }} />

      {/* Right Section - Restaurant Detail */}
      <Box sx={{ 
        flex: 8, 
        display: "flex", 
        flexDirection: "column", 
        overflowY: "auto",
        paddingLeft: { md: "16px" },
      }}>
        {selectedRestaurant && (
          <Box sx={{ padding: "16px 8px" }}>
            {/* Restaurant Name and Status */}
            <Box sx={{ display: "flex", alignItems: "center", marginBottom: "16px" }}>
              <Typography variant="h5" component="h1" sx={{ fontWeight: "bold", marginRight: "16px" }}>
                {selectedRestaurant.name}
              </Typography>
              <Box 
                component="span" 
                sx={{ 
                  bgcolor: selectedRestaurant.status === "Open" ? "success.main" : "error.main", 
                  color: "white", 
                  padding: "4px 16px", 
                  borderRadius: "4px",
                  fontSize: "14px"
                }}
              >
                {selectedRestaurant.status}
              </Box>
            </Box>

            {/* Main Restaurant Image - Stacked Layout */}
            <Box sx={{ position: "relative", marginBottom: "16px" }}>
              <Card 
                sx={{ 
                  borderRadius: "16px", 
                  overflow: "hidden",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                }}
              >
                <CardMedia
                  component="img"
                  image={selectedRestaurant.mainImage}
                  alt={selectedRestaurant.name}
                  sx={{ height: "250px", width: "100%" }}
                />
              </Card>
              {/* Overlay or additional images can be added here */}
            </Box>

            {/* Rating Section */}
            <Box sx={{ marginBottom: "24px", textAlign: "center" }}>
              <Typography variant="h6" component="h2" sx={{ marginBottom: "8px" }}>
                Rate Hygiene
              </Typography>
              {[1, 2, 3, 4, 5].map((star) => (
                <StarIcon key={star} sx={{ color: "#FFB800", fontSize: "32px" }} />
              ))}
            </Box>

            {/* Reviews Section */}
            <Box>
              <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "16px" }}>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Typography variant="h6" component="h2" sx={{ marginRight: "8px" }}>
                    Ratings & Reviews
                  </Typography>
                  <StarIcon sx={{ color: "#FFB800" }} />
                  <Typography variant="h6" component="span">
                    {selectedRestaurant.overallRating}
                  </Typography>
                </Box>
              </Box>

              {/* Individual Reviews */}
              {selectedRestaurant.reviews.map((review) => (
                <Box key={review.id} sx={{ marginBottom: "24px" }}>
                  {/* Reviewer Info */}
                  <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "8px" }}>
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                      <Avatar src={review.avatar} sx={{ width: 48, height: 48, marginRight: "12px" }} />
                      <Box>
                        <Typography variant="h6">{review.author}</Typography>
                        <Box sx={{ display: "flex", alignItems: "center" }}>
                          <Typography sx={{ marginRight: "4px" }}>Rated</Typography>
                          <StarIcon sx={{ color: "#FFB800", fontSize: "18px", marginRight: "4px" }} />
                          <Typography>{review.rating}</Typography>
                        </Box>
                      </Box>
                    </Box>
                    <Typography color="text.secondary">{review.timeAgo}</Typography>
                  </Box>

                  {/* Category Ratings with PNG Files */}
                  <Box sx={{ display: "flex", gap: "8px", overflowX: "auto", marginBottom: "16px", pb: 1 }}>
                    {categoryImages.map((category, index) => (
                      <Card key={index} sx={{ minWidth: "110px", textAlign: "center", p: 1, borderRadius: "8px" }}>
                        <img 
                          src={category.image} 
                          alt={`Category ${index + 1}`} 
                          style={{ width: "50px", height: "50px", marginBottom: "8px" }} 
                        />
                        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                          <StarIcon sx={{ color: "#FFB800", fontSize: "16px", mr: 0.5 }} />
                          <Typography>{category.rating}</Typography>
                        </Box>
                      </Card>
                    ))}
                  </Box>

                  {/* Image Gallery with Horizontal Scroll */}
                  <Box 
                    sx={{ 
                      display: "flex", 
                      overflowX: "auto", 
                      gap: "12px",
                      "&::-webkit-scrollbar": { display: "none" },
                      msOverflowStyle: "none",
                      scrollbarWidth: "none",
                      pb: 1
                    }}
                  >
                    {review.images.map((image, index) => (
                      <Box 
                        key={index} 
                        sx={{ 
                          minWidth: "150px", 
                          height: "100px", 
                          borderRadius: "8px",
                          overflow: "hidden",
                          flex: "0 0 auto",
                        }}
                      >
                        <img 
                          src={image} 
                          alt={`Food image ${index + 1}`} 
                          style={{ width: "100%", height: "100%", objectFit: "cover" }} 
                        />
                      </Box>
                    ))}
                  </Box>
                  
                  {/* Placeholder text */}
                  <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
                    Industry's standard dummy text ever since the 1500s, when...
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>
        )}
      </Box>
    </Box>
  );
}

export default Hygiene;