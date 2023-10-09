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
    let student = {fn,ln,email,Password};
    setallstudents([...allstudents,student])
    setfn("")
    setln("")
    setemail("")
    setpassword("")
  };
  
  const delStudent = (studentIndex) => {
    let newAllStudents = [...allstudents]
    let found = newAllStudents.filter((student,index)=>(index!=studentIndex))
    setallstudents(found)
  }

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
        <table className="table">
          <tr>
            <td>S/N</td>
            <td>First Name</td>
            <td>Last Name</td>
            <td>Email</td>
            <td>Password</td>
          </tr>
      {allstudents.map((student,index)=>(
        <tr key={index}>
          <td>{index+1}</td>
          <td>{student.fn}</td>
          <td>{student.ln}</td>
          <td>{student.email}</td>
          <td>{student.Password}</td>
          <td>
            <button onClick={()=>delStudent(index)} className="btn btn-danger">Del</button>
            <button className="btn btn-warning">Edt</button>
          </td>
        </tr>

      ))}
        </table>

    </>
  );
};

export default First;