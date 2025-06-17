import React, { useState } from 'react';
import MenuCard from '../component/MenuCard';
import FoodCard from '../component/FoodCard';
import foodData from '../component/FoodData';
import '../component/SearchPage.css';

const SearchPage = () => {
  const [searchCategory, setSearchCategory] = useState('');
  const [priceRange, setPriceRange] = useState('');
  const [filteredData, setFilteredData] = useState(foodData);

  const handleSearch = () => {
    let min = 0;
    let max = Infinity;

    if (priceRange) {
      [min, max] = priceRange.includes('Above')
        ? [100, Infinity]
        : priceRange.split('-').map(Number);
    }

    const filtered = foodData.filter(item => {
      const categoryMatch = item.category.toLowerCase().includes(searchCategory.toLowerCase());
      const priceMatch = item.price >= min && item.price <= max;
      return categoryMatch && priceMatch;
    });

    setFilteredData(filtered.length ? filtered : []);
  };

  return (
    <div className="searchpage">
      {/* Left Sidebar */}
      <div className="menu-card-sidebar">
        <MenuCard />
      </div>

      {/* Right Content */}
      <div className="right-section">
        <div className="search-section">
          <input
            type="text"
            placeholder="search category (e.g. Lunch, Snacks)"
            value={searchCategory}
            onChange={(e) => setSearchCategory(e.target.value)}
          />
          <select
            className="select-price"
            value={priceRange}
            onChange={(e) => setPriceRange(e.target.value)}
          >
            <option value="">Select Price</option>
            <option>20-40</option>
            <option>40-60</option>
            <option>60-80</option>
            <option>80-100</option>
            <option>Above 100</option>
          </select>
          <button onClick={handleSearch}>Search</button>
        </div>

        <div className="show-food">
          {filteredData.length > 0 ? (
            filteredData.map(food => (
              <FoodCard key={food.id} food={food} />
            ))
          ) : (
            <p>No food found</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
