import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from './component/Home'
import { Payment } from './component/Payment'
import { Product } from './component/Product'
import { Contact } from './component/Contact'
import { AboutUs } from './component/AboutUs'
import { MyProfile } from './component/MyProfile'
import { Shirt} from './component/Shirt'
import { Kurthi} from './component/Kurthi'


function App()
{
  return(
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='Home' element={<Home/>}></Route>
      <Route path='Payment' element={<Payment/>}> </Route>
      <Route path='Product' element={<Product/>}> </Route>
      <Route path='Contact' element={<Contact/>}> </Route>
      <Route path='AboutUs' element={<AboutUs/>}> </Route>
      <Route path='MyProfile' element={<MyProfile/>}> </Route>
      <Route path='Shirt' element={<Shirt/>}> </Route>
      <Route path='Kurthi' element={<Kurthi/>}> </Route>

      </Routes></BrowserRouter>

  );
}
export default App;
