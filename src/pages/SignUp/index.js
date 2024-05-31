import React, { useState } from "react";
import "./style.css";
import { Link } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import Button from "@mui/material/Button";
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from "../../firebase";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
const auth = getAuth(app);

const SignUp = () => {
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);
  const [showLoader, setShowLoader] = useState(false);
  const [formFields, setFormFields] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const setVisibility = () => {
    setShow(!show);
  };
  const setVisibility1 = () => {
    setShow1(!show1);
  };
  const signUp = (e) => {
    setShowLoader(true);
    e.preventDefault();

    createUserWithEmailAndPassword(auth, formFields.email, formFields.password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        setShowLoader(false);
        setFormFields({
          email: "",
          password: "",
          confirmPassword: "",
        });

        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  };
  const onChangeField = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormFields({
      ...formFields,
      [name]: value,
    });
    console.log(formFields, "form fields");
  };
  return (
    <div>
      <section className="SignIn">
        <div className="container-fluid ">
          <ul class="breadcrumb breadcrumb2 mb-0">
            <li>
              <Link to="/">Home/</Link>{" "}
            </li>
            <li>Sign Up</li>
          </ul>
        </div>
        <div className="container loginWrapper">
          <div className="card shadow">
            <Backdrop
              className="loader"
              sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
              open={showLoader}
            >
              <CircularProgress color="inherit" />
            </Backdrop>
            <h2 className="email">Sign Up</h2>
            <form>
              <Box
                component="form"
                sx={{
                  "& > :not(style)": { m: 1, width: "25ch" },
                }}
                noValidate
                autoComplete="off"
              >
                <div className="form-group input mb-4 w-100">
                  <TextField
                    id="email"
                    name="email"
                    type="email"
                    label="Email Address"
                    className="w-100"
                    onChange={onChangeField}
                    value={formFields.email}
                  />
                </div>

                <div className="form-group input mb-4 w-100 ">
                  <div className="position-relative">
                    <TextField
                      id="password"
                      type={show ? "text" : "password"}
                      name="password"
                      label="Password"
                      className="w-100 mt-4"
                      onChange={onChangeField}
                      value={formFields.password}
                    />

                    <Button className="icon" onClick={setVisibility}>
                      {" "}
                      {show ? <VisibilityOffIcon /> : <VisibilityIcon />}
                    </Button>
                  </div>
                </div>
                <div className="form-group input mb-4 w-100 ">
                  <div className="position-relative">
                    <TextField
                      id="confirmPassword"
                      type={show1 ? "text" : "password"}
                      name="confirm Password"
                      label="Confirm Password"
                      className="w-100 mt-4"
                      // value={formFields.confirmPassword}
                      onChange={onChangeField}
                    />

                    <Button className="icon" onClick={setVisibility1}>
                      {" "}
                      {show1 ? <VisibilityOffIcon /> : <VisibilityIcon />}
                    </Button>
                  </div>
                </div>
                <button className="filter-button mt-4 w-100" onClick={signUp}>
                  Sign Up
                </button>
              </Box>
              <p className="text-center">
                If you already have account?
                <b>
                  <Link to="/SignIn">Sign In</Link>
                </b>
              </p>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};
export default SignUp;
