import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/UI/Navbar";
import Header from "./components/UI/Header";
import AddUserForm from "./components/Form/AddUserForm";
import Footer from "./components/UI/Footer";
import UserPanel from "./components/UserPanel/UserPanel";
import useFetch from "./hooks/useFetch";

import { Routes, Route } from "react-router-dom";
import Signup from "./components/pages/Signup";
import Login from "./components/pages/Login";
import Home from "./components/pages/Home";
import ProtectedRoute from "./components/pages/ProtectedRoute";

const api = {
  base: "https://login-form-test-project-default-rtdb.europe-west1.firebasedatabase.app/users.json",
};

function App() {
  const [users, setUsers] = useState([]);
  const [loginIsShown, setLoginIsShown] = useState(false);

  const showLoginModal = () => {
    setLoginIsShown(true);
  };

  const hideLoginModal = () => {
    setLoginIsShown(false);
  };

  /* const { sendRequest: fetchData } = useFetch(); */
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
      <Navbar showLoginModal={showLoginModal} />
      {loginIsShown && <Login hideLoginModal={hideLoginModal} />}
      <Routes>
        <Route path="/signup" element={<Signup />}></Route>
        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        ></Route>
      </Routes>
      <Header />
      <AddUserForm saveUserData={saveUserData} />
      <Footer />
    </div>
  );
}

export default App;
