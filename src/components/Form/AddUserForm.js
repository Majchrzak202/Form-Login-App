import React, { useState } from "react";
import "./AddUserForm.css";
import { motion } from "framer-motion";

const AddUserForm = ({ saveUserData, setIsSubmited, isSubmited }) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredNameIsTouched, setEnteredNameIsTouched] = useState(false);

  const [enteredSurname, setEnteredSurname] = useState("");
  const [enteredSurnameIsTouched, setEnteredSurnameIsTouched] = useState(false);

  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredEmailIsTouched, setEnteredEmailIsTouched] = useState(false);

  const [enteredPhone, setEnteredPhone] = useState("");
  const [enteredPhoneIsTouched, setEnteredPhoneIsTouched] = useState(false);

  const enteredNameIsValid = enteredName.trim() !== "";
  const nameInputIsInvalid = !enteredNameIsValid && enteredNameIsTouched;

  const enteredSurnameIsValid = enteredSurname.trim() !== "";
  const surnameInputIsInvalid =
    !enteredSurnameIsValid && enteredSurnameIsTouched;

  const enteredEmailIsValid =
    enteredEmail.trim() !== "" && enteredEmail.includes("@");
  const emailInputIsInvalid = !enteredEmailIsValid && enteredEmailIsTouched;

  const enteredPhoneIsValid = enteredPhone.trim() !== "" && enteredPhone.length === 9;
  const phoneInputIsInvalid = !enteredPhoneIsValid && enteredPhoneIsTouched;

  let formIsValid = false;
  if (
    enteredNameIsValid &&
    enteredSurnameIsValid &&
    enteredEmailIsValid &&
    enteredPhoneIsValid
  ) {
    formIsValid = true;
  }

  const handleNameChange = (e) => {
    setEnteredName(e.target.value);
  };

  const blurNameChangeHandler = () => {
    setEnteredNameIsTouched(true);
  };

  const handleSurnameChange = (e) => {
    setEnteredSurname(e.target.value);
  };

  const blurSurnameHandler = () => {
    setEnteredSurnameIsTouched(true);
  };

  const handleEmailChange = (e) => {
    setEnteredEmail(e.target.value);
  };

  const blurEmailHandler = () => {
    setEnteredEmailIsTouched(true);
  };

  const handlePhoneChange = (e) => {
    setEnteredPhone(e.target.value);
  };

  const blurPhoneHandler = () => {
    setEnteredPhoneIsTouched(true);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    setEnteredNameIsTouched(true);
    setEnteredSurnameIsTouched(true);
    setEnteredEmailIsTouched(true);
    setEnteredPhoneIsTouched(true);

    if (
      !enteredNameIsValid ||
      !enteredSurnameIsValid ||
      !enteredEmailIsValid ||
      !enteredPhoneIsValid
    ) {
      return;
    }

    const userData = {
      name: enteredName,
      surname: enteredSurname,
      email: enteredEmail,
      phone: enteredPhone,
    };

    saveUserData(userData);
    setIsSubmited(true);
    setEnteredName("");
    setEnteredSurname("");
    setEnteredEmail("");
    setEnteredPhone("");
    setEnteredNameIsTouched(false);
    setEnteredSurnameIsTouched(false);
    setEnteredEmailIsTouched(false);
    setEnteredPhoneIsTouched(false);
  };

  const inputNameFormControl = nameInputIsInvalid ? "invalid" : "";

  const inputSurnameFormControl = surnameInputIsInvalid ? "invalid" : "";

  const inputEmailFormControl = emailInputIsInvalid ? "invalid" : "";

  const inputPhoneFormControl = phoneInputIsInvalid ? "invalid" : "";

  return isSubmited ? (
    <div className="submit-mesage">
      <div>
        <img
          alt="logo"
          className="logo-pic"
          src="https://cryptologos.cc/logos/shiba-inu-shib-logo.png?v=022"
        />
        <h1>Thanks!</h1>
        <p>
          {" "}
          You are now a member of the pack, AUUU! Please Login to see all
          features{" "}
        </p>
      </div>
    </div>
  ) : (
    <motion.div
      animate={{ y: -40 }}
      transition={{ type: "spring", stiffness: 100, delay: 1.8 }}
      className="section-form"
    >
      <form>
        <div className="new-user">
          <label>Name</label>
          <input
            className={inputNameFormControl}
            name="name"
            type="text"
            onChange={handleNameChange}
            value={enteredName}
            onBlur={blurNameChangeHandler}
          />
          {nameInputIsInvalid && <p>Please provide a name! </p>}
        </div>
        <div className="new-user">
          <label>Surname</label>
          <input
            className={inputSurnameFormControl}
            name="surname"
            type="text"
            onChange={handleSurnameChange}
            value={enteredSurname}
            onBlur={blurSurnameHandler}
          />
          {surnameInputIsInvalid && <p>Please provide a surname</p>}
        </div>
        <div className="new-user">
          <label>E-mail</label>
          <input
            className={inputEmailFormControl}
            name="email"
            type="email"
            onChange={handleEmailChange}
            value={enteredEmail}
            onBlur={blurEmailHandler}
          />
          {emailInputIsInvalid && <p>Please provide a valid E-mail</p>}
        </div>
        <div className="new-user">
          <label>Mobile number</label>
          <input
            className={inputPhoneFormControl}
            name="phone"
            type="number"
            onChange={handlePhoneChange}
            value={enteredPhone}
            onBlur={blurPhoneHandler}
          />
          {phoneInputIsInvalid && <p>Please provide a valid phone number</p>}
        </div>
        <div className="div-form-button">
          <motion.button
            whileHover={{
              opacity: 0.7,
              scale: 1.04,
              transition: { duration: 0.3 },
            }}
            onClick={submitHandler}
            className="form-button"
            disabled={!formIsValid}
          >
            Register!
          </motion.button>
        </div>
      </form>
    </motion.div>
  );
};

export default AddUserForm;
