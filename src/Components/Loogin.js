import React, { useState } from "react";
import "./loginn.css";

const Loogin = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [rotateHead, setRotateHead] = useState(0);

  const handlePasswordFocus = () => {
    document.querySelectorAll(".hand").forEach((hand) => {
      hand.classList.add("hide");
    });
    document.querySelector(".tongue").classList.remove("breath");
  };

  const handlePasswordBlur = () => {
    document.querySelectorAll(".hand").forEach((hand) => {
      hand.classList.remove("hide");
      hand.classList.remove("peek");
    });
    document.querySelector(".tongue").classList.add("breath");
  };

  const handleUsernameFocus = (event) => {
    const length = Math.min(event.target.value.length - 16, 19);
    document.querySelectorAll(".hand").forEach((hand) => {
      hand.classList.remove("hide");
      hand.classList.remove("peek");
    });
    setRotateHead(-length);
  };

  const handleUsernameBlur = () => {
    setRotateHead(0);
  };

  const handleUsernameInput = (event) => {
    const length = Math.min(event.target.value.length - 16, 19);
    setRotateHead(-length);
  };

  const handleShowPassword = () => {
    setPasswordVisible((prevState) => !prevState);
    document.querySelectorAll(".hand").forEach((hand) => {
      hand.classList.remove("peek");
      hand.classList.add("hide");
    });
  };

  return (
    <div className="container">
      <div className="ear ear--left" />
      <div className="ear ear--right" />
      <div className="face">
        <div className="eyes">
          <div className="eye eye--left">
            <div className="glow" />
          </div>
          <div className="eye eye--right">
            <div className="glow" />
          </div>
        </div>
        <div className="nose">
          <svg width="38.161" height="22.03">
            <path
              d="M2.017 10.987Q-.563 7.513.157 4.754C.877 1.994 2.976.135 6.164.093 16.4-.04 22.293-.022 32.048.093c3.501.042 5.48 2.081 6.02 4.661q.54 2.579-2.051 6.233-8.612 10.979-16.664 11.043-8.053.063-17.336-11.043z"
              fill="#243946"
            />
          </svg>
          <div className="glow" />
        </div>
        <div className="mouth">
          <svg className="smile" viewBox="-2 -2 84 23" width={84} height={23}>
            <path
              d="M0 0c3.76 9.279 9.69 18.98 26.712 19.238 17.022.258 10.72.258 28 0S75.959 9.182 79.987.161"
              fill="none"
              strokeWidth={3}
              strokeLinecap="square"
              strokeMiterlimit={3}
            />
          </svg>
          <div className="mouth-hole" />
          <div className="tongue breath">
            <div className="tongue-top" />
            <div className="line" />
            <div className="median" />
          </div>
        </div>
      </div>
      <div className="tengah">
        <div className="hands">
          <div className="hand hand--left">
            <div className="finger">
              <div className="bone" />
              <div className="nail" />
            </div>
            <div className="finger">
              <div className="bone" />
              <div className="nail" />
            </div>
            <div className="finger">
              <div className="bone" />
              <div className="nail" />
            </div>
          </div>
          <div className="hand hand--right">
            <div className="finger">
              <div className="bone" />
              <div className="nail" />
            </div>
            <div className="finger">
              <div className="bone" />
              <div className="nail" />
            </div>
            <div className="finger">
              <div className="bone" />
              <div className="nail" />
            </div>
          </div>
        </div>
      </div>
      <div className="tengah">
        <div className="login">
          <label>
            <div className="fas fa-user" />
            <input
              className="username"
              type="text"
              autoComplete="on"
              placeholder="Username"
              onFocus={handleUsernameFocus}
              onBlur={handleUsernameBlur}
              onInput={handleUsernameInput}
            />
          </label>
          <label>
            <div className="fas fa-lock" />
            <input
              className="password"
              type={passwordVisible ? "text" : "password"}
              autoComplete="off"
              placeholder="password"
              onFocus={handlePasswordFocus}
              onBlur={handlePasswordBlur}
            />
            <button className="password-button" onClick={handleShowPassword}>
              show
            </button>
          </label>
          <button className="login-button">sign in</button>
        </div>
      </div>
      <div className="footer">
        <p>
          Don't have an account yet?
          <a className="footer-a" href="registrasi.html">
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
};

export default Loogin;
