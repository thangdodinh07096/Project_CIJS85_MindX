import React from "react";
import "./LoginPage.css";
import { BiShowAlt } from "react-icons/bi";

const LoginPage = () => {
  return (
    <section
      className="d-flex container-fluid justify-content-center align-items-center "
      style={{ height: "100vh", background: "#EEE2DE" }}
    >
      <div
        className="login d-flex justify-content-between align-items-center container-fluid rounded shadow "
        style={{ padding: "0" }}
      >
        <div
          className="login-section d-flex flex-column justify-content-center align-items-center rounded-start-2 gap-3"
          style={{ background: "#FFF" }}
        >
          <h5>Welcome to Lux Hotel</h5>
          <div style={{ width: "100%" }}>
            <input
              className="email"
              type="email"
              placeholder="Email@gmail.com"
            />
            <div className="password-part">
              <input
                className="password"
                type="password"
                placeholder="Password"
              />
              <button className="icon">
                <BiShowAlt size={24} />
              </button>
            </div>
          </div>
          <div
            className="d-flex flex-column justify-content-center align-items-center gap-2"
            style={{ width: "100%", marginTop:'2%' }}
          >
            <button className="btn btn-dark" style={{ width: "65%" }}>
              Login
            </button>
            <p>Create An Account</p>
          </div>
        </div>
        <div
          className="logo-part d-flex flex-column justify-content-center align-items-center rounded-end-2"
          style={{
            background: "#6c757d",
          }}
        >
          <h2 className="text-light">Lux Hotel</h2>
          <img
            style={{ maxWidth: "180px" }}
            src="https://www.hotelluxgabicce.it/img/logo-new.png"
            alt="image"
          />
        </div>
      </div>
    </section>
  );
};

export default LoginPage;
