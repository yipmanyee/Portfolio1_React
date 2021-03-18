import React from 'react';
import { Link } from 'react-router-dom';

function Footer(props) {
    return (
        <footer className="site-footer">
            <div className="container">
                <div className="row">             
                    <div className="col-4 col-sm-2 offset-1">
                        <h5>Links</h5>
                        <ul className="list-unstyled">
                            <li><Link to='/home'>Home</Link></li>
                            <li><Link to='/amenities'>Amenities</Link></li>
                            <li><Link to='/contactus'>Contact</Link></li>
                        </ul>
                    </div>
                    <div className="col-6 col-sm-3 text-center">
                        <h5>Social</h5>
                        <a className="btn btn-social-icon btn-instagram" href="http://instagram.com/"><i className="fa fa-instagram fa-lg" /></a>{' '}
                        <a className="btn btn-social-icon btn-facebook" href="http://www.facebook.com/"><i className="fa fa-facebook fa-lg " /></a>{' '}
                        <a className="btn btn-social-icon btn-twitter" href="http://twitter.com/"><i className="fa fa-twitter fa-lg" /></a>{' '}
                        <a className="btn btn-social-icon btn-yelp" href="http://yelp.com/"><i className="fa fa-yelp fa-lg" /></a> 
                    </div>
                    <div class="col-4 col-sm-2 offset-1">
                    <a role ="button" class="btn btn-success" href="tel:+12533595160"><i class="fa fa-phone fa-lg text-white"></i>253-359-5160</a>  
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;