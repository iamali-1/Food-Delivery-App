import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder";
import Footer from "./components/Footer/Footer";
import LoginPopup from "./components/LoginPopup/LoginPopup";

const App = () => {
  const [showlogin , setShowLogin] = useState(false);
  return (
    <>
    {showlogin?<LoginPopup setShowLogin = {setShowLogin}/>:<></>}
      <div className="app">
        <Navbar setShowLogin = {setShowLogin} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<PlaceOrder />} />
          <Route path="/footer" element={<Footer />} /> 
        </Routes>
      </div>
      
      <Footer />
    </>
  );
};

export default App;
