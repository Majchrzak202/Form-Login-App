import React, { useState } from "react";
import "./Login.css";
import { useAuth } from "../context/UserAuthContextProvider";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Modal from "../UI/Modal";

const Login = ({ hideLoginModal }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await login(email, password);
      navigate("/home");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <Modal hideLoginModal={hideLoginModal}>
      <div className="mundek">
        <div className="close">
          <button onClick={() => hideLoginModal(true)}>X</button>
        </div>
        <div className="login">
          <div className="form">
            <h3>user Login</h3>
            {error && error}
            <form>
              <div>
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="email"
                />
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="password"
                />
                <div>
                  <button onClick={submitHandler}>Login</button>
                </div>
              </div>
            </form>
          </div>
          <div></div>
          <div>
            Dont have an account?{" "}
            <Link onClick={() => hideLoginModal(false)} to="/signup">
              SignUp
            </Link>
          </div>
          <div>Forgot your password?</div>
        </div>
      </div>
    </Modal>
  );
};

export default Login;
