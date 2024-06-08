import logo from "./logo.svg";
import "./App.css";
import "./css/top.css";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes,
  BrowserRouter,
} from "react-router-dom";
import { Navbar } from "./components/navbar";
import { Home } from "./components/home";
import { About } from "./components/about";
import { Receipes } from "./components/receipe";
import { UploadReceipe } from "./components/uploadreceipe";
import { Footer } from "./components/footer";
import {DetailReceipe} from "./components/detailReceipe";
import { useState } from "react";

function App() {


  return (
    <>
      <BrowserRouter>
        <div className="top">
          <Navbar />
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/recipe" element={<Receipes  />} />
          <Route path="/uploadreceipe" element={<UploadReceipe />} />
          <Route path="/detailreceipe" element={<DetailReceipe />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
