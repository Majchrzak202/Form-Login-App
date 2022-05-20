import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/UI/Navbar";
import Header from "./components/UI/Header";
import AddUserForm from "./components/Form/AddUserForm";
import Footer from "./components/UI/Footer";

function App() {
  const [isSubmited, setIsSubmited] = useState(false);

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
      {(isSubmited) ? null : <Header />}
      <AddUserForm isSubmited={isSubmited} setIsSubmited={setIsSubmited} saveUserData={saveUserData} />
      <Footer />
    </div>
  );
}

export default App;
