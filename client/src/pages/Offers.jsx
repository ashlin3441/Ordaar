import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  Card,
  CardContent,
  CardMedia,
  TextField,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  InputAdornment,
} from "@mui/material";
import { Search, CurrencyRupee, Percent } from "@mui/icons-material";
import { DiningStyles } from "../styles/DiningStyles";
import { styles1 } from "../styles/DashBoardStyles";
import AddIcon from "@mui/icons-material/Add";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { ReqStyles } from "../styles/ReqStyles";
const offers = [
  {
    id: 1,
    title: "Get Up to 20% Off",
    item: "Chicken Burgers",
    expiry: "March 20, 2024",
    img: "burger.jpg",
  },
  {
    id: 2,
    title: "Get Up to 10% Off",
    item: "Kerala Parota",
    expiry: "March 20, 2024",
    img: "parota.jpg",
  },
  {
    id: 3,
    title: "Get Up to 20% Off",
    item: "Chicken Burgers",
    expiry: "March 20, 2024",
    img: "burger.jpg",
  },
  {
    id: 4,
    title: "Get Up to 10% Off",
    item: "Kerala Parota",
    expiry: "March 20, 2024",
    img: "parota.jpg",
  },
  {
    id: 5,
    title: "Get Up to 20% Off",
    item: "Chicken Burgers",
    expiry: "March 20, 2024",
    img: "burger.jpg",
  },
];
const foodOptions = [
  "Biriyani",
  "Chicken Biriyani",
  "Mutton Biriyani",
  "Paneer Tikka",
];
const Offers = () => {
  const [foodName, setFoodName] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [offerAmount, setOfferAmount] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [isAddingOffer, setIsAddingOffer] = useState(false);
  const [editingOffer, setEditingOffer] = useState(null);
  const filteredFoods = foodOptions.filter((food) =>
    food.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const handleAddOffer = () => {
    setIsAddingOffer(true);
    setEditingOffer(null); // Reset editing state
    setFoodName("");
    setOfferAmount("");
    setExpiryDate("");
  };
  const handleEditOffer = (offer) => {
    setIsAddingOffer(false);
    setEditingOffer(offer);
    setFoodName(offer.item);
    setOfferAmount(offer.title.match(/\d+/)?.[0] || ""); // Extract number from title
    setExpiryDate(offer.expiry);
  };
  
  return (
    <Box sx={DiningStyles.container}>
      <Box flex={1}>
        <Typography sx={styles1.headerText}>Offers</Typography>
        <Box display="flex" gap={3}>
          <Box flex={1} sx={styles1.ScrollBar7}>
            <Button
              fullWidth
              variant="outlined"
              startIcon={<AddIcon />}
              endIcon={<ChevronRightIcon />}
              sx={{
                justifyContent: "space-between",
                padding: 2,
                color: "text.primary",
                mb: 2,
              }}
              onClick={handleAddOffer}
            >
              Add Offer
            </Button>
            {offers.map((offer) => (
              <Card
                key={offer.id}
                sx={{ display: "flex", mb: 2, borderRadius: 2 }}
                onClick={() => handleEditOffer(offer)}
              >
                <CardMedia
                  component="img"
                  image={offer.img}
                  alt={offer.item}
                  sx={{ width: 80, height: 80, p: 1 }}
                />
                <CardContent>
                  <Typography variant="subtitle1" fontWeight="bold">
                    {offer.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {offer.item}
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    Offer Expires: {offer.expiry}
                  </Typography>
                </CardContent>
              </Card>
            ))}
          </Box>
          <Box width={500} sx={styles1.ScrollBar7}>
            <Box display="flex" justifyContent="center" mb={2}>
              <CardMedia
                component="img"
                image="burger.jpg"
                alt="Selected Food"
                sx={{ width: 100, height: 100, borderRadius: "50%" }}
              />
            </Box>
            <FormControl fullWidth>
              <InputLabel>Select Supplier</InputLabel>
              <Select>
                <MenuItem value={1}>Supplier 1</MenuItem>
                <MenuItem value={2}>Supplier 2</MenuItem>
              </Select>
            </FormControl>
            <Box
              mt={2}
              sx={{ border: "1px solid #ddd", borderRadius: 2, p: 1 }}
            >
              <Typography
                sx={{ fontSize: 14, color: "#555", fontWeight: 500, mb: 1 }}
              >
                Food Name
              </Typography>
              <TextField
                fullWidth
                value={foodName}
                placeholder="Select Food"
                onClick={() => setShowSearch(true)}
                InputProps={{
                  readOnly: true,
                  endAdornment: (
                    <InputAdornment position="end">
                      <Search sx={{ color: "#888", cursor: "pointer" }} />
                    </InputAdornment>
                  ),
                }}
                sx={{
                  border: "1px solid #ddd",
                  borderRadius: 1,
                  p: 0,
                  cursor: "pointer",
                  background: "#fff",
                }}
              />
              {showSearch && (
                <Box
                  mt={1}
                  sx={{
                    border: "1px solid #ddd",
                    borderRadius: 1,
                    p: 0,
                    background: "#fff",
                  }}
                >
                  <Box
                    display="flex"
                    alignItems="center"
                    px={1}
                    sx={{ borderBottom: "1px solid #ddd" }}
                  >
                    <Search sx={{ color: "#888", mr: 1 }} />
                    <TextField
                      variant="standard"
                      placeholder="Search Food..."
                      fullWidth
                      autoFocus
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      InputProps={{ disableUnderline: true }}
                    />
                  </Box>
                  <Box sx={{ maxHeight: 150, overflowY: "auto" }}>
                    {filteredFoods.map((food, index) => (
                      <Box
                        key={index}
                        p={1}
                        sx={{
                          borderBottom: "1px solid #eee",
                          cursor: "pointer",
                          "&:hover": { bgcolor: "#f9f9f9" },
                        }}
                        onClick={() => {
                          setFoodName(food);
                          setShowSearch(false);
                          setSearchTerm("");
                        }}
                      >
                        {food}
                      </Box>
                    ))}
                  </Box>
                </Box>
              )}
            </Box>

            <Box>
              <Typography
                sx={{ fontSize: 14, color: "#555", fontWeight: 500, mt: 2 }}
              >
                Offer Amount
              </Typography>
              <TextField
                fullWidth
                variant="standard"
                value={offerAmount}
                onChange={(e) => setOfferAmount(e.target.value)}
                placeholder="Enter Amount"
                type="number"
                InputProps={{
                  disableUnderline: true,
                  endAdornment: (
                    <InputAdornment position="end">
                      <Button
                        sx={{
                          minWidth: 40,
                          bgcolor: "#FFA500",
                          color: "#fff",
                          borderRadius: 2,
                        }}
                      >
                        <CurrencyRupee />
                        <Percent />
                      </Button>
                    </InputAdornment>
                  ),
                }}
                sx={{
                  p: 1,
                  border: "1px solid #ddd",
                  borderRadius: 1,
                  mt: 1,
                }}
              />
            </Box>
            <Box>
              <Typography
                sx={{ fontSize: 14, color: "#555", fontWeight: 500, mt: 2 }}
              >
                Expiry Date
              </Typography>
              <TextField
                type="date"
                value={expiryDate}
                onChange={(e) => setExpiryDate(e.target.value)}
                fullWidth
                variant="standard"
                sx={{
                  mt: 1,
                  fontWeight: "bold",
                  p: 1,
                  border: "1px solid #ddd",
                  borderRadius: 1,
                }}
                InputLabelProps={{ shrink: true }}
              />
            </Box>
            <TextField
              fullWidth
              label="Terms & Conditions"
              multiline
              rows={3}
              variant="filled"
              InputProps={{ disableUnderline: true }}
              sx={{ mt: 2, bgcolor: "#f9f9f9", borderRadius: 1 }}
            />
            <TextField
              fullWidth
              label="Add Description"
              multiline
              rows={2}
              variant="filled"
              InputProps={{ disableUnderline: true }}
              sx={{ mt: 2, bgcolor: "#f9f9f9", borderRadius: 1,mb:2 }}
            />
            <Box style={ReqStyles.buttonGroup}>
              {!isAddingOffer && editingOffer && <Button variant="outlined" sx={ReqStyles.rejectButton}>Remove</Button>}
              <Button variant="contained" sx={ReqStyles.acceptButton}>Save</Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Offers;
