import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "mdb-react-ui-kit/dist/css/mdb.min.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleRight, faHeart, faClockRotateLeft, faComment, faQuoteLeft, faQuoteRight } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faTwitter } from "@fortawesome/free-brands-svg-icons";

import U1 from "../assets/products/U1.jpeg";
import U2 from "../assets/products/U2.png";
import U3 from "../assets/products/U3.jpg";

function Story () {
    return (
        <div className="container">
            <div className="row mt--60">
                <div className="col-lg-12">
                    <div className="section__title text-center">
                        <h2 className="title__be--2"> Some Random <span className="color--theme"> Text </span></h2>
                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered lebmid alteration in some ledmid form</p>
                    </div>
                </div>
            </div>

            <div className="row mt--20">      

                <div className="col-md-6 col-lg-4 col-sm-12">
                    <div className="card">
                        <div className="view overlay">
                            <a href="./NULL">
                                <div className="mask rgba-white-slight"></div>
                            </a>
                        </div>

                        <div className="card-body elegant-color white-text rounded-bottom">
                            <div className="d-flex">
                                <div style={{ align: "left", width: "60px", height: "60px"}}>
                                    <img 
                                        className="card-img-top rounded-circle shadow-1-strong"
                                        src={ U1 } 
                                        height="60px"
                                        width="60px"
                                        alt="bloger_image"
                                    />
                                </div>
                                <div style={{ align: "right", paddingLeft: "10px" }}>
                                    <a className="activator waves-effect mr-4" href="./NULL">
                                        <h5 className="card-title"><strong> The London Book Fair is to be packed with exciting  </strong></h5>
                                    </a>
                                    <FontAwesomeIcon icon={ faClockRotateLeft } />  Nov 22, Wed, 2022
                                </div>
                            </div>

                            <hr className="hr-light" />
                            <p className="card-text white-text mb-4" style={{ paddingLeft: "10px" }}>
                                <FontAwesomeIcon icon={ faQuoteLeft } /> We are proud to announce the very first the edition of the 
                                    frankfurt news.We are proud to announce 
                                    the very first of edition of the fault frankfurt news for us. <br />
                                    We are proud to announce the very first the edition of the frankfurt news.We are proud to announce 
                                    the very first of edition of the fault frankfurt news for us. <br />
                                    We are proud to announce the very first the edition of the frankfurt news.We are proud to announce 
                                    the very first of edition of the fault frankfurt news for us. <br />
                                    We are proud to announce the very first the edition of the frankfurt news.We are proud to announce 
                                    the very first of edition of the fault frankfurt news for us. <FontAwesomeIcon icon={ faQuoteRight } />
                            </p>

                            <div className="d-flex mt--20" style={{ display: "flex", clear: "both" }}>
                                <div className="">
                                    <a href="./NULL"><FontAwesomeIcon icon={ faHeart } /> 23 </a>
                                    <a href="./NULL"><FontAwesomeIcon icon={ faComment } /> 76 </a>
                                    <a href="./NULL"><FontAwesomeIcon icon={ faFacebook } /> 28 </a>
                                    <a href="./NULL"><FontAwesomeIcon icon={ faTwitter } /> 34 </a>
                                </div>
                                <div style={{ marginLeft: "auto" }} >
                                    <a href="./NULL" className="white-text">
                                        <h5>Read more  <FontAwesomeIcon icon={ faAngleDoubleRight } /></h5>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-md-6 col-lg-4 col-sm-12">
                    <div className="card">
                        <div className="view overlay">
                            <a href="./NULL">
                                <div className="mask rgba-white-slight"></div>
                            </a>
                        </div>
                        <div className="card-body elegant-color white-text rounded-bottom">
                            <div className="d-flex">
                                <div style={{ align: "left", width: "60px", height: "60px"}}>
                                    <img 
                                        className="card-img-top rounded-circle shadow-1-strong"
                                        src={ U2 } 
                                        height="60px"
                                        width="60px"
                                        alt="bloger_image"
                                    />
                                </div>
                                <div style={{ align: "right", paddingLeft: "10px" }}>
                                    <a className="activator waves-effect mr-4" href="./NULL">
                                        <h5 className="card-title"><strong> The London Book Fair is to be packed with exciting  </strong></h5>
                                    </a>
                                    <FontAwesomeIcon icon={ faClockRotateLeft } />  Wed, Nov 22, 2022
                                </div>
                            </div>
                            <hr className="hr-light" />
                            <p className="card-text white-text mb-4" style={{ paddingLeft: "10px" }}>
                                <FontAwesomeIcon icon={ faQuoteLeft } /> We are proud to announce the very first the edition of the 
                                    frankfurt news.We are proud to announce 
                                    the very first of edition of the fault frankfurt news for us. <br />
                                    We are proud to announce the very first the edition of the frankfurt news.We are proud to announce 
                                    the very first of edition of the fault frankfurt news for us. <br />
                                    We are proud to announce the very first the edition of the frankfurt news.We are proud to announce 
                                    the very first of edition of the fault frankfurt news for us. <br />
                                    We are proud to announce the very first the edition of the frankfurt news.We are proud to announce 
                                    the very first of edition of the fault frankfurt news for us. <FontAwesomeIcon icon={ faQuoteRight } />
                            </p>

                            <div className="d-flex mt--20" style={{ display: "flex", clear: "both" }}>
                                <div className="">
                                    <a href="./NULL"><FontAwesomeIcon icon={ faHeart } /> 23 </a>
                                    <a href="./NULL"><FontAwesomeIcon icon={ faComment } /> 76 </a>
                                    <a href="./NULL"><FontAwesomeIcon icon={ faFacebook } /> 28 </a>
                                    <a href="./NULL"><FontAwesomeIcon icon={ faTwitter } /> 34 </a>
                                </div>
                                <div style={{ marginLeft: "auto" }} >
                                    <a href="./NULL" className="white-text">
                                        <h5>Read more  <FontAwesomeIcon icon={ faAngleDoubleRight } /></h5>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-md-6 col-lg-4 col-sm-12">
                    <div className="card">
                        <div className="view overlay">
                            <a href="./NULL">
                                <div className="mask rgba-white-slight"></div>
                            </a>
                        </div>
                        <div className="card-body elegant-color white-text rounded-bottom">
                            <div className="d-flex">
                                <div style={{ align: "left", width: "60px", height: "60px"}}>
                                    <img 
                                        className="card-img-top rounded-circle shadow-1-strong"
                                        src={ U3 } 
                                        height="60px"
                                        width="60px"
                                        alt="bloger_image"
                                    />
                                </div>
                                <div style={{ align: "right", paddingLeft: "10px" }}>
                                    <a className="activator waves-effect mr-4" href="./NULL">
                                        <h5 className="card-title"><strong> The London Book Fair is to be packed with exciting  </strong></h5>
                                    </a>
                                    <FontAwesomeIcon icon={ faClockRotateLeft } />  Wed, Nov 22, 2022
                                </div>
                            </div>
                            <hr className="hr-light" />
                            <p className="card-text white-text mb-4" style={{ paddingLeft: "10px" }}>
                                <FontAwesomeIcon icon={ faQuoteLeft } /> We are proud to announce the very first the edition of the 
                                    frankfurt news.We are proud to announce 
                                    the very first of edition of the fault frankfurt news for us. <br />
                                    We are proud to announce the very first the edition of the frankfurt news.We are proud to announce 
                                    the very first of edition of the fault frankfurt news for us. <br />
                                    We are proud to announce the very first the edition of the frankfurt news.We are proud to announce 
                                    the very first of edition of the fault frankfurt news for us. <br />
                                    We are proud to announce the very first the edition of the frankfurt news.We are proud to announce 
                                    the very first of edition of the fault frankfurt news for us. <FontAwesomeIcon icon={ faQuoteRight } />
                            </p>

                            <div className="d-flex mt--20" style={{ display: "flex", clear: "both" }}>
                                <div className="">
                                    <a href="./NULL"><FontAwesomeIcon icon={ faHeart } /> 23 </a>
                                    <a href="./NULL"><FontAwesomeIcon icon={ faComment } /> 76 </a>
                                    <a href="./NULL"><FontAwesomeIcon icon={ faFacebook } /> 28 </a>
                                    <a href="./NULL"><FontAwesomeIcon icon={ faTwitter } /> 34 </a>
                                </div>
                                <div style={{ marginLeft: "auto" }} >
                                    <a href="./NULL" className="white-text">
                                        <h5>Read more  <FontAwesomeIcon icon={ faAngleDoubleRight } /></h5>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    
    );
}

export default Story;
