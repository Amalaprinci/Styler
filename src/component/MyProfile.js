import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaEnvelope, FaLock, FaUser, FaPhone } from 'react-icons/fa';

export const MyProfile = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const toggleForm = () => {
    setIsLogin(!isLogin);
    setMessage('');
    setErrors({});
    setName('');
    setMobile('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
  };

  const validateForm = () => {
    const newErrors = {};
    if (!email) newErrors.email = 'Email is required';
    if (!password) newErrors.password = 'Password is required';
    if (!isLogin) {
      if (!name) newErrors.name = 'Name is required';
      if (!mobile) newErrors.mobile = 'Mobile number is required';
      if (!email) newErrors.email = 'Email is required';
      if (!password) newErrors.password = 'Password is required';
      if (!confirmPassword) newErrors.confirmPassword = 'Confirm Password is required';
      if (password !== confirmPassword) newErrors.confirmPassword = 'Passwords do not match';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm()) {
      setMessage(isLogin ? 'Logged in successfully!' : 'Signed up successfully!');
      // Redirect to the Home page
      setTimeout(() => {
        navigate('/Home');
      }, 1000);
    }
  };

  return (
    <div className="bg-orange-100 font-sans min-h-screen">
      <header className="bg-pink-200 text-black p-5 text-center">
        <h1 className="text-4xl">Welcome to Women's Clothing</h1>
      </header>
      <div className="absolute top-[13%] left-[25%] text-2xl">
        <Link to='/Home' className="text-white font-bold ml-10 no-underline">Home</Link>
        <Link to='/Product' className="text-white font-bold ml-10 no-underline">Product</Link>
        <Link to='/Contact' className="text-white font-bold ml-10 no-underline">Contact Us</Link>
        <Link to='/Payment' className="text-white font-bold ml-10 no-underline">Payment</Link>
        <Link to='/Aboutus' className="text-white font-bold ml-10 no-underline">About Us</Link>
      </div>
     
      <nav className="md:block bg-gray-700 text-white p-6 text-center">
        <ul className="list-none p-0 m-0">
          <li className="inline-block relative mr-2">
            <div className="divv relative h-5 mr-96"></div>
          </li>
        </ul>
      </nav>
      <div className="flex items-center justify-center min-h-screen bg-orange-100">
        <div className="bg-white p-8 rounded-lg shadow-lg w-96">
          {isLogin ? (
            <div>
              <h2 className="text-2xl font-bold mb-4">Login</h2>
              <form onSubmit={handleSubmit}>
                <div className="mb-4 relative">
                  <label className="block text-gray-700">Email</label>
                  <div className="flex items-center border rounded-lg px-3 py-2">
                    <FaEnvelope className="mr-2 text-gray-400" />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full focus:outline-none"
                      placeholder="Enter your email"
                    />
                  </div>
                  {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                </div>
                <div className="mb-4 relative">
                  <label className="block text-gray-700">Password</label>
                  <div className="flex items-center border rounded-lg px-3 py-2">
                    <FaLock className="mr-2 text-gray-400" />
                    <input
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full focus:outline-none"
                      placeholder="Enter your password"
                    />
                  </div>
                  {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
                >
                  Login
                </button>
              </form>
              {message && <p className="mt-4 text-green-500">{message}</p>}
              <p className="mt-4 text-gray-600">
                Don't have an account?{' '}
                <button
                  onClick={toggleForm}
                  className="text-blue-500 hover:underline"
                >
                  Sign up
                </button>
              </p>
            </div>
          ) : (
            <div>
              <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
              <form onSubmit={handleSubmit}>
                <div className="mb-4 relative">
                  <label className="block text-gray-700">Name</label>
                  <div className="flex items-center border rounded-lg px-3 py-2">
                    <FaUser className="mr-2 text-gray-400" />
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full focus:outline-none"
                      placeholder="Enter your name"
                    />
                  </div>
                  {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
                </div>
                <div className="mb-4 relative">
                  <label className="block text-gray-700">Mobile</label>
                  <div className="flex items-center border rounded-lg px-3 py-2">
                    <FaPhone className="mr-2 text-gray-400" />
                    <input
                      type="text"
                      value={mobile}
                      onChange={(e) => setMobile(e.target.value)}
                      className="w-full focus:outline-none"
                      placeholder="Enter your mobile number"
                    />
                  </div>
                  {errors.mobile && <p className="text-red-500 text-sm">{errors.mobile}</p>}
                </div>
                <div className="mb-4 relative">
                  <label className="block text-gray-700">Email</label>
                  <div className="flex items-center border rounded-lg px-3 py-2">
                    <FaEnvelope className="mr-2 text-gray-400" />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full focus:outline-none"
                      placeholder="Enter your email"
                    />
                  </div>
                  {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                </div>
                <div className="mb-4 relative">
                  <label className="block text-gray-700">Password</label>
                  <div className="flex items-center border rounded-lg px-3 py-2">
                    <FaLock className="mr-2 text-gray-400" />
                    <input
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full focus:outline-none"
                      placeholder="Enter your password"
                    />
                  </div>
                  {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
                </div>
                <div className="mb-4 relative">
                  <label className="block text-gray-700">Confirm Password</label>
                  <div className="flex items-center border rounded-lg px-3 py-2">
                    <FaLock className="mr-2 text-gray-400" />
                    <input
                      type="password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      className="w-full focus:outline-none"
                      placeholder="Confirm your password"
                    />
                  </div>
                  {errors.confirmPassword && <p className="text-blue-300 text-sm">{errors.confirmPassword}</p>}
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-400 text-white py-2 rounded-lg hover:bg-pink-400"
                >
                  Sign Up
                </button>
              </form>
              {message && <p className="mt-4 text-blue-300">{message}</p>}
              <p className="mt-4 text-gray-600">
                Already have an account?{' '}
                <button
                  onClick={toggleForm}
                  className="text-blue-500 hover:underline"
                >
                  Login
                </button>
              </p>
            </div>
          )}
        </div>
      </div>
       <footer className="bg-gray-700 mt-24 text-black text-center p-4">
        <p>&copy; Follow us on Instagram</p>
        <p>
          <a href="https://www.instagram.com/celebrity_fashion_decode/?hl=en" className="text-white">@StylerwommensClothing</a>
        </p>
      </footer>
    </div>
  );
};

