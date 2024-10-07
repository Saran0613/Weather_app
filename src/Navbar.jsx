import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// import About from './About'; // Adjust the path if necessary

const Navbar = ({ onSearch }) => {
  const [searchValue, setSearchValue] = useState('');

  const handleSearch = () => {
    if (searchValue.trim()) {
      onSearch(searchValue);
    } else {
      alert('Please enter a city name');
    }
  };

  return (
    <div className="top">
      <div className="navbar bg-gradient-to-r from-red-500 to-blue-500 h-12">
        <div className="flex-1">
          <img
            className="logo"
            src="https://cdn-icons-png.freepik.com/256/831/831319.png?uid=R160018825&ga=GA1.1.14837512.1727186772&semt=ais_hybrid"
            alt="logo"
          />
          <a className="app-title" href="/">Weather App</a>
        </div>
        {/* <Link to="/about" className="about">
            About
          </Link>
          <Link to="/contact" className="contact">
            Contact
          </Link> */}
        <div className="flex-none gap-2">
          <div className="form-control">
            
            <input
              type="text"
              placeholder="Search the city"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              className="input text-black fontt input-bordered w-24 md:w-auto bg-white"
            />
          </div>
               <div className="ml-4">
         
          <button onClick={handleSearch} className="search">
            Search
          </button>
          
        </div>
        {/* About and Contact links */}
   
        </div>
      </div>
    </div>
  );
};

export default Navbar;
