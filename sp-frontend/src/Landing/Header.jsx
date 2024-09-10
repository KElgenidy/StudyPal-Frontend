import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import "../styles/Header.css";

export default function Header() {
  return (
    <header className="lp-header">
      <Navbar />

      <div>
        <button className="lp-header-btn">
          <Link to="./login" style={{ textDecoration: "none", color: "white" }}>
            Sign In
          </Link>
        </button>
      </div>
    </header>
  );
}
