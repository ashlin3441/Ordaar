import React, { useState } from "react";
import {
  Box,
  Tabs,
  Tab,
  TextField,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  InputAdornment,
  Avatar,
  Grid,
} from "@mui/material";
import { styles1 } from "../styles/DashBoardStyles";
import styles from "../styles/ProfileStyles";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import PhoneIcon from "@mui/icons-material/Phone";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import StarIcon from "@mui/icons-material/Star";

const Dining = () => {
  const [tabValue, setTabValue] = useState(0);
  const handleChange = (event, newValue) => setTabValue(newValue);

  const bookings = [
    {
      name: "Jhonne Smith",
      date: "Feb 25, 2024",
      time: "09:00 AM - 10:00 AM",
      tableB: "B1, B2, B3",
      tableC: "C1, C2, C3",
      status: "Customer Cancelled",
      status1: "Not Recieved",
      color: "error",
      Amount: "Total amount ₹470",
    },
    {
      name: "Jhonne Smith",
      date: "Feb 25, 2024",
      time: "09:00 AM - 10:00 AM",
      tableB: "B1, B2, B3",
      tableC: "C1, C2, C3",
      status: "Restaurant Rejected",
      status1: "Not Recieved",
      color: "error",
      Amount: "Total amount ₹470",
    },
    {
      name: "Jhonne Smith",
      date: "Feb 25, 2024",
      time: "09:00 AM - 10:00 AM",
      tableB: "B1, B2, B3",
      tableC: "C1, C2, C3",
      status: "Visited",
      status1: "Recieved",
      color: "warning",
      Amount: "Total amount ₹470",
    },
    {
      name: "Jhonne Smith",
      date: "Feb 25, 2024",
      time: "09:00 AM - 10:00 AM",
      tableB: "B1, B2, B3",
      tableC: "C1, C2, C3",
      status: "Not Visited",
      status1: "Not Recieved",
      color: "secondary",
      Amount: "Total amount ₹470",
    },
  ];

  const filteredBookings = () => {
    if (tabValue === 0) return bookings; // Show all bookings
    if (tabValue === 1) return bookings.filter((b) => b.status === "Visited");
    if (tabValue === 2)
      return bookings.filter((b) => b.status === "Not Visited");
    if (tabValue === 3)
      return bookings.filter((b) => b.status === "Restaurant Rejected");
    if (tabValue === 4)
      return bookings.filter((b) => b.status === "Customer Cancelled");
  };

  return (
    <Box p={2} marginTop={8} display="flex" gap={3}>
      <Box flex={4} display="flex" flexDirection="column" gap={2}>
        <Typography variant="h4" sx={styles.headerText}>
          Dining
        </Typography>
        <TextField
          fullWidth
          variant="outlined"
          placeholder="Search customers"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <img
                  src="search-icon.png"
                  alt="Search"
                  style={styles.WidthHeight20}
                />
              </InputAdornment>
            ),
            sx: styles1.SearchBar,
          }}
          sx={styles1.searchinput}
        />
        <Box flex={1} sx={styles1.ScrollBar1}>
          {[...Array(10)].map((_, index) => (
            <Card
              key={index}
              sx={{
                display: "flex",
                alignItems: "center",
                borderRadius: 3,
                mb: 2,
                gap: 2,
              }}
            >
              <CardMedia
                component="img"
                sx={{ width: 120, height: 80, borderRadius: 2 }}
                image="/restaurant.jpg"
                alt="Restaurant"
              />
              <CardContent>
                <Typography variant="h6" sx={styles1.headerText}>
                  Kitchen Kafe Resto
                </Typography>
                <Box display="flex" alignItems="center">
                  <LocationOnIcon fontSize="small" color="warning" />
                  <Typography variant="body2" sx={styles1.BottomText}>
                    Eranakulam, Kochi
                  </Typography>
                </Box>
                <Box display="flex" alignItems="center" gap={0.5}>
                  <AccessTimeIcon fontSize="small" color="warning" />
                  <Typography variant="body2" sx={styles1.BottomText}>
                    09 AM - 09 PM
                  </Typography>
                </Box>
              </CardContent>
              <Box
                display="flex"
                alignItems="center"
                gap={1}
                p={1}
                bgcolor="#FFF8E1"
                borderRadius={2}
              >
                <StarIcon fontSize="small" color="warning" />
                <Typography variant="body2" fontWeight="bold">
                  5.0
                </Typography>
              </Box>
            </Card>
          ))}
        </Box>
      </Box>

      <Box flex={5} display="flex" flexDirection="column" gap={2}>
        <Tabs
          value={tabValue}
          onChange={handleChange}
          sx={{
            marginLeft: "35px",
            fontFamily: "outfit",
            backgroundColor: "transparent",
            zIndex: 1,
            "& .MuiTabs-indicator": {
              background: "linear-gradient(90deg, #FDD30F, #FF6B28)",
            },
            "& .MuiTab-root": {
              color: "grey",
              textTransform: "none",
            },
            "& .Mui-selected": {
              color: "transparent",
              backgroundImage: "linear-gradient(90deg, #FDD30F, #FF6B28)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "grey",
            },
          }}
        >
          <Tab label="All" />
          <Tab label="Visited" />
          <Tab label="Not Visited" />
          <Tab label="Rejected" />
          <Tab label="Cancelled" />
        </Tabs>
        <Box sx={styles1.ScrollBar2}>
          {filteredBookings().map((booking, index) => (
            <Card
              key={index}
              sx={{
                borderRadius: 3,
                maxWidth: 500,
                marginBottom: "10px",
                marginLeft: "30px",
              }}
            >
              <CardContent>
                <Box
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Box display="flex" alignItems="center" gap={1}>
                    <Avatar src="/profile.jpg" alt={booking.name} />
                    <Box>
                      <Typography variant="h6" fontWeight="bold">
                        {booking.name}
                      </Typography>
                      <Box display="flex" alignItems="center" gap={0.5}>
                        <PhoneIcon fontSize="small" color="warning" />
                        <Typography variant="body2" color="textSecondary">
                          +91 1234567890
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                  <Box textAlign="right" sx={{
                      border: "1px solid #ddd",
                      borderRadius: 2,
                      bgcolor: "#FFFFFF",
                      marginLeft:'10px',
                      p: 1,
                    }}>
                    <Typography variant="body2">{booking.Amount}</Typography>
                    <Typography
                      variant="body2"
                      color={booking.color}
                      fontWeight="bold"
                    >
                      {booking.status1}
                    </Typography>
                  </Box>
                </Box>
                <Grid container spacing={1} sx={{ mt: 2 }}>
                  <Grid
                    item
                    xs={5.7}
                    display="flex"
                    alignItems="center"
                    sx={{
                      border: "1px solid #ddd",
                      borderRadius: 2,
                      bgcolor: "#FFFFFF",
                      marginLeft:'10px',
                      p: 1,
                    }}
                  >
                    <CalendarTodayIcon fontSize="small" color="warning" />
                    <Typography variant="body2" ml={1}>
                      {booking.date}
                    </Typography>
                  </Grid>
                  <Grid
                    item
                    xs={5.7}
                    display="flex"
                    alignItems="center"
                    sx={{
                      border: "1px solid #ddd",
                      borderRadius: 2,
                      bgcolor: "#FFFFFF",
                      marginLeft:'10px',
                      p: 1,
                    }}
                  >
                    <AccessTimeIcon fontSize="small" color="warning" />
                    <Typography variant="body2" ml={1}>
                      {booking.time}
                    </Typography>
                  </Grid>
                </Grid>
                <Box
                  sx={{
                    border: "1px solid #ddd",
                    mt: 1,
                    p: 1,
                    borderRadius: 2,
                    bgcolor: "#FFFFFF",
                  }} // Light gray border
                >
                  <Typography variant="body2">
                    <strong>Table B:</strong> {booking.tableB}
                  </Typography>
                </Box>

                <Box
                  sx={{
                    border: "1px solid #ddd",
                    mt: 2,
                    p: 1,
                    borderRadius: 2,
                    bgcolor: "#FFFFFF",
                  }}
                >
                  <Typography variant="body2">
                    <strong>Table C:</strong> {booking.tableC}
                  </Typography>
                </Box>
                <Box display="flex" justifyContent="space-between" mt={2}>
                  <Button
                    variant="outlined"
                    color="error"
                    startIcon={<AccessTimeIcon />}
                  >
                    {booking.status}
                  </Button>
                  <Button
                    variant="outlined"
                    color="inherit"
                    startIcon={<FastfoodIcon />}
                  >
                    Food Menu
                  </Button>
                </Box>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Dining;
