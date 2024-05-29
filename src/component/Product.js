import { Link } from 'react-router-dom'
import Product1 from './pro1.png'
import Product2 from './pro2.png'
import Product3 from './pro3.png'
import Product4 from './pro4.png'
import Product5 from './pro5.png'
import Product6 from './pro6.png'
import Product7 from './pro7.png'
import Product8 from './pro8.png'
import Product9 from './pro9.png'
import Product10 from './pro10.png'
import Product11 from './pro11.png'
import Product12 from './pro12.png'
import Product13 from './pro13.png'
import Product14 from './pro14.png'
import Product15 from './pro15.png'
import Product16 from './pro16.png'


export const Product = () => {
    
    return (
        <div className="bg-lightblue font-sans">
            <header className="bg-pink-200 text-black p-5 text-center">
                <h1 className="relative left-0 text-4xl">Welcome to Women's Clothing</h1>
            </header>
            {/* Menu Toggle */}
            {/* <div className="menu-toggle" onClick={toggleMenu}>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </div> */}
            <div className=" absolute top-[13%] left-[30%] text-2xl">
        <Link to='/Home' className="text-white font-bold ml-10 no-underline">Home</Link>
        <Link to='/Contact' className="text-white font-bold ml-10 no-underline">Contact Us</Link>
        <Link to='/Payment' className="text-white font-bold ml-10 no-underline"  >Payment</Link>
        <Link to='/Aboutus' className="text-white font-bold ml-10 no-underline">Aboutus</Link>
    </div>
            {/* Search Bar */}
            <div className="search-bar bg-gray-300 p-2 absolute top-[13%] right-5 z-50">
                <input type="text" placeholder="Search..." className="w-48 py-2 px-4 rounded-full" />
            </div>
            {/* Navigation */}
            <nav className=" md:block bg-gray-700 text-white p-6 text-center">
        <ul className="list-none p-0 m-0">
          <li className="inline-block relative mr-2">
            <div className="divv relative h-5 mr-96"></div>
                {/* <ul>
                    <li>
                        <div className="divv"><img src="c:\Users\Peter\Downloads\New folder\4.png" alt="Logo" /></div>
                        <h1 className="text-center">STYLER</h1>
                        <ul>
                            <li><a href="home.html">Home</a></li>
                            <li><a href="product.html">Product</a></li>
                            <li><a href="cart.html">Cart</a></li>
                            <li><a href="#">My Profile</a></li>
                            <li><a href="#">About Us</a></li>
                        </ul> */}
                    </li>
                </ul>
            </nav>
            {/* Section */}
            <section className=" h-[3030px] bg-orange-100 p-5">
                {/* Products */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Product 1 */}
                    <div className="relative text-center">
                        <img className="transition-transform duration-200 hover:scale-[1.1] " style={{ width: '80%', height: 'auto', border: '10px solid lightpink', borderRadius: '34px' }} src={Product1} alt="Styler" />
                        <h2 className="font-serif text-lg mt-6">Women Anarkali Kurti</h2>
                        <h3 className="font-bold text-lg">₹ 2,950 inc. GST</h3>
                        <a href="/Payment" className="inline-block mt-2 bg-red-500 text-white py-1 px-2 rounded">Buy</a>
                    </div>
                    {/* Product 2 */}
                    <div className="relative text-center">
                        <img className="transition-transform duration-200 hover:scale-[1.1] " style={{ width: '80%', height: 'auto', border: '10px solid lightpink', borderRadius: '34px' }} src={Product2} alt="Styler" />
                        <h2 className="font-serif text-lg mt-6" > Straight Cut Kurti</h2>
                        <h3 className="font-bold text-lg">₹ 1,950 inc. GST</h3>
                        <a href="/Payment" className="inline-block mt-2 bg-red-500 text-white py-1 px-2 rounded">Buy</a>
                    </div>
                    {/* Product 3 */}
                    <div className="relative text-center">
                        <img className="transition-transform duration-200 hover:scale-[1.1] " style={{ width: '80%', height: 'auto', border: '10px solid lightpink', borderRadius: '34px' }} src={Product3} alt="Styler" />
                        <h2 className="font-serif text-lg mt-6">Women Lace Kurti</h2>
                        <h3 className="font-bold text-lg">₹ 2,000 inc. GST</h3>
                        <a href="/Payment" className="inline-block mt-2 bg-red-500 text-white py-1 px-2 rounded">Buy</a>
                    </div>
                    {/* Product 4 */}
                    <div className="relative text-center">
                        <img className="transition-transform duration-200 hover:scale-[1.1] " style={{ width: '80%', height: 'auto', border: '10px solid lightpink', borderRadius: '34px' }} src={Product4} alt="Styler" />
                        <h2 className="font-serif text-lg mt-6">Women Striped Regular Asymmetrical</h2>
                        <h3 className="font-bold text-lg">₹ 2,950 inc. GST</h3>
                        <a href="/Payment" className="inline-block mt-2 bg-red-500 text-white py-1 px-2 rounded">Buy</a>
                    </div>
                   {/* Product 5 */}
                   <div className="relative text-center">
                        <img className="transition-transform duration-200 hover:scale-[1.1] " style={{ width: '80%', height: 'auto', border: '10px solid lightpink', borderRadius: '34px' }} src={Product5} alt="Styler" />
                        <h2 className="font-serif text-lg mt-6">Overlay Kurti</h2>
                        <h3 className="font-bold text-lg">₹ 2,550 inc. GST</h3>
                        <a href="/Payment" className="inline-block mt-2 bg-red-500 text-white py-1 px-2 rounded">Buy</a>
                    </div>
                    {/* Product 6 */}
                    <div className="relative text-center">
                        <img className="transition-transform duration-200 hover:scale-[1.1] " style={{ width: '80%', height: 'auto', border: '10px solid lightpink', borderRadius: '34px' }} src={Product6} alt="Styler" />
                        <h2 className="font-serif text-lg mt-6">handeri Thread Work</h2>
                        <h3 className="font-bold text-lg">₹ 1,450 inc. GST</h3>
                        <a href="/Payment" className="inline-block mt-2 bg-red-500 text-white py-1 px-2 rounded">Buy</a>
                    </div>
                    {/* Product 7 */}
                    <div className="relative text-center">
                        <img className="transition-transform duration-200 hover:scale-[1.1] " style={{ width: '80%', height: 'auto', border: '10px solid lightpink', borderRadius: '34px' }} src={Product7} alt="Styler" />
                        <h2 className="font-serif text-lg mt-6">Drashti Dhami Violet Embroidered suit</h2>
                        <h3 className="font-bold text-lg">₹ 3,950 inc. GST</h3>
                        <a href="/Payment" className="inline-block mt-2 bg-red-500 text-white py-1 px-2 rounded">Buy</a>
                    </div>
                    {/* Product 8 */}
                    <div className="relative text-center">
                        <img className="transition-transform duration-200 hover:scale-[1.1] " style={{ width: '80%', height: 'auto', border: '10px solid lightpink', borderRadius: '34px' }} src={Product8} alt="Styler" />
                        <h2 className="font-serif text-lg mt-6">Peach Cotton</h2>
                        <h3 className="font-bold text-lg">₹ 950 inc. GST</h3>
                        <a href="/Payment" className="inline-block mt-2 bg-red-500 text-white py-1 px-2 rounded">Buy</a>
                    </div>
                    {/* Product 9 */}
                    <div className="relative text-center">
                        <img className="transition-transform duration-200 hover:scale-[1.1] " style={{ width: '80%', height: 'auto', border: '10px solid lightpink', borderRadius: '34px' }} src={Product9} alt="Styler" />
                        <h2 className="font-serif text-lg mt-6"> Regular Fit Short Top </h2>
                        <h3 className="font-bold text-lg">₹ 650 inc. GST</h3>
                        <a href="/Payment" className="inline-block mt-2 bg-red-500 text-white py-1 px-2 rounded">Buy</a>
                    </div>
                    {/* Product 10 */}
                    <div className="relative text-center">
                        <img className="transition-transform duration-200 hover:scale-[1.1] " style={{ width: '80%', height: 'auto', border: '10px solid lightpink', borderRadius: '34px' }} src={Product10} alt="Styler" />
                        <h2 className="font-serif text-lg mt-6">Women Striped Regular Fit Shirt</h2>
                        <h3 className="font-bold text-lg">₹ 750 inc. GST</h3>
                        <a href="/Payment" className="inline-block mt-2 bg-red-500 text-white py-1 px-2 rounded">Buy</a>
                    </div>
                    {/* Product 11 */}
                    <div className="relative text-center">
                        <img className="transition-transform duration-200 hover:scale-[1.1] " style={{ width: '80%', height: 'auto', border: '10px solid lightpink', borderRadius: '34px' }} src={Product11} alt="Styler" />
                        <h2 className="font-serif text-lg mt-6">Women Striped  Fit </h2>
                        <h3 className="font-bold text-lg">₹ 950 inc. GST</h3>
                        <a href="/Payment" className="inline-block mt-2 bg-red-500 text-white py-1 px-2 rounded">Buy</a>
                    </div>
                    {/* Product 12 */}
                    <div className="relative text-center">
                        <img className="transition-transform duration-200 hover:scale-[1.1] " style={{ width: '80%', height: 'auto', border: '10px solid lightpink', borderRadius: '34px' }} src={Product12} alt="Styler" />
                        <h2 className="font-serif text-lg mt-6">Women Suit set</h2>
                        <h3 className="font-bold text-lg">₹ 2,950 inc. GST</h3>
                        <a href="/Payment" className="inline-block mt-2 bg-red-500 text-white py-1 px-2 rounded">Buy</a>
                    </div>
                    {/* Product 13 */}
                    <div className="relative text-center">
                        <img className="transition-transform duration-200 hover:scale-[1.1] " style={{ width: '80%', height: 'auto', border: '10px solid lightpink', borderRadius: '34px' }} src={Product13} alt="Styler" />
                        <h2 className="font-serif text-lg mt-6"> Regular Fit Long Kurthi</h2>
                        <h3 className="font-bold text-lg">₹ 4,950 inc. GST</h3>
                        <a href="/Payment" className="inline-block mt-2 bg-red-500 text-white py-1 px-2 rounded">Buy</a>
                    </div>
                    {/* Product 14 */}
                    <div className="relative text-center">
                        <img className="transition-transform duration-200 hover:scale-[1.1] " style={{ width: '80%', height: 'auto', border: '10px solid lightpink', borderRadius: '34px' }} src={Product14} alt="Styler" />
                        <h2 className="font-serif text-lg mt-6">Full kurthi</h2>
                        <h3 className="font-bold text-lg">₹ 1,050 inc. GST</h3>
                        <a href="/Payment" className="inline-block mt-2 bg-red-500 text-white py-1 px-2 rounded">Buy</a>
                    </div>
                     {/* Product 15 */}
                     <div className="relative text-center">
                        <img className="transition-transform duration-200 hover:scale-[1.1] " style={{ width: '80%', height: 'auto', border: '10px solid lightpink', borderRadius: '34px' }} src={Product15} alt="Styler" />
                        <h2 className="font-serif text-lg mt-6">Women  full Suit</h2>
                        <h3 className="font-bold text-lg">₹ 3,000  inc. GST</h3>
                        <a href="/Payment" className="inline-block mt-2 bg-red-500 text-white py-1 px-2 rounded">Buy</a>
                    </div>
                     {/* Product 16 */}
                     <div className="relative text-center">
                        <img className="transition-transform duration-200 hover:scale-[1.1] " style={{ width: '80%', height: 'auto', border: '10px solid lightpink', borderRadius: '34px' }} src={Product16} alt="Styler" />
                        <h2 className="font-serif text-lg mt-6">Casual Sleve kurthi</h2>
                        <h3 className="font-bold text-lg">₹ 800 inc. GST</h3>
                        <a href="/Payment" className="inline-block mt-2 bg-red-500 text-white py-1 px-2 rounded">Buy</a>
                    </div>
                </div>


                <h1 className="relative left-[30%] text-4xl mt-6">Tweaking the Trend in Comfort</h1>
                <p className="text-xl mt-6">
                If you want to enhance your appearance, dresses can help you with that. 
                It might be a long maxi dress or a floral flared dress; dresses can always make you look glamorous. 
                Check out dresses for women online for every occasion. Do you want something to wear for your office party or dinner with your best friends?
                 Browse for women dresses online at our website. Please take a look at our collection of dresses Styler. We have clothes in all ranges. 
                </p>
             <section className="mt-10">
                 <p className="text-xl mt-5">
                 Because of the versatile nature of dresses, they can easily blend in with any occasion. 
                 If you need an easy way to transform your look, you need a gorgeous dress from our store.
                  Eliminate the need to visit stress and check out women dresses online.
                 </p>

</section>
<section className="mt-10">
                 <p className="text-xl mt-5">
                 The kind of clothes you wear is known to define your personality. Therefore, your fashion sense can be used as a means to express yourself. 
                 With Styler, you will get access to beautiful women’s dresses online to enhance your personality for the better.
                 </p>
                 
</section>
<section className="mt-10">
    <p className="text-xl mt-5">
    <div className="font-bold text-lg mt-6">Women cotton pants:</div> Tailored out of premium cotton, our classic collection of cotton pants slip easily into your kurta, tops, and tunics. Cotton pants potentially fit almost every style and look. Women of all ages look really beautiful. Paired with contrasting hues of tops and tunics, cotton pants create a unique style statement. Being a natural fiber, cotton clothing maintains proper insulation of air for your skin to breathe easily in summers. Explore the women cotton clothing online collection for unique pieces.

    <div className="font-bold text-lg mt-6">Kurta-dupatta set:</div> Amongst the women wear, kurta is a popular one. Our kurta dupatta set is a piece for a perfectly designed silhouette. The finest weave of cotton gives it a lustrous appeal. Vivid hues of Kurtas with the embellishment of Aari embroidery, beads ornamentation, and tassel details add charm to your aura. Choose this among the women clothes for an elegant look. Flattering and flared kurtas with comfortable bottoms give you an exquisite look.

    <div className="font-bold text-lg mt-6">Loungewear set:</div> Loungewear is the most comfortable clothing for everyone. It is considered as a comfy choice in women wear. Adorned with hand block and Mughal prints, our loungewear set gives you an exquisite look. To beat the challenges of the sultry days, cotton loungewear is supremely comfortable. Choose these ladieswear with intricating prints and charming colors fill your day with energy.
    </p>
</section>
      </section>
      <footer className="bg-gray-700 text-black text-center  p-4 l">
        <p>&copy; follow us on Instagram</p>
        <p>
          <a href="https://www.instagram.com/celebrity_fashion_decode/?hl=en" className="text-white">
            @StylerwommensClothing
          </a>
        </p>
      </footer>
      </div>
        
    );
}