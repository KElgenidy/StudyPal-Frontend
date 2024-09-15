import "./App.css";
import Navbar from "./Landing/Navbar";
import Initial from "./Landing/Initial";
import About from "./Landing/About";
import ViewCourses from "./Landing/ViewCourses";
// import HIW from "./components/HIW";

function App() {
  return (
    <>
      {/* <Header /> */}
      <Navbar flag={true} />
      <Initial />
      <About />
      <ViewCourses />
      {/* <HIW /> */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <button
          style={{
            padding: "10px 20px",
            fontSize: "1.2rem",
            cursor: "pointer",

            height: "50px",
            color: "white",
            borderRadius: "10px",
            backgroundColor: "#1cb3bb92",

            transition: "all 0.3s ease-in-out",
            boxShadow: "0.5px 0.5px 1px 0.5px #000000",
          }}

          onClick={() => {
            window.scrollTo({
              top: 0,
              behavior: "smooth",
              
            });
          }}
        >
          Back to Top
        </button>
      </div>
    </>
  );
}

export default App;
