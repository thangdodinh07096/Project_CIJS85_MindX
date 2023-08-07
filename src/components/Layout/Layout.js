import React, { useContext } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import MyApp from "../../contexts/MyApp";
import "./Layout.css";

const Layout = () => {
  const { onLogoutHandle, currentUser } = useContext(MyApp);

  return (
    <div>
      <header>
        <nav className="navbar navbar-dark bg-dark fixed-top">
          <div className="container">
            <a className="navbar-brand" href="./">
              <i className="fas fa-home">
                {" "}
                Home{" "}
                <span style={{ fontStyle: "italic", fontWeight: 100 }}>
                  Stays
                </span>
              </i>
            </a>
            <div className="list-inline-border">
              <li>
                <i className="fas fa-pencil-alt" /> BOOK NOW
              </li>
              <li>
                <i className="fas fa-phone" /> +84 123 456 789
              </li>
            </div>
            {currentUser == 0 ? (
              ""
            ) : (
              <div className=" d-flex justify-content-center align-items-center gap-2 text-light">
                <img
                  className="rounded-circle"
                  src={currentUser.img}
                  style={{ width: "40px", height: "40px" }}
                />
                <p className="m-0">{currentUser.name}</p>
              </div>
            )}
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasDarkNavbar"
              aria-controls="offcanvasDarkNavbar"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div
              className="offcanvas offcanvas-end text-bg-dark"
              tabIndex={-1}
              id="offcanvasDarkNavbar"
              aria-labelledby="offcanvasDarkNavbarLabel"
            >
              <div className="offcanvas-header">
                <Link to="/"
                  className="offcanvas-title navbar-brand"
                  id="offcanvasDarkNavbarLabel">
                  <i className="fas fa-home">
                    {" "}
                    Home{" "}
                    <span style={{ fontStyle: "italic", fontWeight: 100 }}>
                      Stays
                    </span>
                  </i>
                </Link>
                <button
                  type="button"
                  className="btn-close btn-close-white"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                />
              </div>
              <div className="offcanvas-body">
                <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">
                      HOME
                    </a>
                  </li>
                  <li className="nav-item">
                    <Link to="/hotels" className="nav-link">
                      BOOKING HOTEL
                    </Link>
                  </li>
                  <li className="nav-item dropdown">
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
                  <li className="nav-item">
                    <Link to="/contact" className="nav-link">
                      CONTACT
                    </Link>
                  </li>
                  <li className="nav-item">
                    {!localStorage.getItem("currentUser") ? (
                      <Link to="/login" className="nav-link">
                        LOGIN
                      </Link>
                    ) : (
                      ""
                    )}
                  </li>
                </ul>
              </div>
              <div
                className="d-flex justify-content-center"
                style={{ width: "100%" }}
              >
                {localStorage.getItem("currentUser") ? (
                  <button
                    className="btn btn-warning rounded mb-4"
                    style={{ width: "50%" }}
                    type="button"
                    onClick={onLogoutHandle}
                  >
                    LOGOUT
                  </button>
                ) : (
                  ""
                )}
              </div>
            </div>
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