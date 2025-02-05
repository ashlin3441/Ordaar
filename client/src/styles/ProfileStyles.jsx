import { Box, Button, Typography } from "@mui/material";

const styles = {
  profileDrawer: {
    width: 450,
    p: 3,
  },
  closeButton: {
    position: "relative",
    top: 8,
  },
  headerText: {
    fontFamily: "outfit",
    fontWeight: "bold",
    marginTop: "10px",
    marginLeft: "8px",
    fontSize: "28px",
  },
  avatarBox: {
    display: "flex",
    justifyContent: "center",
    mb: 4,
    mt: 5,
  },
  profileDetailBox: {
    mb: 0.5,
  },
  profileBox: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    mb: 0.2,
  },
  iconLabelText: {
    display: "flex",
    alignItems: "left",
    opacity: 0.5,
    fontFamily: "outfit",
    position: "relative",
    top: "2px",
  },
  iconDivider: {
    height: 25,
    width: 1.1,
    backgroundColor: "grey",
    mx: 1,
  },
  changeButton: {
    background: "linear-gradient(to bottom, #FDD30F, #FF6B28)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    fontFamily: "outfit",
    color: "#fff",
    textTransform: "none",
    ml: 1,
    position: "relative",
    borderRadius: "10px",
    padding: "4px 12px",
    "&::before": {
      content: '""',
      position: "absolute",
      inset: 0,
      borderRadius: "inherit",
      padding: "1.7px",
      background: "linear-gradient(to bottom, #FDD30F, #FF6B28)",
      WebkitMask:
        "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
      WebkitMaskComposite: "destination-out",
      maskComposite: "exclude",
    },
    "&:hover::before": {
      background: "linear-gradient(to bottom, #FF6B28, #FDD30F)",
    },
  },
  valueText: {
    ml: 5,
    mt: -1,
    fontSize: "0.875rem",
    fontFamily: "outfit",
  },
  buttonBox: {
    mt: 10,
  },
  donationButton: {
    mb: 1,
    fontFamily: "outfit",
    background: "linear-gradient(to bottom, #FDD30F, #FF6B28)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    border: "1.7px solid transparent",
    borderImageSource: "linear-gradient(to bottom, #FDD30F, #FF6B28)",
    borderImageSlice: 1,
    "&:hover": {
      borderImageSource: "linear-gradient(to bottom, #FF6B28, #FDD30F)",
    },
  },
  logoutButton: {
    fontFamily: "outfit",
  },
  Nameicon: { width: 22, height: 22 },
  CloseBox: { display: "flex", alignItems: "center" },
  WidthHeight20: { width: 20, height: 20 },
  ProfileAvataar: { width: 140, height: 140 },
  EmailChange: {
    fontFamily: "outfit",
    mb: 2,
    mt: 5,
    opacity: 0.8,
    fontSize: "38px",
    fontWeight: "bold",
    textAlign: "center", // Centers the text
    display: "flex",
    justifyContent: "center",
  },
  EmailText: {
    fontFamily: "outfit",
    mb: 2,
    opacity: 0.6,
    fontSize: "16px",
    textAlign: "center", // Centers the text
    maxWidth: "80%", // Restricts width to create a two-line effect
    margin: "0 auto", // Centers the text horizontally
    lineHeight: "1.2", // Increases readability
  },
  mt: { mt: 17 },
  mt1: { mt: 5 },
  placeholder: {
    mb: 3,
    "& .MuiOutlinedInput-root": {
      "& fieldset": { borderColor: "#FFA500" },
      "&:hover fieldset": { borderColor: "#FF6B28" },
      "&.Mui-focused fieldset": { borderColor: "#FF6B28" },
    },
    "& .MuiInputBase-input::placeholder": {
      fontFamily: "outfit",
    },
  },
  SubmitButton: {
    fontFamily: "outfit",
    background: "linear-gradient(to bottom, #FDD30F, #FF6B28)",
    color: "#fff",
    textTransform: "none",
    borderRadius: "10px",
    "&:hover": {
      background: "linear-gradient(to bottom, #FF6B28, #FDD30F)",
    },
  },
  OtpBox: { display: "flex", justifyContent: "center", mt: 2 },
  OtpPlaceholder: {
    width: 50,
    height: 50,
    mx: 1,
    "& .MuiOutlinedInput-root": {
      "& fieldset": { borderColor: "#000" },
      "&:hover fieldset": { borderColor: "#FF6B28" },
      "&.Mui-focused fieldset": { borderColor: "#FF6B28" },
    },
  },
  VerifyButton: {
    mt: 4,
    fontFamily: "outfit",
    background: "linear-gradient(to right, #FDD30F, #FF6B28)",
    color: "#fff",
    textTransform: "none",
    borderRadius: "10px",
    height: 50,
    fontSize: "18px",
    fontWeight: "bold",
    "&:hover": {
      background: "linear-gradient(to right, #FF6B28, #FDD30F)",
    },
  },
  BottomText: { mt: 2, fontFamily: "outfit", opacity: 0.6 },
  Resend: { color: "red", fontWeight: "bold" },
  py: { py: 3 },
  cameraIcon: {
    position: "absolute",
    top: "37%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "rgba(255, 255, 255, 0.7)",
    borderRadius: "50%",
    padding: "5px",
    background:'transparent',
  },
  
  
};

export default styles;
