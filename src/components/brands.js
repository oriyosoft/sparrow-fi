import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "mdb-react-ui-kit/dist/css/mdb.min.css";

import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
/*
import B1 from "../images/products/B1.png";
import B2 from "../images/products/B2.jpeg";
import B3 from "../images/products/B3.png";
import B4 from "../images/products/B4.png";
import B5 from "../images/products/B5.jpg";
import B6 from "../images/products/B6.jpg";

import B7 from "../images/products/B7.jpeg";
import B8 from "../images/products/B8.jpg";
import B9 from "../images/products/B9.png";
import B10 from "../images/products/B10.png";
import B11 from "../images/products/B11.jpg";
import B12 from "../images/products/B12.png";
*/
import U1 from "../assets/products/U1.jpeg";

function Brands () {
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

            <div id="brandsCarousel" className="carousel carousel-dark slide" data-bs-ride="carousel">

                <div className="carousel-inner">
                    <div className="carousel-item active" data-bs-interval="3000">

                        <div className="row mt--20">
                            <div className="col-md-2">
                                <div className="card mb-2">
                                    <img 
                                        className="card-img-top" 
                                        src={ U1 }
                                        height="200px"
                                        width="100px"
                                        alt="Card_image_cap" 
                                    />
                                    <div className="card-body">
                                        <h4 className="card-title">Some Random Text</h4>
                                        <p className="card-text">
                                            Text: num Text
                                        </p>
                                        <a className="btn btn-primary" href="./NULL">Button</a>
                                    </div>
                                </div>
                            </div>
                                        
                            <div className="col-md-2 clearfix d-none d-md-block">
                                <div className="card mb-2">
                                    <img 
                                        className="card-img-top" 
                                        src={ U1 }
                                        height="200px"
                                        width="100px"
                                        alt="Card_image_cap" 
                                    />
                                    <div className="card-body">
                                        <h4 className="card-title">Some Random Text</h4>
                                        <p className="card-text">
                                            Text: num Text
                                        </p>
                                        <a className="btn btn-primary" href="./NULL">Button</a>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-2 clearfix d-none d-md-block">
                                <div className="card mb-2">
                                    <img 
                                        className="card-img-top" 
                                        src={ U1 }
                                        height="200px"
                                        width="100px"
                                        alt="Card_image_cap" 
                                    />
                                    <div className="card-body">
                                        <h4 className="card-title">Some Random Text</h4>
                                        <p className="card-text">
                                            Text: num Text
                                        </p>
                                        <a className="btn btn-primary" href="./NULL">Button</a>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-2 clearfix d-none d-md-block">
                                <div className="card mb-2">
                                    <img 
                                        className="card-img-top" 
                                        src={ U1 }
                                        height="200px"
                                        width="100px"
                                        alt="Card_image_cap" 
                                    />
                                    <div className="card-body">
                                        <h4 className="card-title">Some Random Text</h4>
                                        <p className="card-text">
                                            Text: num Text
                                        </p>
                                        <a className="btn btn-primary" href="./NULL">Button</a>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-2 clearfix d-none d-md-block">
                                <div className="card mb-2">
                                    <img 
                                        className="card-img-top" 
                                        src={ U1 }
                                        height="200px"
                                        width="100px"
                                        alt="Card_image_cap" 
                                    />
                                    <div className="card-body">
                                        <h4 className="card-title">Some Random Text</h4>
                                        <p className="card-text">
                                            Text: num Text
                                        </p>
                                        <a className="btn btn-primary" href="./NULL">Button</a>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-2 clearfix d-none d-md-block">
                                <div className="card mb-2">
                                    <img 
                                        className="card-img-top" 
                                        src={ U1 }
                                        height="200px"
                                        width="100px"
                                        alt="Card_image_cap" 
                                    />
                                    <div className="card-body">
                                        <h4 className="card-title">Some Random Text</h4>
                                        <p className="card-text">
                                            Text: num Text
                                        </p>
                                        <a className="btn btn-primary" href="./NULL">Button</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="carousel-item" data-bs-interval="3000">
                        <div className="row mt--20">
                            <div className="col-md-2 clearfix d-none d-md-block">
                                <div className="card mb-2">
                                    <img 
                                        className="card-img-top" 
                                        src={ U1 }
                                        height="200px"
                                        width="100px"
                                        alt="Card_image_cap" 
                                    />
                                    <div className="card-body">
                                        <h4 className="card-title">Some Random Text</h4>
                                        <p className="card-text">
                                            Text: num Text
                                        </p>
                                        <a className="btn btn-primary" href="./NULL">Button</a>
                                    </div>
                                </div>
                            </div>
                                        
                            <div className="col-md-2 clearfix d-none d-md-block">
                                <div className="card mb-2">
                                    <img 
                                        className="card-img-top" 
                                        src={ U1 }
                                        height="200px"
                                        width="100px"
                                        alt="Card_image_cap" 
                                    />
                                    <div className="card-body">
                                        <h4 className="card-title">Some Random Text</h4>
                                        <p className="card-text">
                                            Text: num Text
                                        </p>
                                        <a className="btn btn-primary" href="./NULL">Button</a>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-2 clearfix d-none d-md-block">
                                <div className="card mb-2">
                                    <img 
                                        className="card-img-top" 
                                        src={ U1 }
                                        height="200px"
                                        width="100px"
                                        alt="Card_image_cap" 
                                    />
                                    <div className="card-body">
                                        <h4 className="card-title">Some Random Text</h4>
                                        <p className="card-text">
                                            Text: num Text
                                        </p>
                                        <a className="btn btn-primary" href="./NULL">Button</a>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-2 clearfix d-none d-md-block">
                                <div className="card mb-2">
                                    <img 
                                        className="card-img-top" 
                                        src={ U1 }
                                        height="200px"
                                        width="100px"
                                        alt="Card_image_cap" 
                                    />
                                    <div className="card-body">
                                        <h4 className="card-title">Some Random Text</h4>
                                        <p className="card-text">
                                            Text: num Text
                                        </p>
                                        <a className="btn btn-primary" href="./NULL">Button</a>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-2 clearfix d-none d-md-block">
                                <div className="card mb-2">
                                    <img 
                                        className="card-img-top" 
                                        src={ U1 }
                                        height="200px"
                                        width="100px"
                                        alt="Card_image_cap" 
                                    />
                                    <div className="card-body">
                                        <h4 className="card-title">Some Random Text</h4>
                                        <p className="card-text">
                                            Text: num Text
                                        </p>
                                        <a className="btn btn-primary" href="./NULL">Button</a>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-2 clearfix d-none d-md-block">
                                <div className="card mb-2">
                                    <img 
                                        className="card-img-top" 
                                        src={ U1 }
                                        height="200px"
                                        width="100px"
                                        alt="Card_image_cap" 
                                    />
                                    <div className="card-body">
                                        <h4 className="card-title">Some Random Text</h4>
                                        <p className="card-text">
                                            Text: num Text
                                        </p>
                                        <a className="btn btn-primary" href="./NULL">Button</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <a className="carousel-control-prev" href="#brandsCarousel" role="button" data-bs-slide="prev">
                    <BsChevronCompactLeft aria-hidden="true"></BsChevronCompactLeft>
                    <span className="sr-only">Previous</span>
                </a>
                
                <a className="carousel-control-next" href="#brandsCarousel" role="button" data-bs-slide="next">
                    <BsChevronCompactRight aria-hidden="true"></BsChevronCompactRight>
                    <span className="sr-only">Next</span>
                </a>
            </div>            
        </div>
    );
}

export default Brands;
