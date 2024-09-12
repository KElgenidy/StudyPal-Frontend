import Navbar from "../Landing/Navbar";
import "../styles/LS.css";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Icon } from "react-icons-kit";
import { eye } from "react-icons-kit/feather/eye";
import { eyeOff } from "react-icons-kit/feather/eyeOff";

export default function SignUpPage() {

  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const [type, setType] = useState("password");
  const [icon, setIcon] = useState(eyeOff);

  const [invalidError, setInvalidError] = useState("");

  const handleToggle = () => {
    if (type === "password") {
      setType("text");
      setIcon(eye);
    } else {
      setType("password");
      setIcon(eyeOff);
    }
  };


  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your ls logic here
    setEmailError("");
    setUsernameError("");
    setPasswordError("");

    if (email === "") {
      setEmailError("Email is required");
    }
    if (username === "") {
      setUsernameError("Username is required");
    }
    if (password === "") {
      setPasswordError("Password is required");
    }

    if (
      email !== "" &&
      username !== "" &&
      password !== ""
    ) {
      navigate("/login");
    } else {
      setInvalidError("There are missing felds");
    }

  };

  return (
    <>
      <Navbar flag={false} />
      <div id="ls">
        <div className="ls-container">
          <h1 className="ls-container-header">Sign Up</h1>

          <form className="ls-container-form" onSubmit={handleSubmit}>
            <label className="errorLabel">{invalidError}</label>

            <div className="ls-container-input">
              <input
                type="text"
                id="username"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <label className="errorLabel">{usernameError}</label>
            </div>
            <div className="ls-container-input">
              <input
                type="text"
                id="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <label className="errorLabel">{emailError}</label>
            </div>
            <div className="ls-container-input">
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
              value={"Sign Up"}
              className="ls-container-btn"
            />
          </form>

          <p className="login-signup">
            Have an Account? <Link to="/login">Login</Link>
          </p>
        </div>
      </div>
    </>
  );
}
