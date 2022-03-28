import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "mdb-react-ui-kit/dist/css/mdb.min.css";

import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationPin } from "@fortawesome/free-solid-svg-icons";
/*
import S1 from "../images/products/S1.jpg";
import S2 from "../images/products/S2.jpg";
import S3 from "../images/products/S3.jpg";
import S4 from "../images/products/S4.jpeg";
import S5 from "../images/products/S5.jpg";
import S6 from "../images/products/S6.jpg";

import S7 from "../images/products/S7.webp";
import S8 from "../images/products/S8.jpg";
import S9 from "../images/products/S9.webp";
import S10 from "../images/products/S10.jpg";
import S11 from "../images/products/S11.jpg";
import S12 from "../images/products/S12.webp";
*/
import U1 from "../assets/products/U1.jpeg";

function Shops () {
    return (
        <div className="container my-4">
            <div className="row mt--60">
                <div className="col-lg-12">
                    <div className="section__title text-center">
                        <h2 className="title__be--2">Some Random <span className="color--theme"> Text</span></h2>
                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered lebmid alteration in some ledmid form</p>
                    </div>
                </div>
            </div>

            <div id="shopsCarousel" className="carousel slide" data-bs-ride="carousel">

                <div className="carousel-inner">
                    <div className="carousel-item active" data-bs-interval="3000">
                        <div className="row mt--20">
                            <div className="col-md-2 col-lg-2 mb-2 mb-lg-0">
                                <div className="card">
                                    <div className="d-flex justify-content-between p-3">
                                        <p className="lead mb-0">Some Random Text</p>
                                        <div
                                            className="bg-info rounded-circle d-flex align-items-center justify-content-center shadow-1-strong"
                                            style={{ width: "25px", height: "25px" }}
                                        >
                                            <p className="text-white mb-0 small">num</p>
                                        </div>
                                    </div>
                                    <img
                                        src={ U1 }
                                        className="card-img-top"
                                        alt="Laptop"
                                        height="200px"
                                        width="100px"
                                    />
                                    <div className="card-body">

                                        <div className="d-flex justify-content-between mb-3">
                                            <h5 className="mb-0">Random Text</h5>
                                            <h5 className="text-dark mb-0">num Text</h5>
                                        </div>

                                        <div className="d-flex justify-content-between">
                                            <p className="small">
                                                <a href="./NULL" className="text-muted">
                                                    <FontAwesomeIcon icon={ faLocationPin } /> Inarintie 8, 00550 Helsinki, Finland
                                                </a>
                                            </p>
                                        </div>

                                        <div className="d-flex justify-content-between mb-2">
                                            <a className="btn btn-primary" href="./NULL">Button</a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-2 col-lg-2 mb-2 mb-lg-0">
                                <div className="card">
                                    <div className="d-flex justify-content-between p-3">
                                        <p className="lead mb-0">Some Random Text</p>
                                        <div
                                            className="bg-info rounded-circle d-flex align-items-center justify-content-center shadow-1-strong"
                                            style={{ width: "25px", height: "25px" }}
                                        >
                                            <p className="text-white mb-0 small">num</p>
                                        </div>
                                    </div>
                                    <img
                                        src={ U1 }
                                        className="card-img-top"
                                        alt="Laptop"
                                        height="200px"
                                        width="100px"
                                    />
                                    <div className="card-body">

                                        <div className="d-flex justify-content-between mb-3">
                                            <h5 className="mb-0">Random Text</h5>
                                            <h5 className="text-dark mb-0">num Text</h5>
                                        </div>

                                        <div className="d-flex justify-content-between">
                                            <p className="small">
                                                <a href="./NULL" className="text-muted">
                                                    <FontAwesomeIcon icon={ faLocationPin } /> Inarintie 8, 00550 Helsinki, Finland
                                                </a>
                                            </p>
                                        </div>

                                        <div className="d-flex justify-content-between mb-2">
                                            <a className="btn btn-primary" href="./NULL">Button</a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-2 col-lg-2 mb-2 mb-lg-0">
                                <div className="card">
                                    <div className="d-flex justify-content-between p-3">
                                        <p className="lead mb-0">Some Random Text</p>
                                        <div
                                            className="bg-info rounded-circle d-flex align-items-center justify-content-center shadow-1-strong"
                                            style={{ width: "25px", height: "25px" }}
                                        >
                                            <p className="text-white mb-0 small">num</p>
                                        </div>
                                    </div>
                                    <img
                                        src={ U1 }
                                        className="card-img-top"
                                        alt="Laptop"
                                        height="200px"
                                        width="100px"
                                    />
                                    <div className="card-body">

                                        <div className="d-flex justify-content-between mb-3">
                                            <h5 className="mb-0">Random Text</h5>
                                            <h5 className="text-dark mb-0">num Text</h5>
                                        </div>

                                        <div className="d-flex justify-content-between">
                                            <p className="small">
                                                <a href="./NULL" className="text-muted">
                                                    <FontAwesomeIcon icon={ faLocationPin } /> Inarintie 8, 00550 Helsinki, Finland
                                                </a>
                                            </p>
                                        </div>

                                        <div className="d-flex justify-content-between mb-2">
                                            <a className="btn btn-primary" href="./NULL">Button</a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-2 col-lg-2 mb-2 mb-lg-0">
                                <div className="card">
                                    <div className="d-flex justify-content-between p-3">
                                        <p className="lead mb-0">Some Random Text</p>
                                        <div
                                            className="bg-info rounded-circle d-flex align-items-center justify-content-center shadow-1-strong"
                                            style={{ width: "25px", height: "25px" }}
                                        >
                                            <p className="text-white mb-0 small">num</p>
                                        </div>
                                    </div>
                                    <img
                                        src={ U1 }
                                        className="card-img-top"
                                        alt="Laptop"
                                        height="200px"
                                        width="100px"
                                    />
                                    <div className="card-body">

                                        <div className="d-flex justify-content-between mb-3">
                                            <h5 className="mb-0">Random Text</h5>
                                            <h5 className="text-dark mb-0">num Text</h5>
                                        </div>

                                        <div className="d-flex justify-content-between">
                                            <p className="small">
                                                <a href="./NULL" className="text-muted">
                                                    <FontAwesomeIcon icon={ faLocationPin } /> Inarintie 8, 00550 Helsinki, Finland
                                                </a>
                                            </p>
                                        </div>

                                        <div className="d-flex justify-content-between mb-2">
                                            <a className="btn btn-primary" href="./NULL">Button</a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-2 col-lg-2 mb-2 mb-lg-0">
                                <div className="card">
                                    <div className="d-flex justify-content-between p-3">
                                        <p className="lead mb-0">Some Random Text</p>
                                        <div
                                            className="bg-info rounded-circle d-flex align-items-center justify-content-center shadow-1-strong"
                                            style={{ width: "25px", height: "25px" }}
                                        >
                                            <p className="text-white mb-0 small">num</p>
                                        </div>
                                    </div>
                                    <img
                                        src={ U1 }
                                        className="card-img-top"
                                        alt="Laptop"
                                        height="200px"
                                        width="100px"
                                    />
                                    <div className="card-body">

                                        <div className="d-flex justify-content-between mb-3">
                                            <h5 className="mb-0">Random Text</h5>
                                            <h5 className="text-dark mb-0">num Text</h5>
                                        </div>

                                        <div className="d-flex justify-content-between">
                                            <p className="small">
                                                <a href="./NULL" className="text-muted">
                                                    <FontAwesomeIcon icon={ faLocationPin } /> Inarintie 8, 00550 Helsinki, Finland
                                                </a>
                                            </p>
                                        </div>

                                        <div className="d-flex justify-content-between mb-2">
                                            <a className="btn btn-primary" href="./NULL">Button</a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-2 col-lg-2 mb-2 mb-lg-0">
                                <div className="card">
                                    <div className="d-flex justify-content-between p-3">
                                        <p className="lead mb-0">Some Random Text</p>
                                        <div
                                            className="bg-info rounded-circle d-flex align-items-center justify-content-center shadow-1-strong"
                                            style={{ width: "25px", height: "25px" }}
                                        >
                                            <p className="text-white mb-0 small">num</p>
                                        </div>
                                    </div>
                                    <img
                                        src={ U1 }
                                        className="card-img-top"
                                        alt="Laptop"
                                        height="200px"
                                        width="100px"
                                    />
                                    <div className="card-body">

                                        <div className="d-flex justify-content-between mb-3">
                                            <h5 className="mb-0">Random Text</h5>
                                            <h5 className="text-dark mb-0">num Text</h5>
                                        </div>

                                        <div className="d-flex justify-content-between">
                                            <p className="small">
                                                <a href="./NULL" className="text-muted">
                                                    <FontAwesomeIcon icon={ faLocationPin } /> Inarintie 8, 00550 Helsinki, Finland
                                                </a>
                                            </p>
                                        </div>

                                        <div className="d-flex justify-content-between mb-2">
                                            <a className="btn btn-primary" href="./NULL">Button</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                    <div className="carousel-item" data-bs-interval="3000">
                        <div className="row mt--20">
                            <div className="col-md-2 col-lg-2 mb-2 mb-lg-0">
                                <div className="card">
                                    <div className="d-flex justify-content-between p-3">
                                        <p className="lead mb-0">Some Random Text</p>
                                        <div
                                            className="bg-info rounded-circle d-flex align-items-center justify-content-center shadow-1-strong"
                                            style={{ width: "25px", height: "25px" }}
                                        >
                                            <p className="text-white mb-0 small">num</p>
                                        </div>
                                    </div>
                                    <img
                                        src={ U1 }
                                        className="card-img-top"
                                        alt="Laptop"
                                        height="200px"
                                        width="100px"
                                    />
                                    <div className="card-body">

                                        <div className="d-flex justify-content-between mb-3">
                                            <h5 className="mb-0">Random Text</h5>
                                            <h5 className="text-dark mb-0">num Text</h5>
                                        </div>

                                        <div className="d-flex justify-content-between">
                                            <p className="small">
                                                <a href="./NULL" className="text-muted">
                                                    <FontAwesomeIcon icon={ faLocationPin } /> Inarintie 8, 00550 Helsinki, Finland
                                                </a>
                                            </p>
                                        </div>

                                        <div className="d-flex justify-content-between mb-2">
                                            <a className="btn btn-primary" href="./NULL">Button</a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-2 col-lg-2 mb-2 mb-lg-0">
                                <div className="card">
                                    <div className="d-flex justify-content-between p-3">
                                        <p className="lead mb-0">Some Random Text</p>
                                        <div
                                            className="bg-info rounded-circle d-flex align-items-center justify-content-center shadow-1-strong"
                                            style={{ width: "25px", height: "25px" }}
                                        >
                                            <p className="text-white mb-0 small">num</p>
                                        </div>
                                    </div>
                                    <img
                                        src={ U1 }
                                        className="card-img-top"
                                        alt="Laptop"
                                        height="200px"
                                        width="100px"
                                    />
                                    <div className="card-body">

                                        <div className="d-flex justify-content-between mb-3">
                                            <h5 className="mb-0">Random Text</h5>
                                            <h5 className="text-dark mb-0">num Text</h5>
                                        </div>

                                        <div className="d-flex justify-content-between">
                                            <p className="small">
                                                <a href="./NULL" className="text-muted">
                                                    <FontAwesomeIcon icon={ faLocationPin } /> Inarintie 8, 00550 Helsinki, Finland
                                                </a>
                                            </p>
                                        </div>

                                        <div className="d-flex justify-content-between mb-2">
                                            <a className="btn btn-primary" href="./NULL">Button</a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-2 col-lg-2 mb-2 mb-lg-0">
                                <div className="card">
                                    <div className="d-flex justify-content-between p-3">
                                        <p className="lead mb-0">Some Random Text</p>
                                        <div
                                            className="bg-info rounded-circle d-flex align-items-center justify-content-center shadow-1-strong"
                                            style={{ width: "25px", height: "25px" }}
                                        >
                                            <p className="text-white mb-0 small">num</p>
                                        </div>
                                    </div>
                                    <img
                                        src={ U1 }
                                        className="card-img-top"
                                        alt="Laptop"
                                        height="200px"
                                        width="100px"
                                    />
                                    <div className="card-body">

                                        <div className="d-flex justify-content-between mb-3">
                                            <h5 className="mb-0">Random Text</h5>
                                            <h5 className="text-dark mb-0">num Text</h5>
                                        </div>

                                        <div className="d-flex justify-content-between">
                                            <p className="small">
                                                <a href="./NULL" className="text-muted">
                                                    <FontAwesomeIcon icon={ faLocationPin } /> Inarintie 8, 00550 Helsinki, Finland
                                                </a>
                                            </p>
                                        </div>

                                        <div className="d-flex justify-content-between mb-2">
                                            <a className="btn btn-primary" href="./NULL">Button</a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-2 col-lg-2 mb-2 mb-lg-0">
                                <div className="card">
                                    <div className="d-flex justify-content-between p-3">
                                        <p className="lead mb-0">Some Random Text</p>
                                        <div
                                            className="bg-info rounded-circle d-flex align-items-center justify-content-center shadow-1-strong"
                                            style={{ width: "25px", height: "25px" }}
                                        >
                                            <p className="text-white mb-0 small">num</p>
                                        </div>
                                    </div>
                                    <img
                                        src={ U1 }
                                        className="card-img-top"
                                        alt="Laptop"
                                        height="200px"
                                        width="100px"
                                    />
                                    <div className="card-body">

                                        <div className="d-flex justify-content-between mb-3">
                                            <h5 className="mb-0">Random Text</h5>
                                            <h5 className="text-dark mb-0">num Text</h5>
                                        </div>

                                        <div className="d-flex justify-content-between">
                                            <p className="small">
                                                <a href="./NULL" className="text-muted">
                                                    <FontAwesomeIcon icon={ faLocationPin } /> Inarintie 8, 00550 Helsinki, Finland
                                                </a>
                                            </p>
                                        </div>

                                        <div className="d-flex justify-content-between mb-2">
                                            <a className="btn btn-primary" href="./NULL">Button</a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-2 col-lg-2 mb-2 mb-lg-0">
                                <div className="card">
                                    <div className="d-flex justify-content-between p-3">
                                        <p className="lead mb-0">Some Random Text</p>
                                        <div
                                            className="bg-info rounded-circle d-flex align-items-center justify-content-center shadow-1-strong"
                                            style={{ width: "25px", height: "25px" }}
                                        >
                                            <p className="text-white mb-0 small">num</p>
                                        </div>
                                    </div>
                                    <img
                                        src={ U1 }
                                        className="card-img-top"
                                        alt="Laptop"
                                        height="200px"
                                        width="100px"
                                    />
                                    <div className="card-body">

                                        <div className="d-flex justify-content-between mb-3">
                                            <h5 className="mb-0">Random Text</h5>
                                            <h5 className="text-dark mb-0">num Text</h5>
                                        </div>

                                        <div className="d-flex justify-content-between">
                                            <p className="small">
                                                <a href="./NULL" className="text-muted">
                                                    <FontAwesomeIcon icon={ faLocationPin } /> Inarintie 8, 00550 Helsinki, Finland
                                                </a>
                                            </p>
                                        </div>

                                        <div className="d-flex justify-content-between mb-2">
                                            <a className="btn btn-primary" href="./NULL">Button</a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-2 col-lg-2 mb-2 mb-lg-0">
                                <div className="card">
                                    <div className="d-flex justify-content-between p-3">
                                        <p className="lead mb-0">Some Random Text</p>
                                        <div
                                            className="bg-info rounded-circle d-flex align-items-center justify-content-center shadow-1-strong"
                                            style={{ width: "25px", height: "25px" }}
                                        >
                                            <p className="text-white mb-0 small">num</p>
                                        </div>
                                    </div>
                                    <img
                                        src={ U1 }
                                        className="card-img-top"
                                        alt="Laptop"
                                        height="200px"
                                        width="100px"
                                    />
                                    <div className="card-body">

                                        <div className="d-flex justify-content-between mb-3">
                                            <h5 className="mb-0">Random Text</h5>
                                            <h5 className="text-dark mb-0">num Text</h5>
                                        </div>

                                        <div className="d-flex justify-content-between">
                                            <p className="small">
                                                <a href="./NULL" className="text-muted">
                                                    <FontAwesomeIcon icon={ faLocationPin } /> Inarintie 8, 00550 Helsinki, Finland
                                                </a>
                                            </p>
                                        </div>

                                        <div className="d-flex justify-content-between mb-2">
                                            <a className="btn btn-primary" href="./NULL">Button</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
                <a className="carousel-control-prev" href="#shopsCarousel" role="button" data-bs-slide="prev">
                    <BsChevronCompactLeft aria-hidden="true"></BsChevronCompactLeft>
                    <span className="sr-only">Previous</span>
                </a>
                
                <a className="carousel-control-next" href="#shopsCarousel" role="button" data-bs-slide="next">
                    <BsChevronCompactRight aria-hidden="true"></BsChevronCompactRight>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        </div>
    );
}

export default Shops;
