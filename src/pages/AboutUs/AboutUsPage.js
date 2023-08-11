import React from "react";
import anh6 from "./img/anh6.png";
import anh7 from "./img/anh7.png";
import anh8 from "./img/anh8.png";
import anh9 from "./img/anh9.png";
import anh10 from "./img/anh10.png";
import "./AboutUsPage.css";

const AboutUsPage = () => {
    return (
        <>
            <section className="breadcrumbs-custom bg-image context-dark">
                <div className="breadcrumbs-custom-inner">
                    <div className="container breadcrumbs-custom-container">
                        <div className="breadcrumbs-custom-main">
                            <h6 className="breadcrumbs-custom-subtitle title-decorated">
                                About
                            </h6>
                            <h1 className="breadcrumbs-custom-title">About</h1>
                        </div>
                        <ul className="breadcrumbs-custom-path">
                            <li>
                                <a href="#">Home</a>
                            </li>
                            <li className="active">About</li>
                        </ul>
                    </div>
                </div>
            </section>
            {/* Overviewwww */}
            <section className="section section-lg">
                <div className="container">
                    <div className="row row-50">
                        <div className="col-md-10 col-lg-6">
                            <h3>Overview</h3>
                            <h5 className="font-weight-light">
                                Lux Hotel provides the best accommodation and relaxation for
                                guests from all over the world.
                            </h5>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis nostrud exercitation ulla consequat.
                                Duis aute irure dolor in reprehenderit in voluptate velit esse
                                cillum
                            </p>
                            <div className="group group-middle">
                                <a
                                    className="button button-primary button-winona font-weight-sbold"
                                    href="#our-history"
                                    data-waypoint-to="#our-history"
                                >
                                    <div className="content-original">View Our History</div>
                                    <div className="content-dubbed">View Our History</div>
                                </a>
                                <a
                                    className="button button-primary-outline button-winona font-weight-sbold "
                                    href="contacts.html"
                                >
                                    <div className="content-original mf-3">
                                        <span className="mdi-button mdi mdi-facebook-messenger"></span>
                                        Contact Us
                                    </div>
                                    <div className="content-dubbed">
                                        <span className="mdi-button mdi mdi-facebook-messenger"></span>
                                        Contact Us
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="col-md-10 col-lg-6 col-xl-5">
                            {" "}
                            <img
                                className="img-responsive"
                                src={anh6}
                                alt=""
                                width="570"
                                height="368"
                            />
                        </div>
                    </div>
                </div>
            </section>
            {/* our historyy */}
            <section className="section section-lg bg-gray-850" id="our-history">
                <div className="container">
                    <article className="timeline-classic">
                        <div className="timeline-classic-item">
                            <div className="timeline-classic-item-aside">
                                <img
                                    className="timeline-classic-item-image"
                                    src={anh7}
                                    alt=""
                                    width="390"
                                    height="250"
                                />
                            </div>
                            <div className="timeline-classic-item-divider"></div>
                            <div className="timeline-classic-item-main">
                                <p className="timeline-classic-item-title">Accommodation</p>
                                <p className="thumbnail-classic-item-subtitle">
                                    We Offer Lots of Great Accommodation Options Designed to
                                    Provide the Best Level of Comfort
                                </p>
                                <p className="texthotel">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                                    do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad minim veniam, quis nostrud exercitation ulla
                                    consequat. Duis aute irure dolor in reprehenderit in voluptate
                                    velit esse cillum dolore
                                </p>
                            </div>
                        </div>
                        <div className="timeline-classic-item">
                            <div className="timeline-classic-item-aside">
                                <img
                                    className="timeline-classic-item-image"
                                    src={anh8}
                                    alt=""
                                    width="390"
                                    height="250"
                                />
                            </div>
                            <div className="timeline-classic-item-divider"></div>
                            <div className="timeline-classic-item-main">
                                <p className="timeline-classic-item-title">Restaurant</p>
                                <p className="thumbnail-classic-item-subtitle">
                                    “Aurora”, the Restaurant Located at our Hotel Offers an
                                    Amazingly Varied Menu to Our Customers.
                                </p>
                                <p className="texthotel">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                                    do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad minim veniam, quis nostrud exercitation ulla
                                    consequat. Duis aute irure dolor in reprehenderit in voluptate
                                    velit esse cillum dolore
                                </p>
                            </div>
                        </div>
                        <div className="timeline-classic-item">
                            <div className="timeline-classic-item-aside">
                                <img
                                    className="timeline-classic-item-image"
                                    src={anh9}
                                    alt=""
                                    width="390"
                                    height="250"
                                />
                            </div>
                            <div className="timeline-classic-item-divider"></div>
                            <div className="timeline-classic-item-main">
                                <p className="timeline-classic-item-title">Swimming Pool</p>
                                <p className="thumbnail-classic-item-subtitle">
                                    You Can Also Relax and Spend Your Time with Benefit at the
                                    Swimming Pool at Our Hotel.
                                </p>
                                <p className="texthotel">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                                    do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad minim veniam, quis nostrud exercitation ulla
                                    consequat. Duis aute irure dolor in reprehenderit in voluptate
                                    velit esse cillum dolore
                                </p>
                            </div>
                        </div>
                        <div className="timeline-classic-item">
                            <div className="timeline-classic-item-aside">
                                <img
                                    className="timeline-classic-item-image"
                                    src={anh10}
                                    alt=""
                                    width="390"
                                    height="250"
                                />
                            </div>
                            <div className="timeline-classic-item-divider"></div>
                            <div className="timeline-classic-item-main">
                                <p className="timeline-classic-item-title">Great Staff</p>
                                <p className="thumbnail-classic-item-subtitle">
                                    Lux Hotel Employs the Best People in the Industry - From
                                    Waiters to Receptionists
                                </p>
                                <p className="texthotel">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                                    do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad minim veniam, quis nostrud exercitation ulla
                                    consequat. Duis aute irure dolor in reprehenderit in voluptate
                                    velit esse cillum dolore
                                </p>
                            </div>
                        </div>
                    </article>
                </div>
            </section>
        </>
    );
};

export default AboutUsPage;