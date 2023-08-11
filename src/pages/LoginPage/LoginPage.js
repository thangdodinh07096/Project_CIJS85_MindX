import React, { useContext, useEffect } from "react";
import "./LoginPage.css";
import { BsFillEyeFill, BsFillEyeSlashFill } from "react-icons/bs";
import { FaHome } from "react-icons/fa";
import MyApp from "../../contexts/MyApp";
import { Link } from "react-router-dom";
import img from "../imgs/sunset-5536777_1920 1.png";
import LoadingPage from "../LoadingPage/LoadingPage";

const LoginPage = () => {
  const {
    formikLogin,
    showPassword,
    onShowPasswordHandler,
    loading,
    setLoading,
  } = useContext(MyApp);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, [setLoading]);

  const { handleSubmit, values, handleChange, errors } = formikLogin;
  return (
    <>
      {loading === true ? (
        <LoadingPage />
      ) : (
        <section
          className="d-flex justify-content-center align-items-center "
          style={{
            height: "100vh",
            width: "100%",
            backgroundImage: `url('${img}')`,
            backgroundSize: "cover",
          }}
        >
          <div
            className="login container d-flex flex-wrap justify-content-between align-items-center container-fluid rounded shadow m-md-5 mt-0 m-0"
            style={{ padding: "0" }}
          >
            <form
              className="login-section d-flex flex-column col-12 justify-content-center align-items-center rounded gap-4 gap-sm-3"
              onSubmit={handleSubmit}
            >
              <FaHome size={60} />
              <h1 className="fas m-0">
                Home{" "}
                <span style={{ fontStyle: "italic", fontWeight: 100 }}>
                  Stays
                </span>
              </h1>
              <div
                className="d-flex flex-column align-items-center gap-2 gap-sm-0 mt-4 mt-sm-0"
                style={{ width: "100%" }}
              >
                <div className="email">
                  <input
                    type="email"
                    placeholder="Email@gmail.com"
                    value={values.userEmail}
                    onChange={handleChange}
                    name="userEmail"
                    autocomplete="off"
                    style={{
                      border: "none",
                      background: "transparent",
                      outline: "none",
                      width: "100%",
                    }}
                  />
                </div>
                {errors.userEmail ? (
                  <p
                    className="text-danger m-0 d-flex"
                    style={{ fontSize: "14px", width: "70%" }}
                  >
                    {errors.userEmail}
                  </p>
                ) : (
                  ""
                )}
                <div className="password-part">
                  <input
                    className="password"
                    type={showPassword}
                    placeholder="Password"
                    value={values.password}
                    onChange={handleChange}
                    name="password"
                    autocomplete="off"
                  />

                  <button
                    className="icon text-light"
                    onClick={onShowPasswordHandler}
                    type="button"
                  >
                    {showPassword === "password" ? (
                      <BsFillEyeFill size={22} />
                    ) : (
                      <BsFillEyeSlashFill size={22} />
                    )}
                  </button>
                </div>
                {errors.password ? (
                  <p
                    className="text-danger m-0 d-flex"
                    style={{ fontSize: "14px", width: "70%" }}
                  >
                    {errors.password}
                  </p>
                ) : (
                  ""
                )}
              </div>
              <div
                className="d-flex flex-column justify-content-center align-items-center gap-2"
                style={{ width: "100%", marginTop: "2%" }}
              >
                <button
                  className="btn btn-warning text-light"
                  style={{ width: "50%" }}
                  type="submit"
                >
                  Login
                </button>
                <Link
                  to="/register"
                  className="style-link link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover mt-3"
                >
                  Create An Account
                </Link>
              </div>
            </form>
          </div>
        </section>
      )}
    </>
  );
};

export default LoginPage;
