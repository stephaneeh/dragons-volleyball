import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import "./style/app.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Home />
      </div>
    </div>
  );
}

export default App;
