import Achievement from "./components/Achievement";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Project from "./components/Project";
import SocialLinks from "./components/SocialLinks";


function App() {
  return (
    <div>
      <NavBar/>
      <Home />
      <Achievement />
      <Project />
      <Experience />
      <Contact />
      <SocialLinks />
    </div>
  );
}

export default App;
