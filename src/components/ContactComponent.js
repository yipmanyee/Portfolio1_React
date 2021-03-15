import React from 'react';
import { Link } from 'react-router-dom';

function Contact(props) {
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <h2>Contact Us</h2>
                        <hr />
                </div>
            </div>

            <div className="row row-content align-items-center">
                <div className="col-sm-4">
                    <h5>Our Address</h5>
                    <address>
                        10817 Kendrick St SW<br />
                        Lakewood, WA 98499<br />
                        U.S.A.
                    </address>
                </div>
                <div className="col">
                    <a role="button" className="btn btn-link" href="tel:+12533595160"><i className="fa fa-phone" /> 1-253-359-5160</a><br />
                    <a role="button" className="btn btn-link" href="mailto:kenmar.apartment@gmail.com"><i className="fa fa-envelope-o" /> kenmar.apartment@gmail.com</a>
                </div>
            </div>
        </div>
    );
}

export default Contact;