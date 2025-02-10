import React, { useState } from "react";
import {
  Box,
  Typography,
  Tabs,
  Tab,
  Card,
  CardContent,
  Avatar,
  IconButton,
  InputBase,
  Button,
} from "@mui/material";
import { Search, Phone, Chat, Send, Image } from "@mui/icons-material";
import styles from "../styles/ProfileStyles";
import { styles1 } from "../styles/DashBoardStyles";
import {useNavigate} from "react-router-dom";

const Faq = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedContact, setSelectedContact] = useState(null); // Track selected contact
  const navigate = useNavigate();
  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  const handleSendMessage = () => {
    if (inputText.trim() || selectedImage) {
      setMessages([
        ...messages,
        {
          message: inputText,
          image: selectedImage,
          type: "sent",
          time: "12:05",
        },
      ]);
      setInputText("");
      setSelectedImage(null);
    }
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedImage(URL.createObjectURL(file));
    }
  };

  const handleChatClick = (contact) => {
    setSelectedContact(contact); // Open chat with the selected contact
  };

  const supportData = [
    {
      id: "6546842131",
      name: "Jhone Smith",
      location: "Ernakulam, Kochi",
      avatar: "/profile1.jpg",
      category: "Customers",
      date: "2025-02-10",
    },
    {
      id: "Hotel Palace",
      name: "Hotel Palace",
      location: "Ernakulam, Kochi",
      avatar: "/hotel.jpg",
      category: "Restaurant",
      date: "2025-02-08",
    },
    {
      id: "SuperMart",
      name: "SuperMart",
      location: "Ernakulam, Kochi",
      avatar: "/grocery.jpg",
      category: "Grocery",
      date: "2025-02-07",
    },
    {
      id: "Sweet Bakes",
      name: "Sweet Bakes",
      location: "Ernakulam, Kochi",
      avatar: "/bakery.jpg",
      category: "Bakery",
      date: "2025-02-06",
    },
  ];

  const filteredData =
    selectedTab === 0
      ? supportData
      : supportData.filter(
          (item) =>
            item.category ===
            ["", "Restaurant", "Grocery", "Bakery", "Customers"][selectedTab]
        );

  return (
    <Box
      p={2}
      marginTop={8}
      display="flex"
      gap={3}
      sx={{ height: "100vh", overflow: "hidden" }}
    >
      {/* Left Panel - Contacts */}
      <Box flex={3} flexDirection="column" gap={2}>
        <Typography variant="h5" sx={styles.headerText}>
          Help & Support
        </Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            backgroundColor: "#F5F5F5",
            borderRadius: "8px",
            padding: "6px 12px",
            marginBottom: "16px",
          }}
        >
          <Search sx={{ color: "#FF8A00", marginRight: "8px" }} />
          <InputBase placeholder="Search" sx={{ flexGrow: 1 }} />
        </Box>
        <Tabs
          value={selectedTab}
          onChange={handleTabChange}
          sx={{ marginBottom: "16px" }}
        >
          <Tab label="All" />
          <Tab label="Restaurant" />
          <Tab label="Grocery" />
          <Tab label="Bakery" />
          <Tab label="Customers" />
        </Tabs>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            marginTop: 2,
          }}
        >
          <Button sx={styles.donationButton} onClick={() => navigate("/ManageFaq")}>Manage FAQ</Button>
        </Box>
        <Box sx={styles1.ScrollBar4}>
          {filteredData.map((item, index) => (
            <Card
              key={index}
              sx={{
                marginBottom: "10px",
                borderRadius: "12px",
                boxShadow: "none",
                border: "1px solid #E5E5E5",
              }}
            >
              <CardContent
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                  <Avatar src={item.avatar} sx={{ width: 40, height: 40 }} />
                  <Box>
                    <Typography sx={{ fontWeight: "bold" }}>
                      {item.name}
                    </Typography>
                    <Typography sx={{ color: "#777", fontSize: "14px" }}>
                      {item.location}
                    </Typography>
                    <Typography sx={{ color: "#aaa", fontSize: "12px" }}>
                      Added on: {item.date}
                    </Typography>
                  </Box>
                </Box>
                <Box sx={{ display: "flex", gap: 1 }}>
                  <IconButton sx={{ color: "#FF8A00" }}>
                    <Phone />
                  </IconButton>
                  <IconButton
                    sx={{ color: "#FF8A00" }}
                    onClick={() => handleChatClick(item)}
                  >
                    <Chat />
                  </IconButton>
                </Box>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Box>

      {/* Right Panel - Chat Box */}
      {selectedContact && (
        <Box
          sx={{
            flexGrow: 1,
            display: "flex",
            flexDirection: "column",
            height: "84%",
            border: "1px solid #EBEBEB",
            borderRadius: 5,
            background: "white",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 2,
              paddingBottom: "8px",
              marginLeft: "20px",
              marginTop: "20px",
            }}
          >
            <Avatar
              src={selectedContact.avatar}
              sx={{ width: 40, height: 40 }}
            />
            <Box>
              <Typography sx={{ fontWeight: "bold" }}>
                {selectedContact.name}
              </Typography>
              <Typography sx={{ color: "#777", fontSize: "14px" }}>
                {selectedContact.location}
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              ...styles1.ScrollBar,
              flexGrow: 1,
              paddingBottom: "90px",
              paddingLeft: "20px",
            }}
          >
            {messages.map((msg, index) => (
              <Box
                key={index}
                sx={{
                  display: "flex",
                  justifyContent:
                    msg.type === "sent" ? "flex-end" : "flex-start",
                  marginBottom: "3px",
                }}
              >
                <Box
                  sx={{
                    backgroundColor: msg.type === "sent" ? "#222" : "#F5F5F5",
                    color: msg.type === "sent" ? "white" : "black",
                    padding: "8px",
                    borderRadius: "8px",
                    maxWidth: "70%",
                    textAlign: "left",
                  }}
                >
                  {msg.image && (
                    <img
                      src={msg.image}
                      alt="uploaded"
                      style={{
                        maxWidth: "100%",
                        borderRadius: "8px",
                        marginBottom: "5px",
                      }}
                    />
                  )}
                  <Typography sx={{ fontSize: "14px" }}>
                    {msg.message}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              backgroundColor: "#F5F5F5",
              borderRadius: "8px",
              width: "100%",
            }}
          >
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              style={{ display: "none" }}
              id="upload-image"
            />
            <label htmlFor="upload-image">
              <IconButton component="span" sx={{ color: "#FF8A00" }}>
                <Image />
              </IconButton>
            </label>
            <InputBase
              placeholder="Message"
              sx={{ flexGrow: 1, paddingLeft: "10px" }}
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
            />
            <IconButton sx={{ color: "#FF8A00" }} onClick={handleSendMessage}>
              <Send />
            </IconButton>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default Faq;
