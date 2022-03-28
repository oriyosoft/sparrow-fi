import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "mdb-react-ui-kit/dist/css/mdb.min.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalf } from "@fortawesome/free-regular-svg-icons";
import { faCartShopping, faHeart, faBagShopping, faSearch } from "@fortawesome/free-solid-svg-icons";
/*
import P1 from "../images/products/P1.jpeg";
import P2 from "../images/products/P2.jpeg";
import P3 from "../images/products/P3.jpg";
import P4 from "../images/products/P4.jpg";
import P5 from "../images/products/P5.jpeg";
import P6 from "../images/products/P6.jpeg";

import P7 from "../images/products/P7.jpg";
import P8 from "../images/products/P8.jpg";
import P9 from "../images/products/P9.jpg";
import P10 from "../images/products/P10.jpg";
import P11 from "../images/products/P11.jpg";
import P12 from "../images/products/P12.jpg";

import P13 from "../images/products/P13.jpg";
import P14 from "../images/products/P14.jpg";
import P15 from "../images/products/P15.jpg";
import P16 from "../images/products/P16.jpg";
import P17 from "../images/products/P17.jpeg";
import P18 from "../images/products/P18.jpg";
*/
import U1 from "../assets/products/U1.jpeg";

function AllProducts () {
    return (
        <div class="container my-4">
            <div class="row mt--60">
                <div class="col-lg-12">
                    <div class="section__title text-center">
                        <h2 class="title__be--2">Some Random <span class="color--theme"> Text </span></h2>
                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered lebmid alteration in some ledmid form</p>
                    </div>
                </div>
            </div>

            <div class="row mt--20">
                <div class="col-md-12 col-lg-12 col-sm-12">
                    <div class="product__nav nav justify-content-left" role="tablist">
                        <a class="nav-item nav-link active" data-toggle="tab" href="#nav-menu-all" role="tab">Menu-All</a>
                        <a class="nav-item nav-link" data-toggle="tab" href="#nav-menu-1" role="tab">Random Menu-1</a>
                        <a class="nav-item nav-link" data-toggle="tab" href="#nav-menu-2" role="tab">Random Menu-2</a>
                        <a class="nav-item nav-link" data-toggle="tab" href="#nav-menu-3" role="tab">Random Menu-3</a>
                        <a class="nav-item nav-link" data-toggle="tab" href="#nav-menu-4" role="tab">Random Menu-4</a>
                        <a class="nav-item nav-link" data-toggle="tab" href="#nav-menu-5" role="tab">Random Menu-5</a>
                        <a class="nav-item nav-link" data-toggle="tab" href="#nav-menu-6" role="tab">Random Menu-6</a>
                        <a class="nav-item nav-link" data-toggle="tab" href="#nav-menu-7" role="tab">Random Menu-7</a>
                        <a class="nav-item nav-link" data-toggle="tab" href="#nav-menu-8" role="tab">Random Menu-8</a>
                        <a class="nav-item nav-link" data-toggle="tab" href="#nav-menu-9" role="tab">Random Menu-9</a>
                        <a class="nav-item nav-link" data-toggle="tab" href="#nav-menu-10" role="tab">Random Menu-10</a>
                        <a class="nav-item nav-link" data-toggle="tab" href="#nav-menu-11" role="tab">Random Menu-11</a>
                        <a class="nav-item nav-link" data-toggle="tab" href="#nav-menu-12" role="tab">Random Menu-12</a>
                        <a class="nav-item nav-link" data-toggle="tab" href="#nav-menu-13" role="tab">Random Menu-13</a>
                        <a class="nav-item nav-link" data-toggle="tab" href="#nav-menu-14" role="tab">Random Menu-14</a>
                        <a class="nav-item nav-link" data-toggle="tab" href="#nav-menu-15" role="tab">Random Menu-15</a>
                    </div>
                </div>
            </div>

            <div class="row mt--20">
                <div class="col-md-2 col-lg-2 mb-2 mb-lg-0">
                    <div class="card">
                        <div class="d-flex justify-content-between p-3">
                            <p class="lead mb-0">Some Random Text</p>
                            <div
                                class="bg-info rounded-circle d-flex align-items-center justify-content-center shadow-1-strong"
                                style={{ width: "25px", height: "25px" }}
                            >
                                <p class="text-white mb-0 small">num</p>
                            </div>
                        </div>
                        <img
                            src={ U1 }
                            class="card-img-top"
                            alt="Laptop"
                            height="150px"
                            width="100px"
                        />
                        <div class="card-body">
                            <div class="d-flex justify-content-between">
                                <p class="small"><a href="./NULL" class="text-muted">Random Text</a></p>
                                <p class="small text-danger"><s>num</s></p>
                            </div>

                            <div class="d-flex justify-content-between mb-3">
                                <h5 class="mb-0">Random Text</h5>
                                <h5 class="text-dark mb-0">num</h5>
                            </div>

                            <div class="d-flex justify-content-between mb-2">
                                <p class="text-muted mb-0">Text: <span class="fw-bold">num</span></p>
                                <div class="d-flex justify-content-start align-items-end h-100">
                                    <h5><span class="badge bg-primary ms-2">TEXT</span></h5>
                                </div>
                            </div>
                            <div class="d-flex justify-content-between mb-2">
                                <div class="d-flex justify-content-between mt-2">
                                    <FontAwesomeIcon style={{ paddingRight: "10px" }} icon= { faBagShopping } />
                                    <FontAwesomeIcon style={{ paddingRight: "10px" }} icon= { faCartShopping } />
                                    <FontAwesomeIcon style={{ paddingRight: "10px" }} icon= { faHeart } />
                                    <FontAwesomeIcon style={{ paddingRight: "10px" }} icon= { faSearch } />
                                </div>
                                <div class="ms-auto text-warning mb-0">
                                    <FontAwesomeIcon icon= { faStar } />
                                    <FontAwesomeIcon icon= { faStar } />
                                    <FontAwesomeIcon icon= { faStar } />
                                    <FontAwesomeIcon icon= { faStarHalf } />
                                    <FontAwesomeIcon icon= { faStarHalf } />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-2 col-lg-2 mb-2 mb-lg-0">
                    <div class="card">
                        <div class="d-flex justify-content-between p-3">
                            <p class="lead mb-0">Some Random Text</p>
                            <div
                            class="bg-info rounded-circle d-flex align-items-center justify-content-center shadow-1-strong"
                                style={{ width: "25px", height: "25px" }}
                            >
                                <p class="text-white mb-0 small">num</p>
                            </div>
                        </div>
                        <img
                            src={ U1 }
                            class="card-img-top"
                            alt="Laptop"
                            height="150px"
                            width="100px"
                        />
                        <div class="card-body">
                            <div class="d-flex justify-content-between">
                                <p class="small"><a href="./NULL" class="text-muted">Random Text</a></p>
                                <p class="small text-danger"><s>num</s></p>
                            </div>

                            <div class="d-flex justify-content-between mb-3">
                                <h5 class="mb-0">Random Text</h5>
                                <h5 class="text-dark mb-0">num</h5>
                            </div>

                            <div class="d-flex justify-content-between mb-2">
                                <p class="text-muted mb-0">Text: <span class="fw-bold">num</span></p>
                                <div class="d-flex justify-content-start align-items-end h-100">
                                    <h5><span class="badge bg-primary ms-2">TEXT</span></h5>
                                </div>
                            </div>
                            <div class="d-flex justify-content-between mb-2">
                                <div class="d-flex justify-content-between mt-2">
                                    <FontAwesomeIcon style={{ paddingRight: "10px" }} icon= { faBagShopping } />
                                    <FontAwesomeIcon style={{ paddingRight: "10px" }} icon= { faCartShopping } />
                                    <FontAwesomeIcon style={{ paddingRight: "10px" }} icon= { faHeart } />
                                    <FontAwesomeIcon style={{ paddingRight: "10px" }} icon= { faSearch } />
                                </div>
                                <div class="ms-auto text-warning mb-0">
                                    <FontAwesomeIcon icon= { faStar } />
                                    <FontAwesomeIcon icon= { faStar } />
                                    <FontAwesomeIcon icon= { faStar } />
                                    <FontAwesomeIcon icon= { faStar } />
                                    <FontAwesomeIcon icon= { faStar } />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-2 col-lg-2 mb-2 mb-lg-0">
                    <div class="card">
                        <div class="d-flex justify-content-between p-3">
                            <p class="lead mb-0">Some Random Text</p>
                            <div
                                class="bg-info rounded-circle d-flex align-items-center justify-content-center shadow-1-strong"
                                style={{ width: "25px", height: "25px" }}
                            >
                                <p class="text-white mb-0 small">num</p>
                            </div>
                        </div>
                        <img
                            src={ U1 }
                            class="card-img-top"
                            alt="Gaming Laptop"
                            height="150px"
                            width="100px"
                        />
                        <div class="card-body">
                            <div class="d-flex justify-content-between">
                                <p class="small"><a href="./NULL" class="text-muted">Random Text</a></p>
                                <p class="small text-danger"><s>num</s></p>
                            </div>

                            <div class="d-flex justify-content-between mb-3">
                                <h5 class="mb-0">Random Text</h5>
                                <h5 class="text-dark mb-0">num</h5>
                            </div>

                            <div class="d-flex justify-content-between mb-2">
                                <p class="text-muted mb-0">Text: <span class="fw-bold">num</span></p>
                                <div class="d-flex justify-content-start align-items-end h-100">
                                    <h5><span class="badge bg-primary ms-2">TEXT</span></h5>
                                </div>
                            </div>
                            <div class="d-flex justify-content-between mb-2">
                                <div class="d-flex justify-content-between mt-2">
                                    <FontAwesomeIcon style={{ paddingRight: "10px" }} icon= { faBagShopping } />
                                    <FontAwesomeIcon style={{ paddingRight: "10px" }} icon= { faCartShopping } />
                                    <FontAwesomeIcon style={{ paddingRight: "10px" }} icon= { faHeart } />
                                    <FontAwesomeIcon style={{ paddingRight: "10px" }} icon= { faSearch } />
                                </div>
                                <div class="ms-auto text-warning mb-0">
                                    <FontAwesomeIcon icon= { faStar } />
                                    <FontAwesomeIcon icon= { faStar } />
                                    <FontAwesomeIcon icon= { faStar } />
                                    <FontAwesomeIcon icon= { faStar } />
                                    <FontAwesomeIcon icon= { faStar } />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-2 col-lg-2 mb-2 mb-lg-0">
                    <div class="card">
                        <div class="d-flex justify-content-between p-3">
                            <p class="lead mb-0">Some Random Text</p>
                            <div
                                class="bg-info rounded-circle d-flex align-items-center justify-content-center shadow-1-strong"
                                style={{ width: "25px", height: "25px" }}
                            >
                                <p class="text-white mb-0 small">num</p>
                            </div>
                        </div>
                        <img
                            src={ U1 }
                            class="card-img-top"
                            alt="Laptop"
                            height="150px"
                            width="100px"
                        />
                        <div class="card-body">
                            <div class="d-flex justify-content-between">
                                <p class="small"><a href="./NULL" class="text-muted">Random Text</a></p>
                                <p class="small text-danger"><s>num</s></p>
                            </div>

                            <div class="d-flex justify-content-between mb-3">
                                <h5 class="mb-0">Random Text</h5>
                                <h5 class="text-dark mb-0">num</h5>
                            </div>

                            <div class="d-flex justify-content-between mb-2">
                                <p class="text-muted mb-0">Text: <span class="fw-bold">num</span></p>
                                <div class="d-flex justify-content-start align-items-end h-100">
                                    <h5><span class="badge bg-primary ms-2">TEXT</span></h5>
                                </div>
                            </div>
                            <div class="d-flex justify-content-between mb-2">
                                <div class="d-flex justify-content-between mt-2">
                                    <FontAwesomeIcon style={{ paddingRight: "10px" }} icon= { faBagShopping } />
                                    <FontAwesomeIcon style={{ paddingRight: "10px" }} icon= { faCartShopping } />
                                    <FontAwesomeIcon style={{ paddingRight: "10px" }} icon= { faHeart } />
                                    <FontAwesomeIcon style={{ paddingRight: "10px" }} icon= { faSearch } />
                                </div>
                                <div class="ms-auto text-warning mb-0">
                                    <FontAwesomeIcon icon= { faStar } />
                                    <FontAwesomeIcon icon= { faStar } />
                                    <FontAwesomeIcon icon= { faStar } />
                                    <FontAwesomeIcon icon= { faStar } />
                                    <FontAwesomeIcon icon= { faStar } />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-2 col-lg-2 mb-2 mb-lg-0">
                    <div class="card">
                        <div class="d-flex justify-content-between p-3">
                            <p class="lead mb-0">Some Random Text</p>
                            <div
                                class="bg-info rounded-circle d-flex align-items-center justify-content-center shadow-1-strong"
                                style={{ width: "25px", height: "25px" }}
                            >
                                <p class="text-white mb-0 small">num</p>
                            </div>
                        </div>
                        <img
                            src={ U1 }
                            class="card-img-top"
                            alt="Laptop"
                            height="150px"
                            width="100px"
                        />
                        <div class="card-body">
                            <div class="d-flex justify-content-between">
                                <p class="small"><a href="./NULL" class="text-muted">Random Text</a></p>
                                <p class="small text-danger"><s>num</s></p>
                            </div>

                            <div class="d-flex justify-content-between mb-3">
                                <h5 class="mb-0">Random Text</h5>
                                <h5 class="text-dark mb-0">num</h5>
                            </div>

                            <div class="d-flex justify-content-between mb-2">
                                <p class="text-muted mb-0">Text: <span class="fw-bold">num</span></p>
                                <div class="d-flex justify-content-start align-items-end h-100">
                                    <h5><span class="badge bg-primary ms-2">TEXT</span></h5>
                                </div>
                            </div>
                            <div class="d-flex justify-content-between mb-2">
                                <div class="d-flex justify-content-between mt-2">
                                    <FontAwesomeIcon style={{ paddingRight: "10px" }} icon= { faBagShopping } />
                                    <FontAwesomeIcon style={{ paddingRight: "10px" }} icon= { faCartShopping } />
                                    <FontAwesomeIcon style={{ paddingRight: "10px" }} icon= { faHeart } />
                                    <FontAwesomeIcon style={{ paddingRight: "10px" }} icon= { faSearch } />
                                </div>
                                <div class="ms-auto text-warning mb-0">
                                    <FontAwesomeIcon icon= { faStar } />
                                    <FontAwesomeIcon icon= { faStar } />
                                    <FontAwesomeIcon icon= { faStar } />
                                    <FontAwesomeIcon icon= { faStar } />
                                    <FontAwesomeIcon icon= { faStar } />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-2 col-lg-2 mb-2 mb-lg-0">
                    <div class="card">
                        <div class="d-flex justify-content-between p-3">
                            <p class="lead mb-0">Some Random Text</p>
                            <div
                                class="bg-info rounded-circle d-flex align-items-center justify-content-center shadow-1-strong"
                                style={{ width: "25px", height: "25px" }}
                            >
                                <p class="text-white mb-0 small">num</p>
                            </div>
                        </div>
                        <img
                            src={ U1 }
                            class="card-img-top"
                            alt="Laptop"
                            height="150px"
                            width="100px"
                        />
                        <div class="card-body">
                            <div class="d-flex justify-content-between">
                                <p class="small"><a href="./NULL" class="text-muted">Random Text</a></p>
                                <p class="small text-danger"><s>num</s></p>
                            </div>

                            <div class="d-flex justify-content-between mb-3">
                                <h5 class="mb-0">Random Text</h5>
                                <h5 class="text-dark mb-0">num</h5>
                            </div>

                            <div class="d-flex justify-content-between mb-2">
                                <p class="text-muted mb-0">Text: <span class="fw-bold">num</span></p>
                                <div class="d-flex justify-content-start align-items-end h-100">
                                    <h5><span class="badge bg-primary ms-2">TEXT</span></h5>
                                </div>
                            </div>
                            <div class="d-flex justify-content-between mb-2">
                                <div class="d-flex justify-content-between mt-2">
                                    <FontAwesomeIcon style={{ paddingRight: "10px" }} icon= { faBagShopping } />
                                    <FontAwesomeIcon style={{ paddingRight: "10px" }} icon= { faCartShopping } />
                                    <FontAwesomeIcon style={{ paddingRight: "10px" }} icon= { faHeart } />
                                    <FontAwesomeIcon style={{ paddingRight: "10px" }} icon= { faSearch } />
                                </div>
                                <div class="ms-auto text-warning mb-0">
                                    <FontAwesomeIcon icon= { faStar } />
                                    <FontAwesomeIcon icon= { faStar } />
                                    <FontAwesomeIcon icon= { faStar } />
                                    <FontAwesomeIcon icon= { faStar } />
                                    <FontAwesomeIcon icon= { faStar } />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="row mt--20">
                <div class="col-md-2 col-lg-2 mb-2 mb-lg-0">
                    <div class="card">
                        <div class="d-flex justify-content-between p-3">
                            <p class="lead mb-0">Some Random Text</p>
                            <div
                                class="bg-info rounded-circle d-flex align-items-center justify-content-center shadow-1-strong"
                                style={{ width: "25px", height: "25px" }}
                            >
                                <p class="text-white mb-0 small">num</p>
                            </div>
                        </div>
                        <img
                            src={ U1 }
                            class="card-img-top"
                            alt="Laptop"
                            height="150px"
                            width="100px"
                        />
                        <div class="card-body">
                            <div class="d-flex justify-content-between">
                                <p class="small"><a href="./NULL" class="text-muted">Random Text</a></p>
                                <p class="small text-danger"><s>num</s></p>
                            </div>

                            <div class="d-flex justify-content-between mb-3">
                                <h5 class="mb-0">Random Text</h5>
                                <h5 class="text-dark mb-0">num</h5>
                            </div>

                            <div class="d-flex justify-content-between mb-2">
                                <p class="text-muted mb-0">Text: <span class="fw-bold">num</span></p>
                                <div class="d-flex justify-content-start align-items-end h-100">
                                    <h5><span class="badge bg-primary ms-2">TEXT</span></h5>
                                </div>
                            </div>
                            <div class="d-flex justify-content-between mb-2">
                                <div class="d-flex justify-content-between mt-2">
                                    <FontAwesomeIcon style={{ paddingRight: "10px" }} icon= { faBagShopping } />
                                    <FontAwesomeIcon style={{ paddingRight: "10px" }} icon= { faCartShopping } />
                                    <FontAwesomeIcon style={{ paddingRight: "10px" }} icon= { faHeart } />
                                    <FontAwesomeIcon style={{ paddingRight: "10px" }} icon= { faSearch } />
                                </div>
                                <div class="ms-auto text-warning mb-0">
                                    <FontAwesomeIcon icon= { faStar } />
                                    <FontAwesomeIcon icon= { faStar } />
                                    <FontAwesomeIcon icon= { faStar } />
                                    <FontAwesomeIcon icon= { faStarHalf } />
                                    <FontAwesomeIcon icon= { faStarHalf } />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-2 col-lg-2 mb-2 mb-lg-0">
                    <div class="card">
                        <div class="d-flex justify-content-between p-3">
                            <p class="lead mb-0">Some Random Text</p>
                            <div
                            class="bg-info rounded-circle d-flex align-items-center justify-content-center shadow-1-strong"
                                style={{ width: "25px", height: "25px" }}
                            >
                                <p class="text-white mb-0 small">num</p>
                            </div>
                        </div>
                        <img
                            src={ U1 }
                            class="card-img-top"
                            alt="Laptop"
                            height="150px"
                            width="100px"
                        />
                        <div class="card-body">
                            <div class="d-flex justify-content-between">
                                <p class="small"><a href="./NULL" class="text-muted">Random Text</a></p>
                                <p class="small text-danger"><s>num</s></p>
                            </div>

                            <div class="d-flex justify-content-between mb-3">
                                <h5 class="mb-0">Random Text</h5>
                                <h5 class="text-dark mb-0">num</h5>
                            </div>

                            <div class="d-flex justify-content-between mb-2">
                                <p class="text-muted mb-0">Text: <span class="fw-bold">num</span></p>
                                <div class="d-flex justify-content-start align-items-end h-100">
                                    <h5><span class="badge bg-primary ms-2">TEXT</span></h5>
                                </div>
                            </div>
                            <div class="d-flex justify-content-between mb-2">
                                <div class="d-flex justify-content-between mt-2">
                                    <FontAwesomeIcon style={{ paddingRight: "10px" }} icon= { faBagShopping } />
                                    <FontAwesomeIcon style={{ paddingRight: "10px" }} icon= { faCartShopping } />
                                    <FontAwesomeIcon style={{ paddingRight: "10px" }} icon= { faHeart } />
                                    <FontAwesomeIcon style={{ paddingRight: "10px" }} icon= { faSearch } />
                                </div>
                                <div class="ms-auto text-warning mb-0">
                                    <FontAwesomeIcon icon= { faStar } />
                                    <FontAwesomeIcon icon= { faStar } />
                                    <FontAwesomeIcon icon= { faStar } />
                                    <FontAwesomeIcon icon= { faStar } />
                                    <FontAwesomeIcon icon= { faStar } />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-2 col-lg-2 mb-2 mb-lg-0">
                    <div class="card">
                        <div class="d-flex justify-content-between p-3">
                            <p class="lead mb-0">Random Text</p>
                            <div
                                class="bg-info rounded-circle d-flex align-items-center justify-content-center shadow-1-strong"
                                style={{ width: "25px", height: "25px" }}
                            >
                                <p class="text-white mb-0 small">num</p>
                            </div>
                        </div>
                        <img
                            src={ U1 }
                            class="card-img-top"
                            alt="Gaming Laptop"
                            height="150px"
                            width="100px"
                        />
                        <div class="card-body">
                            <div class="d-flex justify-content-between">
                                <p class="small"><a href="./NULL" class="text-muted">Random Text</a></p>
                                <p class="small text-danger"><s>num</s></p>
                            </div>

                            <div class="d-flex justify-content-between mb-3">
                                <h5 class="mb-0">Random Text</h5>
                                <h5 class="text-dark mb-0">num</h5>
                            </div>

                            <div class="d-flex justify-content-between mb-2">
                                <p class="text-muted mb-0">Text: <span class="fw-bold">num</span></p>
                                <div class="d-flex justify-content-start align-items-end h-100">
                                    <h5><span class="badge bg-primary ms-2">TEXT</span></h5>
                                </div>
                            </div>
                            <div class="d-flex justify-content-between mb-2">
                                <div class="d-flex justify-content-between mt-2">
                                    <FontAwesomeIcon style={{ paddingRight: "10px" }} icon= { faBagShopping } />
                                    <FontAwesomeIcon style={{ paddingRight: "10px" }} icon= { faCartShopping } />
                                    <FontAwesomeIcon style={{ paddingRight: "10px" }} icon= { faHeart } />
                                    <FontAwesomeIcon style={{ paddingRight: "10px" }} icon= { faSearch } />
                                </div>
                                <div class="ms-auto text-warning mb-0">
                                    <FontAwesomeIcon icon= { faStar } />
                                    <FontAwesomeIcon icon= { faStar } />
                                    <FontAwesomeIcon icon= { faStar } />
                                    <FontAwesomeIcon icon= { faStar } />
                                    <FontAwesomeIcon icon= { faStar } />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-2 col-lg-2 mb-2 mb-lg-0">
                    <div class="card">
                        <div class="d-flex justify-content-between p-3">
                            <p class="lead mb-0">Some Random Text</p>
                            <div
                                class="bg-info rounded-circle d-flex align-items-center justify-content-center shadow-1-strong"
                                style={{ width: "25px", height: "25px" }}
                            >
                                <p class="text-white mb-0 small">num</p>
                            </div>
                        </div>
                        <img
                            src={ U1 }
                            class="card-img-top"
                            alt="Laptop"
                            height="150px"
                            width="100px"
                        />
                        <div class="card-body">
                            <div class="d-flex justify-content-between">
                                <p class="small"><a href="./NULL" class="text-muted">Random Text</a></p>
                                <p class="small text-danger"><s>num</s></p>
                            </div>

                            <div class="d-flex justify-content-between mb-3">
                                <h5 class="mb-0">Random Text</h5>
                                <h5 class="text-dark mb-0">num</h5>
                            </div>

                            <div class="d-flex justify-content-between mb-2">
                                <p class="text-muted mb-0">Text: <span class="fw-bold">num</span></p>
                                <div class="d-flex justify-content-start align-items-end h-100">
                                    <h5><span class="badge bg-primary ms-2">TEXT</span></h5>
                                </div>
                            </div>
                            <div class="d-flex justify-content-between mb-2">
                                <div class="d-flex justify-content-between mt-2">
                                    <FontAwesomeIcon style={{ paddingRight: "10px" }} icon= { faBagShopping } />
                                    <FontAwesomeIcon style={{ paddingRight: "10px" }} icon= { faCartShopping } />
                                    <FontAwesomeIcon style={{ paddingRight: "10px" }} icon= { faHeart } />
                                    <FontAwesomeIcon style={{ paddingRight: "10px" }} icon= { faSearch } />
                                </div>
                                <div class="ms-auto text-warning mb-0">
                                    <FontAwesomeIcon icon= { faStar } />
                                    <FontAwesomeIcon icon= { faStar } />
                                    <FontAwesomeIcon icon= { faStar } />
                                    <FontAwesomeIcon icon= { faStar } />
                                    <FontAwesomeIcon icon= { faStar } />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-2 col-lg-2 mb-2 mb-lg-0">
                    <div class="card">
                        <div class="d-flex justify-content-between p-3">
                            <p class="lead mb-0">Some Random Text</p>
                            <div
                                class="bg-info rounded-circle d-flex align-items-center justify-content-center shadow-1-strong"
                                style={{ width: "25px", height: "25px" }}
                            >
                                <p class="text-white mb-0 small">num</p>
                            </div>
                        </div>
                        <img
                            src={ U1 }
                            class="card-img-top"
                            alt="Laptop"
                            height="150px"
                            width="100px"
                        />
                        <div class="card-body">
                            <div class="d-flex justify-content-between">
                                <p class="small"><a href="./NULL" class="text-muted">Random Text</a></p>
                                <p class="small text-danger"><s>num</s></p>
                            </div>

                            <div class="d-flex justify-content-between mb-3">
                                <h5 class="mb-0">Random Text</h5>
                                <h5 class="text-dark mb-0">num</h5>
                            </div>

                            <div class="d-flex justify-content-between mb-2">
                                <p class="text-muted mb-0">Text: <span class="fw-bold">num</span></p>
                                <div class="d-flex justify-content-start align-items-end h-100">
                                    <h5><span class="badge bg-primary ms-2">TEXT</span></h5>
                                </div>
                            </div>
                            <div class="d-flex justify-content-between mb-2">
                                <div class="d-flex justify-content-between mt-2">
                                    <FontAwesomeIcon style={{ paddingRight: "10px" }} icon= { faBagShopping } />
                                    <FontAwesomeIcon style={{ paddingRight: "10px" }} icon= { faCartShopping } />
                                    <FontAwesomeIcon style={{ paddingRight: "10px" }} icon= { faHeart } />
                                    <FontAwesomeIcon style={{ paddingRight: "10px" }} icon= { faSearch } />
                                </div>
                                <div class="ms-auto text-warning mb-0">
                                    <FontAwesomeIcon icon= { faStar } />
                                    <FontAwesomeIcon icon= { faStar } />
                                    <FontAwesomeIcon icon= { faStar } />
                                    <FontAwesomeIcon icon= { faStar } />
                                    <FontAwesomeIcon icon= { faStar } />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-2 col-lg-2 mb-2 mb-lg-0">
                    <div class="card">
                        <div class="d-flex justify-content-between p-3">
                            <p class="lead mb-0">Some Random Text</p>
                            <div
                                class="bg-info rounded-circle d-flex align-items-center justify-content-center shadow-1-strong"
                                style={{ width: "25px", height: "25px" }}
                            >
                                <p class="text-white mb-0 small">num</p>
                            </div>
                        </div>
                        <img
                            src={ U1 }
                            class="card-img-top"
                            alt="Laptop"
                            height="150px"
                            width="100px"
                        />
                        <div class="card-body">
                            <div class="d-flex justify-content-between">
                                <p class="small"><a href="./NULL" class="text-muted">Random Text</a></p>
                                <p class="small text-danger"><s>num</s></p>
                            </div>

                            <div class="d-flex justify-content-between mb-3">
                                <h5 class="mb-0">Random Text</h5>
                                <h5 class="text-dark mb-0">num</h5>
                            </div>

                            <div class="d-flex justify-content-between mb-2">
                                <p class="text-muted mb-0">Text: <span class="fw-bold">num</span></p>
                                <div class="d-flex justify-content-start align-items-end h-100">
                                    <h5><span class="badge bg-primary ms-2">TEXT</span></h5>
                                </div>
                            </div>
                            <div class="d-flex justify-content-between mb-2">
                                <div class="d-flex justify-content-between mt-2">
                                    <FontAwesomeIcon style={{ paddingRight: "10px" }} icon= { faBagShopping } />
                                    <FontAwesomeIcon style={{ paddingRight: "10px" }} icon= { faCartShopping } />
                                    <FontAwesomeIcon style={{ paddingRight: "10px" }} icon= { faHeart } />
                                    <FontAwesomeIcon style={{ paddingRight: "10px" }} icon= { faSearch } />
                                </div>
                                <div class="ms-auto text-warning mb-0">
                                    <FontAwesomeIcon icon= { faStar } />
                                    <FontAwesomeIcon icon= { faStar } />
                                    <FontAwesomeIcon icon= { faStar } />
                                    <FontAwesomeIcon icon= { faStar } />
                                    <FontAwesomeIcon icon= { faStar } />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="row mt--20">
                <div class="col-md-2 col-lg-2 mb-2 mb-lg-0">
                    <div class="card">
                        <div class="d-flex justify-content-between p-3">
                            <p class="lead mb-0">Some Random Text</p>
                            <div
                                class="bg-info rounded-circle d-flex align-items-center justify-content-center shadow-1-strong"
                                style={{ width: "25px", height: "25px" }}
                            >
                                <p class="text-white mb-0 small">num</p>
                            </div>
                        </div>
                        <img
                            src={ U1 }
                            class="card-img-top"
                            alt="Laptop"
                            height="150px"
                            width="100px"
                        />
                        <div class="card-body">
                            <div class="d-flex justify-content-between">
                                <p class="small"><a href="./NULL" class="text-muted">Random Text</a></p>
                                <p class="small text-danger"><s>num</s></p>
                            </div>

                            <div class="d-flex justify-content-between mb-3">
                                <h5 class="mb-0">Random Text</h5>
                                <h5 class="text-dark mb-0">num</h5>
                            </div>

                            <div class="d-flex justify-content-between mb-2">
                                <p class="text-muted mb-0">Text: <span class="fw-bold">num</span></p>
                                <div class="d-flex justify-content-start align-items-end h-100">
                                    <h5><span class="badge bg-primary ms-2">TEXT</span></h5>
                                </div>
                            </div>
                            <div class="d-flex justify-content-between mb-2">
                                <div class="d-flex justify-content-between mt-2">
                                    <FontAwesomeIcon style={{ paddingRight: "10px" }} icon= { faBagShopping } />
                                    <FontAwesomeIcon style={{ paddingRight: "10px" }} icon= { faCartShopping } />
                                    <FontAwesomeIcon style={{ paddingRight: "10px" }} icon= { faHeart } />
                                    <FontAwesomeIcon style={{ paddingRight: "10px" }} icon= { faSearch } />
                                </div>
                                <div class="ms-auto text-warning mb-0">
                                    <FontAwesomeIcon icon= { faStar } />
                                    <FontAwesomeIcon icon= { faStar } />
                                    <FontAwesomeIcon icon= { faStar } />
                                    <FontAwesomeIcon icon= { faStarHalf } />
                                    <FontAwesomeIcon icon= { faStarHalf } />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-2 col-lg-2 mb-2 mb-lg-0">
                    <div class="card">
                        <div class="d-flex justify-content-between p-3">
                            <p class="lead mb-0">Some Random Text</p>
                            <div
                            class="bg-info rounded-circle d-flex align-items-center justify-content-center shadow-1-strong"
                                style={{ width: "25px", height: "25px" }}
                            >
                                <p class="text-white mb-0 small">num</p>
                            </div>
                        </div>
                        <img
                            src={ U1 }
                            class="card-img-top"
                            alt="Laptop"
                            height="150px"
                            width="100px"
                        />
                        <div class="card-body">
                            <div class="d-flex justify-content-between">
                                <p class="small"><a href="./NULL" class="text-muted">Random Text</a></p>
                                <p class="small text-danger"><s>num</s></p>
                            </div>

                            <div class="d-flex justify-content-between mb-3">
                                <h5 class="mb-0">Random Text</h5>
                                <h5 class="text-dark mb-0">num</h5>
                            </div>

                            <div class="d-flex justify-content-between mb-2">
                                <p class="text-muted mb-0">Text: <span class="fw-bold">num</span></p>
                                <div class="d-flex justify-content-start align-items-end h-100">
                                    <h5><span class="badge bg-primary ms-2">TEXT</span></h5>
                                </div>
                            </div>
                            <div class="d-flex justify-content-between mb-2">
                                <div class="d-flex justify-content-between mt-2">
                                    <FontAwesomeIcon style={{ paddingRight: "10px" }} icon= { faBagShopping } />
                                    <FontAwesomeIcon style={{ paddingRight: "10px" }} icon= { faCartShopping } />
                                    <FontAwesomeIcon style={{ paddingRight: "10px" }} icon= { faHeart } />
                                    <FontAwesomeIcon style={{ paddingRight: "10px" }} icon= { faSearch } />
                                </div>
                                <div class="ms-auto text-warning mb-0">
                                    <FontAwesomeIcon icon= { faStar } />
                                    <FontAwesomeIcon icon= { faStar } />
                                    <FontAwesomeIcon icon= { faStar } />
                                    <FontAwesomeIcon icon= { faStar } />
                                    <FontAwesomeIcon icon= { faStar } />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-2 col-lg-2 mb-2 mb-lg-0">
                    <div class="card">
                        <div class="d-flex justify-content-between p-3">
                            <p class="lead mb-0">Some Random Text</p>
                            <div
                                class="bg-info rounded-circle d-flex align-items-center justify-content-center shadow-1-strong"
                                style={{ width: "25px", height: "25px" }}
                            >
                                <p class="text-white mb-0 small">num</p>
                            </div>
                        </div>
                        <img
                            src={ U1 }
                            class="card-img-top"
                            alt="Gaming Laptop"
                            height="150px"
                            width="100px"
                        />
                        <div class="card-body">
                            <div class="d-flex justify-content-between">
                                <p class="small"><a href="./NULL" class="text-muted">Random Text</a></p>
                                <p class="small text-danger"><s>num</s></p>
                            </div>

                            <div class="d-flex justify-content-between mb-3">
                                <h5 class="mb-0">Random Text</h5>
                                <h5 class="text-dark mb-0">num</h5>
                            </div>

                            <div class="d-flex justify-content-between mb-2">
                                <p class="text-muted mb-0">Text: <span class="fw-bold">num</span></p>
                                <div class="d-flex justify-content-start align-items-end h-100">
                                    <h5><span class="badge bg-primary ms-2">TEXT</span></h5>
                                </div>
                            </div>
                            <div class="d-flex justify-content-between mb-2">
                                <div class="d-flex justify-content-between mt-2">
                                    <FontAwesomeIcon style={{ paddingRight: "10px" }} icon= { faBagShopping } />
                                    <FontAwesomeIcon style={{ paddingRight: "10px" }} icon= { faCartShopping } />
                                    <FontAwesomeIcon style={{ paddingRight: "10px" }} icon= { faHeart } />
                                    <FontAwesomeIcon style={{ paddingRight: "10px" }} icon= { faSearch } />
                                </div>
                                <div class="ms-auto text-warning mb-0">
                                    <FontAwesomeIcon icon= { faStar } />
                                    <FontAwesomeIcon icon= { faStar } />
                                    <FontAwesomeIcon icon= { faStar } />
                                    <FontAwesomeIcon icon= { faStar } />
                                    <FontAwesomeIcon icon= { faStar } />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-2 col-lg-2 mb-2 mb-lg-0">
                    <div class="card">
                        <div class="d-flex justify-content-between p-3">
                            <p class="lead mb-0">Some Random Text</p>
                            <div
                                class="bg-info rounded-circle d-flex align-items-center justify-content-center shadow-1-strong"
                                style={{ width: "25px", height: "25px" }}
                            >
                                <p class="text-white mb-0 small">num</p>
                            </div>
                        </div>
                        <img
                            src={ U1 }
                            class="card-img-top"
                            alt="Laptop"
                            height="150px"
                            width="100px"
                        />
                        <div class="card-body">
                            <div class="d-flex justify-content-between">
                                <p class="small"><a href="./NULL" class="text-muted">Random Text</a></p>
                                <p class="small text-danger"><s>num</s></p>
                            </div>

                            <div class="d-flex justify-content-between mb-3">
                                <h5 class="mb-0">Random Text</h5>
                                <h5 class="text-dark mb-0">num</h5>
                            </div>

                            <div class="d-flex justify-content-between mb-2">
                                <p class="text-muted mb-0">Text: <span class="fw-bold">num</span></p>
                                <div class="d-flex justify-content-start align-items-end h-100">
                                    <h5><span class="badge bg-primary ms-2">TEXT</span></h5>
                                </div>
                            </div>
                            <div class="d-flex justify-content-between mb-2">
                                <div class="d-flex justify-content-between mt-2">
                                    <FontAwesomeIcon style={{ paddingRight: "10px" }} icon= { faBagShopping } />
                                    <FontAwesomeIcon style={{ paddingRight: "10px" }} icon= { faCartShopping } />
                                    <FontAwesomeIcon style={{ paddingRight: "10px" }} icon= { faHeart } />
                                    <FontAwesomeIcon style={{ paddingRight: "10px" }} icon= { faSearch } />
                                </div>
                                <div class="ms-auto text-warning mb-0">
                                    <FontAwesomeIcon icon= { faStar } />
                                    <FontAwesomeIcon icon= { faStar } />
                                    <FontAwesomeIcon icon= { faStar } />
                                    <FontAwesomeIcon icon= { faStar } />
                                    <FontAwesomeIcon icon= { faStar } />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-2 col-lg-2 mb-2 mb-lg-0">
                    <div class="card">
                        <div class="d-flex justify-content-between p-3">
                            <p class="lead mb-0">Some Random Text</p>
                            <div
                                class="bg-info rounded-circle d-flex align-items-center justify-content-center shadow-1-strong"
                                style={{ width: "25px", height: "25px" }}
                            >
                                <p class="text-white mb-0 small">num</p>
                            </div>
                        </div>
                        <img
                            src={ U1 }
                            class="card-img-top"
                            alt="Laptop"
                            height="150px"
                            width="100px"
                        />
                        <div class="card-body">
                            <div class="d-flex justify-content-between">
                                <p class="small"><a href="./NULL" class="text-muted">Random Text</a></p>
                                <p class="small text-danger"><s>num</s></p>
                            </div>

                            <div class="d-flex justify-content-between mb-3">
                                <h5 class="mb-0">Random Text</h5>
                                <h5 class="text-dark mb-0">num</h5>
                            </div>

                            <div class="d-flex justify-content-between mb-2">
                                <p class="text-muted mb-0">Text: <span class="fw-bold">num</span></p>
                                <div class="d-flex justify-content-start align-items-end h-100">
                                    <h5><span class="badge bg-primary ms-2">TEXT</span></h5>
                                </div>
                            </div>
                            <div class="d-flex justify-content-between mb-2">
                                <div class="d-flex justify-content-between mt-2">
                                    <FontAwesomeIcon style={{ paddingRight: "10px" }} icon= { faBagShopping } />
                                    <FontAwesomeIcon style={{ paddingRight: "10px" }} icon= { faCartShopping } />
                                    <FontAwesomeIcon style={{ paddingRight: "10px" }} icon= { faHeart } />
                                    <FontAwesomeIcon style={{ paddingRight: "10px" }} icon= { faSearch } />
                                </div>
                                <div class="ms-auto text-warning mb-0">
                                    <FontAwesomeIcon icon= { faStar } />
                                    <FontAwesomeIcon icon= { faStar } />
                                    <FontAwesomeIcon icon= { faStar } />
                                    <FontAwesomeIcon icon= { faStar } />
                                    <FontAwesomeIcon icon= { faStar } />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-2 col-lg-2 mb-2 mb-lg-0">
                    <div class="card">
                        <div class="d-flex justify-content-between p-3">
                            <p class="lead mb-0">Some Random Text</p>
                            <div
                                class="bg-info rounded-circle d-flex align-items-center justify-content-center shadow-1-strong"
                                style={{ width: "25px", height: "25px" }}
                            >
                                <p class="text-white mb-0 small">num</p>
                            </div>
                        </div>
                        <img
                            src={ U1 }
                            class="card-img-top"
                            alt="Laptop"
                            height="150px"
                            width="100px"
                        />
                        <div class="card-body">
                            <div class="d-flex justify-content-between">
                                <p class="small"><a href="./NULL" class="text-muted">Random Text</a></p>
                                <p class="small text-danger"><s>num</s></p>
                            </div>

                            <div class="d-flex justify-content-between mb-3">
                                <h5 class="mb-0">Random Text</h5>
                                <h5 class="text-dark mb-0">num</h5>
                            </div>

                            <div class="d-flex justify-content-between mb-2">
                                <p class="text-muted mb-0">Text: <span class="fw-bold">num</span></p>
                                <div class="d-flex justify-content-start align-items-end h-100">
                                    <h5><span class="badge bg-primary ms-2">TEXT</span></h5>
                                </div>
                            </div>
                            <div class="d-flex justify-content-between mb-2">
                                <div class="d-flex justify-content-between mt-2">
                                    <FontAwesomeIcon style={{ paddingRight: "10px" }} icon= { faBagShopping } />
                                    <FontAwesomeIcon style={{ paddingRight: "10px" }} icon= { faCartShopping } />
                                    <FontAwesomeIcon style={{ paddingRight: "10px" }} icon= { faHeart } />
                                    <FontAwesomeIcon style={{ paddingRight: "10px" }} icon= { faSearch } />
                                </div>
                                <div class="ms-auto text-warning mb-0">
                                    <FontAwesomeIcon icon= { faStar } />
                                    <FontAwesomeIcon icon= { faStar } />
                                    <FontAwesomeIcon icon= { faStar } />
                                    <FontAwesomeIcon icon= { faStar } />
                                    <FontAwesomeIcon icon= { faStar } />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
            

    );
}

export default AllProducts;
