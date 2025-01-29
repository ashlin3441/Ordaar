import React, { useState } from "react";
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
  Button,
} from "@mui/material";
import { motion } from "framer-motion";

const customerData = [
  {
    id: 1,
    name: "Jhone Smith",
    email: "jhoneSmith@gmail.com",
    phone: "+91 1234567890",
    avatar: "/path-to-avatar.jpg",
  },
  {
    id: 2,
    name: "Jhone Smith",
    email: "jhoneSmith@gmail.com",
    phone: "+91 1234567890",
    avatar: "/path-to-avatar.jpg",
  },
  {
    id: 3,
    name: "Jhone Smith",
    email: "jhoneSmith@gmail.com",
    phone: "+91 1234567890",
    avatar: "/path-to-avatar.jpg",
  },
  {
    id: 4,
    name: "Jhone Smith",
    email: "jhoneSmith@gmail.com",
    phone: "+91 1234567890",
    avatar: "/path-to-avatar.jpg",
  },
  {
    id: 5,
    name: "Jhone Smith",
    email: "jhoneSmith@gmail.com",
    phone: "+91 1234567890",
    avatar: "/path-to-avatar.jpg",
  },
  {
    id: 6,
    name: "Jhone Smith",
    email: "jhoneSmith@gmail.com",
    phone: "+91 1234567890",
    avatar: "/path-to-avatar.jpg",
  },
  {
    id: 7,
    name: "Jhone Smith",
    email: "jhoneSmith@gmail.com",
    phone: "+91 1234567890",
    avatar: "/path-to-avatar.jpg",
  },
  {
    id: 8,
    name: "Jhone Smith",
    email: "jhoneSmith@gmail.com",
    phone: "+91 1234567890",
    avatar: "/path-to-avatar.jpg",
  },
  // Add more customers if needed
];

const Customers = () => {
  const [customers, setCustomers] = useState(customerData);
  const [deletingId, setDeletingId] = useState(null);

  const handleDeleteClick = (id) => {
    setDeletingId(id);
  };

  const handleCancelDelete = () => {
    setDeletingId(null);
  };

  const handleConfirmDelete = (id) => {
    setCustomers(customers.filter((customer) => customer.id !== id));
    setDeletingId(null);
  };

  return (
    <Container maxWidth="xl">
      <Box sx={{ py: 3 }}>
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
          <Typography variant="h5" sx={{ mb: 1, fontWeight: "bold" ,fontFamily:'outfit'}}>
            Customer Details
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
                    style={{ width: 20, height: 20 }}
                  />
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
            sx={{ mb: 2,fontFamily:'outfit' }}
          />

          <List
            sx={{
              maxHeight: "400px",
              overflowY: "auto",
              bgcolor: "transparent",
              borderRadius: 5,
              paddingRight: "25px",
              "&::-webkit-scrollbar": {
                width: "8px", // Width of the scrollbar
              },
              "&::-webkit-scrollbar-track": {
                background: "#E2E2E2", // Background of the scrollbar track
                borderRadius: "10px",
              },
              "&::-webkit-scrollbar-thumb": {
                background: "#BDBDBD", // Color of the scrollbar thumb
                borderRadius: "10px",
              },
              "&::-webkit-scrollbar-thumb:hover": {
                background: "#BDBDBD", // Color of the scrollbar thumb on hover
              },
              fontFamily:'outfit'
            }}
          >
            {customers.map((customer) => (
              <motion.div
                key={customer.id}
                animate={{ x: deletingId === customer.id ? -100 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <ListItem
                  sx={{
                    py: 1,
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                    bgcolor: "#fff",
                    borderRadius: 5,
                    mb: 2,
                    position: "relative",
                  }}
                >
                  <Avatar
                    src={customer.avatar}
                    alt={customer.name}
                    sx={{ width: 48, height: 48 }}
                  />
                  <Box sx={{ flex: 1, display: "flex", alignItems: "center", gap: 2 }}>
                    <Typography variant="subtitle1" sx={{ fontWeight: 500, color: "#333", fontSize: "20px" ,marginRight:'150px',fontFamily:'outfit'}}>
                      {customer.name}
                    </Typography>
                    <img src="phone.png" alt="Phone" style={{ width: 20, height: 20 }} />
                    <Typography variant="body2" sx={{ color: "#666", fontSize: "18px" ,marginRight:'150px',fontFamily:'outfit'}}>
                      {customer.phone}
                    </Typography>
                    <img src="mail_icon.png" alt="Phone" style={{ width: 20, height: 20 }} />
                    <Typography variant="body2" sx={{ color: "#666", fontSize: "18px" ,fontFamily:'outfit'}}>
                      {customer.email}
                    </Typography>
                  </Box>
                  {deletingId === customer.id ? (
                    <Box sx={{ display: "flex", gap: 1 }}>
                      <Button variant="outlined" color="" sx={{opacity:"0.8",fontFamily:'outfit'}}onClick={handleCancelDelete}>
                        Cancel
                      </Button>
                      <Button variant="" color="" onClick={() => handleConfirmDelete(customer.id)}>
                      <img src="delete-icon.png" alt="Delete" style={{ width: 20, height: 20 ,}} />
                      </Button>
                    </Box>
                  ) : (
                    <IconButton onClick={() => handleDeleteClick(customer.id)}>
                      <img src="delete-icon.png" alt="Delete" style={{ width: 20, height: 20 }} />
                    </IconButton>
                  )}
                </ListItem>
              </motion.div>
            ))}
          </List>
        </Paper>
      </Box>
    </Container>
  );
};

export default Customers;
