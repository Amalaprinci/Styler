import React from 'react';
import { Link } from 'react-router-dom'
export const Payment= () => {
  const toggleMenu = () => {
    const nav = document.querySelector('nav');
    nav.classList.toggle('hidden');
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm()) {
      alert('Payment Successful!');
    }
  };

  const validateForm = () => {
    const cardNumber = document.getElementById('card-number').value;
    const cardHolder = document.getElementById('card-holder').value;
    const expiry = document.getElementById('expiry').value;
    const cvv = document.getElementById('cvv').value;
    const billingAddress = document.getElementById('billing-address').value;

    if (!/^\d{16}$/.test(cardNumber)) {
      alert('Please enter a valid card number.');
      return false;
    }

    if (!cardHolder.trim()) {
      alert('Please enter the card holder name.');
      return false;
    }

    if (!/^\d{2}\/\d{2}$/.test(expiry)) {
      alert('Please enter a valid expiry date in MM/YY format.');
      return false;
    }

    if (!/^\d{3}$/.test(cvv)) {
      alert('Please enter a valid CVV.');
      return false;
    }

    if (!billingAddress.trim()) {
      alert('Please enter the billing address.');
      return false;
    }

    return true;
  };

  return (
    <div className="bg-lightblue font-sans">
      <header className="bg-pink-200 text-black p-5 text-center">
        <h1 className="relative left-0 text-4xl">Welcome to Women's Clothing</h1>
      </header>
      {/* <div className="menu-toggle absolute top-2 right-2 cursor-pointer z-50" onClick={toggleMenu}>
        <div className="bar bg-white w-6 h-0.5 my-1 mx-auto"></div>
        <div className="bar bg-white w-6 h-0.5 my-1 mx-auto"></div>
        <div className="bar bg-white w-6 h-0.5 my-1 mx-auto"></div>
      </div> */}
      <div className=" absolute top-[13%] left-[25%] text-2xl">
        <Link to='/Home' className="text-white  font-bold ml-10 no-underline">Home</Link>
        <Link to='/Rhome' className="text-white font-bold ml-10 no-underline">Product</Link>
        <Link to='/About' className="text-white font-bold ml-10 no-underline">Contact Us</Link>
         <Link to='/MyProfile' className="text-white font-bold ml-10 no-underline">MyProfile</Link> 
        <Link to='/Aboutus' className="text-white font-bold ml-10 no-underline">Aboutus</Link>
    </div>
      <div className="search-bar bg-gray-300 p-2 absolute top-[12%] right-5 z-50">
        <input type="text" placeholder="Search..." className="w-44 p-2 border-none rounded" />
      </div>
      <nav className="md:block bg-gray-700 text-white p-6 text-center">
        <ul className="list-none p-0 m-0">
          <li className="inline-block relative mr-2">
            <div className="divv relative h-5 mr-96">
              {/* <img src="c:\Users\Peter\Downloads\New folder\4.png" alt="Logo" /> */}
            </div>
            {/* <h1 className="text-lg">STYLER</h1>
            <ul className="hidden md:flex absolute bg-gray-800">
              <li><a href="home.html" className="p-2 block">Home</a></li>
              <li><a href="product.html" className="p-2 block">Product</a></li>
              <li><a href="#" className="p-2 block">Cart</a></li>
              <li><a href="#" className="p-2 block">My Profile</a></li>
              <li><a href="#" className="p-2 block">About Us</a></li>
            </ul> */}
          </li>
        </ul>
      </nav>

      <section className=" h-[750px] bg-orange-100 p-5">
        <div className="container max-w-lg mx-auto p-5 ">
          <center>
            <h2 className="h text-3xl font-bold mb-4">Payment Details</h2>
          </center>
          <form id="payment-form" onSubmit={handleSubmit} className="flex flex-col">
            <label htmlFor="card-number" className="mt-4">Card Number</label>
            <input type="text" id="card-number" placeholder="Enter card number" required className="p-2 mt-1 border border-gray-300 rounded" />
            
            <label htmlFor="card-holder" className="mt-4">Card Holder Name</label>
            <input type="text" id="card-holder" placeholder="Enter card holder name" required className="p-2 mt-1 border border-gray-300 rounded" />
            
            <label htmlFor="expiry" className="mt-4">Expiry Date</label>
            <input type="text" id="expiry" placeholder="MM/YY" required className="p-2 mt-1 border border-gray-300 rounded" />
            
            <label htmlFor="cvv" className="mt-4">CVV</label>
            <input type="text" id="cvv" placeholder="Enter CVV" required className="p-2 mt-1 border border-gray-300 rounded" />
            
            <label htmlFor="billing-address" className="mt-4">Billing Address</label>
            <textarea id="billing-address" placeholder="Enter billing address" required className="p-2 mt-1 border border-gray-300 rounded"></textarea>
            
            <button type="submit" className="mt-6 p-2 bg-blue-600 text-white rounded hover:bg-blue-700">Pay Now</button>
          </form>
        </div>
      </section>

      <footer className="bg-gray-800 text-white text-center p-4 ">
        <p>&copy; Follow us on Instagram</p>
        <p>
          <a href="https://www.instagram.com/celebrity_fashion_decode/?hl=en" className="text-blue-400">@StylerWomen'sClothing</a>
        </p>
      </footer>
    </div>
  );
};

