// src/components/MenuCard.jsx
import React from 'react';

const MenuCard = () => {
  const categories = [
    {
      name: "Breakfast",
      items: [
        { name: "Gara", price: 20 },
        { name: "Idli", price: 25 },
        { name: "Dosa", price: 30 },
        { name: "Upma", price: 20 },
        { name: "Poha", price: 18 },
      ],
    },
    {
      name: "Lunch",
      items: [
        { name: "Chapati", price: 40 },
        { name: "Bhaji-Rice", price: 50 },
        { name: "Paneer Masala", price: 80 },
        { name: "Dal Tadka", price: 60 },
      ],
    },
    {
      name: "Dinner",
      items: [
        { name: "Rice", price: 20 },
        { name: "Khichdi", price: 30 },
        { name: "Roti", price: 25 },
        { name: "Sabzi-Rice", price: 40 },
      ],
    },
    {
      name: "Snacks",
      items: [
        { name: "Samosa", price: 10 },
        { name: "Kachori", price: 12 },
        { name: "Vada Pav", price: 15 },
        { name: "Sandwich", price: 30 },
      ],
    },
  ];

  return (
    <div className='menu-card'>
      <h2 className="menu-title">Menu Categories</h2>
      {categories.map((category, index) => (
        <div className='menu-item' key={index}>
          <h3>{category.name}</h3>
          <div className='menu-list'>
            {category.items.map((food, idx) => (
              <div className='menu' key={idx}>
                <p>{food.name}</p>
                <p>₹{food.price}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default MenuCard;
