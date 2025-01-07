import React, { useState } from "react";
import Logo from "../../assets/logobhavya.png";
import { IoMdSearch } from "react-icons/io";
import { FaCartShopping, FaUser, FaHeart, FaBars, FaBagShopping } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { FaYoutube } from "react-icons/fa";
import imgAirCooler from '../../assets/bhavya/juice.png';
import imgLedTV from '../../assets//bhavya/healthy.png';
import imgMixerGrinder from '../../assets//bhavya/natural herbs.png';
import imgFans from '../../assets//bhavya/naturalbeauty.png';
import imgoil from '../../assets//bhavya/organicoil.png';
import imgpowder from '../../assets//bhavya/organicpowder.png';
import imghealthy from '../../assets//bhavya/saffronhealthy.png';
import imgspecialpowder from '../../assets//bhavya/specialpowder.png';
import imgtablets from '../../assets//bhavya/specialtablets.png';

const Navbar = ({ handleOrderPopup }) => {
  const [dropdownOpen, setDropdownOpen] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false); // Hamburger menu toggle
  const [inp, setInp] = useState('');

  
const handleAirCoolerClick = () => {
  navigate('/personalcooler'); 
};
const handleLEDTVClick = () => {
  navigate('/tvproducts'); // Replace with your actual route for Personal Cooler page
};
const handleMixerGrinderClick = () => {
  navigate('/mixergrinder'); // Replace with your actual route for Personal Cooler page
};
const handleFansClick = () => {
  navigate('/Fans'); // Replace with your actual route for Personal Cooler page
};


const handleEnter = () => setDropdownOpen(true);
const handleLeave = () => setDropdownOpen(false);

  // Function to open all dropdowns when hovering over Products
  const openAllDropdowns = () => {
    setDropdownOpen('all');
  };

  // Function to close all dropdowns
  const closeAllDropdowns = () => {
    setDropdownOpen('');
  };


  // Function to toggle dropdown visibility
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  // Function to toggle hamburger menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40">
      {/* Upper Navbar */}
      <div className="bg-green-600 py-2">
        <div className="container flex justify-between items-center">
          <div>
            <a href="/" className="font-bold text-2xl sm:text-3xl flex gap-2">
              <img
                src={Logo}
                alt="Logo"
                className="absolute w-32 top-[-16px] md:bottom-6 md:h-28 md:w-44" // Adjusted position
              />
            </a>
          </div>

          {/* Hamburger Icon */}
          <div className="sm:hidden">
            <button
              onClick={toggleMenu}
              className="text-3xl text-green-400 dark:text-white"
            >
              <FaBars />
            </button>
          </div>

          {/* Search bar with icons, visible only on larger screens */}
          <div className="hidden sm:flex justify-between items-center gap-4">
            <div className="relative group flex items-center gap-4">
              <input
                type="text"
                placeholder="search"
                className="w-[200px] sm:w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-full border border-gray-300 px-2 py-1 focus:outline-none focus:border-1 focus:border-primary dark:border-gray-500 dark:bg-gray-800"
                value={inp}
                onChange={(e) => setInp(e.target.value)}
              />
              <Link to="/signinsignup" className="p-2 text-sm rounded-lg bg-green-700 text-white font-[600]">
                Sign In/Sign Up
              </Link>
            </div>

            {/* Cart, Wishlist, Order Buttons */}
            <Link to="/cart" className="bg-gradient-to-r from-green-200 to-green-700 transition-all duration-200 text-white py-1 px-4 rounded-full flex items-center gap-3 group">
              <span className="group-hover:block hidden transition-all duration-200">Cart</span>
              <FaCartShopping className="text-xl text-white drop-shadow-sm cursor-pointer" />
            </Link>
            <Link to="/wishlist" className="bg-gradient-to-r from-green-200 to-green-700 transition-all duration-200 text-white py-1 px-4 rounded-full flex items-center gap-3 group">
              <span className="group-hover:block hidden transition-all duration-200">Wishlist</span>
              <FaHeart className="text-xl text-white drop-shadow-sm cursor-pointer" />
            </Link>
            {/* <Link to="/yourorder" className="bg-gradient-to-r from-green-700 to-green-200 transition-all duration-200 text-white py-1 px-4 rounded-full flex items-center gap-3 group">
              <span className="group-hover:block hidden transition-all duration-200">Order</span>
              <FaBagShopping className="text-xl text-white drop-shadow-sm cursor-pointer" />
            </Link> */}
          </div>
        </div>
      </div>

      {/* Lower Navbar */}
      <div className="flex justify-center py-2">
        <ul className="sm:flex hidden items-center gap-4">
          <Link to='/' className="inline-block px-4 hover:text-green-700 duration-200">Home</Link>
          <Link to='/contact' className="inline-block px-4 hover:text-green-600 duration-200">Dr. consultancy</Link>
          {/* products */}
          <div onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
      <div className="relative group">
        <button
          onMouseEnter={handleEnter}
          onMouseLeave={handleLeave}
          className="font-bold text-lg"
        >
          Products
        </button>

        <div
          className={`absolute left-1/2 mt-2 w-[1765px] bg-white shadow-lg border-t-2 border-red-500 transition-all duration-300 ease-in-out transform ${
            dropdownOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'
          } -translate-x-1/2`}
        >
 <div className="flex justify-center">
  <div
    className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 p-4 text-center w-full max-w-screen-lg"
  >
    {[
      { img: imgAirCooler, label: 'Fresh Organic Juice', onClick: handleAirCoolerClick },
      { img: imgLedTV, label: 'Healthy Food', onClick: handleLEDTVClick },
      { img: imgMixerGrinder, label: 'Natural Beauty Products', onClick: handleMixerGrinderClick },
      { img: imgFans, label: 'Natural Herbs', onClick: handleFansClick },
      { img: imgoil, label: 'Organic Oil', onClick: handleFansClick },
      { img: imgpowder, label: 'Organic Powder', onClick: handleFansClick },
      { img: imghealthy, label: 'Saffron Healthy', onClick: handleFansClick },
      { img: imgspecialpowder, label: 'Special Powder', onClick: handleFansClick },
      { img: imgtablets, label: 'Special Tablets', onClick: handleFansClick },
      
    ].map((item, index) => (
      <div
        key={index}
        className="relative flex flex-col items-center justify-center"
        onMouseEnter={handleEnter}
        onMouseLeave={handleLeave}
      >
        <img src={item.img} alt={item.label} className="w-16 h-16 cursor-pointer" onClick={item.onClick} />
        <button
          className="mt-2 text-sm font-medium whitespace-normal"
          onClick={item.onClick}
          onMouseEnter={handleEnter}
          onMouseLeave={handleLeave}
        >
          {item.label}
        </button>
      </div>
    ))}
  </div>
</div>


        </div>
      </div>
    </div>


         
    <a
  href="https://institute.saffron4health.com/" // Your desired external website URL
  rel="noopener noreferrer" // Security feature when opening in the same tab
  className="inline-block px-4 hover:text-green-600 duration-200"
>
  Institute and Courses
</a>
          
          <a
      href="https://www.youtube.com/@saffron4health" // Direct link to the YouTube channel
      className="inline-block px-4 hover:text-green-600 duration-200"
      target="_blank" // Open the link in a new tab
      rel="noopener noreferrer" // Security best practice
    >
      <FaYoutube size={24} className="hover:text-red-600" />
    </a>
    <a
  href="https://druglessnaturopathcouncil.com/
" // Your desired external website URL
  rel="noopener noreferrer" // Security feature when opening in the same tab
  className="inline-block px-4 hover:text-green-600 duration-200"
>
  Gov. Registration
</a>
          <Link to='/contact' className="inline-block px-4 hover:text-green-600 duration-200">Our Reviews</Link>
        </ul>
      </div>

      {/* Mobile Menu */}
      <div className={`${isOpen ? "block" : "hidden"} sm:hidden bg-white dark:bg-gray-900 p-4 w-full transition-all duration-300`}>
        <div className="flex flex-col items-center gap-4">
          <input
            type="text"
            placeholder="search"
            value={inp}
            onChange={(e) => setInp(e.target.value)}
            className="w-full rounded-full border border-gray-300 px-2 py-1 focus:outline-none focus:border-green-700 dark:border-gray-500 dark:bg-gray-800"
          />
          <Link to="/signinsignup" className="p-2 text-sm rounded-lg bg-green-700 text-white font-[600]">
            Sign In/Sign Up
          </Link>
          <Link to='/cart' onClick={() => setIsOpen(!isOpen)} className="bg-gradient-to-r from-green-700 to-green-200 transition-all duration-200 text-white py-1 px-4 rounded-full flex items-center gap-3">
            Cart
            <FaCartShopping className="text-xl text-white drop-shadow-sm cursor-pointer" />
          </Link>
          <Link to='/wishlist' onClick={() => setIsOpen(!isOpen)} className="bg-gradient-to-r from-green-700 to-green-200 transition-all duration-200 text-white py-1 px-4 rounded-full flex items-center gap-3">
            Wishlist
            <FaHeart className="text-xl text-white drop-shadow-sm cursor-pointer" />
          </Link>
          <Link to='/yourorder' onClick={() => setIsOpen(!isOpen)} className="bg-gradient-to-r from-green-700 to-green-300 transition-all duration-200 text-white py-1 px-4 rounded-full flex items-center gap-3">
            Orders
            <FaBagShopping className="text-xl text-white drop-shadow-sm cursor-pointer" />
          </Link>
          <ul className="flex flex-col items-center gap-2">
            <Link to='/' onClick={() => setIsOpen(!isOpen)} className="inline-block px-4 hover:text-primary duration-200">Home</Link>
            <Link to='/about' onClick={() => setIsOpen(!isOpen)} className="inline-block px-4 hover:text-primary duration-200">About Us</Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
