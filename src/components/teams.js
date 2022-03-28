import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "mdb-react-ui-kit/dist/css/mdb.min.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import { faGem, faHome, faEnvelope, faPhone, faPrint } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faInstagram, faTwitter, faGooglePlus, faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

import U1 from "../assets/products/U1.jpeg";
import U2 from "../assets/products/U2.png";
import U3 from "../assets/products/U3.jpg";

function Teams () {
    return (
        <div class="container my-4">
            <div class="row mt--60">
                <div class="col-lg-12">
                    <div class="section__title text-center">
                        <h2 class="mb-4 title__be--2">Some Random <span class="color--theme">Text</span></h2>
                        <p class="mb-4 pb-2 mb-md-5 pb-md-0">                            
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, error amet
                            numquam iure provident voluptate esse quasi, veritatis totam voluptas nostrum
                            quisquam eum porro a pariatur veniam.
                        </p>
                    </div>
                </div>
            </div>
            <div class="row mt--20">
                <div class="col-md-4 mb-md-0 d-flex justify-content-center mb-4">
                    <div class="card card-cascade">

                        <div class="view view-cascade overlay">
                            <div className="ml--50 mr--50">
                                <img 
                                    class="card-img-top rounded-circle shadow-1-strong"
                                    width="200px"
                                    height="300px" 
                                    src={ U1 }
                                    alt="user1_img"
                                />
                            </div>
                            <a href="./NULL">
                                <div class="mask rgba-white-slight"></div>
                            </a>
                        </div>
            
                        <div class="card-body card-body-cascade text-center">
                    
                            <h4 class="card-title"><strong>Manna Barua</strong></h4>
                            <h6 class="font-weight-bold indigo-text py-2">Founder</h6>           
                            <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus, ex, recusandae.
                                Facere modi sunt, quod quibusdam.
                            </p>

                        </div>
            
                        <div class="card-footer text-muted text-center">
                            <div> <strong>Follow Me : </strong> 
                                <a type="button" class="btn-floating btn-small btn-fb ml--10" href="./NULL"><FontAwesomeIcon icon={ faFacebook } /></a>               
                                <a type="button" class="btn-floating btn-small btn-in ml--10" href="./NULL"><FontAwesomeIcon icon={ faInstagram } /></a>               
                                <a type="button" class="btn-floating btn-small btn-tw ml--10" href="./NULL"><FontAwesomeIcon icon={ faTwitter } /></a>
                                <a type="button" class="btn-floating btn-small btn-fb ml--10" href="./NULL"><FontAwesomeIcon icon={ faGooglePlus } /></a>               
                                <a type="button" class="btn-floating btn-small btn-in ml--10" href="./NULL"><FontAwesomeIcon icon={ faGithub } /></a>               
                                <a type="button" class="btn-floating btn-small btn-tw ml--10" href="./NULL"><FontAwesomeIcon icon={ faLinkedin } /></a>
                            </div>
                        </div>

                    </div>
                </div>
                <div class="col-md-4 mb-md-0 d-flex justify-content-center mb-4">
                    <div class="card card-cascade">

                        <div class="view view-cascade overlay">
                            <div className="ml--50 mr--50">
                                <img 
                                    class="card-img-top rounded-circle shadow-1-strong"
                                    width="200px"
                                    height="300px" 
                                    src={ U2 }
                                    alt="user2_img"
                                />
                            </div>
                            <a href="./NULL">
                                <div class="mask rgba-white-slight"></div>
                            </a>
                        </div>

                        <div class="card-body card-body-cascade text-center">

                            <h4 class="card-title"><strong>Manna Barua</strong></h4>
                            <h6 class="font-weight-bold indigo-text py-2">CEO & Developer</h6>           
                            <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus, ex, recusandae.
                                Facere modi sunt, quod quibusdam.
                            </p>

                        </div>

                        <div class="card-footer text-muted text-center">
                            <div> <strong>Follow Me : </strong> 
                                <a type="button" class="btn-floating btn-small btn-fb ml--10" href="./NULL"><FontAwesomeIcon icon={ faFacebook } /></a>               
                                <a type="button" class="btn-floating btn-small btn-in ml--10" href="./NULL"><FontAwesomeIcon icon={ faInstagram } /></a>               
                                <a type="button" class="btn-floating btn-small btn-tw ml--10" href="./NULL"><FontAwesomeIcon icon={ faTwitter } /></a>
                                <a type="button" class="btn-floating btn-small btn-fb ml--10" href="./NULL"><FontAwesomeIcon icon={ faGooglePlus } /></a>               
                                <a type="button" class="btn-floating btn-small btn-in ml--10" href="./NULL"><FontAwesomeIcon icon={ faGithub } /></a>               
                                <a type="button" class="btn-floating btn-small btn-tw ml--10" href="./NULL"><FontAwesomeIcon icon={ faLinkedin } /></a>
                            </div>
                        </div>

                    </div>
                </div>
                <div class="col-md-4 mb-md-0 d-flex justify-content-center mb-4">
                    <div class="card card-cascade">

                        <div class="view view-cascade overlay">
                            <div className="ml--50 mr--50">
                                <img 
                                    class="card-img-top rounded-circle shadow-1-strong"
                                    width="200px"
                                    height="300px" 
                                    src={ U3 }
                                    alt="user3_img"
                                />
                            </div>
                            <a href="./NULL">
                                <div class="mask rgba-white-slight"></div>
                            </a>
                        </div>

                        <div class="card-body card-body-cascade text-center">

                            <h4 class="card-title"><strong>Manna Barua</strong></h4>
                            <h6 class="font-weight-bold indigo-text py-2">CTO & Designer</h6>           
                            <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus, ex, recusandae.
                                Facere modi sunt, quod quibusdam.
                            </p>
                            
                        </div>

                        <div class="card-footer text-muted text-center">
                            <div> <strong>Follow Me : </strong> 
                                <a type="button" class="btn-floating btn-small btn-fb ml--10" href="./NULL"><FontAwesomeIcon icon={ faFacebook } /></a>               
                                <a type="button" class="btn-floating btn-small btn-in ml--10" href="./NULL"><FontAwesomeIcon icon={ faInstagram } /></a>               
                                <a type="button" class="btn-floating btn-small btn-tw ml--10" href="./NULL"><FontAwesomeIcon icon={ faTwitter } /></a>
                                <a type="button" class="btn-floating btn-small btn-fb ml--10" href="./NULL"><FontAwesomeIcon icon={ faGooglePlus } /></a>               
                                <a type="button" class="btn-floating btn-small btn-in ml--10" href="./NULL"><FontAwesomeIcon icon={ faGithub } /></a>               
                                <a type="button" class="btn-floating btn-small btn-tw ml--10" href="./NULL"><FontAwesomeIcon icon={ faLinkedin } /></a>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Teams;
