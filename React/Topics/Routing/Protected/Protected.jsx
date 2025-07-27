import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function np Protected(props) {
  const { Component } = props;
  const navigate = useNavigate();
  useEffect(() => {
    let login = localStorage.getItem("login");
    if (!login) {
      navigate("login");
    }
  }, []);
  return (
    <>
      idi
      <Component />
    </>
  );
}

export default Protected;
