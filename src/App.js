import "./App.css";
import Header from "./Components/Header";
import "./Components/Header.css";
import Main from "./Components/Main";
import "./Components/Main.css";
import About from "./Components/About";
import "./Components/About.css";
import Projects from "./Components/Projects";
import "./Components/Projects.css";
import Services from "./Components/Services";
import "./Components/Services.css";
import Contact from "./Components/Contact";
import "./Components/Contact.css";
import Footer from "./Components/Footer";
import "./Components/Footer.css";

import "./Components/Queries.css";

function App() {
  return (
    <div className="App">
      <div className="rulerMain"></div>
      <Header />
      <Main />
      <About />
      <Projects />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
