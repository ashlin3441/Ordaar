import React, { useEffect, useState } from "react";

const OrderDetails = () => {
  const [order, setOrder] = useState(null);
  const [showDrawer, setShowDrawer] = useState(false);

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
      border: "1px solid #ddd", 
      borderRadius: "10px", 
      maxWidth: "600px",
      margin: "0 auto",
      position: "relative"  // Important for containing the drawer
    }}>
      
      {/* Restaurant Details */}
      <div style={{ display: "flex", alignItems: "center", marginBottom: "20px" }}>
        <img src={order.restaurant.logo} alt="Restaurant Logo" width="60" height="60" style={{ borderRadius: "50%", marginRight: "15px" }} />
        <div>
          <h2>{order.restaurant.name}</h2>
          <p>{order.restaurant.address}</p>
          <p>📞 {order.restaurant.phone}</p>
        </div>
      </div>

      {/* Delivery Boy & Customer Info */}
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "20px" }}>
        
        {/* Delivery Boy */}
        <div style={{ display: "flex", alignItems: "center", border: "1px solid #ddd", padding: "10px", borderRadius: "8px", width: "48%" }}>
          <img src={order.deliveryBoy.photo} alt="Delivery Boy" width="50" height="50" style={{ borderRadius: "50%", marginRight: "10px" }} />
          <div>
            <h3 style={{ margin: "0" }}>Delivery Boy</h3>
            <p style={{ margin: "5px 0" }}>{order.deliveryBoy.name}</p>
            <p style={{ margin: "5px 0" }}>📞 {order.deliveryBoy.phone}</p>
          </div>
        </div>

        {/* Customer */}
        <div style={{ display: "flex", alignItems: "center", border: "1px solid #ddd", padding: "10px", borderRadius: "8px", width: "48%" }}>
          <img src={order.customer.photo} alt="Customer" width="50" height="50" style={{ borderRadius: "50%", marginRight: "10px" }} />
          <div>
            <h3 style={{ margin: "0" }}>Customer</h3>
            <p style={{ margin: "5px 0" }}>{order.customer.name}</p>
            <p style={{ margin: "5px 0" }}>📞 {order.customer.phone}</p>
          </div>
        </div>
      </div>

      {/* Ordered Items */}
      <h3>Ordered Items</h3>
      {order.items.map((item, index) => (
        <div key={index} style={{ display: "flex", alignItems: "center", border: "1px solid #ddd", padding: "10px", borderRadius: "8px", marginBottom: "10px" }}>
          <img src={item.image} alt={item.name} width="50" height="50" style={{ borderRadius: "50%", marginRight: "10px" }} />
          <div>
            <h4 style={{ margin: "0" }}>{item.name}</h4>
            <p style={{ margin: "5px 0" }}>Size: {item.size}</p>
            <p style={{ margin: "5px 0" }}>Qty: {item.quantity}</p>
            <p style={{ margin: "5px 0" }}>💰 ₹{item.price}</p>
          </div>
        </div>
      ))}
      
      {/* Payment Details Button */}
      <button 
        onClick={() => setShowDrawer(true)}
        style={{
          width: "100%",
          padding: "12px",
          fontSize: "16px",
          backgroundColor: "#007bff",
          color: "white",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
          marginTop: "15px"
        }}
      >
        Show Payment Details
      </button>

      {/* Bottom Drawer inside Order Details */}
      <div 
        style={{
          position: "absolute",
          bottom: showDrawer ? "0" : "-150px",  // Show/hide effect
          left: "0",
          width: "100%",
          backgroundColor: "white",
          boxShadow: "0px -2px 8px rgba(0, 0, 0, 0.2)",
          borderTopLeftRadius: "10px",
          borderTopRightRadius: "10px",
          padding: "15px",
          transition: "bottom 0.3s ease-in-out"
        }}
      >
        <h3>Payment Details</h3>
        <p><strong>Total Amount:</strong> ₹{order.totalAmount}</p>
        <p><strong>Order Status:</strong> {order.status}</p>
        <p><strong>Time:</strong> {order.time}</p>

        {/* Close Button */}
        <button 
          onClick={() => setShowDrawer(false)}
          style={{
            width: "100%",
            padding: "8px",
            backgroundColor: "red",
            color: "white",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
            marginTop: "10px"
          }}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default OrderDetails;