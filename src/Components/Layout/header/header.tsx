import React, {
    Component, Fragment
} from "react";
import Register from "../../register/register";
import Login from "../../login/login";

export default class Header extends Component {

    render() {
        return (
            <Fragment>
                <Login />
                <Register />
                <div className="agile-main-top">
                    <div className="container-fluid">
                        <div className="row main-top-w3l py-2">
                            <div className="col-lg-4 header-most-top">
                                <p className="text-white text-lg-left text-center">Offer Zone Top Deals &amp; Discounts
                                <i className="fas fa-shopping-cart ml-1" />
                                </p>
                            </div>
                            <div className="col-lg-8 header-right mt-lg-0 mt-2">
                                {/* header lists */}
                                <ul>
                                    <li className="text-center border-right text-white">
                                        <a className="play-icon popup-with-zoom-anim text-white" href="#small-dialog1">
                                            <i className="fas fa-map-marker mr-2" />Select Location</a>
                                    </li>
                                    <li className="text-center border-right text-white">
                                        <a href="#" data-toggle="modal" data-target="#exampleModal" className="text-white">
                                            <i className="fas fa-truck mr-2" />Track Order</a>
                                    </li>
                                    <li className="text-center border-right text-white">
                                        <i className="fas fa-phone mr-2" /> 001 234 5678
                                </li>
                                    <li className="text-center border-right text-white">
                                        <a href="#" data-toggle="modal" data-target="#exampleModalLogin" className="text-white">
                                            <i className="fas fa-sign-in-alt mr-2" /> Log In </a>
                                    </li>
                                    <li className="text-center text-white">
                                        <a href="#" data-toggle="modal" data-target="#exampleModalRegister" className="text-white">
                                            <i className="fas fa-sign-out-alt mr-2" />Register </a>
                                    </li>
                                </ul>
                                {/* //header lists */}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="header-bot">
                    <div className="container">
                        <div className="row header-bot_inner_wthreeinfo_header_mid">
                            {/* logo */}
                            <div className="col-md-3 logo_agile">
                                <h1 className="text-center">
                                    <a href="index.html" className="font-weight-bold font-italic">
                                        <img src="/asset/images/logo2.png" alt=" " className="img-fluid" />Electro Store
                                    </a>
                                </h1>
                            </div>
                            {/* //logo */}
                            {/* header-bot */}
                            <div className="col-md-9 header mt-4 mb-md-0 mb-4">
                                <div className="row">
                                    {/* search */}
                                    <div className="col-10 agileits_search">
                                        <form className="form-inline" action="#" method="post">
                                            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" required />
                                            <button className="btn my-2 my-sm-0" type="submit">Search</button>
                                        </form>
                                    </div>
                                    {/* //search */}
                                    {/* cart details */}
                                    <div className="col-2 top_nav_right text-center mt-sm-0 mt-2">
                                        <div className="wthreecartaits wthreecartaits2 cart cart box_1">
                                            <form action="#" method="post" className="last">
                                                <input type="hidden" name="cmd" defaultValue="_cart" />
                                                <input type="hidden" name="display" defaultValue={1} />
                                                <button className="btn w3view-cart" type="submit" name="submit">
                                                    <i className="fas fa-cart-arrow-down" />
                                                </button>
                                            </form>
                                        </div>
                                    </div>
                                    {/* //cart details */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="navbar-inner">
                    <div className="container">
                        <nav className="navbar navbar-expand-lg navbar-light bg-light">
                            <div className="agileits-navi_search">
                                <form action="#" method="post">
                                    <select id="agileinfo-nav_search" name="agileinfo_search" className="border" required>
                                        <option value='0'>All Categories</option>
                                        <option value="Televisions">Televisions</option>
                                        <option value="Headphones">Headphones</option>
                                        <option value="Computers">Computers</option>
                                        <option value="Appliances">Appliances</option>
                                        <option value="Mobiles">Mobiles</option>
                                        <option value="Fruits & Vegetables">Tv &amp; Video</option>
                                        <option value="iPad & Tablets">iPad &amp; Tablets</option>
                                        <option value="Cameras & Camcorders">Cameras &amp; Camcorders</option>
                                        <option value="Home Audio & Theater">Home Audio &amp; Theater</option>
                                    </select>
                                </form>
                            </div>
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon" />
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav ml-auto text-center mr-xl-5">
                                    <li className="nav-item active mr-lg-2 mb-lg-0 mb-2">
                                        <a className="nav-link" href="/">Home
                                            <span className="sr-only">(current)</span>
                                        </a>
                                    </li>
                                    <li className="nav-item dropdown mr-lg-2 mb-lg-0 mb-2">
                                        <a className="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            Electronics
                                        </a>
                                        <div className="dropdown-menu">
                                            <div className="agile_inner_drop_nav_info p-4">
                                                <h5 className="mb-3">Mobiles, Computers</h5>
                                                <div className="row">
                                                    <div className="col-sm-6 multi-gd-img">
                                                        <ul className="multi-column-dropdown">
                                                            <li>
                                                                <a href="/products">All Mobile Phones</a>
                                                            </li>
                                                            <li>
                                                                <a href="product.html">All Mobile Accessories</a>
                                                            </li>
                                                            <li>
                                                                <a href="product.html">Cases &amp; Covers</a>
                                                            </li>
                                                            <li>
                                                                <a href="product.html">Screen Protectors</a>
                                                            </li>
                                                            <li>
                                                                <a href="product.html">Power Banks</a>
                                                            </li>
                                                            <li>
                                                                <a href="product.html">All Certified Refurbished</a>
                                                            </li>
                                                            <li>
                                                                <a href="product.html">Tablets</a>
                                                            </li>
                                                            <li>
                                                                <a href="product.html">Wearable Devices</a>
                                                            </li>
                                                            <li>
                                                                <a href="product.html">Smart Home</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="col-sm-6 multi-gd-img">
                                                        <ul className="multi-column-dropdown">
                                                            <li>
                                                                <a href="product.html">Laptops</a>
                                                            </li>
                                                            <li>
                                                                <a href="product.html">Drives &amp; Storage</a>
                                                            </li>
                                                            <li>
                                                                <a href="product.html">Printers &amp; Ink</a>
                                                            </li>
                                                            <li>
                                                                <a href="product.html">Networking Devices</a>
                                                            </li>
                                                            <li>
                                                                <a href="product.html">Computer Accessories</a>
                                                            </li>
                                                            <li>
                                                                <a href="product.html">Game Zone</a>
                                                            </li>
                                                            <li>
                                                                <a href="product.html">Software</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="nav-item dropdown mr-lg-2 mb-lg-0 mb-2">
                                        <a className="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            Appliances
                                        </a>
                                        <div className="dropdown-menu">
                                            <div className="agile_inner_drop_nav_info p-4">
                                                <h5 className="mb-3">TV, Appliances, Electronics</h5>
                                                <div className="row">
                                                    <div className="col-sm-6 multi-gd-img">
                                                        <ul className="multi-column-dropdown">
                                                            <li>
                                                                <a href="product2.html">Televisions</a>
                                                            </li>
                                                            <li>
                                                                <a href="product2.html">Home Entertainment Systems</a>
                                                            </li>
                                                            <li>
                                                                <a href="product2.html">Headphones</a>
                                                            </li>
                                                            <li>
                                                                <a href="product2.html">Speakers</a>
                                                            </li>
                                                            <li>
                                                                <a href="product2.html">MP3, Media Players &amp; Accessories</a>
                                                            </li>
                                                            <li>
                                                                <a href="product2.html">Audio &amp; Video Accessories</a>
                                                            </li>
                                                            <li>
                                                                <a href="product2.html">Cameras</a>
                                                            </li>
                                                            <li>
                                                                <a href="product2.html">DSLR Cameras</a>
                                                            </li>
                                                            <li>
                                                                <a href="product2.html">Camera Accessories</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="col-sm-6 multi-gd-img">
                                                        <ul className="multi-column-dropdown">
                                                            <li>
                                                                <a href="product2.html">Musical Instruments</a>
                                                            </li>
                                                            <li>
                                                                <a href="product2.html">Gaming Consoles</a>
                                                            </li>
                                                            <li>
                                                                <a href="product2.html">All Electronics</a>
                                                            </li>
                                                            <li>
                                                                <a href="product2.html">Air Conditioners</a>
                                                            </li>
                                                            <li>
                                                                <a href="product2.html">Refrigerators</a>
                                                            </li>
                                                            <li>
                                                                <a href="product2.html">Washing Machines</a>
                                                            </li>
                                                            <li>
                                                                <a href="product2.html">Kitchen &amp; Home Appliances</a>
                                                            </li>
                                                            <li>
                                                                <a href="product2.html">Heating &amp; Cooling Appliances</a>
                                                            </li>
                                                            <li>
                                                                <a href="product2.html">All Appliances</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="nav-item dropdown mr-lg-2 mb-lg-0 mb-2">
                                        <a className="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            Pages
                                        </a>
                                        <div className="dropdown-menu">
                                            <a className="dropdown-item" href="product.html">Product 1</a>
                                            <a className="dropdown-item" href="product2.html">Product 2</a>
                                            <div className="dropdown-divider" />
                                            <a className="dropdown-item" href="single.html">Single Product 1</a>
                                            <a className="dropdown-item" href="single2.html">Single Product 2</a>
                                            <div className="dropdown-divider" />
                                            <a className="dropdown-item" href="checkout.html">Checkout Page</a>
                                            <a className="dropdown-item" href="payment.html">Payment Page</a>
                                        </div>
                                    </li>

                                    <li className="nav-item dropdown mr-lg-2 mb-lg-0 mb-2">
                                        <a className="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            Notifications
                                        </a>
                                        <div className="dropdown-menu">
                                            <a className="dropdown-item" href="product.html">Product 1</a>
                                            <a className="dropdown-item" href="product2.html">Product 2</a>
                                            <div className="dropdown-divider" />
                                            <a className="dropdown-item" href="single.html">Single Product 1</a>
                                            <a className="dropdown-item" href="single2.html">Single Product 2</a>
                                            <div className="dropdown-divider" />
                                            <a className="dropdown-item" href="checkout.html">Checkout Page</a>
                                            <a className="dropdown-item" href="payment.html">Payment Page</a>
                                        </div>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="contact.html">Contact Us</a>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                </div>
            </Fragment>

        );
    }
}