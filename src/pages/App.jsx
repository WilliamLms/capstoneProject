import { Route, Routes } from "react-router-dom"; // No need to import React
import "./App.css";
import Homepage from "./pages/Homepage";
import Shoppingcart from "./pages/Shoppingcart";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Header from "./Links/Header.jsx";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/cart" element={<Shoppingcart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
}

export default App;
