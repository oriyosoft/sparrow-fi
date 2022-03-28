import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "mdb-react-ui-kit/dist/css/mdb.min.css";

import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
/*
import L1 from "../images/products/L1.jpg";
import L2 from "../images/products/L2.png";
import L3 from "../images/products/L3.jpg";
import L4 from "../images/products/L4.jpg";
import L5 from "../images/products/L5.jpg";
import L6 from "../images/products/L6.png";
*/
import U1 from "../assets/products/U1.jpeg";

function Partners () {
    return (
        <div class="container my-4">
            <div class="row mt--60">
                <div class="col-lg-12">
                    <div class="section__title text-center">
                        <h2 class="title__be--2">Some Random <span class="color--theme">Text</span></h2>
                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered lebmid alteration in some ledmid form</p>
                    </div>
                </div>
            </div>

            <div id="partnersCarousel" className="carousel slide" data-bs-ride="carousel">

                <div className="carousel-inner">
                    <div className="carousel-item active" data-bs-interval="3000">
                        <section style={{ backgroundColor: "#eee;" }}>
                            <div class="row mt--20">
                                <div class="col-md-2">
                                    <div class="card mb-2">
                                        <img 
                                            class="card-img-top" 
                                            src={ U1 }
                                            height="125px"
                                            width="100px"
                                            alt="Card_image_cap" 
                                        />
                                    </div>
                                </div>

                                <div class="col-md-2 clearfix d-none d-md-block">
                                    <div class="card mb-2">
                                        <img 
                                            class="card-img-top" 
                                            src={ U1 }
                                            height="125px"
                                            width="100px"
                                            alt="Card_image_cap" 
                                        />
                                    </div>
                                </div>

                                <div class="col-md-2 clearfix d-none d-md-block">
                                    <div class="card mb-2">
                                        <img 
                                            class="card-img-top" 
                                            src={ U1 }
                                            height="125px"
                                            width="100px"
                                            alt="Card_image_cap" 
                                        />
                                    </div>
                                </div>

                                <div class="col-md-2 clearfix d-none d-md-block">
                                    <div class="card mb-2">
                                        <img 
                                            class="card-img-top" 
                                            src={ U1 }
                                            height="125px"
                                            width="100px"
                                            alt="Card_image_cap" 
                                        />
                                    </div>
                                </div>

                                <div class="col-md-2 clearfix d-none d-md-block">
                                    <div class="card mb-2">
                                        <img 
                                            class="card-img-top" 
                                            src={ U1 }
                                            height="125px"
                                            width="100px"
                                            alt="Card_image_cap" 
                                        />
                                    </div>
                                </div>

                                <div class="col-md-2 clearfix d-none d-md-block">
                                    <div class="card mb-2">
                                        <img 
                                            class="card-img-top" 
                                            src={ U1 }
                                            height="125px"
                                            width="100px"
                                            alt="Card_image_cap" 
                                        />
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                    <div className="carousel-item" data-bs-interval="3000">
                        <section style={{ backgroundColor: "#eee;" }}>
                            <div class="row mt--20">
                                <div class="col-md-2">
                                    <div class="card mb-2">
                                        <img 
                                            class="card-img-top" 
                                            src={ U1 }
                                            height="125px"
                                            width="100px"
                                            alt="Card_image_cap" 
                                        />
                                    </div>
                                </div>

                                <div class="col-md-2 clearfix d-none d-md-block">
                                    <div class="card mb-2">
                                        <img 
                                            class="card-img-top" 
                                            src={ U1 }
                                            height="125px"
                                            width="100px"
                                            alt="Card_image_cap" 
                                        />
                                    </div>
                                </div>

                                <div class="col-md-2 clearfix d-none d-md-block">
                                    <div class="card mb-2">
                                        <img 
                                            class="card-img-top" 
                                            src={ U1 }
                                            height="125px"
                                            width="100px"
                                            alt="Card_image_cap" 
                                        />
                                    </div>
                                </div>

                                <div class="col-md-2 clearfix d-none d-md-block">
                                    <div class="card mb-2">
                                        <img 
                                            class="card-img-top" 
                                            src={ U1 }
                                            height="125px"
                                            width="100px"
                                            alt="Card_image_cap" 
                                        />
                                    </div>
                                </div>

                                <div class="col-md-2 clearfix d-none d-md-block">
                                    <div class="card mb-2">
                                        <img 
                                            class="card-img-top" 
                                            src={ U1 }
                                            height="125px"
                                            width="100px"
                                            alt="Card_image_cap" 
                                        />
                                    </div>
                                </div>

                                <div class="col-md-2 clearfix d-none d-md-block">
                                    <div class="card mb-2">
                                        <img 
                                            class="card-img-top" 
                                            src={ U1 }
                                            height="125px"
                                            width="100px"
                                            alt="Card_image_cap" 
                                        />
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
                <a className="carousel-control-prev" href="#partnersCarousel" role="button" data-bs-slide="prev">
                    <BsChevronCompactLeft aria-hidden="true"></BsChevronCompactLeft>
                    <span className="sr-only">Previous</span>
                </a>
                
                <a className="carousel-control-next" href="#partnersCarousel" role="button" data-bs-slide="next">
                    <BsChevronCompactRight aria-hidden="true"></BsChevronCompactRight>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        </div>

    );
}

export default Partners;
