import React, { useState } from 'react';
import { TbHexagonLetterM } from "react-icons/tb";
import {Link} from "react-router-dom"
function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMoreOpen, setIsMoreOpen] = useState(false);
  const [isCalculatorsOpen, setIsCalculatorsOpen] = useState(false);

  return (
    <nav className="bg-green-800 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Dummy Logo */}
        <div className="flex items-center space-x-2">
        <TbHexagonLetterM  className='h-11 w-11'/>
        <span className="text-2xl font-semibold text-white tracking-wide font-mono">Money View</span>

        </div>

        {/* Hamburger Menu Icon */}
        <div className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <button className="text-white focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>

        {/* Menu Items */}
        <ul
          className={`md:flex space-y-4 md:space-y-0 md:space-x-6 items-center md:static absolute  w-full md:w-auto left-0 p-4 md:p-0 top-16 md:top-0 transform ${
            isMenuOpen ? 'translate-x-0' : '-translate-x-full'
          } transition-transform duration-300 md:translate-x-0`}
        > 
        <Link to="/hero">
          <li><a href="#" className="hover:text-[#00ccff]">Personal Loan</a></li> 
          </Link>
          <Link to="/credit">
          <li><a href="#" className="hover:text-[#00ccff]">Credit Tracker</a></li>
          </Link>
          <li><a href="#" className="hover:text-[#00ccff]">Credit Card</a></li>
          <li><a href="#" className="hover:text-[#00ccff]">Home Loan</a></li>

          {/* More Dropdown */}
          <li className="relative">
            <button
              onClick={() => setIsMoreOpen(!isMoreOpen)}
              className="hover:text-[#00ccff]"
            >
              More
            </button>
            {isMoreOpen && (
              <ul className="absolute bg-white text-black w-32 mt-2 rounded-lg shadow-lg">
                <li className="px-4 py-2 hover:bg-[#204349] hover:text-white">
                  <a href="#">Car Loan</a>
                </li>
                <li className="px-4 py-2 hover:bg-[#204349] hover:text-white">
                  <a href="#">Insurance</a>
                </li>
              </ul>
            )}
          </li>

          {/* Calculators Dropdown */}
          <li className="relative">
            <button
              onClick={() => setIsCalculatorsOpen(!isCalculatorsOpen)}
              className="hover:text-[#00ccff]"
            >
              Calculators
            </button>
            {isCalculatorsOpen && (
              <ul className="absolute bg-white text-black w-40 mt-2 rounded-lg shadow-lg">
                <li className="px-4 py-2 hover:bg-[#204349] hover:text-white">
                  <a href="#">EMI Calculator</a>
                </li>
                <li className="px-4 py-2 hover:bg-[#204349] hover:text-white">
                  <a href="#">Home Loan Calculator</a>
                </li>
              </ul>
            )}
          </li>

          <li><a href="#" className="hover:text-[#00ccff]">Contact Us</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
