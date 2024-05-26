import React from 'react';
import { Link } from 'react-router-dom';

export const MyProfile= () => {
    return (
        <div className="bg-lightblue font-sans">
            <header className="bg-pink-200 text-black p-5 text-center">
                <h1 className="relative left-0 text-4xl">Welcome to Women's Clothing</h1>
            </header>
            <div className="absolute top-[13%] left-[25%] text-2xl">
            <Link to='/Home' className="text-white font-bold ml-10 no-underline">Home</Link>

        <Link to='/Product' className="text-white font-bold ml-10 no-underline">Product</Link>
        <Link to='/Contact' className="text-white font-bold ml-10 no-underline">Contact Us</Link>
        <Link to='/Payment' className="text-white font-bold ml-10 no-underline">Payment</Link>
        <Link to='/Aboutus' className="text-white font-bold ml-10 no-underline">Aboutus</Link>
      </div>
      <div className="search-bar bg-gray-300 p-2 absolute top-[13%] right-5 z-50">
        <input type="text" placeholder="Search..." className="w-44 p-1 rounded-lg" />
      </div>
      <nav className="md:block bg-gray-700 text-white p-6 text-center">
        <ul className="list-none p-0 m-0">
          <li className="inline-block relative mr-2">
            <div className="divv relative h-5 mr-96"></div>
          </li>
        </ul>
      </nav>
            </div>
            );
            };