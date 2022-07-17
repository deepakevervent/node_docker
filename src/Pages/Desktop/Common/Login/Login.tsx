import React, { useState } from "react";
import login_bg from "../../../../Assets/images/login_bg.svg";
import reset_password from "../../../../Assets/images/reset_password.svg";
import check_email from "../../../../Assets/images/check_email.svg";
import "./Login.scss";
import { Button, Grid } from "@material-ui/core";
import Login_text_field from "../../../../Components/login/Login_text_field/Login_text_field";
import Main_button from "../../../../Components/login/Buttons/Main_button";

function Login() {
  const [signInStatus, setSignInStatus] = useState(true);
  const [forgetPassswordStatus, setForgetPasswordStatus] = useState(false);
  const [checkEmailStatus, setCheckEmailStatus] = useState(false);
  return (
    <Grid className="loginWrapper" container spacing={0}>
      <Grid item xs={5} className="leftcol">
        <img
          src={
            signInStatus == true
              ? login_bg
              : forgetPassswordStatus == true
              ? reset_password
              : check_email
          }
          alt="logo"
        />
      </Grid>
      <Grid item xs={7} className="formsection">
        {signInStatus == true ? (
          <div className="innerWrapper">
            <h2>Login to your account</h2>
            <p>Please login using Username &amp; Password</p>

            <form noValidate className="formFields">
              <Login_text_field
                icons="loginField userid"
                name="User"
                type="text"
                placeholder="User ID"
              />
              <Login_text_field
                icons="loginField password"
                name="User"
                type="password"
                placeholder="Password"
              />
              <p className="forgotpassword_link">
                <Button
                  color="primary"
                  onClick={() => {
                    setSignInStatus(false);
                    setForgetPasswordStatus(true);
                  }}
                >
                  Forgot password?
                </Button>
              </p>
              <Button
                variant="contained"
                size="large"
                color="secondary"
                className="signin"
              >
                Sign In
              </Button>
            </form>
          </div>
        ) : null}
        {forgetPassswordStatus == true ? (
          <div className="innerWrapper">
            <h2>Reset your password</h2>
            <p>
              Enter the email address associated with your account and we’ll
              send an email with instructions to reset your password.
            </p>

            <form noValidate className="formFields">
              <Login_text_field
                icons="loginField email"
                name="User"
                type="text"
                placeholder="Email Address"
              />
              <Button
                variant="contained"
                size="large"
                color="primary"
                style={{ marginTop: "10px" }}
                onClick={() => {
                  setForgetPasswordStatus(false);
                  setCheckEmailStatus(true);
                }}
              >
                Send
              </Button>
              <p>
                <Button
                  color="primary"
                  style={{ marginTop: "10px" }}
                  onClick={() => {
                    setSignInStatus(true);
                    setForgetPasswordStatus(false);
                  }}
                >
                  I remember my password, take me back
                </Button>
              </p>
            </form>
          </div>
        ) : null}
        {checkEmailStatus == true ? (
          <div className="innerWrapper">
            <h2>Check your email</h2>
            <p>We have sent a password recovery instruction to your email</p>
            <h6>exa**e@do***.com</h6>
            <Button
              variant="contained"
              size="large"
              color="primary"
              style={{ marginTop: "10px" }}
            >
              Open mail
            </Button>
            <p>
              <Button color="primary" style={{ marginTop: "10px" }}>
                Skip
              </Button>
            </p>
            <p>
              <Button
                color="primary"
                style={{ marginTop: "10px" }}
                onClick={() => {
                  setCheckEmailStatus(false);
                  setForgetPasswordStatus(true);
                }}
              >
                Another email address
              </Button>
            </p>
          </div>
        ) : null}
      </Grid>
    </Grid>
  );
}

export default Login;
