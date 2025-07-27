import React from "react";
import { Link, Outlet } from "react-router-dom";

function About() {
  return (
    <>
      <h1>This is a About Page</h1>
      <Link to="user">User</Link> <br />
      <Link to="user2">User2</Link>
      <Outlet />
    </>
  );
}

export default About;
