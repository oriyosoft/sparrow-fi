import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "mdb-react-ui-kit/dist/css/mdb.min.css";

function NewsLetter () {
    return (
        <section className="wn__newsletter__area bg-image--1">
            <div className="container my-4">
                <div className="row mt--60">
                    <div className="col-lg-7 offset-lg-5 col-md-12 col-12 ptb--150">
                        <div className="section__title text-center">
                            <h2>Stay Connected With Us</h2>
                        </div>
                        <div className="newsletter__block text-center">
                            <p style={{ color: "black" }}>Subscribe to our newsletters now and stay up-to-date with new products and exclusive offers.</p>
                            <form action="#">
                                <div className="input-group mb-3 mr--140"  style={{ width: "350px", float: "right" }}>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Example: info@appexample.com"
                                        aria-label="Recipient's email"
                                        aria-describedby="button-addon2"
                                    />
                                    <button className="btn btn-primary" type="button" id="button-addon2" data-mdb-ripple-color="dark">
                                        <strong> Subscribe </strong>
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default NewsLetter;
