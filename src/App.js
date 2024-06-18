import Login from "./Components/Login";
import Home from "./Components/Home";
import About from "./Components/About";
import Amenities from "./Components/Amenities";
import Contact_us from "./Components/Contact_us";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Home" element={<Home />}/>
        <Route path="/About" element={<About />}/>
        <Route path="/Amenities" element={<Amenities />}/>
        <Route path="/Contact_us" element={<Contact_us />}/>
      </Routes>
    </Router>
  );
}

export default App;
