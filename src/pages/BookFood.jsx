import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const BookFood = () => {
  const navigate = useNavigate();

  const [formData, setFormDate] = useState({
    fullName: '',
    phone: '',
    email: '',
    address: '',
    city: '',
    pincode: '',
    time: '',
    foodName: '',
    Qty: '',
    specialRequest: '',
    paymentWay: '',
    promoCode: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormDate(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch('http://localhost:2009/api/book', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' }, // fix spelling here
        credentials: 'include',
        body: JSON.stringify(formData),
      });

      const result = await res.json();
      if (res.ok) {
        alert("Order placed successfully");
          navigate('/');
        setFormDate({
          fullName: '',
          phone: '',
          email: '',
          address: '',
          city: '',
          pincode: '',
          time: '',
          foodName: '',
          Qty: '',
          specialRequest: '',
          paymentWay: '',
          promoCode: '',
        });
      } else {
        alert("Failed to place order: " + result.message);
      }
    } catch (error) {
      alert("Server error: " + error.message);
    }
  };

  return (
    <div className="book-food-container">
      <h2>Book Your Food</h2>
      <form className="booking-form" onSubmit={handleSubmit}>
        <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} placeholder="Full Name" />
        <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone Number" />
        <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email Address" />
        <input type="text" name="address" value={formData.address} onChange={handleChange} placeholder="Full Address" />
        <div className="city-pincode">
          <input type="text" name="city" value={formData.city} onChange={handleChange} placeholder="City" />
          <input type="text" name="pincode" value={formData.pincode} onChange={handleChange} placeholder="Pincode" />
        </div>
        <input type="time" name="time" value={formData.time} onChange={handleChange} />
        <input type="text" name="foodName" value={formData.foodName} onChange={handleChange} placeholder="Enter Food Name" />
        <input type="number" name="Qty" value={formData.Qty} onChange={handleChange} placeholder="Enter Food Quantity" />
        <textarea name="specialRequest" value={formData.specialRequest} onChange={handleChange} placeholder="Special Instructions..."></textarea>
        <div className="payment-method">
          <label>
            <input type="radio" name="paymentWay" value="Cash on Delivery" onChange={handleChange} checked={formData.paymentWay === 'Cash on Delivery'} />
            Cash on Delivery
          </label>
          <label>
            <input type="radio" name="paymentWay" value="UPI / Online Payment" onChange={handleChange} checked={formData.paymentWay === 'UPI / Online Payment'} />
            UPI / Online Payment
          </label>
        </div>
        <input type="text" name="promoCode" value={formData.promoCode} onChange={handleChange} placeholder="Apply Promo Code" />
        <button type="submit">Place Order</button>
      </form>
    </div>
  );
};

export default BookFood;
