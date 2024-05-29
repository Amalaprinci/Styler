import React from 'react';
import { Link } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { FaEnvelope, FaLock, FaUser, FaPhone, FaSearch } from 'react-icons/fa';

import Product1 from './im11.webp';
import Product2 from './adver3.jpg';
import Product3 from './im13.webp';
import Product4 from './adver1.png';
import Product5 from './New1.png';
import shirt from './sh1.png';
import yelow from './yelow.png';
import kids from './kidss.png';
import saree from './sar1.png';

export const Home = () => {
  return (
    <div className="bg-orange-100 min-h-screen font-sans">
      <header className="bg-pink-200 text-black p-5 text-center">
        <h1 className="text-4xl">Welcome to Women's Clothing</h1>
      </header>
      <div className="absolute top-[13%] left-[25%] text-2xl">
        <Link to='/Product' className="text-white font-bold ml-10 no-underline">Product</Link>
        <Link to='/Contact' className="text-white font-bold ml-10 no-underline">Contact Us</Link>
        <Link to='/Payment' className="text-white font-bold ml-10 no-underline">Payment</Link>
        <Link to='/Aboutus' className="text-white font-bold ml-10 no-underline">Aboutus</Link>
        <Link to='/MyProfile' className="text-white font-bold ml-10 no-underline">MyProfile</Link>

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
      <marquee className="bg-pink-200  font-sans text-2xl   text-black">Styled over 10,000 Clients !!!          Free shipping over 2000/-</marquee>
      <div className="bg-orange-100 p-5">
        <Carousel infiniteLoop autoPlay interval={1700} showThumbs={false} showArrows={false} showStatus={false}>
          <div>
            <img src={Product1} alt="Offer 1" className="w-full h-[400px] object-contain" />
          </div>
          <div>
            <img src={Product2} alt="Offer 2" className="w-full h-[400px] object-contain" />
          </div>
          <div>
            <img src={Product4} alt="Offer 3" className="w-full h-[400px] object-contain" />
          </div>
          <div>
            <img src={Product5} alt="Offer 4" className="w-full h-[400px] object-contain" />
          </div>
          <div>
            <img src={Product3} alt="Offer 5" className="w-full h-[400px] object-contain" />
          </div>
        </Carousel>
      </div>
      <marquee className="bg-pink-200 font-sans text-4xl text-black" style={{ width: '100%' }}> UNLIMITED OFFERS !!! SUMMER SALE</marquee>


      <section className="h-auto bg-orange-100 p-5">
        <div className="flex flex-wrap justify-around">
          <Link to="/Shirt" className="block relative">
            <img className="transition-transform duration-200 hover:scale-[1.1]" style={{ width: '100%', height: 'auto', border: '10px solid lightpink', borderRadius: '34px' }}  src={shirt} alt="Styler" />
            <div className="text-2xl absolute left-[36%] top-[110%] text-center">Shirts</div>
          </Link>
          <Link to="/Kurthi" className="block relative">
            <div className="kurthi relative h-10 mb-10">
              <img className="transition-transform duration-200 hover:scale-[1.1]" style={{ width: '100%', height: 'auto', border: '10px solid lightpink', borderRadius: '34px' }}  src={yelow} alt="Styler" />
            </div>
            <h2 className="text-2xl absolute left-[36%] top-[110%] text-center">Kurti</h2>
          </Link>
          <div className="block relative">
            <div className="grown relative h-10 mb-10">
              <img className="transition-transform duration-200 hover:scale-[1.1]" style={{ width: '100%', height: 'auto', border: '10px solid lightpink', borderRadius: '34px' }}  src={kids} alt="Styler" />
            </div>
            <h2 className="text-2xl absolute left-[36%] top-[110%] text-center">Kids</h2>
          </div>
          <div className="block relative">
            <div className="saree relative h-10 mb-10">
              <img className="transition-transform duration-200 hover:scale-[1.1]"style={{ width: '100%', height: 'auto', border: '10px solid lightpink', borderRadius: '34px' }}  src={saree} alt="Styler" />
            </div>
            <h2 className="text-2xl absolute left-[36%] top-[110%] text-center">Saree</h2>
          </div>
        </div>
      </section>
      <footer className="bg-gray-700 mt-24 text-black text-center p-4">
        <p>&copy; Follow us on Instagram</p>
        <p>
          <a href="https://www.instagram.com/celebrity_fashion_decode/?hl=en" className="text-white">@StylerwommensClothing</a>
        </p>
      </footer>
    </div>
  );
};
