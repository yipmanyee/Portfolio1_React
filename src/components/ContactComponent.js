import React from 'react';
import { Link } from 'react-router-dom';

function Contact(props) {
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <h2>Contact Us</h2>
                    <div className="col">
                        <img src="/assets/images/K_Front.jpg" className="img-fluid" alt="front"></img>
                    </div>        
                </div>
            </div>
            <div className="row row-content align-items-center">
                <div className="col-sm-4">
                    <h5>Address</h5>
                    <address>
                        <a href="https://www.bing.com/maps?q=10817+Kendrick+St+SW+Lakewood%2C+WA+98499+U.S.A.&cvid=96208f845b924bf69d2ece6231f6a789&aqs=edge..69i57.287j0j1&pglt=171&FORM=ANNTA1&PC=HCTS">10817 Kendrick St SW<br />
                        Lakewood, WA 98499<br />
                        U.S.A.</a>
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