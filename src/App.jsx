import React from "react";
import Navbar from "./components/Navbar";
import fishStyle from "./simeon.module.css"
import { useState } from "react";

const App = () => {
  const [myNo, setMyNo] = useState(0)
  return (
    <>
    <h1>{myNo}</h1>
    <button onClick={()=>setMyNo(myNo+30)}>Increase</button>
    </>
  );
};

export default App;
