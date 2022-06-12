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
  const [users, setUsers] = useState([]);
  const { isAuthenticated, user } = useAuth0();
  

  const fetchData = async () => {
    const response = await fetch(
      "https://login-form-test-project-default-rtdb.europe-west1.firebasedatabase.app/users.json"
    );

    if (!response.ok) {
      throw new Error("Request failed");
    }

    const data = await response.json();

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
  };

  useEffect(() => {
    fetchData()
  }, [])
  

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
      <Navbar isAuthenticated={isAuthenticated} user={user} />
      {!isAuthenticated && <Header isSubmited={isSubmited} />}
      {!isAuthenticated && (
        <AddUserForm
          isSubmited={isSubmited}
          setIsSubmited={setIsSubmited}
          saveUserData={saveUserData}
        />
      )}

      {isAuthenticated && (
        <UserPanel  user={user} users={users} />
      )}
      <Footer />
    </div>
  );
}

export default App;
