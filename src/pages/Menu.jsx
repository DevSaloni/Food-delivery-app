import React,{useState} from 'react'
import menuData from '../component/MenuData'
import MenuItem from '../component/MenuItem'
import "../component/menu.css";

const Menu = () => {
    const[category,setCategory] = useState("dinner");
   
    const categories = Object.keys(menuData);

   return (
    <div>
      <h1 className='menu-name'>Menu</h1>

      {/* Category Buttons */}
      <div className="buttons">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setCategory(cat)}
            className={category === cat ? "active" : ""}
          >
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </button>
        ))}
      </div>

      {/* Menu Items */}
      <div className="menu-grid">
        {menuData[category].map((item, index) => (
          <MenuItem key={index} item={item} />
        ))}
      </div>
    </div>
  );
}

export default Menu