import Home from "./Components/Home";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <div className="App ">
      <Navbar/>
      <div id="home">
        <Home />
      </div>
    </div>
  );
}

export default App;
