import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
      <div className='navbar'>
          {/* <img src="https://cryptologos.cc/logos/bitcoin-cash-bch-logo.png?v=022" className='logo' alt='logo'/> */}
          <p className='text-block'> UserName</p>
          <img src="https://cryptologos.cc/logos/shiba-inu-shib-logo.png?v=022" className='user-img' alt='userLogo'></img>
          <button className='button'>LOGIN</button>
      </div>
  )
};

export default Navbar;
