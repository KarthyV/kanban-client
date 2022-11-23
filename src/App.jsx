import { useContext, useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import MainBoard from "./components/MainBoard";
import Navbar from "./components/Navbar";
import SignUp from "./components/Signup";
import { MyContext } from "./context";

function App() {
  const navigate = useNavigate();
  const { user } = useContext(MyContext);
  useEffect(() => {
    if (!user) navigate("/login");
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Routes>
        {user && <Route path="/" element={<MainBoard />} />}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
