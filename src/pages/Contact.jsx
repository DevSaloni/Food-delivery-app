import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target; // ✅ Fix here
    setFormData((prev) => ({
      ...prev,
      [name]: value, // ✅ Correct way to update field
    }));
  };

  // Submit the form
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:2009/api/contact", {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData), // ✅ Send the formData
      });

      const data = await response.json(); // ✅ Fix here

      if (response.ok) {
        alert("Your message was sent successfully!");
        // Optional: Clear the form
        setFormData({ name: '', email: '', message: '' });
      } else {
        alert(data.message || "Something went wrong!");
      }

    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <div className='contact-info'>
      <div className='company-contact'>
        <h1>Company Contact</h1>
        <p><strong>Address:</strong> <span>Pune, Maharashtra</span></p>
        <p><strong>Contact No:</strong> <span>+91 98876 45348</span></p>
        <p><strong>Email:</strong> <span>fooddeliver29@gmail.com</span></p>
      </div>

      <form className='contact-form' onSubmit={handleSubmit}>
        <h2>Send Us a Message</h2>
        <input
          type='text'
          name='name'
          placeholder='Enter your name'
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type='email'
          name='email'
          placeholder='Enter your email'
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          name='message'
          placeholder='Your message here'
          value={formData.message}
          onChange={handleChange}
          required
        />
        <button type='submit'>Send</button>
      </form>
    </div>
  );
};

export default Contact;
