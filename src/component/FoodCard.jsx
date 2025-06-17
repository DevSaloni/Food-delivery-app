import React from 'react';
import { useNavigate } from 'react-router-dom';

const FoodCard = ({ food }) => {
  const navigate = useNavigate();

  return (
    <div className='food-card'>
      <div className='food-list'>
        <img src={food.image} alt={food.name} />
      </div>
      <div className='food-info'>
        <h3 className='dish-name'>{food.name}</h3>
        <div className='food-des'>
          <p>{food.description}</p>
          <p>Price: ₹{food.price}</p>
        </div>
      </div>
      <div className='btn'>
        <button onClick={() => navigate('/order')}>Book Now</button>
      </div>
    </div>
  );
};

export default FoodCard;
