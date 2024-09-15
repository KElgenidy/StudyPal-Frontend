import "../LandingStyles/About.css";
import femAva from "../assets/about-fem.jpg"
import maleAva from "../assets/about-male.jpg"

export default function About() {
  return (
    <section id="about">
      <h1>About Us</h1>

      <div className="about-container">
        <p className="about-container-p">
          Welcome to StudyPal, your ultimate destination for mastering concepts of university course.
          We are a team of passionate developers who have developed this amazing
          platform to help you excel in your studies.
          Our mission is to provide you with the best learning experience with the help of AI teaching assistant.
          Our team comprises of six developers:
        </p>
      </div>

      <ul className="about-container-ul">
        <li className="about-container-ul-li">
          <img src={femAva} alt=""  className="about-ul-img"/>
          <p className="about-ul-p"> 
            Rana Hafez
          </p>
        </li>
        <li className="about-container-ul-li">
          <img src={femAva} alt=""  className="about-ul-img"/>
          <p className="about-ul-p"> 
            Farah Kabesh
          </p>
        </li>
        <li className="about-container-ul-li">
          <img src={femAva} alt=""  className="about-ul-img"/>
          <p className="about-ul-p"> 
            Carol George
          </p>
        </li>
      </ul>
      <ul className="about-container-ul">
        <li className="about-container-ul-li">
          <img src={maleAva} alt=""  className="about-ul-img"/>
          <p className="about-ul-p"> 
            Youssef Magdy
          </p>
        </li>
        <li className="about-container-ul-li">
          <img src={maleAva} alt=""  className="about-ul-img"/>
          <p className="about-ul-p"> 
            Karim Elgenidy
          </p>
        </li>
        <li className="about-container-ul-li">
          <img src={maleAva} alt=""  className="about-ul-img"/>
          <p className="about-ul-p"> 
            Abdallah Sabah
          </p>
        </li>
      </ul>
    </section>
  );
}
