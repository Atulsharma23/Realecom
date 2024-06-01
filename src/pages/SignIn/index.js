import React, { useState } from "react";
import "./style.css";
import { Link, useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import Button from "@mui/material/Button";
import {
  getAuth,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { app } from "../../firebase";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

import { useContext } from "react";
import { MyContext } from "../../App";
const auth = getAuth(app);

const provider = new GoogleAuthProvider();
const SignIn = () => {
  const [show, setShow] = useState(false);
  const setVisibility = () => {
    setShow(!show);
  };
  const navigate = useNavigate();

  const [showLoader, setShowLoader] = useState(false);
  const [formFields, setFormFields] = useState({
    email: "",
    password: "",
  });
  const context = useContext(MyContext);

  const googleSignin = () => {
    setShowLoader(true);

    const auth = getAuth();
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        setShowLoader(false);
        localStorage.setItem("isLogin", true);

        navigate("/");
        context.SignIn();
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
      });
  };

  const handleSignIn = (e) => {
    e.preventDefault();
    setShowLoader(true);
  
    signInWithEmailAndPassword(auth, formFields.email, formFields.password)
      .then((userCredential) => {
        setShowLoader(false);
        const user = userCredential.user;
  
        localStorage.setItem("isLogin", true);
        navigate("/");
      })
      .catch((error) => {
        setShowLoader(false);
        const errorCode = error.code;
        const errorMessage = error.message;
  
        alert(`Error signing in with password and email: ${errorCode} - ${errorMessage}`);
      });
  };
  

  const onChangeField = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormFields({
      ...formFields,
      [name]: value,
    });
  };

  return (
    <div>
      <section className="SignIn">
        <div className="container-fluid">
          <ul className="breadcrumb breadcrumb2 mb-0">
            <li>
              <Link to="/">Home/</Link>
            </li>
            <li>Sign In</li>
          </ul>
        </div>
        <div className="container loginWrapper">
          <div className="card shadow">
            <h2 className="email">Sign In</h2>
            <Backdrop
              className="loader"
              sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
              open={showLoader}
            >
              <CircularProgress color="inherit" />
            </Backdrop>
            <form onSubmit={handleSignIn}>
              <Box
                component="div"
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
                <div className="form-group input mb-4 w-100">
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
                    <Button
                      className="icon"
                      onClick={(e) => {
                        e.preventDefault();
                        setVisibility();
                      }}
                    >
                      {show ? <VisibilityOffIcon /> : <VisibilityIcon />}
                    </Button>
                  </div>
                </div>
                <button className="filter-button mt-4 w-100" type="submit">
                  Sign In
                </button>
                <div className="form-group mb-4 w-100">
                  <p className="text-center">OR</p>
                </div>
                <button
                  className="googlebutton mt-4 w-100"
                  variant="outlined"
                  onClick={googleSignin}
                >
                  <img
                    className="imageofgoogle"
                    src="data:image/png;base64,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"
                    alt="google"
                  />
                  Sign In with Google
                </button>
              </Box>
              <p className="text-center">
                If you do not have an account?
                <b>
                  <Link to="/SignUp"> SignUp</Link>
                </b>
              </p>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SignIn;
