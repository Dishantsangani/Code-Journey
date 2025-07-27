import React from "react";
import { useLocation } from "react-router-dom";

function LocationHook() {
  const location = useLocation();
  const { mydata } = location.state || {}; // Safely handle location.state
  
  console.log("Location Key:", location.key);
  console.log("Location Hash:", location.hash);
  console.log("Location Search Params:", location.search);
  console.log("Location State:", location.state);

  return (
    <>
      <p>The useLocation hook provides access to the current location object.</p>
      <h1>This is the About Page</h1>
      <p>Data Received: {mydata ? mydata : "No data available"}</p> 
    </>
  );
}

export default LocationHook;

