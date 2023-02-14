import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js";
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Service from './Service';
import Contact from './Contact';
import Navber from './Navber';
import "./App.css";
import Footer from './Footer';

const App = () => {
  return (
    <>
      <BrowserRouter>
      <Navber/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/service' element={<Service/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='*' element={<Navigate to='/' replace/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}
export default App;