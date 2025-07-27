import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Navbar from "./Navbar";
import User from "./User";
import User2 from "./User2";

function Home() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Contact />} />
          <Route path="/about/" element={<About />}>
            <Route path="user" element={<User />} />
            <Route path="user2" element={<User2 />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default Home;
