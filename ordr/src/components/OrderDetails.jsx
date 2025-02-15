import React, { useEffect, useState } from "react";
import { Accordion, AccordionSummary, AccordionDetails, Typography } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import PhoneIcon from "@mui/icons-material/Phone";
import ChatIcon from "@mui/icons-material/Chat";

const OrderDetails = () => {
  const [order, setOrder] = useState(null);

  useEffect(() => {
    const storedOrder = localStorage.getItem("selectedOrder");
    if (storedOrder) {
      setOrder(JSON.parse(storedOrder));
    }
  }, []);

  if (!order) {
    return <h2>Loading Order Details...</h2>;
  }

  return (
    <div style={{ 
      padding: "20px", 
      fontFamily: "Arial, sans-serif", 
      maxWidth: "700px", 
      margin: "0 auto" 
    }}>

      {/* 🔹 Restaurant Details in a Box */}
      <div style={{ 
        padding: "15px", 
        borderRadius: "10px", 
        border: "1px solid #ddd", 
        marginBottom: "20px", 
        backgroundColor: "white"
      }}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <img
            src={order.restaurant.logo}
            alt="Restaurant Logo"
            width="40"
            height="40"
            style={{ borderRadius: "50%", marginRight: "15px" }}
          />
          <div>
            <h2 style={{ margin: "0" }}>{order.restaurant.name}</h2>
            </div></div>
            <div>
            <p style={{ margin: "5px 0" }}>{order.restaurant.address}</p>
            <p style={{ margin: "5px 0" }}>📞 {order.restaurant.phone}</p>
            <PhoneIcon style={{ cursor: "pointer" }} />
            <ChatIcon style={{ cursor: "pointer" }} />
          </div></div>
            
          
     

      {/* 🔹 Delivery Boy & Customer Details */}
      <div style={{ display: "flex", gap: "15px", marginBottom: "20px" }}>
        
        {/* Delivery Boy Details */}
        <div style={{ 
          flex: 1, 
          padding: "10px", 
          borderRadius: "10px", 
          border: "1px solid #ddd", 
          backgroundColor: "white" 
        }}>
          
          <h4>Delivery Boy</h4>
          <div style={{ display: "flex", alignItems: "center" }}>
          <img
            src={order.deliveryBoy.photo}
            alt="Delivery Boy"
            width="50"
            height="50"
            style={{ borderRadius: "50%", marginRight: "10px" }}
          />
          
          <div>
          
          <p> {order.deliveryBoy.name}</p>
          
          <p>id: {order.deliveryBoy.phone}</p>
          <PhoneIcon style={{ cursor: "pointer" }} />
          </div>
        </div>
        </div>

        {/* Customer Details */}
        <div style={{ 
          flex: 1, 
          padding: "10px", 
          borderRadius: "10px", 
          border: "1px solid #ddd", 
          backgroundColor: "white" 
        }}>
          <h4>Customer</h4>
          <div style={{ display: "flex", alignItems: "center" }}>
          <img
            src={order.customer.photo}
            alt="Customer"
            width="50"
            height="50"
            style={{ borderRadius: "50%", marginRight: "10px" }}
          />
          <div>
          <p> {order.customer.name}</p>
          <p> {order.customer.phone}</p>
          <p>{order.customer.address}</p>
          <PhoneIcon style={{ cursor: "pointer" }} />
        </div>
        </div>
        </div>
      </div>

      {/* 🔹 Ordered Items */}
      <h3>Ordered Items</h3>
      {order.items.map((item, index) => (
        <div
          key={index}
          style={{
            display: "flex",
            alignItems: "center",
            border: "1px solid #ddd",
            borderRadius: "10px",
            padding: "10px",
            marginBottom: "10px",
            backgroundColor: "#ffffff",
          }}
        >
          <img
            src={item.image}
            alt={item.name}
            width="50"
            height="50"
            style={{ borderRadius: "50%", marginRight: "10px" }}
          />
          <div>
            <h4 style={{ margin: "0" }}>{item.name}</h4>
            <p style={{ margin: "5px 0" }}>Size: {item.size}</p>
            <p style={{ margin: "5px 0" }}>Qty: {item.quantity}</p>
            <p style={{ margin: "5px 0", fontWeight: "bold" }}>💰 ₹{item.price}</p>
          </div>
        </div>
      ))}

      {/* 🔹 Payment Details - Below Ordered Items */}
      <Accordion
        sx={{
          backgroundColor: "white",
          boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.1)",
          borderRadius: "10px",
          marginTop: "15px",
          marginBottom:"10px"
        }}
      >
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography sx={{ fontWeight: "bold", backgroundColor: "transparent" }}>Payment Details</Typography>
        </AccordionSummary>
        <AccordionDetails style={{ padding: "15px" }}>
          
          {/* Order Status & Delivery Time */}
          <div style={{ display: "flex", justifyContent: "space-between", fontWeight: "bold", marginBottom: "10px" }}>
            <span> {order.status}</span>
            {order.status === "Delivered" && <span>{order.time}</span>}
          </div>

          <hr style={{ border: "0.5px solid #ddd" }} />

          {/* Payment Breakdown */}
          <div style={{ display: "flex", justifyContent: "space-between", padding: "5px 0" }}>
            <span>Subtotal</span> <span>₹{order.totalAmount}</span>
          </div>
          <hr style={{ border: "0.5px solid #ddd" }} />

          <div style={{ display: "flex", justifyContent: "space-between", padding: "5px 0" }}>
            <span>Delivery Boy Tip</span> <span>₹{order.tip}20</span>
          </div>
          <hr style={{ border: "0.5px solid #ddd" }} />

          <div style={{ display: "flex", justifyContent: "space-between", padding: "5px 0" }}>
            <span>Delivery Charge</span> <span>₹{order.deliveryCharge}30</span>
          </div>
          <hr style={{ border: "0.5px solid #ddd" }} />

          <div style={{ display: "flex", justifyContent: "space-between", fontWeight: "bold", padding: "5px 0" }}>
            <span>Total</span> <span>₹{order.totalAmount+50}</span>
          </div>

        </AccordionDetails>
      </Accordion>

    </div>
  );
};

export default OrderDetails;