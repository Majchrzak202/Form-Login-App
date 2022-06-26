import React from "react";
import "./UserPanel.css";
import UsersList from "./UsersList";

import { motion } from "framer-motion";

const UserPanel = ({ users }) => {
  /* const date = new Date(user.updated_at);
  const year = date.getFullYear();
  const month = date.toLocaleString("en-US", { month: "long" }); */

  return (
    <div className="panel">
      <div className="user-welcome">
        <h1>
          Hi {'Mark'} youre with us from {'03'} {'2022'}
        </h1>
        <p>
          You're referal status is{" "}
          <motion.span
            whileHover={{ scale: 1.5 }}
            style={{ color: "gold", fontWeight: 800 }}
          >
            GOLDEN
          </motion.span>
        </p>
      </div>

      <div className="panel">
        {/* <UsersList users={users} /> */}
      </div>
    </div>
  );
};

export default UserPanel;
