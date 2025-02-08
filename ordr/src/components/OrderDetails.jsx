import React, { useEffect, useState } from "react";

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
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      {/* Restaurant Details */}
      <div style={{ border: "1px solid #ddd", padding: "15px", borderRadius: "8px", marginBottom: "20px" }}>
        <h2>{order.restaurant.name}</h2>
        <p>{order.restaurant.address}</p>
        <p>📞 {order.restaurant.phone}</p>
        <img src={order.restaurant.logo} alt="Restaurant Logo" width="50" />
      </div>

      {/* Delivery Boy & Customer Info */}
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "20px" }}>
        {/* Delivery Boy */}
        <div style={{ border: "1px solid #ddd", padding: "15px", borderRadius: "8px", width: "45%" }}>
          <h3>Delivery Boy</h3>
          <p>{order.deliveryBoy.name}</p>
          <p>ID: {order.deliveryBoy.id}</p>
          <p>📞 {order.deliveryBoy.phone}</p>
          <img src={order.deliveryBoy.photo} alt="Delivery Boy" width="50" />
        </div>

        {/* Customer */}
        <div style={{ border: "1px solid #ddd", padding: "15px", borderRadius: "8px", width: "45%" }}>
          <h3>Customer</h3>
          <p>{order.customer.name}</p>
          <p>{order.customer.address}</p>
          <p>📞 {order.customer.phone}</p>
          <img src={order.customer.photo} alt="Customer" width="50" />
        </div>
      </div>

      {/* Ordered Items */}
      <h3>Ordered Items</h3>
      {order.items.map((item, index) => (
        <div key={index} style={{ border: "1px solid #ddd", padding: "15px", borderRadius: "8px", marginBottom: "10px", display: "flex", alignItems: "center" }}>
          <img src={item.image} alt={item.name} width="60" style={{ marginRight: "15px" }} />
          <div>
            <h4>{item.name}</h4>
            <p>Size: {item.size}</p>
            <p>Qty: {item.quantity}</p>
            <p>💰 ₹{item.price}</p>
          </div>
        </div>
      ))}
      
      {/* Payment Details */}
      <h3>Total Amount: ₹{order.totalAmount}</h3>
      <p>Order Status: {order.status}</p>
      <p>Time: {order.time}</p>
    </div>
  );
};

export default OrderDetails;