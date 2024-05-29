import React from 'react';
import { Link } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Product1 from './im11.webp';
import Product2 from './adver3.jpg';
import Product3 from './im13.webp';
import Product4 from './adver1.png';
import Product5 from './New1.png';


export const AboutUs = () => {
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
        <Link to='/MyProfile' className="text-white font-bold ml-10 no-underline">MyProfile</Link>

      </div>

            

            <nav className="md:block bg-gray-700 text-white p-6 text-center">
                <ul className="list-none p-0 m-0">
                    <li className="inline-block relative mr-2">
                        <div className="divv relative h-5 mr-96"></div>
                    </li>
                </ul>
            </nav>

            <div className="container mx-auto px-4 bg-orange-100 py-8">
                <p className="text-gray-700 font-serif text-center text-3xl">
                    Styler Women's Clothing is more than just a fashion brand; it's a community built on the values of empowerment, inclusivity, and style.
                </p>
                <p className="text-gray-700 font-serif text-center mt-6">
                    Our team is comprised of passionate fashion enthusiasts, tech wizards, and customer service superstars, all dedicated to delivering an exceptional shopping experience for every Styler woman.
                </p>
                <p className="text-gray-700 font-serif text-center mt-6">
                    We believe that every woman deserves to look and feel her best, which is why we offer a curated collection of stylish and affordable clothing that caters to diverse tastes and body types.
                </p>
                <p className="text-gray-700 font-serif text-center mt-6">
                    At Styler, customer satisfaction is our top priority. From seamless browsing and secure payments to personalized styling advice and hassle-free returns, we're committed to making your shopping experience as enjoyable as possible.
                </p>
                <p className="text-gray-700 font-serif text-center mt-6">
                    Join us on this fashion journey and become a part of the Styler community. Discover your signature style, embrace your individuality, and unleash your confidence with Styler Women's Clothing.
                </p>
            </div>

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

            <footer className="bg-gray-700 text-black text-center p-4 ">
                <p>&copy; follow us on Instagram</p>
                <p>
                    <a href="https://www.instagram.com/celebrity_fashion_decode/?hl=en" className="text-white">
                        @StylerwomensClothing
                    </a>
                </p>
            </footer>
        </div>
    );
}
