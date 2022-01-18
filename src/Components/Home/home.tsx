import axios from 'axios';
import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import MiddleSection from '../Layout/middleSection/middleSection';
import MenuRight from '../menu/menuRight';
import { MenuRightProps } from '../menu/type';

const path = '/asset';
function Home() {
  const callAPI = () => {
    axios
      .get('products/getProducts')
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => console.log('Have a error:', error));
  };

  useEffect(() => {
    callAPI();
    console.log('sdfsdfd');
  });

  const menuSearchProp: MenuRightProps = {};

  return (
    <Fragment>
      {/* banner */}
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-ride="carousel"
      >
        {/* Indicators*/}
        <ol className="carousel-indicators">
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to={0}
            className="active"
          />
          <li data-target="#carouselExampleIndicators" data-slide-to={1} />
          <li data-target="#carouselExampleIndicators" data-slide-to={2} />
          <li data-target="#carouselExampleIndicators" data-slide-to={3} />
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item item1 active">
            <div className="container">
              <div className="w3l-space-banner">
                <div className="carousel-caption p-lg-5 p-sm-4 p-3">
                  <p>
                    Get flat
                    <span>10%</span> Cashback
                  </p>
                  <h3 className="font-weight-bold pt-2 pb-lg-5 pb-4">
                    The
                    <span>Big</span>
                    Sale
                  </h3>
                  <a className="button2" href="product.html">
                    Shop Now{' '}
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item item2">
            <div className="container">
              <div className="w3l-space-banner">
                <div className="carousel-caption p-lg-5 p-sm-4 p-3">
                  <p>
                    advanced
                    <span>Wireless</span> earbuds
                  </p>
                  <h3 className="font-weight-bold pt-2 pb-lg-5 pb-4">
                    Best
                    <span>Headphone</span>
                  </h3>
                  <a className="button2" href="product.html">
                    Shop Now{' '}
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item item3">
            <div className="container">
              <div className="w3l-space-banner">
                <div className="carousel-caption p-lg-5 p-sm-4 p-3">
                  <p>
                    Get flat
                    <span>10%</span> Cashback
                  </p>
                  <h3 className="font-weight-bold pt-2 pb-lg-5 pb-4">
                    New
                    <span>Standard</span>
                  </h3>
                  <a className="button2" href="product.html">
                    Shop Now{' '}
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item item4">
            <div className="container">
              <div className="w3l-space-banner">
                <div className="carousel-caption p-lg-5 p-sm-4 p-3">
                  <p>
                    Get Now
                    <span>40%</span> Discount
                  </p>
                  <h3 className="font-weight-bold pt-2 pb-lg-5 pb-4">
                    Today
                    <span>Discount</span>
                  </h3>
                  <a className="button2" href="product.html">
                    Shop Now{' '}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="sr-only">Next</span>
        </a>
      </div>
      {/* //banner */}
      {/* top Products */}
      <div className="ads-grid py-sm-5 py-4">
        <div className="container py-xl-4 py-lg-2">
          {/* tittle heading */}
          <h3 className="tittle-w3l text-center mb-lg-5 mb-sm-4 mb-3">
            <span>O</span>ur
            <span>N</span>ew
            <span>P</span>roducts
          </h3>

          {/* //tittle heading */}
          <div className="row">
            {/* product left */}
            <div className="agileinfo-ads-display col-lg-9">
              <div className="wrapper">
                {/* first section */}
                <div className="product-sec1 px-sm-4 px-3 py-sm-5  py-3 mb-4">
                  <h3 className="heading-tittle text-center font-italic">
                    New Brand Mobiles
                  </h3>
                  <div className="row">
                    <div className="col-md-4 product-men mt-5">
                      <div className="men-pro-item simpleCart_shelfItem">
                        <div className="men-thumb-item text-center">
                          <img src={path + '/images/m1.jpg'} alt="" />
                          <div className="men-cart-pro">
                            <div className="inner-men-cart-pro">
                              <a
                                href="/productdetail"
                                className="link-product-add-cart"
                              >
                                Quick View
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="item-info-product text-center border-top mt-4">
                          <h4 className="pt-1">
                            <a href="/productdetail">Samsung Galaxy J7</a>
                          </h4>
                          <div className="info-product-price my-2">
                            <span className="item_price">$200.00</span>
                            <del>$280.00</del>
                          </div>
                          <div className="snipcart-details top_brand_home_details item_add single-item hvr-outline-out">
                            <form action="#" method="post">
                              <fieldset>
                                <input
                                  type="hidden"
                                  name="cmd"
                                  defaultValue="_cart"
                                />
                                <input
                                  type="hidden"
                                  name="add"
                                  defaultValue={1}
                                />
                                <input
                                  type="hidden"
                                  name="business"
                                  defaultValue=" "
                                />
                                <input
                                  type="hidden"
                                  name="item_name"
                                  defaultValue="Samsung Galaxy J7"
                                />
                                <input
                                  type="hidden"
                                  name="amount"
                                  defaultValue={200.0}
                                />
                                <input
                                  type="hidden"
                                  name="discount_amount"
                                  defaultValue={1.0}
                                />
                                <input
                                  type="hidden"
                                  name="currency_code"
                                  defaultValue="USD"
                                />
                                <input
                                  type="hidden"
                                  name="return"
                                  defaultValue=" "
                                />
                                <input
                                  type="hidden"
                                  name="cancel_return"
                                  defaultValue=" "
                                />
                                <input
                                  type="submit"
                                  name="submit"
                                  defaultValue="Add to cart"
                                  className="button btn"
                                />
                              </fieldset>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 product-men mt-5">
                      <div className="men-pro-item simpleCart_shelfItem">
                        <div className="men-thumb-item text-center">
                          <img src={path + '/images/m2.jpg'} alt="" />
                          <div className="men-cart-pro">
                            <div className="inner-men-cart-pro">
                              <a
                                href="/productdetail"
                                className="link-product-add-cart"
                              >
                                Quick View
                              </a>
                            </div>
                          </div>
                          <span className="product-new-top">New</span>
                        </div>
                        <div className="item-info-product text-center border-top mt-4">
                          <h4 className="pt-1">
                            <a href="/productdetail">OPPO A37f</a>
                          </h4>
                          <div className="info-product-price my-2">
                            <span className="item_price">$230.00</span>
                            <del>$250.00</del>
                          </div>
                          <div className="snipcart-details top_brand_home_details item_add single-item hvr-outline-out">
                            <form action="#" method="post">
                              <fieldset>
                                <input
                                  type="hidden"
                                  name="cmd"
                                  defaultValue="_cart"
                                />
                                <input
                                  type="hidden"
                                  name="add"
                                  defaultValue={1}
                                />
                                <input
                                  type="hidden"
                                  name="business"
                                  defaultValue=" "
                                />
                                <input
                                  type="hidden"
                                  name="item_name"
                                  defaultValue="OPPO A37f"
                                />
                                <input
                                  type="hidden"
                                  name="amount"
                                  defaultValue={230.0}
                                />
                                <input
                                  type="hidden"
                                  name="discount_amount"
                                  defaultValue={1.0}
                                />
                                <input
                                  type="hidden"
                                  name="currency_code"
                                  defaultValue="USD"
                                />
                                <input
                                  type="hidden"
                                  name="return"
                                  defaultValue=" "
                                />
                                <input
                                  type="hidden"
                                  name="cancel_return"
                                  defaultValue=" "
                                />
                                <input
                                  type="submit"
                                  name="submit"
                                  defaultValue="Add to cart"
                                  className="button btn"
                                />
                              </fieldset>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 product-men mt-5">
                      <div className="men-pro-item simpleCart_shelfItem">
                        <div className="men-thumb-item text-center">
                          <img src={path + '/images/m3.jpg'} alt="" />
                          <div className="men-cart-pro">
                            <div className="inner-men-cart-pro">
                              <a
                                href="/productdetail"
                                className="link-product-add-cart"
                              >
                                Quick View
                              </a>
                            </div>
                          </div>
                          <span className="product-new-top">New</span>
                        </div>
                        <div className="item-info-product text-center border-top mt-4">
                          <h4 className="pt-1">
                            <a href="/productdetail">Apple iPhone X</a>
                          </h4>
                          <div className="info-product-price my-2">
                            <span className="item_price">$280.00</span>
                            <del>$300.00</del>
                          </div>
                          <div className="snipcart-details top_brand_home_details item_add single-item hvr-outline-out">
                            <form action="#" method="post">
                              <fieldset>
                                <input
                                  type="hidden"
                                  name="cmd"
                                  defaultValue="_cart"
                                />
                                <input
                                  type="hidden"
                                  name="add"
                                  defaultValue={1}
                                />
                                <input
                                  type="hidden"
                                  name="business"
                                  defaultValue=" "
                                />
                                <input
                                  type="hidden"
                                  name="item_name"
                                  defaultValue="Apple iPhone X"
                                />
                                <input
                                  type="hidden"
                                  name="amount"
                                  defaultValue={280.0}
                                />
                                <input
                                  type="hidden"
                                  name="discount_amount"
                                  defaultValue={1.0}
                                />
                                <input
                                  type="hidden"
                                  name="currency_code"
                                  defaultValue="USD"
                                />
                                <input
                                  type="hidden"
                                  name="return"
                                  defaultValue=" "
                                />
                                <input
                                  type="hidden"
                                  name="cancel_return"
                                  defaultValue=" "
                                />
                                <input
                                  type="submit"
                                  name="submit"
                                  defaultValue="Add to cart"
                                  className="button btn"
                                />
                              </fieldset>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* //first section */}
                {/* second section */}
                <div className="product-sec1 px-sm-4 px-3 py-sm-5  py-3 mb-4">
                  <h3 className="heading-tittle text-center font-italic">
                    Tv &amp; Audio
                  </h3>
                  <div className="row">
                    <div className="col-md-4 product-men mt-5">
                      <div className="men-pro-item simpleCart_shelfItem">
                        <div className="men-thumb-item text-center">
                          <img src={path + '/images/m4.jpg'} alt="" />
                          <div className="men-cart-pro">
                            <div className="inner-men-cart-pro">
                              <a
                                href="/productdetail"
                                className="link-product-add-cart"
                              >
                                Quick View
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="item-info-product text-center border-top mt-4">
                          <h4 className="pt-1">
                            <a href="/productdetail">Sony 80 cm (32 inches)</a>
                          </h4>
                          <div className="info-product-price my-2">
                            <span className="item_price">$320.00</span>
                            <del>$340.00</del>
                          </div>
                          <div className="snipcart-details top_brand_home_details item_add single-item hvr-outline-out">
                            <form action="#" method="post">
                              <fieldset>
                                <input
                                  type="hidden"
                                  name="cmd"
                                  defaultValue="_cart"
                                />
                                <input
                                  type="hidden"
                                  name="add"
                                  defaultValue={1}
                                />
                                <input
                                  type="hidden"
                                  name="business"
                                  defaultValue=" "
                                />
                                <input
                                  type="hidden"
                                  name="item_name"
                                  defaultValue="Sony 80 cm (32 inches)"
                                />
                                <input
                                  type="hidden"
                                  name="amount"
                                  defaultValue={320.0}
                                />
                                <input
                                  type="hidden"
                                  name="discount_amount"
                                  defaultValue={1.0}
                                />
                                <input
                                  type="hidden"
                                  name="currency_code"
                                  defaultValue="USD"
                                />
                                <input
                                  type="hidden"
                                  name="return"
                                  defaultValue=" "
                                />
                                <input
                                  type="hidden"
                                  name="cancel_return"
                                  defaultValue=" "
                                />
                                <input
                                  type="submit"
                                  name="submit"
                                  defaultValue="Add to cart"
                                  className="button btn"
                                />
                              </fieldset>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 product-men mt-5">
                      <div className="men-pro-item simpleCart_shelfItem">
                        <div className="men-thumb-item text-center">
                          <img src={path + '/images/m5.jpg'} alt="" />
                          <div className="men-cart-pro">
                            <div className="inner-men-cart-pro">
                              <a
                                href="/productdetail"
                                className="link-product-add-cart"
                              >
                                Quick View
                              </a>
                            </div>
                          </div>
                          <span className="product-new-top">New</span>
                        </div>
                        <div className="item-info-product text-center border-top mt-4">
                          <h4 className="pt-1">
                            <a href="/productdetail">Artis Speaker</a>
                          </h4>
                          <div className="info-product-price my-2">
                            <span className="item_price">$349.00</span>
                            <del>$399.00</del>
                          </div>
                          <div className="snipcart-details top_brand_home_details item_add single-item hvr-outline-out">
                            <form action="#" method="post">
                              <fieldset>
                                <input
                                  type="hidden"
                                  name="cmd"
                                  defaultValue="_cart"
                                />
                                <input
                                  type="hidden"
                                  name="add"
                                  defaultValue={1}
                                />
                                <input
                                  type="hidden"
                                  name="business"
                                  defaultValue=" "
                                />
                                <input
                                  type="hidden"
                                  name="item_name"
                                  defaultValue="Artis Speaker"
                                />
                                <input
                                  type="hidden"
                                  name="amount"
                                  defaultValue={349.0}
                                />
                                <input
                                  type="hidden"
                                  name="discount_amount"
                                  defaultValue={1.0}
                                />
                                <input
                                  type="hidden"
                                  name="currency_code"
                                  defaultValue="USD"
                                />
                                <input
                                  type="hidden"
                                  name="return"
                                  defaultValue=" "
                                />
                                <input
                                  type="hidden"
                                  name="cancel_return"
                                  defaultValue=" "
                                />
                                <input
                                  type="submit"
                                  name="submit"
                                  defaultValue="Add to cart"
                                  className="button btn"
                                />
                              </fieldset>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 product-men mt-5">
                      <div className="men-pro-item simpleCart_shelfItem">
                        <div className="men-thumb-item text-center">
                          <img src={path + '/images/m6.jpg'} alt="" />
                          <div className="men-cart-pro">
                            <div className="inner-men-cart-pro">
                              <a
                                href="/productdetail"
                                className="link-product-add-cart"
                              >
                                Quick View
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="item-info-product text-center border-top mt-4">
                          <h4 className="pt-1">
                            <a href="/productdetail">Philips Speakers</a>
                          </h4>
                          <div className="info-product-price my-2">
                            <span className="item_price">$249.00</span>
                            <del>$300.00</del>
                          </div>
                          <div className="snipcart-details top_brand_home_details item_add single-item hvr-outline-out">
                            <form action="#" method="post">
                              <fieldset>
                                <input
                                  type="hidden"
                                  name="cmd"
                                  defaultValue="_cart"
                                />
                                <input
                                  type="hidden"
                                  name="add"
                                  defaultValue={1}
                                />
                                <input
                                  type="hidden"
                                  name="business"
                                  defaultValue=" "
                                />
                                <input
                                  type="hidden"
                                  name="item_name"
                                  defaultValue="Philips Speakers"
                                />
                                <input
                                  type="hidden"
                                  name="amount"
                                  defaultValue={249.0}
                                />
                                <input
                                  type="hidden"
                                  name="discount_amount"
                                  defaultValue={1.0}
                                />
                                <input
                                  type="hidden"
                                  name="currency_code"
                                  defaultValue="USD"
                                />
                                <input
                                  type="hidden"
                                  name="return"
                                  defaultValue=" "
                                />
                                <input
                                  type="hidden"
                                  name="cancel_return"
                                  defaultValue=" "
                                />
                                <input
                                  type="submit"
                                  name="submit"
                                  defaultValue="Add to cart"
                                  className="button btn"
                                />
                              </fieldset>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* //second section */}
                {/* third section */}
                <div className="product-sec1 product-sec2 px-sm-5 px-3">
                  <div className="row">
                    <h3 className="col-md-4 effect-bg">Summer Carnival</h3>
                    <p className="w3l-nut-middle">Get Extra 10% Off</p>
                    <div className="col-md-8 bg-right-nut">
                      <img src={path + '/images/image1.png'} alt="" />
                    </div>
                  </div>
                </div>
                {/* //third section */}
                {/* fourth section */}
                <div className="product-sec1 px-sm-4 px-3 py-sm-5  py-3 mt-4">
                  <h3 className="heading-tittle text-center font-italic">
                    Large Appliances
                  </h3>
                  <div className="row">
                    <div className="col-md-4 product-men mt-5">
                      <div className="men-pro-item simpleCart_shelfItem">
                        <div className="men-thumb-item text-center">
                          <img src={path + '/images/m7.jpg'} alt="" />
                          <div className="men-cart-pro">
                            <div className="inner-men-cart-pro">
                              <a
                                href="/productdetail"
                                className="link-product-add-cart"
                              >
                                Quick View
                              </a>
                            </div>
                          </div>
                        </div>
                        <span className="product-new-top">New</span>
                        <div className="item-info-product text-center border-top mt-4">
                          <h4 className="pt-1">
                            <a href="/productdetail">Whirlpool 245</a>
                          </h4>
                          <div className="info-product-price my-2">
                            <span className="item_price">$230.00</span>
                            <del>$280.00</del>
                          </div>
                          <div className="snipcart-details top_brand_home_details item_add single-item hvr-outline-out">
                            <form action="#" method="post">
                              <fieldset>
                                <input
                                  type="hidden"
                                  name="cmd"
                                  defaultValue="_cart"
                                />
                                <input
                                  type="hidden"
                                  name="add"
                                  defaultValue={1}
                                />
                                <input
                                  type="hidden"
                                  name="business"
                                  defaultValue=" "
                                />
                                <input
                                  type="hidden"
                                  name="item_name"
                                  defaultValue="Whirlpool 245"
                                />
                                <input
                                  type="hidden"
                                  name="amount"
                                  defaultValue={230.0}
                                />
                                <input
                                  type="hidden"
                                  name="discount_amount"
                                  defaultValue={1.0}
                                />
                                <input
                                  type="hidden"
                                  name="currency_code"
                                  defaultValue="USD"
                                />
                                <input
                                  type="hidden"
                                  name="return"
                                  defaultValue=" "
                                />
                                <input
                                  type="hidden"
                                  name="cancel_return"
                                  defaultValue=" "
                                />
                                <input
                                  type="submit"
                                  name="submit"
                                  defaultValue="Add to cart"
                                  className="button btn"
                                />
                              </fieldset>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 product-men mt-5">
                      <div className="men-pro-item simpleCart_shelfItem">
                        <div className="men-thumb-item text-center">
                          <img src={path + '/images/m8.jpg'} alt="" />
                          <div className="men-cart-pro">
                            <div className="inner-men-cart-pro">
                              <a
                                href="/productdetail"
                                className="link-product-add-cart"
                              >
                                Quick View
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="item-info-product text-center border-top mt-4">
                          <h4 className="pt-1">
                            <a href="/productdetail">BPL Washing Machine</a>
                          </h4>
                          <div className="info-product-price my-2">
                            <span className="item_price">$180.00</span>
                            <del>$200.00</del>
                          </div>
                          <div className="snipcart-details top_brand_home_details item_add single-item hvr-outline-out">
                            <form action="#" method="post">
                              <fieldset>
                                <input
                                  type="hidden"
                                  name="cmd"
                                  defaultValue="_cart"
                                />
                                <input
                                  type="hidden"
                                  name="add"
                                  defaultValue={1}
                                />
                                <input
                                  type="hidden"
                                  name="business"
                                  defaultValue=" "
                                />
                                <input
                                  type="hidden"
                                  name="item_name"
                                  defaultValue="BPL Washing Machine"
                                />
                                <input
                                  type="hidden"
                                  name="amount"
                                  defaultValue={180.0}
                                />
                                <input
                                  type="hidden"
                                  name="discount_amount"
                                  defaultValue={1.0}
                                />
                                <input
                                  type="hidden"
                                  name="currency_code"
                                  defaultValue="USD"
                                />
                                <input
                                  type="hidden"
                                  name="return"
                                  defaultValue=" "
                                />
                                <input
                                  type="hidden"
                                  name="cancel_return"
                                  defaultValue=" "
                                />
                                <input
                                  type="submit"
                                  name="submit"
                                  defaultValue="Add to cart"
                                  className="button btn"
                                />
                              </fieldset>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 product-men mt-5">
                      <div className="men-pro-item simpleCart_shelfItem">
                        <div className="men-thumb-item text-center">
                          <img src={path + '/images/m9.jpg'} alt="" />
                          <div className="men-cart-pro">
                            <div className="inner-men-cart-pro">
                              <a
                                href="/productdetail"
                                className="link-product-add-cart"
                              >
                                Quick View
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="item-info-product text-center border-top mt-4">
                          <h4 className="pt-1">
                            <a href="/productdetail">Microwave Oven</a>
                          </h4>
                          <div className="info-product-price my-2">
                            <span className="item_price">$199.00</span>
                            <del>$299.00</del>
                          </div>
                          <div className="snipcart-details top_brand_home_details item_add single-item hvr-outline-out">
                            <form action="#" method="post">
                              <fieldset>
                                <input
                                  type="hidden"
                                  name="cmd"
                                  defaultValue="_cart"
                                />
                                <input
                                  type="hidden"
                                  name="add"
                                  defaultValue={1}
                                />
                                <input
                                  type="hidden"
                                  name="business"
                                  defaultValue=" "
                                />
                                <input
                                  type="hidden"
                                  name="item_name"
                                  defaultValue="Microwave Oven"
                                />
                                <input
                                  type="hidden"
                                  name="amount"
                                  defaultValue={199.0}
                                />
                                <input
                                  type="hidden"
                                  name="discount_amount"
                                  defaultValue={1.0}
                                />
                                <input
                                  type="hidden"
                                  name="currency_code"
                                  defaultValue="USD"
                                />
                                <input
                                  type="hidden"
                                  name="return"
                                  defaultValue=" "
                                />
                                <input
                                  type="hidden"
                                  name="cancel_return"
                                  defaultValue=" "
                                />
                                <input
                                  type="submit"
                                  name="submit"
                                  defaultValue="Add to cart"
                                  className="button btn"
                                />
                              </fieldset>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* //fourth section */}
              </div>
            </div>
            {/* //product left */}
            {/* product right */}
            <MenuRight {...menuSearchProp} />
          </div>
        </div>
      </div>
      {/* //top products */}
      {/* middle section */}
      <MiddleSection />
    </Fragment>
  );
}

const mapStateToProps = () => {
  // return {
  //   home: state.homeReducer,
  // };
};

const mapDispatchToProps = {
  // showNotification,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
