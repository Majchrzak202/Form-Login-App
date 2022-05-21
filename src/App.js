import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/UI/Navbar";
import Header from "./components/UI/Header";
import AddUserForm from "./components/Form/AddUserForm";
import Footer from "./components/UI/Footer";
import UserPanel from "./components/UserPanel/UserPanel";
import { useAuth0 } from "@auth0/auth0-react";

function App() {
  const [isSubmited, setIsSubmited] = useState(false);
  const [users, setUsers] = useState([])
  const {isAuthenticated} = useAuth0()

  useEffect(() => {
    fetch(
      "https://login-form-test-project-default-rtdb.europe-west1.firebasedatabase.app/users.json"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const loadedData = [];

        for (const key in data) {
          loadedData.push({
            id: key,
            name: data[key].name,
            surname: data[key].surname,
            email: data[key].email,
            phone: data[key].phone,
          });
        }
        setUsers(loadedData);
      });
  }, []);

  const saveUserData = (data) => {
    fetch(
      "https://login-form-test-project-default-rtdb.europe-west1.firebasedatabase.app/users.json",
      {
        method: "POST",
        body: JSON.stringify(data),
      }
    );
  };

  return (
    <div className="App">
      <Navbar />
      { !isAuthenticated && <Header isSubmited={isSubmited} />}
      {!isAuthenticated && <AddUserForm
        isSubmited={isSubmited}
        setIsSubmited={setIsSubmited}
        saveUserData={saveUserData}
      />}
      {isAuthenticated && <UserPanel users={users}/>}
      <Footer />
    </div>
  );
}

export default App;
