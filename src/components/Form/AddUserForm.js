import React, { useReducer } from "react";
import "./AddUserForm.css";
import { motion } from "framer-motion";

const formReducer = (state, action) => {
  if (action.type === "HANDLE_INPUT_TEXT") {
    return { ...state, [action.field]: action.payload };
  }
  if (action.type === "HANDLE_CLEAR_FORM") {
    return { name: "", surname: "", email: "", phone: "", isSubmited: true };
  }
  return state;
};

const AddUserForm = ({ saveUserData, setIsSubmited, isSubmited }) => {
  const [formState, dispatch] = useReducer(formReducer, {
    name: "",
    surname: "",
    email: "",
    phone: "",
    isSubmited: false,
  });

  const handleInputChanged = (e) => {
    dispatch({
      type: "HANDLE_INPUT_TEXT",
      field: e.target.name,
      payload: e.target.value,
    });
  };

  const handleClearForm = () => {
    dispatch({
      type: "HANDLE_CLEAR_FORM",
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const userData = {
      name: formState.name,
      surname: formState.surname,
      email: formState.email,
      phone: formState.phone,
    };

    saveUserData(userData);
    setIsSubmited(true);
    handleClearForm();
  };

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
            name="name"
            type="text"
            onChange={handleInputChanged}
            value={formState.name}
          />
        </div>
        <div className="new-user">
          <label>Surname</label>
          <input
            name="surname"
            type="text"
            onChange={handleInputChanged}
            value={formState.surname}
          />
        </div>
        <div className="new-user">
          <label>E-mail</label>
          <input
            name="email"
            type="email"
            onChange={handleInputChanged}
            value={formState.email}
          />
        </div>
        <div className="new-user">
          <label>Mobile number</label>
          <input
            name="phone"
            type="number"
            onChange={handleInputChanged}
            value={formState.phone}
          />
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
          >
            Register!
          </motion.button>
        </div>
      </form>
    </motion.div>
  );
};

export default AddUserForm;
