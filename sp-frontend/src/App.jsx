import "./styles/App.css";
import Header from "./Landing/Header";
import Home from "./Landing/Home";
import About from "./Landing/About";
import ViewCourses from "./Landing/ViewCourses";
// import HIW from "./components/HIW";

function App() {
  return (
    <>
      <Header />
      <Home />
      <About />
      <ViewCourses />
      {/* <HIW /> */}
    </>
     
  );
}

export default App;
