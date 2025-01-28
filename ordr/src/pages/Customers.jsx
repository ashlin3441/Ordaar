import React from "react";
import {
  Box,
  TextField,
  Typography,
  List,
  ListItem,
  Avatar,
  IconButton,
  InputAdornment,
  Paper,
  Container,
  Grid2,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";

const customerData = [
  {
    id: 1,
    name: "Jhone Smith",
    email: "jhoneSmith@gmail.com",
    phone: "+91 1234567890",
    avatar: "/path-to-avatar.jpg",
  },
  {
    id: 1,
    name: "Jhone Smith",
    email: "jhoneSmith@gmail.com",
    phone: "+91 1234567890",
    avatar: "/path-to-avatar.jpg",
  },
  {
    id: 1,
    name: "Jhone Smith",
    email: "jhoneSmith@gmail.com",
    phone: "+91 1234567890",
    avatar: "/path-to-avatar.jpg",
  },
  {
    id: 1,
    name: "Jhone Smith",
    email: "jhoneSmith@gmail.com",
    phone: "+91 1234567890",
    avatar: "/path-to-avatar.jpg",
  },
  {
    id: 1,
    name: "Jhone Smith",
    email: "jhoneSmith@gmail.com",
    phone: "+91 1234567890",
    avatar: "/path-to-avatar.jpg",
  },
  {
    id: 1,
    name: "Jhone Smith",
    email: "jhoneSmith@gmail.com",
    phone: "+91 1234567890",
    avatar: "/path-to-avatar.jpg",
  },
  {
    id: 1,
    name: "Jhone Smith",
    email: "jhoneSmith@gmail.com",
    phone: "+91 1234567890",
    avatar: "/path-to-avatar.jpg",
  },
];

const Customers = () => {
  return (
    <Container maxWidth="xl">
      <Box sx={{ py: 3 }}>
        {/* Customer Details Section */}
        <Paper
          elevation={0}
          sx={{
            mt: 0,
            p: 1,
            borderRadius: 1,
            background: "transparent",
            marginTop: "70px",
          }}
        >
          <Typography variant="h5" sx={{ mb: 1, fontWeight: "bold" }}>
            Customer Details
          </Typography>
          
          {/* Category Search Bar */}
          <TextField
            fullWidth
            variant="outlined"
            placeholder="Search foods category"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon sx={{ color: "text.secondary" }} />
                </InputAdornment>
              ),
              sx: {
                bgcolor: "background.paper",
                borderRadius: 4,
                "& .MuiOutlinedInput-notchedOutline": {
                  borderColor: "divider",
                },
                "&:hover .MuiOutlinedInput-notchedOutline": {
                  borderColor: "transparent",
                },
                "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                  borderColor: "orange",
              },
              },
            }}
            sx={{ mb: 1 }}
          />

          {/* Customer List */}
          <List
            sx={{
              maxHeight: "400px", // Set a maximum height for the scrollable area  
              overflowY: "auto", // Enable vertical scrolling  
              bgcolor: "transparent",
              borderRadius:5,
              paddingRight:"25px",
              "&::-webkit-scrollbar": {  
                width: '8px', // Width of the scrollbar  
              },  
              "&::-webkit-scrollbar-track": {  
                background: '#E2E2E2', // Background of the scrollbar track  
                borderRadius: '10px',  
              },  
              "&::-webkit-scrollbar-thumb": {  
                background: '#BDBDBD', // Color of the scrollbar thumb  
                borderRadius: '10px',  
              },  
              "&::-webkit-scrollbar-thumb:hover": {  
                background: '#BDBDBD', // Color of the scrollbar thumb on hover  
              }, 
            }}
          >
            {customerData.map((customer) => (
              <ListItem
                key={customer.id}
                sx={{
                  py: 1, // Added more vertical padding for better spacing
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                  bgcolor: "#fff", // Set a white background for each item
                  borderRadius: 5, // Slightly improve the roundness
                  mb: 2, // Margin bottom to separate each item
                  
                }}
              >
                {/* Customer Avatar */}
                <Avatar
                  src={customer.avatar}
                  alt={customer.name}
                  sx={{ width: 48, height: 48 }}
                />

                {/* Grid Container for Aligned Content */}
                <Grid2
                  container
                  spacing={2}
                  sx={{ flex: 1, alignItems: "center" }}
                >
                  {/* Name */}
                  <Grid2 item xs={3}>
                    <Typography
                      variant="subtitle1"
                      sx={{
                        fontWeight: 500,
                        color: "#333",
                        fontSize: "20px",
                        marginRight:'120px'
                      }}
                    >
                      {customer.name}
                    </Typography>
                  </Grid2>

                  {/* Phone */}
                  <Grid2 item xs={4}>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        marginRight:'120px',
                        gap: 1,
                      }}
                    >
                      <PhoneIcon sx={{ color: "#FFA726", fontSize: 20 }} />
                      <Typography
                        variant="body2"
                        sx={{
                          color: "#666",
                          fontSize: "20px",
                        }}
                      >
                        {customer.phone}
                      </Typography>
                    </Box>
                  </Grid2>

                  {/* Email */}
                  <Grid2 item xs={4}>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 1,
                      }}
                    >
                      <EmailIcon sx={{ color: "#FFA726", fontSize: 20 }} />
                      <Typography
                        variant="body2"
                        sx={{
                          color: "#666",
                          fontSize: "20px",
                        }}
                      >
                        {customer.email}
                      </Typography>
                    </Box>
                  </Grid2>
                </Grid2>
                {/* Delete Button */}
                <IconButton
                  edge="end"
                  sx={{
                    color: "error.light",
                    "&:hover": {
                      bgcolor: "error.lighter",
                    },
                  }}
                >
                  <DeleteOutlineIcon />
                </IconButton>
              </ListItem>
            ))}
          </List>
        </Paper>
      </Box>
    </Container>
  );
};

export default Customers;
