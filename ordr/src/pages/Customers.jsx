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
  // ... more customer data
];

const Customers = () => {
  return (
    <Container maxWidth="xl">
      <Box sx={{ py: 3 }}>
        {/* Global Search Bar */}
        <TextField
          fullWidth
          variant="outlined"
          placeholder="Search foods, restaurant by name"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon sx={{ color: "text.secondary" }} />
              </InputAdornment>
            ),
            sx: {
              bgcolor: "background.paper",
              borderRadius: 2,
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: "transparent",
              },
              "&:hover .MuiOutlinedInput-notchedOutline": {
                borderColor: "transparent",
              },
              "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                borderColor: "primary.main",
              },
            },
          }}
        />

        {/* Customer Details Section */}
        <Paper elevation={0} sx={{ mt: 0, p: 1, borderRadius: 1 }}>
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
                borderRadius: 2,
                "& .MuiOutlinedInput-notchedOutline": {
                  borderColor: "divider",
                },
                "&:hover .MuiOutlinedInput-notchedOutline": {
                  borderColor: "transparent",
                },
                "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                  borderColor: "primary.main",
                },
              },
            }}
            sx={{ mb: 1 }}
          />

          {/* Customer List */}
          <List
            sx={{
              bgcolor: "background.paper",
              borderRadius: 2,
              "& .MuiListItem-root": {
                borderBottom: "1px solid",
                borderColor: "divider",
                "&:last-child": {
                  borderBottom: "none",
                },
              },
            }}
          >
            {customerData.map((customer) => (
              <ListItem
                key={customer.id}
                sx={{
                  py: 2,
                  display: "flex",
                  alignItems: "center",
                  gap: 2,
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
                  sx={{ flex: 1, mx: 3, alignItems: "center" }}
                >
                  {/* Name */}
                  <Grid2 item xs={3}>
                    <Typography
                      variant="subtitle1"
                      sx={{
                        fontWeight: 500,
                        color: "#333",
                        marginRight:'160px',
                        fontSize:'20px'
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
                        gap: 1,

                      }}
                    >
                      <PhoneIcon sx={{ color: "#FFA726", fontSize: 20 }} />
                      <Typography
                        variant="body2"
                        sx={{
                          color: "#666",
                          fontSize: "0.9rem",
                          marginRight:'120px',
                          fontSize:'20px'
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
                          fontSize: "0.9rem",
                          fontSize:'20px'
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
