import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import View from "./components/View";
import Search from "./components/Search";
import Add from "./components/Add";
import Detail from "./components/Detail";
import Edit from "./components/Edit";
import Home from "./components/Home";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/register" element={<Register />}></Route>
            <Route path="/view" element={<View />}></Route>
            <Route path="/search" element={<Search />}></Route>
            <Route path="/add" element={<Add />}></Route>
            <Route path="/detail" element={<Detail />}></Route>
            <Route path="/edit" element={<Edit />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
