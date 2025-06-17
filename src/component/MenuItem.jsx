import React from 'react'
import { useNavigate } from 'react-router-dom'

const MenuItem = ({item}) => {
  const navigate = useNavigate();

  return (
    <div className='menu-item'>
      <img src={`public/${item.img}`}alt={item.name} width="200" />
      <h3>{item.name}</h3> 
      <p>{item.description}</p>
      <h4>{item.price}</h4>
    <button onClick={() => navigate('/order')}>Add to Cart</button>
    </div>
  )
}

export default MenuItem