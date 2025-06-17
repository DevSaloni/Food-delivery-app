import React, { useState, useEffect } from 'react';
import '../component/OrderDetail.css';

const OrderDetail = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const res = await fetch('http://localhost:2009/api/bookings');
        const data = await res.json();
        setOrders(data);
      } catch (error) {
        console.error('Error fetching orders:', error);
      }
    };

    fetchOrders();
  }, []);

  // 1. Create a mapping function
const getFoodImage = (foodName) => {
  const foodImages = {
  "sandwich":  "sandwich.jpeg",
  "dosa": "dosa.jpg",
  "burger": "burger.jpeg",
  "pasta": "pasta.jpeg",
};


  const key = foodName.trim().toLowerCase(); // handle spaces or case
  return `/${foodImages[key] || 'default.jpg'}`;
};

  return (
    <>
      <div className="order-detail">
        <h2>My Orders</h2>

        {orders.length === 0 ? (
          <p>No orders found.</p>
        ) : (
          orders.map((order) => (
            <div className="order-card" key={order._id}>
              <img
                  src={getFoodImage(order.foodName)}
                  alt={order.foodName}
                  className="order-image"
                />


              <div className="info-grid">
                <p>
                  <span className="label">Food:</span>
                  <span className="value">{order.foodName}</span>
                </p>
                <p>
                  <span className="label">Quantity:</span>
                  <span className="value">{order.Qty}</span>
                </p>
                <p>
                  <span className="label">Time:</span>
                  <span className="value">{order.time}</span>
                </p>
                <p>
                  <span className="label">GST:</span>
                  <span className="value">₹{order.gst}</span>
                </p>
                <p>
                  <span className="label">Total Price:</span>
                  <span className="value">₹{order.totalPrice}</span>
                </p>
                <p>
                  <span className="label">Status:</span>
                  <span className={`value ${order.status?.toLowerCase() || ''}`}>
                    {order.status || 'Unknown'}
                  </span>
                </p>
              </div>
            </div>
          ))
        )}
      </div>

      <div className="delivery-boy-container">
        <h2>Delivery Boy Info</h2>
        <div className="boy-card">
          <img
            src="/delivery-boy.jpeg"
            alt="Delivery boy"
            className="delivery-boy-img"
          />
          <div className="info-grid">
            <p>
              <span className="label">Name:</span>
              <span className="value">Shourya Patil</span>
            </p>
            <p>
              <span className="label">Contact No:</span>
              <span className="value">+91 9876665348</span>
            </p>
            <p>
              <span className="label">Delivery Time:</span>
              <span className="value">2:00 AM</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderDetail;
