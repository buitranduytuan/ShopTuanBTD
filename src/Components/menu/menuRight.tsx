import React, { Fragment } from 'react';
import { MenuRightProps } from './type';

const path = '/asset';
function MenuRight(props: MenuRightProps) {
  let productname = '';

  const { handleClickBtnSearch, setFilterFromMenuRight, filter } = props;

  const handleClickButtonSearch = () => {
    handleClickBtnSearch && handleClickBtnSearch(productname);
  };

  const setValueSearch = (e: any) => {
    productname = e.target.value;
  };

  const setSearchFilter = (brand: string) => {
    setFilterFromMenuRight &&
      setFilterFromMenuRight({
        ...filter,
        brand: brand,
        page: 1,
      });
  };

  return (
    <Fragment>
      <div className="col-lg-3 mt-lg-0 mt-4 p-lg-0">
        <div className="side-bar p-sm-4 p-3">
          <div className="search-hotel border-bottom py-2">
            <h3 className="agileits-sear-head mb-3">Search Here..</h3>
            <input
              type="search"
              placeholder="Product name..."
              name="search"
              id="searchProductByName"
              onBlur={setValueSearch}
            />
            <button
              type="button"
              className="btn btn-info"
              onClick={handleClickButtonSearch}
            >
              Search
            </button>
          </div>
          {/* Brand */}
          <div className="range border-bottom py-2">
            <h3 className="agileits-sear-head mb-3">Brand</h3>
            <div className="w3l-range">
              <ul>
                <li onClick={() => setSearchFilter('Iphone')}>
                  <p>Iphone</p>
                </li>
                <li className="my-1" onClick={() => setSearchFilter('VSmart')}>
                  <p>VSmart</p>
                </li>
                <li onClick={() => setSearchFilter('Samsung')}>
                  <p>Samsung</p>
                </li>
                <li className="my-1" onClick={() => setSearchFilter('Oppo')}>
                  <p>Oppo</p>
                </li>
              </ul>
            </div>
          </div>
          {/* //Brand */}
          {/* price */}
          <div className="range border-bottom py-2">
            <h3 className="agileits-sear-head mb-3">Price</h3>
            <div className="w3l-range">
              <ul>
                <li>
                  <a href="#">Under $1,000</a>
                </li>
                <li className="my-1">
                  <a href="#">$1,000 - $5,000</a>
                </li>
                <li>
                  <a href="#">$5,000 - $10,000</a>
                </li>
                <li className="my-1">
                  <a href="#">$10,000 - $20,000</a>
                </li>
                <li>
                  <a href="#">$20,000 $30,000</a>
                </li>
                <li className="mt-1">
                  <a href="#">Over $30,000</a>
                </li>
              </ul>
            </div>
          </div>
          {/* //price */}
          {/* discounts */}
          <div className="left-side border-bottom py-2">
            <h3 className="agileits-sear-head mb-3">Discount</h3>
            <ul>
              <li>
                <input type="checkbox" className="checked" />
                <span className="span">5% or More</span>
              </li>
              <li>
                <input type="checkbox" className="checked" />
                <span className="span">10% or More</span>
              </li>
              <li>
                <input type="checkbox" className="checked" />
                <span className="span">20% or More</span>
              </li>
              <li>
                <input type="checkbox" className="checked" />
                <span className="span">30% or More</span>
              </li>
              <li>
                <input type="checkbox" className="checked" />
                <span className="span">50% or More</span>
              </li>
              <li>
                <input type="checkbox" className="checked" />
                <span className="span">60% or More</span>
              </li>
            </ul>
          </div>
          {/* //discounts */}
          {/* reviews */}
          <div className="customer-rev border-bottom left-side py-2">
            <h3 className="agileits-sear-head mb-3">Customer Review</h3>
            <ul>
              <li>
                <a href="#">
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <span>5.0</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <span>4.0</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star-half" />
                  <span>3.5</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <span>3.0</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star-half" />
                  <span>2.5</span>
                </a>
              </li>
            </ul>
          </div>
          {/* //reviews */}
          {/* electronics */}
          <div className="left-side border-bottom py-2">
            <h3 className="agileits-sear-head mb-3">Electronics</h3>
            <ul>
              <li>
                <input type="checkbox" className="checked" />
                <span className="span">Accessories</span>
              </li>
              <li>
                <input type="checkbox" className="checked" />
                <span className="span">Cameras &amp; Photography</span>
              </li>
              <li>
                <input type="checkbox" className="checked" />
                <span className="span">Car &amp; Vehicle Electronics</span>
              </li>
              <li>
                <input type="checkbox" className="checked" />
                <span className="span">Computers &amp; Accessories</span>
              </li>
              <li>
                <input type="checkbox" className="checked" />
                <span className="span">GPS &amp; Accessories</span>
              </li>
              <li>
                <input type="checkbox" className="checked" />
                <span className="span">Headphones</span>
              </li>
              <li>
                <input type="checkbox" className="checked" />
                <span className="span">Home Audio</span>
              </li>
              <li>
                <input type="checkbox" className="checked" />
                <span className="span">Home Theater, TV &amp; Video</span>
              </li>
              <li>
                <input type="checkbox" className="checked" />
                <span className="span">Mobiles &amp; Accessories</span>
              </li>
              <li>
                <input type="checkbox" className="checked" />
                <span className="span">Portable Media Players</span>
              </li>
              <li>
                <input type="checkbox" className="checked" />
                <span className="span">Tablets</span>
              </li>
              <li>
                <input type="checkbox" className="checked" />
                <span className="span">Telephones &amp; Accessories</span>
              </li>
              <li>
                <input type="checkbox" className="checked" />
                <span className="span">Wearable Technology</span>
              </li>
            </ul>
          </div>
          {/* //electronics */}
          {/* delivery */}
          <div className="left-side border-bottom py-2">
            <h3 className="agileits-sear-head mb-3">Cash On Delivery</h3>
            <ul>
              <li>
                <input type="checkbox" className="checked" />
                <span className="span">Eligible for Cash On Delivery</span>
              </li>
            </ul>
          </div>
          {/* //delivery */}
          {/* arrivals */}
          <div className="left-side border-bottom py-2">
            <h3 className="agileits-sear-head mb-3">New Arrivals</h3>
            <ul>
              <li>
                <input type="checkbox" className="checked" />
                <span className="span">Last 30 days</span>
              </li>
              <li>
                <input type="checkbox" className="checked" />
                <span className="span">Last 90 days</span>
              </li>
            </ul>
          </div>
          {/* //arrivals */}
          {/* best seller */}
          <div className="f-grid py-2">
            <h3 className="agileits-sear-head mb-3">Best Seller</h3>
            <div className="box-scroll">
              <div className="scroll">
                <div className="row">
                  <div className="col-lg-3 col-sm-2 col-3 left-mar">
                    <img
                      src={path + '/images/k1.jpg'}
                      alt=""
                      className="img-fluid"
                    />
                  </div>
                  <div className="col-lg-9 col-sm-10 col-9 w3_mvd">
                    <a>
                      Samsung Galaxy On7 Prime (Gold, 4GB RAM + 64GB Memory)
                    </a>
                    <a className="price-mar mt-2">$12,990.00</a>
                  </div>
                </div>
                <div className="row my-4">
                  <div className="col-lg-3 col-sm-2 col-3 left-mar">
                    <img
                      src={path + '/images/k2.jpg'}
                      alt=""
                      className="img-fluid"
                    />
                  </div>
                  <div className="col-lg-9 col-sm-10 col-9 w3_mvd">
                    <a>
                      Haier 195 L 4 Star Direct-Cool Single Door Refrigerator
                    </a>
                    <a className="price-mar mt-2">$12,499.00</a>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-3 col-sm-2 col-3 left-mar">
                    <img
                      src={path + '/images/k3.jpg'}
                      alt=""
                      className="img-fluid"
                    />
                  </div>
                  <div className="col-lg-9 col-sm-10 col-9 w3_mvd">
                    <a>Ambrane 13000 mAh Power Bank (P-1310 Premium)</a>
                    <a className="price-mar mt-2">$1,199.00 </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* //best seller */}
        </div>
        {/* //product right */}
      </div>
    </Fragment>
  );
}

export default MenuRight;
