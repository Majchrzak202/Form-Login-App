import React from "react";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/UserAuthContextProvider";

const Navbar = () => {
  const navigate = useNavigate();
  const { logout, user } = useAuth();

  const loginHandler = (e) => {
    e.preventDefault();
    navigate("/login");
  };

  const logoutHandler = (e) => {
    e.preventDefault();
    logout();
    navigate("/login");
  };

  return (
    <div className="navbar">
      <img
        src="https://cryptologos.cc/logos/shiba-inu-shib-logo.png?v=022"
        className="user-img"
        alt="userLogo"
      ></img>
      {!user ? (
        <button onClick={loginHandler} className="button">
          LOGIN
        </button>
      ) : (
        <button onClick={logoutHandler} className="button">
          LOGOUT
        </button>
      )}
    </div>
  );
};

export default Navbar;
