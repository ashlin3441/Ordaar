import React, { useState } from "react";
import { 
  Accordion, AccordionSummary, AccordionDetails, Typography, 
  Card, CardContent 
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import PhoneIcon from "@mui/icons-material/Phone";
import ChatIcon from "@mui/icons-material/Chat";
import ordersData from "../data/OrderData"; // Importing orders

const OrderDetails = () => {
  const [selectedOrder, setSelectedOrder] = useState(ordersData[0]); // 🟢 Set initial order

  if (!selectedOrder) {
    return (
      <Typography variant="h6" sx={{ textAlign: "center", mt: 3 }}>
        No order selected
      </Typography>
    );
  }

  const prev = { 
    position: "sticky", 
    bottom: 0, left: 0, right: 0, 
    backgroundColor: "white", 
    boxShadow: "0 -2px 10px rgba(0, 0, 0, 0.1)", 
    // zIndex: 1000, 
    padding: "10px"
  }

  return (
    <div style={{ padding: "20px", maxWidth: "700px", margin: "0 auto", position: "relative", paddingBottom: "80px" }}>
      
      {/* Restaurant Details */}
      <Card sx={{ marginBottom: "20px", padding: "15px" }}>
        <CardContent>
          <div style={{ display: "flex", alignItems: "center" }}>
            <img src={selectedOrder.restaurant.logo} alt="Restaurant Logo" width="50" height="50" 
              style={{ borderRadius: "50%", marginRight: "15px" }} 
            />
            <div>
              <Typography variant="h6">{selectedOrder.restaurant.name}</Typography>
              <Typography variant="body2">{selectedOrder.restaurant.address}</Typography>
              <Typography variant="body2">
                📞 {selectedOrder.restaurant.phone} 
                <PhoneIcon style={{ cursor: "pointer", marginLeft: "5px" }} />
                <ChatIcon style={{ cursor: "pointer", marginLeft: "10px" }} />
              </Typography>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Delivery Person & Customer Details */}
      <div style={{ display: "flex", gap: "15px", marginBottom: "20px" }}>
        
        {/* Delivery Person */}
        <Card sx={{ flex: 1, padding: "10px" }}>
          <CardContent>
            <Typography variant="subtitle1">Delivery Person</Typography>
            <div style={{ display: "flex", alignItems: "center" }}>
              <img src={selectedOrder.deliveryBoy.photo} alt="Delivery Person" width="50" height="50" 
                style={{ borderRadius: "50%", marginRight: "10px" }} 
              />
              <div>
                <Typography>{selectedOrder.deliveryBoy.name}</Typography>
                <Typography variant="body2">ID: {selectedOrder.deliveryBoy.id}</Typography>
                <Typography variant="body2">{selectedOrder.deliveryBoy.phone}</Typography>
                <PhoneIcon style={{ cursor: "pointer" }} />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Customer */}
        <Card sx={{ flex: 1, padding: "10px" }}>
          <CardContent>
            <Typography variant="subtitle1">Customer</Typography>
            <div style={{ display: "flex", alignItems: "center" }}>
              <img src={selectedOrder.customer.photo} alt="Customer" width="50" height="50" 
                style={{ borderRadius: "50%", marginRight: "10px" }} 
              />
              <div>
                <Typography>{selectedOrder.customer.name}</Typography>
                <Typography variant="body2">{selectedOrder.customer.address}</Typography>
                <Typography variant="body2">{selectedOrder.customer.phone}</Typography>
                <PhoneIcon style={{ cursor: "pointer" }} />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Ordered Items */}
      <Typography variant="h6" gutterBottom>Ordered Items</Typography>
      {selectedOrder.items.map((item) => (
        <Card key={item.id} sx={{ marginBottom: "10px", padding: "10px" }}>
          <CardContent>
            <div style={{ display: "flex", alignItems: "center" }}>
              <img src={item.image} alt={item.name} width="50" height="50" 
                style={{ borderRadius: "50%", marginRight: "10px" }} 
              />
              <div>
                <Typography variant="subtitle1">{item.name}</Typography>
                <Typography variant="body2">Size: {item.size}</Typography>
                <Typography variant="body2">Qty: {item.quantity}</Typography>
                <Typography variant="body1" fontWeight="bold">₹{item.price}</Typography>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}

      {/* 🟢 Payment Details (Fixed at Bottom & Expands Upwards) */}
      <div style={prev}> 
        <Accordion
          sx={{ 
            boxShadow: "none",
             borderRadius: "10px",
            '& .MuiCollapse-root': {
          position: 'absolute',
          bottom: '100%',
          width: '100%',
          marginBottom: '1px',
        },
        position: 'relative',
        marginTop: '200px' // Space for upward expansion
      }}
        >
          <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{
            backgroundColor: "#f5f5f5",
          '& .MuiAccordionSummary-expandIconWrapper': {
            transform: 'rotate(180deg)',
          },
          '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
            transform: 'rotate(0deg)',
          },
            }}>
            <Typography fontWeight="bold">Payment Details</Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ padding: "15px" }}>
            
            {/* Order Status & Time */}
            <div style={{ display: "flex", justifyContent: "space-between", fontWeight: "bold", marginBottom: "10px" }}>
              <span>Status: {selectedOrder.status}</span>
              <span>{selectedOrder.time}</span>
            </div>

            <hr style={{ border: "0.5px solid #ddd" }} />

            {/* Payment Breakdown */}
            <div style={{ display: "flex", justifyContent: "space-between", padding: "5px 0" }}>
              <span>Subtotal</span> <span>₹{selectedOrder.totalAmount}</span>
            </div>

            <div style={{ display: "flex", justifyContent: "space-between", padding: "5px 0" }}>
              <span>Delivery Charge</span> <span>₹30</span>
            </div>

            <div style={{ display: "flex", justifyContent: "space-between", fontWeight: "bold", padding: "5px 0" }}>
              <span>Total</span> <span>₹{selectedOrder.totalAmount + 30}</span>
            </div>

          </AccordionDetails>
        </Accordion>
      </div>

    </div>
  );
};

export default OrderDetails;