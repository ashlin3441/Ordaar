const ordersData = [
    {
      orderId: "ORD123",
      restaurant: {
        name: "Swiss Restaurant",
        address: "Edapalli, Kochi",
        phone: "1234567890",
        logo: "https://plus.unsplash.com/premium_photo-1686090448301-4c453ee74718?q=80&w=3335&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      },
      deliveryBoy: {
        name: "John Smith",
        id: "6546842131",
        phone: "9876543210",
        photo: "https://media.istockphoto.com/id/1385390326/photo/portrait-of-delivery-man-in-black-cap-stock-photo.jpg?s=1024x1024&w=is&k=20&c=4LcTpZcq4i1TSRZWu_ir6rPPh7SyPWuPZDKaQjY1E48="
      },
      customer: {
        name: "Alice Brown",
        address: "Edapalli - Panvel Hwy",
        phone: "9998887776",
        photo: "https://media.istockphoto.com/id/1591572504/photo/cheerful-businesswomen-shaking-hands-in-meeting-room.jpg?s=1024x1024&w=is&k=20&c=GYtKvPPbShP3JOyGRZdlakcQE2_h0skl6g6bU0r83qk="
      },
      items: [
        { id: "1", name: "Chicken Pizza", size: "M", quantity: 2, price: 140, image: "https://media.istockphoto.com/id/489809469/photo/bbq-chicken-pizza.jpg?s=1024x1024&w=is&k=20&c=-zn8jXiCxh_dIe5QrMH0bF5fCK8CFk8XDYoIs4ZO17U=" },
        { id: "2", name: "Veg Burger", size: "L", quantity: 1, price: 120, image: "https://media.istockphoto.com/id/1489417428/photo/crispy-aloo-tikki-burger.jpg?s=2048x2048&w=is&k=20&c=37pEbyDlZteGUlZ-CrzTpdI3tIPFNrjotW1vYofVwR8=" }
      ],
      totalAmount: 400,
      status: "pending",
      time: "Sunday 10:00 AM"
    },
    {
      orderId: "ORD124",
      restaurant: {
        name: "Pizza Hub",
        address: "MG Road, Kochi",
        phone: "9876543211",
        logo: "https://via.placeholder.com/50"
      },
      deliveryBoy: {
        name: "Michael Lee",
        id: "6546842132",
        phone: "9876543222",
        photo: "https://via.placeholder.com/50"
      },
      customer: {
        name: "Robert Downey",
        address: "Panampilly Nagar, Kochi",
        phone: "9988776655",
        photo: "https://via.placeholder.com/50"
      },
      items: [
        { id: "3", name: "Pepperoni Pizza", size: "L", quantity: 1, price: 200, image: "https://via.placeholder.com/60" },
        { id: "4", name: "French Fries", size: "M", quantity: 2, price: 90, image: "https://via.placeholder.com/60" }
      ],
      totalAmount: 380,
      status: "delivered",
      time: "Monday 2:30 PM"
    }
  ];
  
  export default ordersData;