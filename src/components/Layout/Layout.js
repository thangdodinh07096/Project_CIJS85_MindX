import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
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
            <Link className="navbar-brand" to="/">
              <i className="fas fa-home">
                {" "}
                Home{" "}
                <span style={{ fontStyle: "italic", fontWeight: 100 }}>
                  Stays
                </span>
              </i>
            </Link>
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
              <div className="offcanvas-body">
                <div className="d-block d-lg-flex justify-content-center align-items-center">
                <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                  <li className="nav-item d-block d-lg-flex justify-content-center align-items-center">
                    <Link to="/" className="nav-link active">
                      HOME
                    </Link>
                  </li>
                  <li className="nav-item d-block d-lg-flex justify-content-center align-items-center">
                    <Link to="/hotels" className="nav-link">
                      BOOKING HOTEL
                    </Link>
                  </li>
                  <li className="nav-item dropdown d-block d-lg-flex justify-content-center align-items-center">
                    <a
                      className="nav-link dropdown-toggle"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      PAGES
                    </a>
                    <ul className="dropdown-menu dropdown-menu-dark">
                      <li>
                        <a className="dropdown-item" href="#">
                          Blog
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Team
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item d-block d-lg-flex justify-content-center align-items-center">
                    <Link to="/contact" className="nav-link">
                      CONTACT
                    </Link>
                  </li>
                  <li className="nav-item d-block d-lg-flex justify-content-center align-items-center">
                    {!localStorage.getItem("currentUser") ? (
                      <Link to="/login" className="nav-link">
                        LOGIN
                      </Link>
                    ) : (
                      ""
                    )}
                  </li>
                  <li
                    className="nav-item d-flex d-lg-none"
                    style={{ padding: "8px 0" }}
                  >
                    {localStorage.getItem("currentUser") ? (
                      <button
                        className="bg-dark d-flex link-danger "
                        style={{
                          border: "none",
                          outline: "none",
                          width: "100%",
                        }}
                        type="button"
                        onClick={onLogoutHandle}
                      >
                        LOGOUT
                      </button>
                    ) : (
                      ""
                    )}
                  </li>
                </ul>
                <form className="d-flex" role="search">
                  <input
                    className="form-control rounded me-2"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                    style={{ height: "40px" }}
                  />
                  <button
                    className="btn btn-outline-success"
                    type="submit"
                    style={{ height: "40px" }}
                  >
                    Search
                  </button>
                </form></div>
              </div>
            </div>
            {currentUser == 0 ? (
              ""
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
                        LOGOUT
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
