import React from "react";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";
/* import LoginButton from "../Auth0/LoginButton";
import LogoutButon from "../Auth0/LogoutButton"; */

const Navbar = ({ isAuthenticated, user }) => {
  const navigate = useNavigate();

  const loginHandler = (e) => {
    e.preventDefault();
    navigate("/login");
  };

  return (
    <div className="navbar">
      {isAuthenticated && <p className="text-block"> {user.name}</p>}
      <img
        src="https://cryptologos.cc/logos/shiba-inu-shib-logo.png?v=022"
        className="user-img"
        alt="userLogo"
      ></img>
      <button onClick={loginHandler} className="button">
        LOGIN
      </button>
      {/*   <LoginButton />
      <LogoutButon /> */}
    </div>
  );
};

export default Navbar;
