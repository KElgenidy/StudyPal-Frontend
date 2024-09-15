import "../LandingStyles/Home.css";
import { Link } from "react-router-dom";

export default function Initial() {
  return (
    <section id="home">
      <div className="home-container">
        <h1>Hello,</h1>
        <h2>Your AI Powered Teaching Assitant for all your study needs</h2>
        <p>
          Help you with your study needs, from answering questions to quizzes to
          so much more!
        </p>
        <p>Register to Your New Experience</p>

        <button className="home-container-btn"> 
          <Link
            to="./signup"
            style={{ textDecoration: "none", color: "white" }}
          >
            Sign Up
          </Link>
        </button>
      </div>
    </section>
  );
}
