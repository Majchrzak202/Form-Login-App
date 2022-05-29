import React from "react";

const User = ({ name, surname, email, phone }) => {
  return (
    <li>
      {name} {email}
    </li>
  );
};

export default User;
