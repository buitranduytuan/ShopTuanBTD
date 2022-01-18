import React, { Component, Fragment } from 'react';

export default class Checkout extends Component {
  render() {
    return (
      <Fragment>
        {/* page */}
        <div className="services-breadcrumb">
          <div className="agile_inner_breadcrumb">
            <div className="container">
              <ul className="w3_short">
                <li>
                  <a href="index.html">Home</a>
                  <i>|</i>
                </li>
                <li>Checkout</li>
              </ul>
            </div>
          </div>
        </div>
        {/* //page */}
        {/* checkout page */}
        <div className="privacy py-sm-5 py-4">
          <div className="container py-xl-4 py-lg-2">
            {/* tittle heading */}
            <h3 className="tittle-w3l text-center mb-lg-5 mb-sm-4 mb-3">
              <span>C</span>heckout
            </h3>
            {/* //tittle heading */}
            <div className="checkout-right">
              <h4 className="mb-sm-4 mb-3">
                Your shopping cart contains:
                <span>3 Products</span>
              </h4>
              <div className="table-responsive">
                <table className="timetable_sub">
                  <thead>
                    <tr>
                      <th>SL No.</th>
                      <th>Product</th>
                      <th>Quality</th>
                      <th>Product Name</th>
                      <th>Price</th>
                      <th>Remove</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="rem1">
                      <td className="invert">1</td>
                      <td className="invert-image">
                        <a href="single.html">
                          <img
                            src="/asset/images/a.jpg"
                            alt=" "
                            className="img-responsive"
                          />
                        </a>
                      </td>
                      <td className="invert">
                        <div className="quantity">
                          <div className="quantity-select">
                            <div className="entry value-minus">&nbsp;</div>
                            <div className="entry value">
                              <span>1</span>
                            </div>
                            <div className="entry value-plus active">
                              &nbsp;
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="invert">Back Cover</td>
                      <td className="invert">$259</td>
                      <td className="invert">
                        <div className="rem">
                          <div className="close1"> </div>
                        </div>
                      </td>
                    </tr>
                    <tr className="rem2">
                      <td className="invert">2</td>
                      <td className="invert-image">
                        <a href="single2.html">
                          <img
                            src="/asset/images/a4.jpg"
                            alt=" "
                            className="img-responsive"
                          />
                        </a>
                      </td>
                      <td className="invert">
                        <div className="quantity">
                          <div className="quantity-select">
                            <div className="entry value-minus">&nbsp;</div>
                            <div className="entry value">
                              <span>1</span>
                            </div>
                            <div className="entry value-plus active">
                              &nbsp;
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="invert">Cordless Trimmer</td>
                      <td className="invert">$1,999</td>
                      <td className="invert">
                        <div className="rem">
                          <div className="close2"> </div>
                        </div>
                      </td>
                    </tr>
                    <tr className="rem3">
                      <td className="invert">3</td>
                      <td className="invert-image">
                        <a href="single.html">
                          <img
                            src="/asset/images/a3.jpg"
                            alt=" "
                            className="img-responsive"
                          />
                        </a>
                      </td>
                      <td className="invert">
                        <div className="quantity">
                          <div className="quantity-select">
                            <div className="entry value-minus">&nbsp;</div>
                            <div className="entry value">
                              <span>1</span>
                            </div>
                            <div className="entry value-plus active">
                              &nbsp;
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="invert">Nikon Camera</td>
                      <td className="invert">$37,490</td>
                      <td className="invert">
                        <div className="rem">
                          <div className="close3"> </div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="checkout-left">
              <div className="address_form_agile mt-sm-5 mt-4">
                <h4 className="mb-sm-4 mb-3">Add a new Details</h4>
                <form
                  action="payment.html"
                  method="post"
                  className="creditly-card-form agileinfo_form"
                >
                  <div className="creditly-wrapper wthree, w3_agileits_wrapper">
                    <div className="information-wrapper">
                      <div className="first-row">
                        <div className="controls form-group">
                          <input
                            className="billing-address-name form-control"
                            type="text"
                            name="name"
                            placeholder="Full Name"
                            required
                          />
                        </div>
                        <div className="w3_agileits_card_number_grids">
                          <div className="w3_agileits_card_number_grid_left form-group">
                            <div className="controls">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Mobile Number"
                                name="number"
                                required
                              />
                            </div>
                          </div>
                          <div className="w3_agileits_card_number_grid_right form-group">
                            <div className="controls">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Landmark"
                                name="landmark"
                                required
                              />
                            </div>
                          </div>
                        </div>
                        <div className="controls form-group">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Town/City"
                            name="city"
                            required
                          />
                        </div>
                        <div className="controls form-group">
                          <select className="option-w3ls">
                            <option>Select Address type</option>
                            <option>Office</option>
                            <option>Home</option>
                            <option>Commercial</option>
                          </select>
                        </div>
                      </div>
                      <button className="submit check_out btn">
                        Delivery to this Address
                      </button>
                    </div>
                  </div>
                </form>
                <div className="checkout-right-basket">
                  <a href="payment.html">
                    Make a Payment
                    <span className="far fa-hand-point-right" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* //checkout page */}
      </Fragment>
    );
  }
}
