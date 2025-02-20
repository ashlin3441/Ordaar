import React, { useState } from 'react';
import {
  Box,
  Card,
  CardContent,
  Tab,
  Tabs,
  TextField,
  InputAdornment,
  Typography,
  Button,
  Paper,
  Divider,
  IconButton
} from '@mui/material';
import {
  Search,
  CalendarToday,
  ChevronRight,
  Add as AddIcon,
  Remove as RemoveIcon,
  LocationOn
} from '@mui/icons-material';

const PaymentsPage = () => {
  const [activeTab, setActiveTab] = useState('restaurant');
  const [paymentStatus, setPaymentStatus] = useState('done');

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

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
    >      {/* Header Section */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
        <Typography variant="h5">Payments</Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <TextField
            size="small"
            placeholder="Search foods, restaurant by name"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Search />
                </InputAdornment>
              ),
            }}
            sx={{ width: 300 }}
          />
          <Button
            endIcon={<ChevronRight />}
            sx={{ color: 'orange' }}
          >
            Manage
          </Button>
          <CalendarToday sx={{ color: 'text.secondary' }} />
          <Typography color="text.secondary">07-05-2024</Typography>
        </Box>
      </Box>

      {/* Tabs Section */}
      <Tabs
        value={activeTab}
        onChange={handleTabChange}
        sx={{
          mb: 3,
          '& .MuiTab-root': { textTransform: 'none' },
          '& .Mui-selected': { color: 'orange' },
          '& .MuiTabs-indicator': { backgroundColor: 'orange' }
        }}
      >
        <Tab label="Restaurant" value="restaurant" />
        <Tab label="Grocery" value="grocery" />
        <Tab label="Bakery" value="bakery" />
      </Tabs>

      <Box sx={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 4 }}>
        {/* Left Section */}
        <Box>
          <TextField
            fullWidth
            size="small"
            placeholder="Search restaurant by name"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Search />
                </InputAdornment>
              ),
            }}
            sx={{ mb: 3 }}
          />

          {/* Payment Status Toggle */}
          <Box sx={{ display: 'flex', gap: 2, mb: 3 }}>
            <Button
              variant={paymentStatus === 'pending' ? 'contained' : 'outlined'}
              sx={{
                borderRadius: 5,
                backgroundColor: paymentStatus === 'pending' ? 'grey.200' : 'transparent',
                color: 'text.primary',
                '&:hover': {
                  backgroundColor: paymentStatus === 'pending' ? 'grey.300' : 'grey.100'
                }
              }}
              onClick={() => setPaymentStatus('pending')}
            >
              <Box
                component="span"
                sx={{
                  width: 12,
                  height: 12,
                  borderRadius: '50%',
                  border: '2px solid',
                  borderColor: 'grey.400',
                  mr: 1
                }}
              />
              Payment Pending
            </Button>
            <Button
              variant={paymentStatus === 'done' ? 'contained' : 'outlined'}
              sx={{
                borderRadius: 5,
                backgroundColor: paymentStatus === 'done' ? 'orange.100' : 'transparent',
                color: 'text.primary',
                '&:hover': {
                  backgroundColor: paymentStatus === 'done' ? 'orange.200' : 'orange.50'
                }
              }}
              onClick={() => setPaymentStatus('done')}
            >
              <Box
                component="span"
                sx={{
                  width: 12,
                  height: 12,
                  borderRadius: '50%',
                  backgroundColor: paymentStatus === 'done' ? 'orange' : 'transparent',
                  border: '2px solid',
                  borderColor: paymentStatus === 'done' ? 'orange' : 'grey.400',
                  mr: 1
                }}
              />
              Payment Done
            </Button>
          </Box>

          {/* Restaurant Cards */}
          {[1, 2, 3, 4].map((item) => (
            <Card key={item} sx={{ mb: 2 }}>
              <CardContent sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <Box
                    component="img"
                    src="/restaurant-placeholder.jpg"
                    sx={{ width: 48, height: 48, borderRadius: '50%', backgroundColor: 'grey.200' }}
                  />
                  <Box>
                    <Typography variant="subtitle1">Rose Garden Rstuagrant</Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ display: 'flex', alignItems: 'center' }}>
                      <LocationOn sx={{ fontSize: 16, mr: 0.5 }} />
                      EranaKulam, Kochi
                    </Typography>
                  </Box>
                </Box>
                <Box sx={{ textAlign: 'right' }}>
                  <Typography variant="body2" color="text.secondary">
                    {item === 2 ? 'Amount paid' : 'Payable amount'}
                  </Typography>
                  <Typography variant="subtitle1">₹480.00</Typography>
                </Box>
              </CardContent>
            </Card>
          ))}
        </Box>

        {/* Right Section */}
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
          {/* Summary Card */}
          <Card>
            <CardContent>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                {[
                  { label: 'Total Sales', value: '2500' },
                  { label: 'Total Online Payment', value: '200' },
                  { label: 'Total Cash On Delivery', value: '200' },
                  { label: 'Total Refund (Less)', value: '200' }
                ].map((item, index) => (
                  <Box key={index} sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Typography>{item.label}</Typography>
                    <Typography>{item.value}</Typography>
                  </Box>
                ))}
              </Box>
            </CardContent>
          </Card>

          {/* Rates Card */}
          <Card>
            <CardContent>
              <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 2, mb: 3 }}>
                {['Commission', 'Tax', 'Platform Fee'].map((label) => (
                  <Box key={label}>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                      {label}
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <IconButton size="small" sx={{ border: 1, borderColor: 'grey.300' }}>
                        <RemoveIcon fontSize="small" />
                      </IconButton>
                      <Typography>20%</Typography>
                      <IconButton size="small" sx={{ border: 1, borderColor: 'grey.300' }}>
                        <AddIcon fontSize="small" />
                      </IconButton>
                    </Box>
                  </Box>
                ))}
              </Box>

              <Divider sx={{ mb: 2 }} />

              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                {[
                  { label: 'Total Sales', value: '₹440.00' },
                  { label: 'Restaurant commission (3%)', value: '₹100' },
                  { label: 'Cash on delivery (Less)', value: '₹20.00' },
                  { label: 'Refund (Less)', value: '₹20.00' },
                  { label: 'Tax (Less)', value: '₹20.00' },
                  { label: 'Platform fee (Less)', value: '₹20.00' }
                ].map((item, index) => (
                  <Box key={index} sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Typography>{item.label}</Typography>
                    <Typography>{item.value}</Typography>
                  </Box>
                ))}

                <Divider sx={{ my: 1 }} />
                
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                  <Typography fontWeight="medium">Amount paid</Typography>
                  <Typography fontWeight="medium">₹480.00</Typography>
                </Box>
              </Box>
            </CardContent>
          </Card>

          <Button
            variant="outlined"
            endIcon={<ChevronRight />}
            fullWidth
            sx={{ 
              justifyContent: 'space-between',
              py: 1.5,
              px: 3,
              color: 'text.primary',
              borderColor: 'grey.300'
            }}
          >
            View Orders
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default PaymentsPage;