import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Skills from "./Components/Skills";

function App() {
  return (
    <div className="App ">
      <Navbar/>
      <div id="about">
        <Home />
      </div>
      <div id="skills">
        <Skills />
      </div>
    </div>
  );
}

export default App;
