import React, { useContext } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import { MyContext } from "../context";
const formValidationSchema = yup.object({
  email: yup.string().email().required(),
  password: yup.string().min(6).required(),
});
const SignUp = () => {
  const navigate = useNavigate();

  const { values, handleChange, handleBlur, touched, handleSubmit, errors } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
      },
      validationSchema: formValidationSchema,
      onSubmit: (values) => {
        console.log(values);
      },
    });
  return (
    <div className="login_formContainer">
      <form onSubmit={handleSubmit}>
        <div className="fieldBox">
          <label>Email</label>
          <input
            type="text"
            placeholder="Enter your email"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
            name="email"
          />
        </div>
        <div className="fieldBox">
          <label>Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
            name="password"
          />
        </div>

        <button type="submit">SignUp</button>
      </form>
      <p>
        <Link to="/login">Already have an account? Login</Link>
      </p>
    </div>
  );
};

export default SignUp;
