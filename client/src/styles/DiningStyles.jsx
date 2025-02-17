export const DiningStyles = {
    container: { p: 2, marginTop: 8, display: "flex", gap: 3 },
    leftPanel: { flex: 4, display: "flex", flexDirection: "column", gap: 2 },
    rightPanel: { flex: 5, display: "flex", flexDirection: "column", gap: 2 },
    searchInput: { flex: 1 },
    scrollBar1: { flex: 1 },
    restaurantCard: {
      display: "flex",
      alignItems: "center",
      borderRadius: 3,
      mb: 2,
      gap: 2,
    },
    cardMedia: { width: 120, height: 80, borderRadius: 2 },
    ratingBox: {
      display: "flex",
      alignItems: "center",
      gap: 1,
      p: 1,
      bgcolor: "#FFF8E1",
      borderRadius: 2,
    },
    tabStyles: {
      marginLeft: "35px",
      fontFamily: "outfit",
      backgroundColor: "transparent",
      zIndex: 1,
      "& .MuiTabs-indicator": {
        background: "linear-gradient(90deg, #FDD30F, #FF6B28)",
      },
      "& .MuiTab-root": {
        color: "grey",
        textTransform: "none",
      },
      "& .Mui-selected": {
        color: "transparent",
        backgroundImage: "linear-gradient(90deg, #FDD30F, #FF6B28)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "grey",
      },
    },
    scrollBar2: {},
    bookingCard: { borderRadius: 3, maxWidth: 500, marginBottom: "10px", marginLeft: "30px" },
    bookingInfoBox: {
      border: "1px solid #ddd",
      borderRadius: 2,
      bgcolor: "#FFFFFF",
      marginLeft: "10px",
      p: 1,
    },
    bookingButton: (status) => ({
      background:
        status === "Visited"
          ? "linear-gradient(90deg, #FDD30F, #FF6B28)"
          : status === "Not Visited"
          ? "#FFA500"
          : "inherit",
      color:
        status === "Customer Cancelled" || status === "Restaurant Rejected"
          ? "red"
          : status === "Visited" || status === "Not Visited"
          ? "white"
          : "inherit",
    }),
    dialogStyles: {
      "& .MuiDialog-paper": {
        position: "absolute",
        boxShadow: "none",
        background: "transparent",
        borderRadius: 2,
        top: "20%",
        right: "10%",
        width: "430px",
        maxHeight: "80%",
      },
    },
    BookingTime: {
        border: "1px solid #ddd",
        mt: 1,
        p: 1,
        borderRadius: 2,
        bgcolor: "#FFFFFF",
      },

  };
  

  