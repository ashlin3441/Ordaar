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
  Dialog,
  DialogContent,
} from "@mui/material";
import { styles1 } from "../styles/DashBoardStyles";
import styles from "../styles/ProfileStyles";
import { DiningStyles } from "../styles/DiningStyles";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import PhoneIcon from "@mui/icons-material/Phone";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import StarIcon from "@mui/icons-material/Star";
import FoodMenu from "../components/FoodMenu";

const Dining = () => {
  const [tabValue, setTabValue] = useState(0);
  const [isFoodMenuOpen, setFoodMenuOpen] = useState(false);
  const handleChange = (event, newValue) => setTabValue(newValue);

  const handleOpenFoodMenu = () => {
    setFoodMenuOpen(true);
  };

  const handleCloseFoodMenu = () => {
    setFoodMenuOpen(false);
  };
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
    if (tabValue === 0) return bookings;
    if (tabValue === 1) return bookings.filter((b) => b.status === "Visited");
    if (tabValue === 2)
      return bookings.filter((b) => b.status === "Not Visited");
    if (tabValue === 3)
      return bookings.filter((b) => b.status === "Restaurant Rejected");
    if (tabValue === 4)
      return bookings.filter((b) => b.status === "Customer Cancelled");
  };

  return (
    <Box sx={DiningStyles.container}>
      <Box sx={DiningStyles.leftPanel}>
        <Typography sx={styles.headerText}>Dining</Typography>
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
        <Box sx={styles1.ScrollBar1}>
          {[...Array(10)].map((_, index) => (
            <Card key={index} sx={DiningStyles.restaurantCard}>
              <CardMedia
                component="img"
                sx={DiningStyles.cardMedia}
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
              <Box sx={DiningStyles.ratingBox}>
                <StarIcon fontSize="small" color="warning" />
                <Typography variant="body2" fontWeight="bold">
                  5.0
                </Typography>
              </Box>
            </Card>
          ))}
        </Box>
      </Box>

      <Box sx={DiningStyles.rightPanel}>
        <Tabs
          value={tabValue}
          onChange={handleChange}
          sx={DiningStyles.tabStyles}
        >
          <Tab label="All" />
          <Tab label="Visited" />
          <Tab label="Not Visited" />
          <Tab label="Rejected" />
          <Tab label="Cancelled" />
        </Tabs>
        <Box sx={styles1.ScrollBar2}>
          {filteredBookings().map((booking, index) => (
            <Card key={index} sx={DiningStyles.bookingCard}>
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
                  <Box textAlign="right" sx={DiningStyles.bookingInfoBox}>
                    <Typography variant="body2">{booking.Amount}</Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: booking.status1 === "Recieved" ? "green" : "red",
                      }}
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
                    sx={DiningStyles.bookingInfoBox}
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
                    sx={DiningStyles.bookingInfoBox}
                  >
                    <AccessTimeIcon fontSize="small" color="warning" />
                    <Typography variant="body2" ml={1}>
                      {booking.time}
                    </Typography>
                  </Grid>
                </Grid>
                <Box sx={DiningStyles.BookingTime}>
                  <Typography variant="body2">
                    <strong>Table B:</strong> {booking.tableB}
                  </Typography>
                </Box>

                <Box sx={DiningStyles.BookingTime}>
                  <Typography variant="body2">
                    <strong>Table C:</strong> {booking.tableC}
                  </Typography>
                </Box>
                <Box display="flex" justifyContent="space-between" mt={2}>
                  <Button
                    variant="contained"
                    sx={DiningStyles.bookingButton(booking.status)}
                    startIcon={<AccessTimeIcon />}
                  >
                    {booking.status}
                  </Button>

                  <Button
                    variant="outlined"
                    color="inherit"
                    startIcon={<FastfoodIcon />}
                    onClick={handleOpenFoodMenu}
                  >
                    Food Menu
                  </Button>
                  <Dialog
                    open={isFoodMenuOpen}
                    onclose={handleCloseFoodMenu}
                    sx={DiningStyles.dialogStyles}
                    BackdropProps={{
                      invisible: true,
                    }}
                  >
                    <DialogContent>
                      <FoodMenu onclose={handleCloseFoodMenu} />
                    </DialogContent>
                  </Dialog>
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
