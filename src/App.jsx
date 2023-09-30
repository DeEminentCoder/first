import React from "react";
import Navbar from "./components/Navbar";
import fishStyle from "./simeon.module.css"

const App = () => {
  let age = 500;
  let myStyle = {
    color:"red",
    backgroundColor:"white"
  }
  return (
    <>
      <h1 style={myStyle}>Hello Sim</h1>
      <h1 className={fishStyle.fish}>Hello Sim</h1>
      <h2 className="bg-danger">{age}</h2>
      <Navbar></Navbar>
    </>
  );
};

export default App;
