import React, { useContext } from "react";
import { NavLink, Link, Outlet } from "react-router-dom";
import MyApp from "../../contexts/MyApp";
import "./Layout.css";
import { AiOutlineClose } from "react-icons/ai";

const Layout = () => {
  const { onLogoutHandle, currentUser, onButtonToggler, buttonToggler } =
    useContext(MyApp);

  return (
    <div>
      <header>
        <nav className="navbar navbar-dark navbar-expand-lg bg-dark fixed-top">
          <div className="container">
            <NavLink
              className="navbar-brand"
              to="/"
              exact="/"
              style={{ margin: "12px 0" }}
            >
              <i className="fas fa-home">
                {" "}
                Home{" "}
                <span style={{ fontStyle: "italic", fontWeight: 100 }}>
                  Stays
                </span>
              </i>
            </NavLink>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
              onClick={onButtonToggler}
            >
              {buttonToggler === true ? (
                <span className="navbar-toggler-icon" />
              ) : (
                <AiOutlineClose style={{ width: "1.5em", height: "1.5em" }} />
              )}
            </button>
            <div
              className="collapse navbar-collapse justify-content-end"
              id="navbarSupportedContent"
            >
              {currentUser == 0 ? (
                <div
                  className="d-flex d-lg-none justify-content-start align-items-center gap-2 text-light"
                  style={{ margin: "8px 0" }}
                >
                  <img
                    className="rounded-circle"
                    src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=740&t=st=1691505009~exp=1691505609~hmac=5d6b97d54ed2e4dcf822fc09687712673ad748fbdc77e62255f5948804b8afbd"
                    style={{ width: "40px", height: "40px" }}
                  />
                  <div className="dropdown">
                    <button
                      className="dropdown-toggle m-0 bg-dark text-light"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                      style={{
                        outline: "none",
                        border: "none",
                      }}
                    >
                      User Account
                    </button>
                    <ul className="dropdown-menu dropdown-menu-dark">
                      <li
                        className=""
                        style={{
                          height: "35px",
                          display: "flex",
                          width: "100%",
                          flexWrap: "wrap",
                          alignContent: "center",
                          justifyContent: "center",
                        }}
                      >
                        <button
                          className="btn btn-warning rounded d-flex align-items-center justify-content-center"
                          style={{ width: "70%", height: "35px" }}
                          type="button"
                        >
                          <Link to="/login" className="nav-link">
                            Login
                          </Link>
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>
              ) : (
                <div
                  className="d-flex d-lg-none justify-content-start align-items-center gap-2 text-light"
                  style={{ margin: "8px 0" }}
                >
                  <img
                    className="rounded-circle"
                    src={currentUser.img}
                    style={{ width: "40px", height: "40px" }}
                  />
                  <div className="dropdown">
                    <button
                      className="dropdown-toggle m-0 bg-dark text-light"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                      style={{
                        outline: "none",
                        border: "none",
                      }}
                    >
                      {currentUser.name}
                    </button>
                    <ul className="dropdown-menu dropdown-menu-dark">
                      <li
                        className=""
                        style={{
                          height: "35px",
                          display: "flex",
                          width: "100%",
                          flexWrap: "wrap",
                          alignContent: "center",
                          justifyContent: "center",
                        }}
                      >
                        <button
                          className="btn btn-danger rounded"
                          style={{ width: "70%", height: "35px" }}
                          type="button"
                          onClick={onLogoutHandle}
                        >
                          Logout
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>
              )}
              <div className="d-block d-lg-flex justify-content-center align-items-center ">
                <ul className="navbar-nav justify-content-end flex-grow-1 pe-3 gap-1">
                  <li className="nav-item d-block d-lg-flex justify-content-center align-items-center">
                    <NavLink to="/" className="nav-link">
                      HOME
                    </NavLink>
                  </li>
                  <li className="nav-item d-block d-lg-flex justify-content-center align-items-center">
                    <NavLink
                      to="/hotels"
                      className="nav-link text-start text-lg-center"
                    >
                      BOOKING HOTEL
                    </NavLink>
                  </li>
                  {/* <li className="nav-item d-block d-lg-flex justify-content-center align-items-center">
                    <NavLink to="/blog" className="nav-link">
                      BLOG
                    </NavLink>
                  </li> */}
                  <li className="nav-item d-block d-lg-flex justify-content-center align-items-center">
                    <NavLink to="/aboutUs" className="nav-link">
                      ABOUT US
                    </NavLink>
                  </li>
                  <li className="nav-item d-block d-lg-flex justify-content-center align-items-center">
                    <NavLink to="/contact" className="nav-link">
                      CONTACT
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
            {currentUser == 0 ? (
              <div
                className="d-none d-lg-flex justify-content-center align-items-center gap-2 text-light"
                style={{ marginLeft: " 15px" }}
              >
                <img
                  className="rounded-circle"
                  src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=740&t=st=1691505009~exp=1691505609~hmac=5d6b97d54ed2e4dcf822fc09687712673ad748fbdc77e62255f5948804b8afbd"
                  style={{ width: "40px", height: "40px" }}
                />
                <div className="dropdown">
                  <button
                    className="dropdown-toggle m-0 bg-dark text-light"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    style={{
                      outline: "none",
                      border: "none",
                    }}
                  >
                    User Account
                  </button>
                  <ul className="dropdown-menu dropdown-menu-dark">
                    <li
                      className=""
                      style={{
                        height: "35px",
                        display: "flex",
                        width: "100%",
                        flexWrap: "wrap",
                        alignContent: "center",
                        justifyContent: "center",
                      }}
                    >
                      <button
                        className="btn btn-warning rounded d-flex align-items-center justify-content-center"
                        style={{ width: "70%", height: "35px" }}
                        type="button"
                      >
                        <Link to="/login" className="nav-link">
                          Login
                        </Link>
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            ) : (
              <div
                className="d-none d-lg-flex justify-content-center align-items-center gap-2 text-light"
                style={{ marginLeft: " 15px" }}
              >
                <img
                  className="rounded-circle"
                  src={currentUser.img}
                  style={{ width: "40px", height: "40px" }}
                />
                <div className="dropdown">
                  <button
                    className="dropdown-toggle m-0 bg-dark text-light"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    style={{
                      outline: "none",
                      border: "none",
                    }}
                  >
                    {currentUser.name}
                  </button>
                  <ul className="dropdown-menu dropdown-menu-dark">
                    <li
                      className=""
                      style={{
                        height: "35px",
                        display: "flex",
                        width: "100%",
                        flexWrap: "wrap",
                        alignContent: "center",
                        justifyContent: "center",
                      }}
                    >
                      <button
                        className="btn btn-danger rounded"
                        style={{ width: "70%", height: "35px" }}
                        type="button"
                        onClick={onLogoutHandle}
                      >
                        Logout
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            )}
          </div>
        </nav>
      </header>
      <Outlet />
      <footer id="footer" className=" bg-dark">
        <div className="container ">
          <div className="row justify-content-center">
            <div className="col-md-12 text-center">
              <h2 className="footer-heading">
                <a className="navbar-brand" href="./index.html">
                  <i className="fas fa-home">
                    {" "}
                    Home{" "}
                    <span style={{ fontStyle: "italic", fontWeight: 100 }}>
                      Stays
                    </span>
                  </i>
                </a>
              </h2>
              <p className="menu">
                <a href="#">Home</a>
                <a href="#">Team</a>
                <a href="#">About</a>
                <a href="#">Rooms</a>
                <a href="#">Blog</a>
                <a href="#">Contact</a>
              </p>
              <ul className="ftco-footer-social p-0">
                <li className="ftco-animate">
                  <a
                    href="#"
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Twitter"
                  >
                    <i className="fab fa-twitter" />
                  </a>
                </li>
                <li className="ftco-animate">
                  <a
                    href="#"
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Facebook"
                  >
                    <i className="fab fa-facebook" />
                  </a>
                </li>
                <li className="ftco-animate">
                  <a
                    href="#"
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Instagram"
                  >
                    <i className="fab fa-instagram" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-md-12 text-center">
              <p className="copyright">
                Copyright © All rights reserved | This template is made with{" "}
                <i className="ion-ios-heart" aria-hidden="true" /> by{" "}
                <a href="./index.html" target="_blank">
                  HomeStays.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;