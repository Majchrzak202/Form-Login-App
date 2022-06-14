import React from "react";
import "./AddUserForm.css";
import { motion } from "framer-motion";
import useForm from "../hooks/useForm";

const AddUserForm = ({ saveUserData, setIsSubmited, isSubmited }) => {
  const {
    enteredValue: enteredName,
    hasError: nameInputIsInvalid,
    valueInputBlurHandler: blurNameChangeHandler,
    valueChangeHandler: handleNameChange,
    valueIsValid: enteredNameIsValid,
    reset: resetNameInput,
  } = useForm((value) => value.trim() !== "");

  const {
    enteredValue: enteredSurname,
    hasError: surnameInputIsInvalid,
    valueInputBlurHandler: blurSurnameHandler,
    valueChangeHandler: handleSurnameChange,
    valueIsValid: enteredSurnameIsValid,
    reset: resetSurnameInput,
  } = useForm((value) => value.trim() !== "");

  const {
    enteredValue: enteredEmail,
    hasError: emailInputIsInvalid,
    valueInputBlurHandler: blurEmailHandler,
    valueChangeHandler: handleEmailChange,
    valueIsValid: enteredEmailIsValid,
    reset: resetEmailInput,
  } = useForm((value) => value.trim() !== "" && value.includes("@"));

  const {
    enteredValue: enteredPhone,
    hasError: phoneInputIsInvalid,
    valueInputBlurHandler: blurPhoneHandler,
    valueChangeHandler: handlePhoneChange,
    valueIsValid: enteredPhoneIsValid,
    reset: resetPhoneInput,
  } = useForm((value) => value.trim().length === 9);

  let formIsValid = false;
  if (
    enteredNameIsValid &&
    enteredSurnameIsValid &&
    enteredEmailIsValid &&
    enteredPhoneIsValid
  ) {
    formIsValid = true;
  }

  const submitHandler = (event) => {
    event.preventDefault();

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
    resetNameInput();
    resetSurnameInput();
    resetEmailInput();
    resetPhoneInput();
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
