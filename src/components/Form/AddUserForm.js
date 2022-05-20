import React, { useState } from "react";
import "./AddUserForm.css";

const AddUserForm = ({ saveUserData, setIsSubmited, isSubmited }) => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const nameChangeHandler = (event) => {
    setName(event.target.value);
  };

  const surnameChangeHandler = (event) => {
    setSurname(event.target.value);
  };

  const emailChangeHandler = (event) => {
    setEmail(event.target.value);
  };

  const phoneChangeHanlder = (event) => {
    setPhone(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const userData = {
      name: name,
      surname: surname,
      email: email,
      phone: phone,
    };

    saveUserData(userData);
    setIsSubmited(true);

    setName("");
    setSurname("");
    setEmail("");
    setPhone("");
  };

  return isSubmited ? (
    <div className="submit-mesage">
      <div>
          <img alt='logo' className='logo-pic' src='https://cryptologos.cc/logos/shiba-inu-shib-logo.png?v=022'/>
          <h1>Thanks!</h1>
      <p> You are now a member of the pack, AUUU! Please Login to see all features </p></div>
    </div>
  ) : (
    <div className="section-form">
      <form>
        <div className="new-user">
          <label>Name</label>
          <input type="text" onChange={nameChangeHandler} value={name} />
        </div>
        <div className="new-user">
          <label>Surname</label>
          <input type="text" onChange={surnameChangeHandler} value={surname} />
        </div>
        <div className="new-user">
          <label>E-mail</label>
          <input type="email" onChange={emailChangeHandler} value={email} />
        </div>
        <div className="new-user">
          <label>Mobile number</label>
          <input type="number" onChange={phoneChangeHanlder} value={phone} />
        </div>
        <div className="div-form-button">
          <button onClick={submitHandler} className="form-button">
            Register!
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddUserForm;
