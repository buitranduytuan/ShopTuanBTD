import PropTypes from 'prop-types';
import React from 'react';
import { ProductPropertyType } from './type';

function Product(props: ProductPropertyType) {
  return (
    <div className="col-md-4 product-men">
      <div className="men-pro-item simpleCart_shelfItem">
        <div className="men-thumb-item text-center">
          <img src={props.image} alt="" style={{ width: '100%' }} />
          <div className="men-cart-pro">
            <div className="inner-men-cart-pro">
              <a
                href={`/productdetail/${props.name}`}
                className="link-product-add-cart"
              >
                Quick View
              </a>
            </div>
          </div>
        </div>
        <div className="item-info-product text-center border-top mt-4">
          <h4 className="pt-1">
            <a href={`/productdetail/${props.name}`}>{props.name}</a>
          </h4>
          <div className="info-product-price my-2">
            <span className="item_price">{props.price}</span>
            <del>{props.priceOld}</del>
          </div>
          <div className="snipcart-details top_brand_home_details item_add single-item hvr-outline-out">
            <button className="button btn btn-info">Add to cart</button>
          </div>
        </div>
      </div>
    </div>
  );
}
Product.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
  price: PropTypes.string,
  priceOld: PropTypes.string,
  todoClick: PropTypes.func,
};

export default Product;
