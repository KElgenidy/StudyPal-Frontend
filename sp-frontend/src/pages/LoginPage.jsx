import Navbar from "../Landing/Navbar";
import "./LS.css";
import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import { Icon } from "react-icons-kit";
import { eye } from "react-icons-kit/feather/eye";
import { eyeOff } from "react-icons-kit/feather/eyeOff";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [type, setType] = useState("password");
  const [icon, setIcon] = useState(eyeOff);

  const [invalidError, setInvalidError] = useState("");
  const navigate = useNavigate();

  const handleToggle = () => {
    if (type === "password") {
      setType("text");
      setIcon(eye);
    } else {
      setType("password");
      setIcon(eyeOff);
    }
  };

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
      navigate("/home");
    } else {
      setInvalidError("Invalid username or password");
    }
  };

  return (
    <>
      <Navbar flag={false} />
      <div id="ls">
        <div className="ls-container">
          <h1 className="ls-container-header">Login</h1>

          <form onSubmit={handleSubmiit} className="ls-container-form">
            <label className="errorLabel">{invalidError}</label>
            <div className="ls-container-input">
              {/* <label htmlFor="username">Username:</label> */}
              <input
                type="text"
                id="username"
                name="username"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <label className="errorLabel">{usernameError}</label>
            </div>

            <div className="ls-container-input">
              {/* <label htmlFor="password">Password:</label> */}
              <div className="ls-container-pass">
                  <input
                  type={type}
                  id="password"
                  name="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />

                <span className="icon-eye" onClick={handleToggle}>
                  <Icon size={25} className="eye" icon={icon}></Icon>
                </span>
              </div>
              

              <label className="errorLabel">{passwordError}</label>
            </div>

            <input
              type="submit"
              className="ls-container-btn"
              value={"Login"}
            />
          </form>

          <p className="login-signup">
            Don&apos;t have an account? <Link to="/signup">Sign Up</Link>
          </p>
        </div>
      </div>
    </>
  );
}
