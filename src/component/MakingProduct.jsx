import React, { useState } from 'react';

const imageData = {
  Breakfast: ['/breakfast1.jpeg' , '/breakfast2.jpeg' ,'/breakfast3.jpeg','/breakfast4.jpeg' , '/breakfast5.jpeg'],
  Lunch: ['/lunch1.jpeg','/lunch2.jpeg', '/lunch3.jpeg','/lunch4.jpeg','/lunch5.jpeg'],
  Dinner: ['/dinner1.jpeg','/dinner2.jpeg','/dinner3.jpeg','/dinner4.jpeg','/dinner5.jpeg' ],
  Snacks: ['/snacks1.jpeg','/snacks2.jpeg','/snacks3.jpeg','/snacks4.jpeg', '/snacks.jpeg']
};

const MakingProduct = () => {
  const [selectcategory, setSelectcategory] = useState('Breakfast');

  return (
    <section className='make-product-list'>
      <div className='make-product'>
        <div className='make-product-content'>
          <h1 className='header'>Make Delicious Food List</h1>
          <div className='list-dishes-title'>
            <ul className='list-dishes'>
              {Object.keys(imageData).map((category) => (
                <li
                  key={category}
                  onClick={() => setSelectcategory(category)}
                  style={{
                    cursor: 'pointer',
                    fontWeight: selectcategory === category ? 'bold' : 'normal',
                    color: selectcategory === category ? 'brown' : 'black'
                  }}
                >
                  {category}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className='images-make-section'>
        {imageData[selectcategory].map((src, index) => (
          <img key={index} src={src} alt={selectcategory} />
        ))}
      </div>
    </section>
  );
};

export default MakingProduct;
