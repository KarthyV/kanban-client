import { useContext, useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import ForgetPass from "./components/ForgetPass";
import Login from "./components/Login";
import MainBoard from "./components/MainBoard";
import Navbar from "./components/Navbar";
import ResetPass from "./components/ResetPass";
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
        <Route path="/forget-password" element={<ForgetPass />} />
        <Route path="/reset-password/:id" element={<ResetPass />} />
      </Routes>
    </div>
  );
}

export default App;
