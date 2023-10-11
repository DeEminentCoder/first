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

  const editstudent = ()=>{
    console.log();
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
        value={fn}
      />
      <input
        type="text"
        placeholder="Last Name"
        onChange={(event) => setln(event.target.value)}
        value={ln}
      />
      <input
        type="text"
        placeholder="Email"
        onChange={(event) => setemail(event.target.value)}
        value={email}
      />
      <input
        type="text"
        placeholder="Password"
        onChange={(event) => setpassword(event.target.value)}
        value={Password}
      />
      <hr />
      <button onClick={register}>Register</button> 
        <table classNameName="table">
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
            <button onClick={()=>delStudent(index)} classNameName="btn btn-danger">Del</button>
            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={()=>editstudent(index)}>Edt</button>
          </td>
        </tr>

      ))}
        </table>

        {/* <!-- Button trigger modal --> */}
<button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Launch demo modal
</button>

{/* <!-- Modal --> */}
<div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        ...
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>

    </>
  );
};

export default First;