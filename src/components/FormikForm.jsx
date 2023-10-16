import React from "react";

const FormikForm = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <form action="">
            <h1 className="text-center">Sign Up Page</h1>
            <input
              type="text"
              placeholder="First Name"
              className="form-control"
            />
            <input
              type="text"
              placeholder="LAst Name"
              className="form-control"
            />
            <input
              type="text"
              placeholder="Password"
              className="form-control"
            />
            <input type="text" placeholder="Email" className="form-control" />
            <button className="btn btn-info w-100 my-2 ">Sign Up</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default FormikForm;
