import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "mdb-react-ui-kit/dist/css/mdb.min.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGem, faHome, faEnvelope, faPhone, faPrint } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faInstagram, faTwitter, faGooglePlus, faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

function Footer () {
    return (
        <div className='text-center text-lg-start text-muted bg-light mt--60'>
            <div class="container my-4">
                <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
                    <div className='me-5 d-none d-lg-block'>
                        <span>Get connected with us on social networks:</span>
                    </div>

                    <div>
                        <a href="./NULL" className='me-4 text-reset'>
                            <FontAwesomeIcon icon={ faFacebook } />
                        </a>
                        <a href="./NULL" className='me-4 text-reset'>
                            <FontAwesomeIcon icon={ faInstagram } />
                        </a>
                        <a href="./NULL" className='me-4 text-reset'>
                            <FontAwesomeIcon icon={ faTwitter } />
                        </a>
                        <a href="./NULL" className='me-4 text-reset'>
                            <FontAwesomeIcon icon={ faGooglePlus } />
                        </a>
                        <a href="./NULL" className='me-4 text-reset'>
                            <FontAwesomeIcon icon={ faLinkedin } />
                        </a>
                        <a href="./NULL" className='me-4 text-reset'>
                            <FontAwesomeIcon icon={ faGithub } />
                        </a>
                    </div>
                </section>

                <section className=''>
                    <div className='container text-center text-md-start mt-5'>
                        <div className='row mt-3'>
                            <div className='col-md-3 col-lg-4 col-xl-3 mx-auto mb-4'>
                                <h6 className='text-uppercase fw-bold mb-4'>
                                    <FontAwesomeIcon icon={ faGem } /> Appexample.com
                                </h6>
                                <p>
                                    Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet,
                                    consectetur adipisicing elit.
                                </p>
                            </div>

                            <div className='col-md-2 col-lg-2 col-xl-2 mx-auto mb-4'>
                                <h6 className='text-uppercase fw-bold mb-4'>Products</h6>
                                <p>
                                    <a href="./NULL" className='text-reset'>
                                        Page-1
                                    </a>
                                </p>
                                <p>
                                    <a href="./NULL" className='text-reset'>
                                        Page-2
                                    </a>
                                </p>
                                <p>
                                    <a href="./NULL" className='text-reset'>
                                        Page-3
                                    </a>
                                </p>
                                <p>
                                    <a href="./NULL" className='text-reset'>
                                        Page-4
                                    </a>
                                </p>
                                <p>
                                    <a href="./NULL" className='text-reset'>
                                        Page-5
                                    </a>
                                </p>
                            </div>

                            <div className='col-md-3 col-lg-2 col-xl-2 mx-auto mb-4'>
                                <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
                                <p>
                                    <a href="./NULL" className='text-reset'>
                                        Link-1
                                    </a>
                                </p>
                                <p>
                                    <a href="./NULL" className='text-reset'>
                                        Link-2
                                    </a>
                                </p>
                                <p>
                                    <a href="./NULL" className='text-reset'>
                                        Link-3
                                    </a>
                                </p>
                                <p>
                                    <a href="./NULL" className='text-reset'>
                                        Link-4
                                    </a>
                                </p>
                                <p>
                                    <a href="./NULL" className='text-reset'>
                                        Link-5
                                    </a>
                                </p>
                            </div>

                            <div className='col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4'>
                                <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
                                <p>
                                    <FontAwesomeIcon icon={ faHome } /> Inarintie 8, 00550, Helsinki, Finland.
                                </p>
                                <p>
                                    <FontAwesomeIcon icon={ faEnvelope } /> info@appexample.com
                                </p>
                                <p>
                                    <FontAwesomeIcon icon={ faPhone } /> + 358 0 414 987 413
                                </p>
                                <p>
                                    <FontAwesomeIcon icon={ faPrint } /> + 358 0 414 987 413
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
                © 2022 Copyright: 
                <a className='text-reset fw-bold' href="./appexample.com">
                    www.appexample.com
                </a>
            </div>
        </div>
    );
}

export default Footer;
