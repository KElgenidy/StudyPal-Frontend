import { HashLink } from "react-router-hash-link";
import "../styles/Navbar.css";

export default function Navbar() {
  return (
    <nav className="lp-navbar">
      <h1 className="lp-navbar-h1">StudyPal</h1>

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
  );
}