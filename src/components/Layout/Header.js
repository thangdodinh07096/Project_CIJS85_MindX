import React from 'react'

const Header = () => {
    return (
        <header>
            <nav className="navbar navbar-dark bg-dark fixed-top">
                <div className="container">
                    <a className="navbar-brand" href="./index.html">
                        <i className="fas fa-home"> Home <span style={{ fontStyle: 'italic', fontWeight: 100 }}>Stays</span>
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
                    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="offcanvas offcanvas-end text-bg-dark" tabIndex={-1} id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
                        <div className="offcanvas-header">
                            <a className="offcanvas-title navbar-brand" id="offcanvasDarkNavbarLabel" href="./index.html">
                                <i className="fas fa-home"> Home <span style={{ fontStyle: 'italic', fontWeight: 100 }}>Stays</span>
                                </i>
                            </a>
                            <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close" />
                        </div>
                        <div className="offcanvas-body">
                            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="#">HOME</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="./rooms.html">ROOMS</a>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        PAGES
                                    </a>
                                    <ul className="dropdown-menu dropdown-menu-dark">
                                        <li><a className="dropdown-item" href="#">Blog</a></li>
                                        <li><a className="dropdown-item" href="#">Team</a></li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">CONTACT</a>
                                </li>
                            </ul>
                            <form className="d-flex mt-3" role="search">
                                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                <button className="btn btn-web" type="submit">Search</button>
                            </form>
                        </div>
                    </div>
                </div>
            </nav>
        </header>

    )
}

export default Header