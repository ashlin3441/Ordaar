import React, { useState } from "react";
import {
  Drawer,
  IconButton,
  Avatar,
  Box,
  Typography,
  Button,
} from "@mui/material";
import { Mail, Phone, Lock, Camera } from "lucide-react";
import { useNavigate } from "react-router-dom";
import EmailChange from "./EmailChange";
import NumberChange from "./NumberChange";
import PasswordReset from "./PasswordReset1";
import Donations from "./Donations";
import styles from "../../styles/ProfileStyles";
import { routes } from "../../routes/routes";

export default function Profile({ open, onClose }) {
  const [activeView, setActiveView] = useState("profile");
  const navigate = useNavigate();
  const [profileImage, setProfileImage] = useState("/profile.jpg");
  const profileData = [
    {
      icon: <img src="name.png" alt="Name" style={styles.Nameicon} />,
      label: "Name",
      value: "Jhone Smith",
    },
    {
      icon: <Mail color="#FFA500" size={22} />,
      label: "Email",
      value: "jhonesmith@gmail.com",
      onChange: () => setActiveView("emailChange"),
    },
    {
      icon: <Phone color="#FFA500" size={22} />,
      label: "Phone Number",
      value: "+911234567890",
      onChange: () => setActiveView("numberChange"),
    },
    {
      icon: <Lock color="#FFA500" size={22} />,
      label: "Password",
      value: "**********",
      onChange: () => setActiveView("PasswordReset"),
    },
  ];
  const handleLogout = () => {
    navigate(routes.Home);
  };
  const handleDonations = () => {
    setActiveView("donations"); // Set to donations view
  };
  const handleProfileImageChange = (event) => {
    const file = event.target.files[0]; // Get the selected file
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result); // Set the profile image to the selected file
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <Drawer anchor="right" open={open} onClose={onClose}>
      {activeView === "profile" ? (
        <Box sx={styles.profileDrawer}>
          <Box sx={styles.CloseBox}>
            <IconButton onClick={onClose} sx={styles.closeButton}>
              <img src="close.png" alt="Close" style={styles.WidthHeight20} />
            </IconButton>
            <Typography variant="h6" sx={styles.headerText}>
              Profile
            </Typography>
          </Box>

          <Box sx={styles.avatarBox}>
            <Avatar
              alt="Profile"
              src={profileImage}
              sx={styles.ProfileAvataar}
            />
            <IconButton
              sx={styles.cameraIcon} // Position the camera icon
              onClick={() => document.getElementById("file-input").click()} // Trigger file input on click
            >
              <Camera size={24} />
            </IconButton>
            <input
              id="file-input"
              type="file"
              accept="image/*"
              style={{ display: "none" }}
              onChange={handleProfileImageChange} // Handle the file selection
            />
          </Box>
          {profileData.map((item, index) => (
            <Box key={index} sx={styles.profileDetailBox}>
              <Box sx={styles.profileBox}>
                <Typography
                  variant="body2"
                  align="left"
                  sx={styles.iconLabelText}
                >
                  {item.icon}
                  <Box sx={styles.iconDivider} />
                  <span>{item.label}</span>
                </Typography>
                {item.onChange && (
                  <Button
                    variant="outlined"
                    size="small"
                    onClick={item.onChange}
                    sx={styles.changeButton}
                  >
                    Change
                  </Button>
                )}
              </Box>
              <Typography variant="body2" align="left" sx={styles.valueText}>
                {item.value}
              </Typography>
            </Box>
          ))}
          <Box sx={styles.buttonBox}>
            <Button
              variant="outlined"
              fullWidth
              sx={styles.donationButton}
              onClick={handleDonations}
            >
              Donations
            </Button>
            <Button
              variant="outlined"
              color="error"
              fullWidth
              sx={styles.logoutButton}
              onClick={handleLogout}
            >
              Log out
            </Button>
          </Box>
        </Box>
      ) : activeView === "emailChange" ? (
        <EmailChange onClose={() => setActiveView("profile")} />
      ) : activeView === "numberChange" ? (
        <NumberChange onClose={() => setActiveView("profile")} />
      ) : activeView === "PasswordReset" ? (
        <PasswordReset onClose={() => setActiveView("profile")} />
      ) : (
        <Donations onClose={() => setActiveView("profile")} /> 
      )}
    </Drawer>
  );
}
