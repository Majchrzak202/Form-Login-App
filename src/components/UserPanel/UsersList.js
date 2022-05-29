import React from "react";
import User from "./User";
import "./UsersList.css";

const UsersList = ({ users }) => {
  return (
    <div className="users">
      <div className="referals">These are you're Referals!</div>
      <ul>
        {users.map((user) => (
          <User
            key={user.id}
            name={user.name}
            surname={user.surname}
            email={user.email}
            phone={user.phone}
          />
        ))}
      </ul>
    </div>
  );
};

export default UsersList;
