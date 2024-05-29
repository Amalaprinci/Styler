import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

import { Link } from 'react-router-dom'
export const Contact= () =>
   {
  const navigate = useNavigate();

  // const handleSubmit = (event) => 
  //   {
  //   event.preventDefault();
  //   const username = event.target.username.value;
  //   const password = event.target.password.value;
  //   const message = event.target.message.value;

  //   if (!username || !password || !message)
  //      {
  //     alert('Please fill in all fields.');
  //     return;
  //   }

  //   // Redirect to the home page after successful submission
  //   navigate('/Home');
  // };
  useEffect(() => {
    
    const existingScript = document.querySelector('script[src="//js.hsforms.net/forms/embed/v2.js"]');

    if (!existingScript) {
      const script = document.createElement('script');
      script.src = '//js.hsforms.net/forms/embed/v2.js';
      script.type = 'text/javascript';
      script.charset = 'utf-8';
      script.async = true;

      script.onload = () => {
        if (window.hbspt) {
          window.hbspt.forms.create({
            region: 'na1',
            portalId: '46274817',
            formId: '7efb8af5-8582-4e44-a267-a9a3692386d4',
            target: '#hubspotForm'
          });
        }
      };

      document.body.appendChild(script);
    } else {
      // Script already exists, just create the form
      if (window.hbspt) {
        window.hbspt.forms.create({
          region: 'na1',
          portalId: '46274817',
          formId: '7efb8af5-8582-4e44-a267-a9a3692386d4',
          target: '#hubspotForm'
        });
      }
    }

    // Cleanup function
    return () => {
      const formContainer = document.querySelector('#hubspotForm');
      if (formContainer) {
        formContainer.innerHTML = '';
      }
    };
  }, []);
    
    return (
        <div className="bg-lightblue font-sans bg-orange-100">
        <header className="bg-pink-200 text-black p-5 text-center">
          <h1 className="relative left-0 text-4xl">Welcome to Women's Clothing</h1>
        </header>
        {/* <div className="menu-toggle absolute top-2 right-2 cursor-pointer z-50 block md:hidden" onClick={toggleMenu}>
          <div className="bar w-6 h-0.5 bg-white my-1"></div>
          <div className="bar w-6 h-0.5 bg-white my-1"></div>
          <div className="bar w-6 h-0.5 bg-white my-1"></div>
        </div> */}
         <div className=" absolute top-[13%] left-[30%] text-2xl">
         <Link to='/Home' className="text-white font-bold ml-10 no-underline">Home</Link>
          <Link to='/Product' className="text-white font-bold ml-10 no-underline">Product</Link>
          <Link to='/MyProfile' className="text-white font-bold ml-10 no-underline">My Profile</Link>
          <Link to='/Payment' className="text-white font-bold ml-10 no-underline"  >Payment</Link>
          <Link to='/Aboutus' className="text-white font-bold ml-10 no-underline">Aboutus</Link>
      </div>
        
        
        <nav className=" md:block bg-gray-700 text-white p-6 text-center">
        <ul className="list-none p-0 m-0">
          <li className="inline-block relative mr-2">
            <div className="divv relative h-5 mr-96">
              {/* <img  className="transition-transform duration-500 hover:scale-150" src={line}    alt="Styler" /> */}
            </div>
            {/* <h1 className="relative right-6">STYLER</h1>
            <ul className="h-10hidden absolute bg-gray-700 min-w-max">
              <li className="block">
                <a href="product.html" className="block p-2">Product</a>
              </li>
              <li className="block">
                <a href="cart.html" className="block p-2">Cart</a>
              </li>
              <li className="block">
                <a href="#" className="block p-2">My Profile</a>
              </li>
              <li className="block">
                <a href="#" className="block p-2">About Us</a>
              </li>
            </ul> */}
          </li>
        </ul>
      </nav>
      {/* <form id="contactForm" className=" h-[650px] bg-orange-100 p-5" onSubmit={handleSubmit}>
          <table className="mx-auto">
            <tbody>
              <tr>
                <td className="p-2 mt-10"><h3>Username or email*</h3></td>
                <td className="p-2 mt-10"><h3><input type="text" name="username" placeholder="Enter your Username or email" className=" p-2 border border-gray-300 rounded" /></h3></td>
              </tr>
              <tr>
                <td className="p-2 mt-10"><h3>Password*</h3></td>
                <td className="p-2 mt-10"><h3><input type="password" name="password" placeholder="Enter your password" className="p-2 border border-gray-300 rounded mt-10" /></h3></td>
              </tr>
              <tr>
                <td className="p-2 mt-10"><h3>Your Message</h3></td>
                <td className="p-2 mt-10"><h3><input type="text" name="message" placeholder="Type your message" className="p-2 border border-gray-300 rounded w-full mt-10" style={{ height: '100px' }} /></h3></td>
              </tr>
            </tbody>
          </table>
          <button id="btn1" className="mt-10 absolute right-[50%] px-5 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">SUBMIT</button>
        </form> */}
        <div className='bg-orange-100'>
        <div id="hubspotForm" className='absolute top-[28%] left-[41%]'>

</div>
</div>
        <footer className="bg-gray-700 text-black text-center p-4 ">
        <a href="https://www.instagram.com/celebrity_fashion_decode/?hl=en" className="text-white">
            @StylerwommensClothing
          </a>
        <p>follow us on Instagram&copy;</p>
        <p>
          
        </p>
      </footer>
      </div>

    );
}
