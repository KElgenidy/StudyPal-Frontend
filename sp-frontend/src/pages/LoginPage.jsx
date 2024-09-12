import Navbar from "../Landing/Navbar";
import "../styles/Login.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [invalidError, setInvalidError] = useState("");

  const navigate = useNavigate();

  const handleSubmiit = (e) => {
    e.preventDefault();
    // Add your login logic here
    setUsernameError("");
    setPasswordError("");

    if (username === "") {
      setUsernameError("Username is required");
    }
    if (password === "") {
      setPasswordError("Password is required");
    }

    if (username === "admin" && password === "admin") {
      navigate("/admin");
    } else if (username === "user" && password === "user") {
      navigate("/user");
    } else {
      setInvalidError("Invalid username or password");
    }
  };

  return (
    <>
      <Navbar flag={false} />
      <div id="login">
        <div className="login-container">
          <h1 className="login-container-header">Login</h1>

          <form onSubmit={handleSubmiit} className="login-container-form">
            <label className="errorLabel">{invalidError}</label>
            <div className="login-container-input">
              {/* <label htmlFor="username">Username:</label> */}
              <input
                type="text"
                id="username"
                name="username"
                placeholder="Enter your username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <label className="errorLabel">{usernameError}</label>
            </div>

            <div className="login-container-input">
              {/* <label htmlFor="password">Password:</label> */}
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <label className="errorLabel">{passwordError}</label>
            </div>

            <input
              type="submit"
              className="login-container-btn"
              value={"Login"}
            />
          </form>
        </div>
      </div>
    </>
  );
}
