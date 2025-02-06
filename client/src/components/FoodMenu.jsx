import React from 'react';
import {
  Box,
  Typography,
  List,
  ListItem,
  Avatar,
  Paper,
  IconButton,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { styles1 } from '../styles/DashBoardStyles';

const FoodMenu = ({ onclose }) => {
    const menuItems = [
      { id: 1, name: "Chicken Pizza", description: "Chicken Pizza", quantity: "01", amount: "₹120", image: "/api/placeholder/48/48" },
      { id: 2, name: "Veg Pizza", description: "Vegetable Pizza", quantity: "01", amount: "₹100", image: "/api/placeholder/48/48" },
      { id: 3, name: "Pasta", description: "Cheese Pasta", quantity: "02", amount: "₹150", image: "/api/placeholder/48/48" },
      { id: 4, name: "Burger", description: "Chicken Burger", quantity: "01", amount: "₹90", image: "/api/placeholder/48/48" },
      { id: 5, name: "Fries", description: "Crispy Fries", quantity: "01", amount: "₹80", image: "/api/placeholder/48/48" },
      { id: 6, name: "Salad", description: "Fresh Salad", quantity: "01", amount: "₹70", image: "/api/placeholder/48/48" },
      { id: 7, name: "Tacos", description: "Mexican Tacos", quantity: "02", amount: "₹110", image: "/api/placeholder/48/48" },
      { id: 8, name: "Momos", description: "Steamed Momos", quantity: "01", amount: "₹90", image: "/api/placeholder/48/48" }
    ];

  return (
    <Paper 
      elevation={1}
      sx={{
        maxWidth: 400,
        mx: '10',
        borderRadius: 1,
        p: 2,
        bgcolor: '#FFFFFF',
        height:'450px',
        position:'relative'
      }}
    >
        <IconButton 
          onClick={onclose} 
          sx={{ position: 'absolute', right: 8,top:8  }}
        >
          <CloseIcon />
        </IconButton>
      <Typography 
        variant="h6" 
        sx={{ 
          mb: 2,
          fontSize:'18px',
          fontFamily:'outfit'
        }}
      >
        Food Menu
      </Typography>
      <Box sx={styles1.ScrollBar}>
      <List sx={{ p: 0 }}>
        {menuItems.map((item) => (
          <ListItem
            key={item.id}
            sx={{
              px: 0,
              py: 1,
              display: 'flex',
              alignItems: 'center',
              gap: 2,
              borderBottom: '1px solid',
              borderColor: 'divider',
              '&:last-child': {
                borderBottom: 'none'
              }
            }}
          >
            <Avatar
              src={item.image}
              alt={item.name}
              sx={{ 
                width: 48, 
                height: 48,
                borderRadius: '50%'
              }}
            />

            <Box sx={{ flex: 1 }}>
              <Typography variant="subtitle1" sx={{ fontSize:'17px',fontFamily:'outfit', }}>
                {item.name}
              </Typography>
              <Typography variant="body2" color="text.secondary" fontFamily='outfit' fontSize ='15px'>
                {item.description}
              </Typography>
            </Box>

            <Box sx={{ textAlign: 'right' }}>
              <Typography 
                variant="body2" 
                color="text.secondary"
                sx={{ mb: 0.5 ,fontFamily:'outfit',}}
              >
                Qty
              </Typography>
              <Typography variant="body1" fontFamily='outfit'>
                {item.quantity}
              </Typography>
            </Box>

            <Box sx={{ textAlign: 'right', minWidth: 70 }}>
              <Typography 
                variant="body2" 
                color="text.secondary"
                sx={{ mb: 0.5 ,fontFamily:'outfit',}}
              >
                Amount
              </Typography>
              <Typography variant="body1" fontFamily='outfit'>
                {item.amount}
              </Typography>
            </Box>
          </ListItem>
        ))}
      </List>
      </Box>
    </Paper>
  );
};

export default FoodMenu;