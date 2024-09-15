import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";
import "../LandingStyles/Navbar.css";

import PropTypes from "prop-types";

export default function Navbar({ flag }) {
  return (
    <header className="lp-header">
      {flag ? (
        <>
          <nav className="lp-navbar">
            <h1 className="lp-navbar-h1">
              <Link to={"/"} style={{ textDecoration: "none", color: "black" }}>
                StudyPal
              </Link>
            </h1>

            <ul className="lp-navbar-ul">
              <li>
                <HashLink to="#home" className="links">
                  Home
                </HashLink>
              </li>
              <li>
                <HashLink to="#about" className="links">
                  About
                </HashLink>
              </li>
              <li>
                <HashLink to="#view" className="links">
                  View Courses
                </HashLink>
              </li>
              <li>
                <HashLink to="#how" className="links">
                  How it Works
                </HashLink>
              </li>
            </ul>
          </nav>

          <div>
            <button className="lp-header-btn">
              <Link
                to="./login"
                style={{ textDecoration: "none", color: "white" }}
              >
                Sign In
              </Link>
            </button>
          </div>
        </>
      ) : (
        <h1 className="lp-navbar-h1">
          <Link to={"/"} style={{ textDecoration: "none", color: "black" }}>
            StudyPal
          </Link>
        </h1>
      )}
    </header>
  );
}

Navbar.propTypes = {
  flag: PropTypes.bool.isRequired,
};
