import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/UI/Navbar";
import Header from "./components/UI/Header";
import AddUserForm from "./components/Form/AddUserForm";
import Footer from "./components/UI/Footer";
import UserPanel from "./components/UserPanel/UserPanel";
import { useAuth0 } from "@auth0/auth0-react";
import useFetch from "./hooks/useFetch";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./components/pages/Signup";
import Login from "./components/pages/Login";
import Home from "./components/pages/Home";

const api = {
  base: "https://login-form-test-project-default-rtdb.europe-west1.firebasedatabase.app/users.json",
};

function App() {
  const [isSubmited, setIsSubmited] = useState(false);
  const [users, setUsers] = useState([]);
  const { isAuthenticated, user } = useAuth0();

  const { sendRequest: fetchData } = useFetch();
  const { sendRequest: postData } = useFetch();

  /* useEffect(() => {
    const applyData = (data) => {
      const loadedData = [];
      console.log("DATA");

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

    fetchData({ url: api.base }, applyData);
  }, [fetchData]); */

  const postingData = () => {
    console.log("Data posted to Database");
  };

  const saveUserData = (data) => {
    postData(
      {
        url: api.base,
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: data,
      },
      postingData
    );
  };

  return (
    <div className="App">
      <Router>
      <Navbar isAuthenticated={isAuthenticated} user={user} />
        <Routes>
          <Route path='/signup' element={<Signup/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/home' element={<Home/>}></Route>
        </Routes>
      </Router>
     
      {!isAuthenticated && <Header isSubmited={isSubmited} />}
      {!isAuthenticated && (
        <AddUserForm
          isSubmited={isSubmited}
          setIsSubmited={setIsSubmited}
          saveUserData={saveUserData}
        />
      )}

      {isAuthenticated && <UserPanel user={user} users={users} />}
      <Footer />
    </div>
  );
}

export default App;
