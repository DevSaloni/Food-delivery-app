import React, { useState } from 'react';
import '../component/signup.css';
import { Link, useNavigate } from 'react-router-dom';

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("❌ Passwords do not match");
      setMessage("Passwords do not match");
      return;
    }

    try {
      const res = await fetch("http://localhost:2009/api/users/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          fullName: formData.fullName,
          email: formData.email,
          password: formData.password
        })
      });

      const data = await res.json();

      if (res.ok) {
        alert("✅ " + data.message);
        setMessage(data.message);

        // Clear form
        setFormData({
          fullName: '',
          email: '',
          password: '',
          confirmPassword: ''
        });

        // Redirect after short delay (optional)
        setTimeout(() => {
          navigate('/');
        }, 1000);

      } else {
        alert("⚠️ " + (data.message || "Registration failed"));
        setMessage(data.message || "Registration failed");
      }

    } catch (err) {
      alert("⚠️ Something went wrong");
      setMessage("Something went wrong");
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-box">
        <h2>Create an Account</h2>
        {message && <p style={{ color: "white", fontWeight: "bold" }}>{message}</p>}
        <form className="signup-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
          <button type="submit">Sign Up</button>
        </form>
        <p className="login-link">
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
