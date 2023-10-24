import React from "react";
import { useFormik } from "formik";
import * as yup from "yup"
const FormikForm = () => {
    let formik = useFormik({
        initialValues : {
            firstname : "",
            lastname : "",
            email : "",
            password : ""
        },
        onSubmit : (values)=>{
            console.log(values);
        },
        validationSchema : yup.object({
            firstname : yup.string().required("Required")
        })
    })
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <form action="" onSubmit={formik.handleSubmit}>
            <h1 className="text-center">Sign Up Pge</h1>
            <input
              type="text"
              placeholder="First Name"
              className="form-control"
              name="firstname"
              value={formik.values.firstname}
              onChange={formik.handleChange}
            />
            <input
              type="text"
              placeholder="LAst Name"
              className="form-control"
              name="lastname"
              value={formik.values.lastname}
              onChange={formik.handleChange}
            />
            <input
              type="text"
              placeholder="Password"
              className="form-control"
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
            />
            <input type="text" placeholder="Email" 
            className="form-control"
              value={formik.values.email}
              onChange={formik.handleChange}
              name="email" />
            <button type="submit" className="btn btn-info w-100 my-2 ">Sign Up</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default FormikForm;
