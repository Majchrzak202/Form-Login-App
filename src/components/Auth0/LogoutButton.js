import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import './LoginButton.css'
import { motion } from "framer-motion";

const LogoutButon = () => {
    const {logout, isAuthenticated} = useAuth0()
    return isAuthenticated && (
        <motion.button
        whileHover={{opacity: 1}} className='button' onClick={logout}>Logout</motion.button>
    )
}

export default LogoutButon; 