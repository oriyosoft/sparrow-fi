import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "mdb-react-ui-kit/dist/css/mdb.min.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { faStar, faStarHalf } from "@fortawesome/free-regular-svg-icons";
import { faCartShopping, faHeart, faBagShopping, faSearch } from "@fortawesome/free-solid-svg-icons";

/*
import P1 from "../images/products/P1.jpeg";
import P15 from "../images/products/P15.jpg";
import P17 from "../images/products/P17.jpeg";
import P8 from "../images/products/P8.jpg";
import P11 from "../images/products/P11.jpg";
import P6 from "../images/products/P6.jpeg";
*/
import U1 from "../assets/products/U1.jpeg";


function NewProducts () {

    return (
        <div class="container my-4">
            <div class="row mt--60">
                <div class="col-lg-12">
                    <div class="section__title text-center">
                        <h2 class="mb-4 title__be--2">Some Random <span class="color--theme"> Text</span></h2>
                        <p class="mb-4 pb-2 mb-md-5 pb-md-0">                            
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, error amet
                            numquam iure provident voluptate esse quasi, veritatis totam voluptas nostrum
                            quisquam eum porro a pariatur veniam.
                        </p>
                    </div>
                </div>
            </div>

            <div id="newProductsCarousel" className="carousel slide" data-bs-ride="carousel">

                <div className="carousel-inner">
                    <div className="carousel-item active" data-bs-interval="3000">
                        <section style={{ backgroundColor: "#eee;" }}>
                            <div class="row mt--10">
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
                        </section>
                    </div>
                    <div className="carousel-item" data-bs-interval="3000">
                        <section style={{ backgroundColor: "#eee;" }}>
                            <div class="row mt--10">
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
                        </section>
                    </div>
                </div>
                <a className="carousel-control-prev" href="#newProductsCarousel" role="button" data-bs-slide="prev">
                    <BsChevronCompactLeft aria-hidden="true"></BsChevronCompactLeft>
                    <span className="sr-only">Previous</span>
                </a>
                
                <a className="carousel-control-next" href="#newProductsCarousel" role="button" data-bs-slide="next">
                    <BsChevronCompactRight aria-hidden="true"></BsChevronCompactRight>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        </div>
    );
}

export default NewProducts;
