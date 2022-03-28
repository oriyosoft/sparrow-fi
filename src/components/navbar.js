import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "mdb-react-ui-kit/dist/css/mdb.min.css";

import { BsChevronCompactLeft, BsChevronCompactRight, BsPersonCircle } from "react-icons/bs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faSearch, faShoppingCart, faNewspaper, faBell } from "@fortawesome/free-solid-svg-icons";
import { faGooglePlay } from "@fortawesome/free-brands-svg-icons";


function NavBar () {
    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-dark d-none d-lg-block" style={{ zIndex: '2000' }} >
                <div className="container-fluid">
                    <a className="navbar-brand nav-link" href="./NULL">
                        <strong>Appexample</strong>
                    </a>

                    <button 
                        className="navbar-toggler" 
                        type="button" 
                        data-mdb-toggle="collapse" 
                        data-mdb-target="#navbarExample01"
                        aria-controls="navbarExample01" 
                        aria-expanded="false" 
                        aria-label="Toggle navigation"
                    >
                        <FontAwesomeIcon icon={ faBars } />
                    </button>

                    <div className="collapse navbar-collapse" id="navbarExample01">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item active">
                                <a className="nav-link" aria-current="page" href="#intro">NavMenu-1</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="./NULL">NavMenu-2</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="./NULL">NavMenu-3</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="./NULL">NavMenu-4</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="./NULL">NavMenu-5</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="./NULL">NavMenu-6</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="./NULL">NavMenu-7</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="./NULL">NavMenu-8</a>
                            </li>
                        </ul>

                        <ul className="navbar-nav list-inline">
                            <li className="nav-item">
                                <a className="nav-link" href="./NULL">
                                    <FontAwesomeIcon icon={ faSearch } />
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="./NULL">
                                    <FontAwesomeIcon icon={ faShoppingCart } />
                                </a>
                            </li>
                            <li className="nav-item">
                                <div className="dropdown">
                                    <button
                                        className="btn btn-outline-light dropdown-toggle" 
                                        type="button" 
                                        data-mdb-toggle="dropdown" 
                                        aria-expanded="false"
                                        href="./NULL"
                                    >
                                        <BsPersonCircle />
                                    </button>
                                    <div className="dropdown-menu" style={{ width: "320px", marginTop: "10px" }}>
                                        <form className="px-4 py-3">                                             
                                            <div className="form-outline mb-4">
                                                <input type="email" id="form2Example1" className="form-control" />
                                                <label className="form-label" for="form2Example1">Email address</label>
                                            </div>                                               
                                            <div className="form-outline mb-4">
                                                <input type="password" id="form2Example2" className="form-control" />
                                                <label className="form-label" for="form2Example2">Password</label>
                                            </div>                                               
                                            <div className="row mb-4">
                                                <div className="col d-flex justify-content-center">                                                   
                                                    <div className="form-check">
                                                        <input className="form-check-input" type="checkbox" value="" id="form2Example3" checked/>
                                                        <label className="form-check-label" for="form2Example3"> Remember me </label>
                                                    </div>
                                                </div>
                                                <div className="col">                                                   
                                                    <a href="./NULL">Forgot password?</a>
                                                </div>
                                            </div>                                              
                                            <button type="submit" className="btn btn-primary btn-block">Sign in</button>
                                        </form>
                                        <div className="dropdown-divider"></div>
                                        <a className="dropdown-item" href="./NULL">New around here? Sign up</a>
                                        <a className="dropdown-item" href="./NULL">Forgot password?</a>
                                    </div>
                                </div>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="./NULL">
                                    <FontAwesomeIcon icon={ faNewspaper } />
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="./NULL">
                                    <FontAwesomeIcon icon={ faBell } />
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="./NULL">
                                    <FontAwesomeIcon icon={ faGooglePlay } />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <div id="introCarousel" className="carousel slide carousel-fade shadow-2-strong car--height" data-bs-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-bs-target="#introCarousel" data-bs-slide-to="0" className="active"></li>
                    <li data-bs-target="#introCarousel" data-bs-slide-to="1"></li>
                    <li data-bs-target="#introCarousel" data-bs-slide-to="2"></li>
                </ol>

                <div className="carousel-inner car--height">
                    <div className="carousel-item bg-image--1 car--height active" data-bs-interval="3000">
                        <div className="mask" style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}>
                            <div className="d-flex justify-content-center align-items-center h-100">
                                <div className="text-white text-center">
                                    <h1 className="mb-3">Hello!! Welcome to Appexample.com</h1>
                                    <h5 className="mb-4">Some Random Text, Some Random Text</h5>
                                    <a className="btn btn-outline-light btn-lg m-2" href="./NULL" role="button">
                                        Visit Our Site
                                    </a>
                                    <a className="btn btn-outline-light btn-lg m-2" href="./NULL" role="button">
                                        Download Our App
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="carousel-item bg-image--2 car--height" data-bs-interval="3000">
                        <div className="mask" style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)' }} >
                            <div className="d-flex justify-content-center align-items-center h-100">
                                <div className="text-white text-center">
                                    <h2>Some Random Text, Some Random Text</h2>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="carousel-item bg-image--3 car--height" data-bs-interval="3000">
                        <div className="mask" style={{ 
                            background: `linear-gradient(
                                45deg,
                                rgba(29, 236, 197, 0.7),
                                rgba(91, 14, 214, 0.7) 100%
                            )`
                            }}>
                            <div className="d-flex justify-content-center align-items-center h-100">
                                <div className="text-white text-center">
                                    <h2>Some Random Text, Some Random Text</h2>
                                    <a className="btn btn-outline-light btn-lg m-2"
                                        href="./NULL" role="button">Download Our App</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <a className="carousel-control-prev" href="#introCarousel" role="button" data-bs-slide="prev">
                    <BsChevronCompactLeft aria-hidden="true"></BsChevronCompactLeft>
                    <span className="sr-only">Previous</span>
                </a>
                
                <a className="carousel-control-next" href="#introCarousel" role="button" data-bs-slide="next">
                    <BsChevronCompactRight aria-hidden="true"></BsChevronCompactRight>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        </header>
    );
}

export default NavBar;
