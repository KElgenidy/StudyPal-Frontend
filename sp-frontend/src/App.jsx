import "./styles/App.css";
import Navbar from "./Landing/Navbar";
import Home from "./Landing/Home";
import About from "./Landing/About";
import ViewCourses from "./Landing/ViewCourses";
// import HIW from "./components/HIW";

function App() {
  return (
    <>
      {/* <Header /> */}
      <Navbar flag={true} />
      <Home />
      <About />
      <ViewCourses />
      {/* <HIW /> */}
    </>
     
  );
}

export default App;
