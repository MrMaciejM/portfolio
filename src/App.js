import "./App.css";
import Header from "./Components/Header";
import "./Components/Header.css";
import Main from "./Components/Main";
import "./Components/Main.css";
import About from "./Components/About";
import "./Components/About.css";
import Projects from "./Components/Projects";
import "./Components/Projects.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <About />
      <Projects />
    </div>
  );
}

export default App;
