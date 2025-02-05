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
import { customerData } from "../components/CustomerData";
import styles from "../styles/ProfileStyles";
import { styles1 } from "../styles/DashBoardStyles";
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
      <Box sx={styles.py}>
        <Paper elevation={0} sx={styles1.paper}>
          <Typography variant="h5" sx={styles.headerText}>
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
                    style={styles.WidthHeight20}
                  />
                </InputAdornment>
              ),
              sx: styles1.SearchBar,
            }}
            sx={styles1.searchinput}
          />
          <List sx={styles1.ScrollBar}>
            {customers.map((customer) => (
              <motion.div
                key={customer.id}
                animate={{ x: deletingId === customer.id ? -100 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <ListItem sx={styles1.ListDelete}>
                  <Avatar
                    src={customer.avatar}
                    alt={customer.name}
                    sx={styles1.WidthHeight48}
                  />
                  <Box sx={styles1.DetailsBox}>
                    <Typography
                      variant="subtitle1"
                      sx={styles1.CustomerSubtitle}
                    >
                      {customer.name}
                    </Typography>
                    <img
                      src="phone.png"
                      alt="Phone"
                      style={styles.WidthHeight20}
                    />
                    <Typography variant="body2" sx={styles1.CustomerPhone}>
                      {customer.phone}
                    </Typography>
                    <img
                      src="mail_icon.png"
                      alt="Phone"
                      style={styles.WidthHeight20}
                    />
                    <Typography variant="body2" sx={styles1.CustomerEmail}>
                      {customer.email}
                    </Typography>
                  </Box>
                  {deletingId === customer.id ? (
                    <Box sx={styles1.CancelMove}>
                      <Button
                        variant="outlined"
                        sx={styles1.CancelButton}
                        onClick={handleCancelDelete}
                      >
                        Cancel
                      </Button>
                      <Button onClick={() => handleConfirmDelete(customer.id)}>
                        <img
                          src="delete-icon.png"
                          alt="Delete"
                          style={styles.WidthHeight20}
                        />
                      </Button>
                    </Box>
                  ) : (
                    <IconButton onClick={() => handleDeleteClick(customer.id)}>
                      <img
                        src="delete-icon.png"
                        alt="Delete"
                        style={styles.WidthHeight20}
                      />
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
