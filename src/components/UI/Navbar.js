import React from "react";
import "./Navbar.css";
import LoginButton from "../Auth0/LoginButton";
import LogoutButon from "../Auth0/LogoutButton";


const Navbar = ({isAuthenticated, user}) => {

  console.log(user)
  return (
      <div className='navbar'>
          {/* <img src="https://cryptologos.cc/logos/bitcoin-cash-bch-logo.png?v=022" className='logo' alt='logo'/> */}
          { isAuthenticated && <p className='text-block'>  {user.name}</p>}
          <img src="https://cryptologos.cc/logos/shiba-inu-shib-logo.png?v=022" className='user-img' alt='userLogo'></img>
          <LoginButton/>
          <LogoutButon/>
         {/*  <button className='button'>LOGIN</button> */}
      </div>
  )
};

export default Navbar;
