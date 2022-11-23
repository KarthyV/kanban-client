import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import MainBoard from "./components/MainBoard";
import Navbar from "./components/Navbar";
import SignUp from "./components/Signup";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<MainBoard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
