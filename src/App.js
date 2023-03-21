import Navbar from "./components/Navbar";
import HomePage from "./components/Homepage/Homepage";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="App">
        <Navbar/>
        <Routes>
          <Route path="/" element = {<HomePage/>} />
        </Routes>
    </div>
  );
}

export default App;
