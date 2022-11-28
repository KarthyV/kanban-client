import { useContext, useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import ForgetPass from "./components/ForgetPass";
import Login from "./components/Login";
import MainBoard from "./components/MainBoard";
import Navbar from "./components/Navbar";
import ResetPass from "./components/ResetPass";
import SignUp from "./components/Signup";
import Subscriptions from "./components/Subscriptions";
import { MyContext } from "./context";

function App() {
  const navigate = useNavigate();
  const { user, setUser, setIsAuthenticated } = useContext(MyContext);
  useEffect(() => {
    if (localStorage.getItem("user")) {
      setUser(JSON.parse(localStorage.getItem("user")));
      setIsAuthenticated(true);
    } else navigate("/login");
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
        <Route path="/subscriptions/:id" element={<Subscriptions />} />
      </Routes>
    </div>
  );
}

export default App;
