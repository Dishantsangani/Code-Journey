import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import User from "./User";
import Navbar from "./Navbar";
import About from "./About";
import Person from "./Person";

function Home() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<User />} /> 
          <Route path="/about" element={<About />} />
          <Route path="/person/:name" element={<Person />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default Home;
