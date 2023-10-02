import React from "react";
import Navbar from "./components/Navbar";
import fishStyle from "./simeon.module.css"
import { useState } from "react";

const App = () => {
  // const [myNo, setMyNo] = useState(0)

  const [fn, setfn] = useState("")
  const [ln, setln] = useState("")
  const [email, setemail] = useState("")
  const [Password, setpassword] = useState("")
  
  return (
    <>
    {/* <h1>{myNo}</h1>
    <button onClick={()=>setMyNo(myNo+30)}>Increase</button> */}

    {/* SIMPLE SCHOOL PORTAL */}
    <h1>Simozy Group Of Schools</h1>
    <input type="text" placeholder="First Name" />
    <input type="text" placeholder="Last Name" />
    <input type="text" placeholder="Email" />
    <input type="text" placeholder="Password" />
    <hr />
    <button onClick={k}>Register</button>
    </>
  );
};

export default App;
