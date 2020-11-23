import React from "react";
import PageLogo from "../page-logo/PageLogo";
import "./login.css";

function LoginForm() {
  return (
    <div>
      <form className="login-form">
        <div>
          <PageLogo />
        </div>
        <div className="login-form_form-title">Login to your account</div>
        <div className="login-form_welcome-bk-nt">
          Welcome back! Please login to your account
        </div>
        <div className="login-form_input-c">
          <input type="text" placeholder="KTS12562892" />
        </div>
        <div className="login-form_input-c">
          <input type="text" placeholder="Enter Password" />
        </div>
        <button className="submit-btn">LOG IN</button>
        <div className="forget-pw">
          <a href="forget-password">Forgot Password ?</a>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
//https://5f1804b87c06c900160dc844.mockapi.io/sbsc/v1/login
