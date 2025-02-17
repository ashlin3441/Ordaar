import React, { useState } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  CardActions,
  Grid,
  Tabs,
  Tab,
  Typography,
  ToggleButton,
  ToggleButtonGroup,
  TextField,
  Paper,
  ListItem,
  ListItemIcon,
  ListItemText,
  Select,
  MenuItem,
  Chip,
} from "@mui/material";
import { DiningStyles } from "../styles/DiningStyles";
import styles from "../styles/ProfileStyles";
import { styles1 } from "../styles/DashBoardStyles";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { styled } from "@mui/material/styles";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import { ReqStyles } from "../styles/ReqStyles";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
const items = [
  { type: "image", src: "https://source.unsplash.com/800x400/?restaurant" },
  { type: "video", src: "https://source.unsplash.com/800x400/?restaurant" },
];
const documents = [
  {
    type: "image",
    src: "https://source.unsplash.com/800x400/?restaurant",
    name: "GST Certificate",
  },
  {
    type: "image",
    src: "https://source.unsplash.com/800x400/?restaurant",
    name: "Fsaai certificate",
  },
];
const advertisement = [
  { type: "image", src: "https://source.unsplash.com/800x400/?restaurant" },
  { type: "image", src: "https://source.unsplash.com/800x400/?restaurant" },
];
const StyledToggleButtonGroup = styled(ToggleButtonGroup)(({ theme }) => ({
  "& .MuiToggleButton-root": {
    width: "48px",
    height: "32px",
    border: `1px solid ${theme.palette.grey[300]}`,
    "&.Mui-selected": {
      backgroundColor: theme.palette.common.white,
      "&:hover": {
        backgroundColor: theme.palette.grey[50],
      },
    },
  },
}));

const CategoryItem = ({ icon, text }) => (
  <ListItem sx={{ p: 1 }}>
    <ListItemIcon sx={{ minWidth: 40 }}>
      <Box
        component="img"
        src={icon || "/api/placeholder/24/24"}
        alt={text}
        sx={{ width: 24, height: 24 }}
      />
    </ListItemIcon>
    <ListItemText primary={text} />
  </ListItem>
);

const PriceField = ({ label, value }) => (
  <Box sx={{ mb: 2 }}>
    <Typography color="text.secondary" variant="body2" sx={{ mb: 1 }}>
      {label}
    </Typography>
    <TextField
      fullWidth
      value={value}
      InputProps={{
        startAdornment: <Typography sx={{ mr: 1 }}>₹</Typography>,
      }}
      sx={{
        "& .MuiOutlinedInput-root": {
          backgroundColor: "white",
        },
      }}
    />
  </Box>
);

const Requests = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState(0);
  const [foodName, setFoodName] = useState("Chicken Biryani");
  const [size, setSize] = useState("S");

  const handleFoodNameChange = (event) => {
    setFoodName(event.target.value);
  };
  const handleCategoryChange = (event, newValue) => {
    setSelectedCategory(newValue);
  };

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };
  const handleSizeChange = (event, newSize) => {
    if (newSize !== null) {
      setSize(newSize);
    }
  };

  const items = [
    [
      "Swiss Bakery",
      "Akshaya",
      "Swiss Bakery",
      "Food Corner",
      "Tasty Treats",
      "Spice Hub",
      "Dine Divine",
      "Snack Shack",
      "Feast House",
      "Gourmet Spot",
    ],
    [
      "Fresh Mart",
      "Daily Needs",
      "Super Grocery",
      "Green Basket",
      "Organic Store",
      "Local Market",
      "Healthy Harvest",
      "Nature's Best",
      "Home Essentials",
      "Pantry Plus",
    ],
    [
      "Cake House",
      "Sweet Delights",
      "Bakery Fresh",
      "Golden Crust",
      "Choco Bliss",
      "Sugar Rush",
      "Dough & Co",
      "Pastry Palace",
      "Baker's Joy",
      "Flour Power",
    ],
  ];

  return (
    <Box sx={DiningStyles.container}>
      <Grid container>
        <Grid item xs={5.35}>
          <Typography sx={styles.headerText}>Requests</Typography>
          <Tabs
            value={selectedCategory}
            indicatorColor="primary"
            textColor="primary"
            onChange={handleCategoryChange}
          >
            <Tab label="Restaurant" />
            <Tab label="Grocery" />
            <Tab label="Bakery" />
          </Tabs>

          <Box sx={styles1.ScrollBar6}>
            {items[selectedCategory].map((name, index) => (
              <Card key={index} sx={ReqStyles.leftCard}>
                <CardMedia
                  component="img"
                  image="/placeholder.png"
                  alt={name}
                  sx={ReqStyles.Leftcardimg}
                />
                <CardContent>
                  <Typography variant="subtitle1">{name}</Typography>
                  <Typography variant="body2">
                    Edapally - Panvel Hwy, Chelari, Kerala
                  </Typography>
                </CardContent>
              </Card>
            ))}
          </Box>
        </Grid>
        <Grid item xs={6} marginTop={2} marginLeft={4}>
          <Tabs
            value={selectedTab}
            indicatorColor="primary"
            textColor="primary"
            onChange={handleTabChange}
          >
            <Tab label="Food Item" />
            <Tab label="Photo & Video" />
            <Tab label="Documents" />
            <Tab label="Advertisement" />
          </Tabs>
          {selectedTab === 0 && (
            <Box marginTop={2} sx={styles1.ScrollBar6}>
              <Card sx={ReqStyles.card}>
                <CardContent>
                  <Box sx={ReqStyles.CardBox}>
                    <Paper elevation={1} sx={ReqStyles.imageContainer}>
                      <Box
                        component="img"
                        src="/api/placeholder/80/80"
                        alt="Food"
                        sx={ReqStyles.image}
                      />
                    </Paper>
                    <Box sx={{ flexGrow: 1 }}>
                      <Typography color="text.secondary" variant="body2">
                        Food Name
                      </Typography>
                      <Select
                        value={foodName || "Chicken Biriyani"}
                        onChange={handleFoodNameChange}
                        fullWidth
                        endIcon={<KeyboardArrowDownIcon />}
                      >
                        <MenuItem value="Chicken Biriyani">
                          Chicken Biriyani
                        </MenuItem>
                        <MenuItem value="Chicken Fried Rice">
                          Chicken Fried Rice
                        </MenuItem>
                        <MenuItem value="Chicken Noodles">
                          Chicken Noodles
                        </MenuItem>
                      </Select>
                      <Typography
                        color="text.secondary"
                        variant="body2"
                        sx={{ mt: 1, mb: 1 }}
                      >
                        Size
                      </Typography>
                      <StyledToggleButtonGroup
                        value={size}
                        exclusive
                        onChange={handleSizeChange}
                        aria-label="size"
                      >
                        <ToggleButton value="S" aria-label="small">
                          S
                        </ToggleButton>
                        <ToggleButton value="M" aria-label="medium">
                          M
                        </ToggleButton>
                      </StyledToggleButtonGroup>
                    </Box>
                  </Box>
                  <Box style={ReqStyles.buttonGroup}>
                    <Button variant="outlined" sx={ReqStyles.rejectButton}>
                      Reject
                    </Button>
                    <Button variant="contained" sx={ReqStyles.acceptButton}>
                      Accept
                    </Button>
                  </Box>
                </CardContent>
              </Card>
              <Card sx={{ borderRadius: 2, marginTop: "30px" }}>
                <CardContent>
                  <Box
                    sx={{ display: "flex", alignItems: "flex-start", mb: 1 }}
                  >
                    <Paper elevation={1} sx={ReqStyles.imageContainer}>
                      <Box
                        component="img"
                        src="/api/placeholder/80/80"
                        alt="Food"
                        sx={ReqStyles.image}
                      />
                    </Paper>
                    <Box sx={{ flexGrow: 1 }}>
                      <Typography color="text.secondary" variant="body2">
                        Food Name
                      </Typography>
                      <Select
                        value={foodName || "Chicken Biriyani"}
                        onChange={handleFoodNameChange}
                        fullWidth
                        endIcon={
                          <KeyboardArrowDownIcon sx={{ color: "orange" }} />
                        }
                      >
                        <MenuItem value="Chicken Biriyani">
                          Chicken Biriyani
                        </MenuItem>
                        <MenuItem value="Chicken Fried Rice">
                          Chicken Fried Rice
                        </MenuItem>
                        <MenuItem value="Chicken Noodles">
                          Chicken Noodles
                        </MenuItem>
                      </Select>

                      <Typography
                        color="text.secondary"
                        variant="body2"
                        sx={{ mt: 1, mb: 1 }}
                      >
                        Size
                      </Typography>
                      <StyledToggleButtonGroup
                        value={size}
                        exclusive
                        onChange={handleSizeChange}
                        aria-label="size"
                      >
                        <ToggleButton value="S" aria-label="small">
                          S
                        </ToggleButton>
                        <ToggleButton value="M" aria-label="medium">
                          M
                        </ToggleButton>
                      </StyledToggleButtonGroup>
                    </Box>
                  </Box>

                  <Grid container spacing={2} sx={{ mb: 3 }}>
                    <Grid item xs={6}>
                      <Typography
                        color="text.secondary"
                        variant="body2"
                        sx={{ mb: 1 }}
                      >
                        Category
                      </Typography>
                      <Paper sx={{ bgcolor: "white" }}>
                        <CategoryItem
                          icon="/api/placeholder/24/24"
                          text="Nonveg"
                        />
                        <CategoryItem
                          icon="/api/placeholder/24/24"
                          text="Fast Food"
                        />
                      </Paper>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography
                        color="text.secondary"
                        variant="body2"
                        sx={{ mb: 1 }}
                      >
                        Sub Category
                      </Typography>
                      <Paper sx={{ bgcolor: "white" }}>
                        <CategoryItem
                          icon="/api/placeholder/24/24"
                          text="Biriyani"
                        />
                      </Paper>
                    </Grid>
                  </Grid>

                  <Grid container spacing={2} sx={{ mb: 3 }}>
                    <Grid item xs={6}>
                      <PriceField label="₹ S" value="300" />
                    </Grid>
                    <Grid item xs={6}>
                      <PriceField label="₹ M" value="300" />
                    </Grid>
                  </Grid>

                  <Grid container spacing={2}>
                    <Grid item xs={6}>
                      <Typography
                        color="text.secondary"
                        variant="body2"
                        sx={{ mb: 1 }}
                      >
                        GST (%)
                      </Typography>
                      <TextField fullWidth sx={ReqStyles.textField} />
                    </Grid>
                    <Grid item xs={6}>
                      <Typography
                        color="text.secondary"
                        variant="body2"
                        sx={{ mb: 1 }}
                      >
                        Preparation Time
                      </Typography>
                      <TextField fullWidth sx={ReqStyles.textField} />
                    </Grid>
                  </Grid>
                  <Box sx={{ mb: 3 }}>
                    <Typography
                      color="text.secondary"
                      variant="body2"
                      sx={{ mb: 1 }}
                    >
                      Description
                    </Typography>
                    <TextField
                      fullWidth
                      multiline
                      rows={3}
                      value="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since."
                      sx={{ "& .MuiOutlinedInput-root": { borderRadius: 2 } }}
                    />
                  </Box>
                  <Box sx={{ mb: 3 }}>
                    <Chip
                      icon={<RestaurantIcon sx={{ color: "red" }} />}
                      label="Non Veg"
                      variant="outlined"
                      sx={{ borderColor: "red", color: "red" }}
                    />
                  </Box>
                  <Box style={ReqStyles.buttonGroup}>
                    <Button variant="outlined" sx={ReqStyles.rejectButton}>
                      Reject
                    </Button>
                    <Button variant="contained" sx={ReqStyles.acceptButton}>
                      Accept
                    </Button>
                  </Box>
                </CardContent>
              </Card>
            </Box>
          )}
          {selectedTab === 1 && (
            <Box marginTop={2} sx={styles1.ScrollBar6}>
              {items.map((item, index) => (
                <Card
                  key={index}
                  sx={{ width: 500, mb: 2, p: 1, borderRadius: 2 }}
                >
                  <Box sx={{ position: "relative" }}>
                    <CardMedia
                      component="img"
                      height="140"
                      image={item.src}
                      alt="Media"
                    />
                    {item.type === "video" && (
                      <IconButton
                        sx={{
                          position: "absolute",
                          top: "50%",
                          left: "50%",
                          transform: "translate(-50%, -50%)",
                          color: "white",
                          backgroundColor: "rgba(0,0,0,0.5)",
                          "&:hover": { backgroundColor: "rgba(0,0,0,0.7)" },
                        }}
                      >
                        <PlayCircleIcon fontSize="large" />
                      </IconButton>
                    )}
                  </Box>
                  <CardActions sx={{ justifyContent: "space-between", mt: 1 }}>
                    <Button variant="outlined" sx={ReqStyles.rejectButton}>Reject</Button>
                    <Button variant="contained" sx={ReqStyles.acceptButton}>
                      Accept
                    </Button>
                  </CardActions>
                </Card>
              ))}
            </Box>
          )}
          {selectedTab === 2 && (
            <Box marginTop={2} sx={styles1.ScrollBar6}>
              {documents.map((item, index) => (
                <Card
                  key={index}
                  sx={{ width: 500, mb: 2, p: 1, borderRadius: 2 }}
                >
                  <Typography variant="h6" sx={{ mb: 1, textAlign: "center" }}>
                    {item.name}
                  </Typography>
                  <Box sx={{ position: "relative" }}>
                    <CardMedia
                      component="img"
                      height="140"
                      image={item.src}
                      alt="Media"
                    />
                  </Box>
                  <CardActions sx={{ justifyContent: "space-between", mt: 1 }}>
                    <Button variant="outlined" sx={ReqStyles.rejectButton}>Reject</Button>
                    <Button variant="contained" sx={ReqStyles.acceptButton}>
                      Accept
                    </Button>
                  </CardActions>
                </Card>
              ))}
            </Box>
          )}

          {selectedTab === 3 && (
            <Box marginTop={2} sx={styles1.ScrollBar6}>
              {advertisement.map((item, index) => (
                <Card
                  key={index}
                  sx={{ width: 500, mb: 2, p: 1, borderRadius: 2 }}
                >
                  <Box sx={{ position: "relative" }}>
                    <CardMedia
                      component="img"
                      height="140"
                      image={item.src}
                      alt="Media"
                    />
                  </Box>
                  <CardActions sx={{ justifyContent: "space-between", mt: 1 }}>
                    <Button variant="outlined" sx={ReqStyles.rejectButton}>Reject</Button>
                    <Button variant="contained" sx={ReqStyles.acceptButton}>
                      Accept
                    </Button>
                  </CardActions>
                </Card>
              ))}
            </Box>
          )}
        </Grid>
      </Grid>
    </Box>
  );
};

export default Requests;
