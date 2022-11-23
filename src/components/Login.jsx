import { useFormik } from "formik";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import * as yup from "yup";

const formValidationSchema = yup.object({
  email: yup.string().email().required(),
  password: yup.string().min(6).required(),
});
const Login = () => {
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
            value={values.email}
            onBlur={handleBlur}
            name="email"
          />
          <p> {errors.email && touched.email ? errors.email : null}</p>
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
          <p> {errors.password && touched.password ? errors.password : null}</p>
          {/* <p className="forget_pass">
            <Link to="/forget-password">Forget Password?</Link>
          </p> */}
        </div>
        <button type="submit">Login</button>
      </form>
      <p>
        <Link to="/signup">Don't have an account? Click Here!</Link>
      </p>
    </div>
  );
};

export default Login;
