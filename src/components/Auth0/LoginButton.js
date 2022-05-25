import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "./LoginButton.css";
import { motion } from "framer-motion";

const LoginButton = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();
  return (
    !isAuthenticated && (
      <motion.button
        whileHover={{ opacity: 0.9 }}
        layout
        className="button"
        onClick={() => loginWithRedirect()}
      >
        Login
      </motion.button>
    )
  );
};

export default LoginButton;
