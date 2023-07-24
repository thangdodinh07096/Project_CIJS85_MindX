import React from 'react'

const Footer = () => {
    return (
        <footer id="footer" className=" bg-dark">
            <div className="container ">
                <div className="row justify-content-center">
                    <div className="col-md-12 text-center">
                        <h2 className="footer-heading">
                            <a className="navbar-brand" href="./index.html">
                                <i className="fas fa-home"> Home <span style={{ fontStyle: 'italic', fontWeight: 100 }}>Stays</span>
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
                                <a href="#" data-toggle="tooltip" data-placement="top" title="Twitter">
                                    <i className="fab fa-twitter" />
                                </a>
                            </li>
                            <li className="ftco-animate">
                                <a href="#" data-toggle="tooltip" data-placement="top" title="Facebook">
                                    <i className="fab fa-facebook" />
                                </a>
                            </li>
                            <li className="ftco-animate">
                                <a href="#" data-toggle="tooltip" data-placement="top" title="Instagram">
                                    <i className="fab fa-instagram" />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-md-12 text-center">
                        <p className="copyright">
                            Copyright ©
                            All rights reserved | This template
                            is made with <i className="ion-ios-heart" aria-hidden="true" /> by <a href="./index.html" target="_blank">HomeStays.com</a>
                        </p>
                    </div>
                </div>
            </div>
        </footer>

    )
}

export default Footer