import { useFormik } from "formik";
import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const { values, handleChange, handleBlur, touched, handleSubmit, errors } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
      },
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
            name="email"
          />
        </div>
        <div className="fieldBox">
          <label>Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            onChange={handleChange}
            value={values.password}
            name="password"
          />
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
