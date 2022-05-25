import React from "react";
import "./Header.css";
import { motion } from "framer-motion";

const Header = ({ isSubmited }) => {

    /* const variants= {
        visible: {opacity: 1}, 
        hidden: {opacity:0},
        animate: {y: 30}
        
    } */

  return isSubmited ? null : (
    <motion.div
   /*  initial='hidden'
    animate='visible'
    variants={variants} */
       animate={{ y: -30 }}
      transition={{type: "spring", stiffness: 100, delay: 1}}
      className="header"
    >
      <h1>Register now and take a lifetime benefits!</h1>
      <p>
        Sign up and grab juicy 30% discount on all future purchashes, free
        delivery and more!
      </p>
    </motion.div>
  );
};

export default Header;
