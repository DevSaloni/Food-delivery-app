import React from 'react';
import { useNavigate } from 'react-router-dom';
import SearchPage from '../pages/searchPage';

const DeliveryBookPanel = () => {
  //create navigate function
  const navigate = useNavigate();

  return (
    <div className='delivery-book-panel' style={{borderRadius: '10px' }}>
      <div className='book-panel-left'>
        <img src='/delivery-boy2.jpeg' alt='Delivery Food' style={{ height: '500px', borderRadius: '10px' }} />
      </div>
      <div className='book-panel-right'>
        <div className='book-delivery-section'>
          <h1 className='book-title'>Order Delicious Food Online</h1>
                  <p>
                    Discover a variety of mouth-watering dishes and have them delivered to your home with just a few clicks. Fresh, flavorful, and right on time — satisfaction guaranteed!
                  </p>

        </div>
        <div className='book-form'>
          <button onClick={() => navigate('/searchPage')}>Book Now</button>
        </div>
      </div>
    </div>
  );
};

export default DeliveryBookPanel;
