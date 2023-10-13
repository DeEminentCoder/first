import React from "react";
import { useState } from "react";

const First = () => {
  const [myNo, setMyNo] = useState(0);

  const [fn, setfn] = useState("");
  const [ln, setln] = useState("");
  const [email, setemail] = useState("");
  const [Password, setpassword] = useState("");
  const [allstudents, setallstudents] = useState([]);
  const [editedindex, setediedindex] = useState(0);
  const [ediedObject, setediedObject] = useState({});
  const [editedfn, seteditedfn] = useState("");
  const [editedln, seteditedln] = useState("");
  // const [editedemail, seteditedemail] = useState("");
  const [editedpassword, seteditedpassword] = useState("");
  const register = () => {
    let student = { fn, ln, email, Password };
    setallstudents([...allstudents, student]);
    setfn("");
    setln("");
    setemail("");
    setpassword("");
  };

  const delStudent = (studentIndex) => {
    let newAllStudents = [...allstudents];
    let found = newAllStudents.filter(
      (student, index) => index != studentIndex
    );
    setallstudents(found);
  };

  const editstudent = (ind) => {
    setediedindex(ind);
    let selectedUser = allstudents[ind];
    seteditedfn(selectedUser.fn);
    seteditedln(selectedUser.ln);
    seteditedemail(selectedUser.email);
    seteditedpassword(selectedUser.password);
    setediedObject(selectedUser);
  };

  const updateDetails = () => {
    let updatedDetails = {
      fn: editedfn,
      ln: editedln,
      email: editedemail,
      password: editedpassword,
    };
    let newAllStudents = [...allstudents];
    newAllStudents[editedindex] = updatedDetails;
    setallstudents(newAllStudents);
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
          <td>Paassword</td>
        </tr>
        {allstudents.map((student, index) => (
          <tr key={index}>
            <td>{index + 1}</td>
            <td>{student.fn}</td>
            <td>{student.ln}</td>
            <td>{student.email}</td>
            <td>{student.Password}</td>
            <td>
              <button
                onClick={() => delStudent(index)}
                classNameName="btn btn-danger"
              >
                Del
              </button>
              <button
                type="button"
                className="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                onClick={() => editstudent(index)}
              >
                Edt
              </button>
            </td>
          </tr>
        ))}
      </table>

      {/* <!-- Button trigger modal --> */}
      {/* <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Edit
      </button> */}

      {/* <!-- Modal --> */}
      <div
        className="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Edit
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <input
                type="text"
                className="form-control my-2"
                value={editedfn}
                onChange={(e) => seteditedfn(e.target.value)}
              />
              <input
                type="text"
                className="form-control my-2"
                value={editedln}
                onChange={(e) => seteditedln(e.target.value)}
              />
              <input
                type="text"
                className="form-control my-2"
                value={editedemail}
                onChange={(e) => seteditedemail(e.target.value)}
              />
              <input
                type="text"
                className="form-control my-2"
                value={editedpassword}
                onChange={(e) => seteditedpassword(e.target.value)}
              />
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={updateDetails}
                data-bs-dismiss="modal"
              >
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default First;
