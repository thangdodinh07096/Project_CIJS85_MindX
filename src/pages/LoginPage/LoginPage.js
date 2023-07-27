import React, { useContext, useRef } from "react";
import "./LoginPage.css";
import { BsFillEyeFill, BsFillEyeSlashFill } from "react-icons/bs";
import { FaHome } from "react-icons/fa";
import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import MyApp from "../../contexts/MyApp";

const LoginPage = () => {
  const {
    onUserEmailValueChange,
    onUserPasswordValueChange,
    onSubmitLoginHandle,
  } = useContext(MyApp);

  const [showPassword, setShowPassword] = useState("password");

  const onShowPasswordHandler = () => {
    if (showPassword === "password") {
      setShowPassword("text");
    } else {
      setShowPassword("password");
    }
  };

  return (
    <section
      className="d-flex justify-content-center align-items-center "
      style={{ height: "100vh", width: "100%", background: "#EEE2DE" }}
    >
      <div
        className="login container d-flex flex-wrap justify-content-between align-items-center container-fluid rounded shadow mt-5"
        style={{ padding: "0" }}
      >
        <form
          className="login-section d-flex flex-column col-lg-6 col-12 justify-content-center align-items-center rounded-start-2 gap-4 gap-sm-3"
          style={{ background: "#FFF" }}
          onSubmit={onSubmitLoginHandle}
        >
          <div className="d-sm-none d-block">
            <FaHome size={80} />
          </div>
          <h5 className="m-0">Welcome to Lux Hotel</h5>
          <div
            className="d-flex flex-column align-items-center gap-2 gap-sm-0 mt-4 mt-sm-0"
            style={{ width: "100%" }}
          >
            <input
              className="email"
              type="email"
              placeholder="Email@gmail.com"
              onChange={onUserEmailValueChange}
            />
            <div className="password-part">
              <input
                className="password"
                type={showPassword}
                placeholder="Password"
                onChange={onUserPasswordValueChange}
              />
              <button className="icon" onClick={onShowPasswordHandler}>
                {showPassword === "password" ? (
                  <BsFillEyeFill size={22} />
                ) : (
                  <BsFillEyeSlashFill size={22} />
                )}
              </button>
            </div>
          </div>
          <div
            className="d-flex flex-column justify-content-center align-items-center gap-2"
            style={{ width: "100%", marginTop: "2%" }}
          >
            <button className="btn btn-dark" style={{ width: "70%" }}>
              Login
            </button>
            <p>Create An Account</p>
          </div>
        </form>
        <div
          className="logo-part d-none d-lg-flex flex-column col-lg-6 justify-content-center align-items-center rounded-end-2 text-light"
          style={{
            background: "#6c757d",
          }}
        >
          <h2>Home Stays</h2>
          <FaHome size={80} />
        </div>
      </div>
    </section>
  );
};

export default LoginPage;
