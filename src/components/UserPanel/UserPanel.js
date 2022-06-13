import React from "react";
import "./UserPanel.css";
import UsersList from "./UsersList";
import ImageForm from "../ImageAdd/ImageForm";
import { motion } from "framer-motion";

const UserPanel = ({ users, user }) => {
  const date = new Date(user.updated_at);
  const year = date.getFullYear();
  const month = date.toLocaleString("en-US", { month: "long" });

  return (
    <div className="panel">
      <div className="user-welcome">
        <h1>
          Hi {user.given_name} youre with us from {month} {year}
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
        <UsersList users={users} />
      </div>
      <ImageForm />
      <div></div>
    </div>
  );
};

export default UserPanel;
