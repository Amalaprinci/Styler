import React from 'react';
import { Link } from 'react-router-dom';
import Shirt1 from './shirt1.png';
import Shirt2 from './Shirt2.png';
import Shirt3 from './Shirt3.png';
import Shirt4 from './shirt4.png';
import Shirt5 from './Shirt5.png';
import shirt6 from './shirt6.png';
import Shirt7 from './Shirt7.png';
import Shirt8 from './shirt8.png';
import Shirt9 from './shirt 9.png';
import Shirt10 from './Shirt10.png';
import Shirt11 from './Shirt11.png';
import Shirt12 from './shirt12.png';

export const Shirt = () => {
    const toggleMenu = () => {
        const nav = document.querySelector('nav');
        nav.classList.toggle('hidden');
    };

    return (
        <div className="bg-lightblue font-sans">
            <header className="bg-pink-200 text-black p-5 text-center">
                <h1 className="relative left-0 text-4xl">Welcome to Women's Clothing</h1>
            </header>
            <div className="absolute top-[13%] left-[25%] text-2xl">
                <Link to='/Home' className="text-white font-bold ml-10 no-underline">Home</Link>
                <Link to='/Product' className="text-white font-bold ml-10 no-underline">Product</Link>
                <Link to='/About' className="text-white font-bold ml-10 no-underline">Contact Us</Link>
                <Link to='/MyProfile' className="text-white font-bold ml-10 no-underline">MyProfile</Link>
                <Link to='/Aboutus' className="text-white font-bold ml-10 no-underline">Aboutus</Link>
            </div>
           
            <nav className="md:block bg-gray-700 text-white p-6 text-center">
                <ul className="list-none p-0 m-0">
                    <li className="inline-block relative mr-2">
                        <div className="divv relative h-5 mr-96">
                            {/* <img src="c:\Users\Peter\Downloads\New folder\4.png" alt="Logo" /> */}
                        </div>
                    </li>
                </ul>
            </nav>
            <section className="bg-orange-100 p-5">
                {/* Products */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Product 1 */}
                    <div className="relative text-center">
                        <img className="transition-transform duration-200 hover:scale-[1.1] " style={{ width: '80%', height: 'auto', border: '10px solid lightpink', borderRadius: '34px' }} src={Shirt1} alt="Styler" />
                        <h2 className="font-serif text-lg mt-6">Women Checked Shacket</h2>
                        <h3 className="font-bold text-lg">₹ 1,510  inc. GST</h3>
                        <a href="/Payment" className="inline-block mt-2 bg-red-500 text-white py-1 px-2 rounded">Buy</a>
                    </div>
                    {/* Product 2 */}
                    <div className="relative text-center">
                        <img className="transition-transform duration-200 hover:scale-[1.1] " style={{ width: '80%', height: 'auto', border: '10px solid lightpink', borderRadius: '34px' }}src={Shirt2} alt="Styler" />
                        <h2 className="font-serif text-lg mt-6">Women Regular Cuffed Sleeves</h2>
                        <h3 className="font-bold text-lg">₹ 1,850 inc. GST</h3>
                        <a href="/Payment" className="inline-block mt-2 bg-red-500 text-white py-1 px-2 rounded">Buy</a>
                    </div>
                    {/* Product 3 */}
                    <div className="relative text-center">
                        <img className="transition-transform duration-200 hover:scale-[1.1] " style={{ width: '80%', height: 'auto', border:'10px solid lightpink', borderRadius: '34px' }} src={Shirt3} alt="Styler" />
                        <h2 className="font-serif text-lg mt-6">Striped Crepe Shirt</h2>
                        <h3 className="font-bold text-lg">₹ 2,350 inc. GST</h3>
                        <a href="/Payment" className="inline-block mt-2 bg-red-500 text-white py-1 px-2 rounded">Buy</a>
                    </div>
                    {/* Product 4 */}
                    <div className="relative text-center">
                        <img className="transition-transform duration-200 hover:scale-[1.1] " style={{ width: '80%', height: 'auto', border: '10px solid lightpink', borderRadius: '34px' }} src={Shirt4} alt="Styler" />
                        <h2 className="font-serif text-lg mt-6">Checked Roll-Up Sleeves Shirt</h2>
                        <h3 className="font-bold text-lg">₹ 2,280 inc. GST</h3>
                        <a href="/Payment" className="inline-block mt-2 bg-red-500 text-white py-1 px-2 rounded">Buy</a>
                    </div>
                    {/* Product 5 */}
                    <div className="relative text-center">
                        <img className="transition-transform duration-200 hover:scale-[1.1] " style={{ width: '80%', height: 'auto', border:'10px solid lightpink' , borderRadius: '34px' }} src={Shirt5} alt="Styler" />
                        <h2 className="font-serif text-lg mt-6">Relaxed Fit Shirt with Flap Pockets</h2>
                        <h3 className="font-bold text-lg">₹ 830 inc. GST</h3>
                        <a href="/Payment" className="inline-block mt-2 bg-red-500 text-white py-1 px-2 rounded">Buy</a>
                    </div>
                    {/* Product 6 */}
                    <div className="relative text-center">
                        <img className="transition-transform duration-200 hover:scale-[1.1] " style={{ width: '80%', height: 'auto', border: '10px solid lightpink', borderRadius: '34px' }} src={shirt6} alt="Styler" />
                        <h2 className="font-serif text-lg mt-6">Spread Collar Shirt with Full Sleeves</h2>
                        <h3 className="font-bold text-lg">₹ 1,950 inc. GST</h3>
                        <a href="/Payment" className="inline-block mt-2 bg-red-500 text-white py-1 px-2 rounded">Buy</a>
                    </div>
                    {/* Product 7 */}
                    <div className="relative text-center">
                        <img className="transition-transform duration-200 hover:scale-[1.1] " style={{ width: '80%', height: 'auto', border: '10px solid lightpink', borderRadius: '34px' }} src={Shirt7} alt="Styler" />
                        <h2 className="font-serif text-lg mt-6">Women Striped Tailored Fit Shirt</h2>
                        <h3 className="font-bold text-lg">₹ 3,600 inc. GST</h3>
                        <a href="/Payment" className="inline-block mt-2 bg-red-500 text-white py-1 px-2 rounded">Buy</a>
                    </div>
                    {/* Product 8 */}
                    <div className="relative text-center">
                        <img className="transition-transform duration-200 hover:scale-[1.1] " style={{ width: '80%', height: 'auto', border: '10px solid lightpink', borderRadius: '34px'}} src={Shirt8} alt="Styler" />
                        <h2 className="font-serif text-lg mt-6">Button-Down Shirt with Cuffed Sleeves</h2>
                        <h3 className="font-bold text-lg">₹ 1,460 inc. GST</h3>
                        <a href="/Payment" className="inline-block mt-2 bg-red-500 text-white py-1 px-2 rounded">Buy</a>
                    </div>
                        {/* Product 9 */}
                                        <div className="relative text-center">
                        <img className="transition-transform duration-200 hover:scale-[1.1] " style={{ width: '80%', height: 'auto', border: '10px solid lightpink', borderRadius: '34px' }} src={Shirt9} alt="Styler" />
                        <h2 className="font-serif text-lg mt-6">Women Striped Regular Fit Shirt</h2>
                        <h3 className="font-bold text-lg">₹ 2,950 inc. GST</h3>
                        <a href="/Payment" className="inline-block mt-2 bg-red-500 text-white py-1 px-2 rounded">Buy</a>
                    </div>
                    {/* Product 10 */}
                    <div className="relative text-center">
                        <img className="transition-transform duration-200 hover:scale-[1.1] " style={{ width: '80%', height: 'auto', border: '10px solid lightpink', borderRadius: '34px' }} src={Shirt10} alt="Styler" />
                        <h2 className="font-serif text-lg mt-6">Shaila Handblock Cotton Shirt</h2>
                        <h3 className="font-bold text-lg">₹ 3,000 inc. GST</h3>
                        <a href="/Payment" className="inline-block mt-2 bg-red-500 text-white py-1 px-2 rounded">Buy</a>
                    </div>
                    {/* Product 11 */}
                    <div className="relative text-center">
                        <img className="transition-transform duration-200 hover:scale-[1.1]" style={{ width: '80%', height: 'auto', border: '10px solid lightpink', borderRadius: '34px' }} src={Shirt11} alt="Styler" />
                        <h2 className="font-serif text-lg mt-6">Alina Shirt</h2>
                        <h3 className="font-bold text-lg">₹ 3,460 inc. GST</h3>
                        <a href="/Payment" className="inline-block mt-2 bg-red-500 text-white py-1 px-2 rounded">Buy</a>
                    </div>
                    {/* Product 12 */}
                    <div className="relative text-center">
                        <img className="transition-transform duration-200 hover:scale-[1.1] " style={{ width: '80%', height: 'auto', border: '10px solid lightpink' , borderRadius: '34px' }} src={Shirt12} alt="Styler" />
                        <h2 className="font-serif text-lg mt-6">Floral Print Satin Shirt</h2>
                        <h3 className="font-bold text-lg">₹ 1,350 inc. GST</h3>
                        <a href="/Payment" className="inline-block mt-2 bg-red-500 text-white py-1 px-2 rounded">Buy</a>
                    </div>
                </div>
            </section>
            <div className='bg-orange-100'>
                <center>
                    <h2 className='font-bold text-3xl '>Add a wow factor with Shirts!..</h2>
                </center>
                <h3 className='mt-6 text-lg'>
                    Short kurtis always keep up with flaunting trends. It depicts the traditional Indian flavor. This is a prevalent Indian garment for women that is customized accordingly as per the trends. Kurtis is the most styled clothing with jeans and comfortable pants. These signify an ultra-trendy ethnic look and fashion versatility. Kessa has derived a typical moderate collection of short kurtis for a casual and formal look.
                    At www.kessa.com, explore the categories of short kurti for women and flaunt it your way.
                    Here are some of the key factors that encourage you to buy your favorite kurtis from Kesaa:
                    Fabric material - Our kurtis are carefully woven and prepared with super comfy fabrics. It allows the proper insulation of air to beat the heat.
                    Rainbow of colors - We have multiple colors in varied handprinted short kurtis for every Indian complexion. Along with the beautiful fabric colors, the handprints colors are also customized for setting up an attractive contrast. These Kurtis are an absolute piece to sway the fashion world.
                    Fabulous comfort - Kessa focuses to offer you next-level comfort. The cotton fabric is supremely comfortable and less toxic for your skin. The beautifully carved silhouette shape your curves and are perfect to keep your body movements flexible. Our collection of kurtis are a comfortable space for the sweltering days.
                </h3>
            </div>
            <footer className="bg-gray-700 text-black text-center p-4 fixed bottom-0 w-full">
        <a href="https://www.instagram.com/celebrity_fashion_decode/?hl=en" className="text-white">
            @StylerwommensClothing
          </a>
        <p>follow us on Instagram&copy;</p>
        <p>
          
        </p>
      </footer>
        </div>           
    );
};

