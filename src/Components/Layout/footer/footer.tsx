import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <div>
                <div className="footer-top-first">
                    <div className="container py-md-5 py-sm-4 py-3">
                        {/* footer first section */}
                        <h2 className="footer-top-head-w3l font-weight-bold mb-2">Electronics :</h2>
                        <p className="footer-main mb-4">
                            If you`&lsquo;`re considering a new laptop, looking for a powerful new car stereo or shopping for a new HDTV, we make it easy to
                            find exactly what you need at a price you can afford. We offer Every Day Low Prices on TVs, laptops, cell phones, tablets
              and iPads, video games, desktop computers, cameras and camcorders, audio, video and more.</p>
                        {/* //footer first section */}
                        {/* footer second section */}
                        <div className="row w3l-grids-footer border-top border-bottom py-sm-4 py-3">
                            <div className="col-md-4 offer-footer">
                                <div className="row">
                                    <div className="col-4 icon-fot">
                                        <i className="fas fa-dolly" />
                                    </div>
                                    <div className="col-8 text-form-footer">
                                        <h3>Free Shipping</h3>
                                        <p>on orders over $100</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 offer-footer my-md-0 my-4">
                                <div className="row">
                                    <div className="col-4 icon-fot">
                                        <i className="fas fa-shipping-fast" />
                                    </div>
                                    <div className="col-8 text-form-footer">
                                        <h3>Fast Delivery</h3>
                                        <p>World Wide</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 offer-footer">
                                <div className="row">
                                    <div className="col-4 icon-fot">
                                        <i className="far fa-thumbs-up" />
                                    </div>
                                    <div className="col-8 text-form-footer">
                                        <h3>Big Choice</h3>
                                        <p>of Products</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* //footer second section */}
                    </div>
                </div>
                {/* footer third section */}
                <div className="w3l-middlefooter-sec">
                    <div className="container py-md-5 py-sm-4 py-3">
                        <div className="row footer-info w3-agileits-info">
                            {/* footer categories */}
                            <div className="col-md-3 col-sm-6 footer-grids">
                                <h3 className="text-white font-weight-bold mb-3">Categories</h3>
                                <ul>
                                    <li className="mb-3">
                                        <a href="product.html">Mobiles </a>
                                    </li>
                                    <li className="mb-3">
                                        <a href="product.html">Computers</a>
                                    </li>
                                    <li className="mb-3">
                                        <a href="product.html">TV, Audio</a>
                                    </li>
                                    <li className="mb-3">
                                        <a href="product2.html">Smartphones</a>
                                    </li>
                                    <li className="mb-3">
                                        <a href="product.html">Washing Machines</a>
                                    </li>
                                    <li>
                                        <a href="product2.html">Refrigerators</a>
                                    </li>
                                </ul>
                            </div>
                            {/* //footer categories */}
                            {/* quick links */}
                            <div className="col-md-3 col-sm-6 footer-grids mt-sm-0 mt-4">
                                <h3 className="text-white font-weight-bold mb-3">Quick Links</h3>
                                <ul>
                                    <li className="mb-3">
                                        <a href="about.html">About Us</a>
                                    </li>
                                    <li className="mb-3">
                                        <a href="contact.html">Contact Us</a>
                                    </li>
                                    <li className="mb-3">
                                        <a href="help.html">Help</a>
                                    </li>
                                    <li className="mb-3">
                                        <a href="faqs.html">Faqs</a>
                                    </li>
                                    <li className="mb-3">
                                        <a href="terms.html">Terms of use</a>
                                    </li>
                                    <li>
                                        <a href="privacy.html">Privacy Policy</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-md-3 col-sm-6 footer-grids mt-md-0 mt-4">
                                <h3 className="text-white font-weight-bold mb-3">Get in Touch</h3>
                                <ul>
                                    <li className="mb-3">
                                        <i className="fas fa-map-marker" /> 123 Sebastian, USA.</li>
                                    <li className="mb-3">
                                        <i className="fas fa-mobile" /> 333 222 3333 </li>
                                    <li className="mb-3">
                                        <i className="fas fa-phone" /> +222 11 4444 </li>
                                    <li className="mb-3">
                                        <i className="fas fa-envelope-open" />
                                        <a href="mailto:example@mail.com"> mail 1@example.com</a>
                                    </li>
                                    <li>
                                        <i className="fas fa-envelope-open" />
                                        <a href="mailto:example@mail.com"> mail 2@example.com</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-md-3 col-sm-6 footer-grids w3l-agileits mt-md-0 mt-4">
                                {/* newsletter */}
                                <h3 className="text-white font-weight-bold mb-3">Newsletter</h3>
                                <p className="mb-3">Free Delivery on your first order!</p>
                                <form action="#" method="post">
                                    <div className="form-group">
                                        <input type="email" className="form-control" placeholder="Email" name="email" required />
                                        <input type="submit" defaultValue="Go" />
                                    </div>
                                </form>
                                {/* //newsletter */}
                                {/* social icons */}
                                <div className="footer-grids  w3l-socialmk mt-3">
                                    <h3 className="text-white font-weight-bold mb-3">Follow Us on</h3>
                                    <div className="social">
                                        <ul>
                                            <li>
                                                <a className="icon fb" href="#">
                                                    <i className="fab fa-facebook-f" />
                                                </a>
                                            </li>
                                            <li>
                                                <a className="icon tw" href="#">
                                                    <i className="fab fa-twitter" />
                                                </a>
                                            </li>
                                            <li>
                                                <a className="icon gp" href="#">
                                                    <i className="fab fa-google-plus-g" />
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                {/* //social icons */}
                            </div>
                        </div>
                        {/* //quick links */}
                    </div>
                </div>
                {/* //footer third section */}

            </div>
        )
    }
}
