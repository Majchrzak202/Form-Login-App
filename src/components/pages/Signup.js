import React, { useState } from "react";
import { useAuth } from "../context/UserAuthContextProvider";
import "./Signup.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { signUp } = useAuth();
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signUp(email, password);
      navigate("/login");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="signup">
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
        Already have an account? <Link to="/login">Login</Link>
      </div>
      <div>Forgot your password?</div>
    </div>
  );
};

export default Signup;
