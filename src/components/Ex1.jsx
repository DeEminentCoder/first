import React from "react";
import { useState } from "react";

const First = () => {
  const [myNo, setMyNo] = useState(0)

  const [fn, setfn] = useState("");
  const [ln, setln] = useState("");
  const [email, setemail] = useState("");
  const [Password, setpassword] = useState("");
  const [allstudents, setallstudents] = useState([])
  const register = () => {
    console.log(fn, ln, email, Password);
    let student = {fn,ln,email,Password};
    setallstudents([...allstudents,student])
  };

  return (
    <>
      {/* <h1>{myNo}</h1>
    <button onClick={()=>setMyNo(myNo+30)}>Increase</button>
    <button onClick={()=>setMyNo(myNo-10)}>Decrease</button> */}
<br />
      {/* SIMPLE SCHOOL PORTAL */}
       {/* <h1>Simozy Group Of Schools</h1> */}
      <input
        type="text"
        placeholder="First Name"
        onChange={(event) => setfn(event.target.value)}
      />
      <input
        type="text"
        placeholder="Last Name"
        onChange={(event) => setln(event.target.value)}
      />
      <input
        type="text"
        placeholder="Email"
        onChange={(event) => setemail(event.target.value)}
      />
      <input
        type="text"
        placeholder="Password"
        onChange={(event) => setpassword(event.target.value)}
      />
      <hr />
      <button onClick={register}>Register</button> 
      {allstudents.map((student,index)=>(
        <div>{student.fn}</div>
      ))}
    </>
  );
};

export default First;