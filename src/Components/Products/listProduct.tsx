import React, { Fragment, useEffect, useRef, useState } from 'react';
import { connect } from 'react-redux';
import productApi from '../../api/productApi';
import Banner from '../Layout/banner/banner';
import MiddleSection from '../Layout/middleSection/middleSection';
import Pagination from '../Layout/pagination/pagination';
import MenuRight from '../menu/menuRight';
import { FilterType } from '../menu/type';
import Product from './product';
import { ProductPropertyType } from './type';

function ListProduct() {
  const [totalPage, setTotalPage] = useState(0);

  const listRowPrd: ProductPropertyType[][] = [];
  const [listRowProduct, setListRowProduct] = useState(listRowPrd);
  const productsComponent = useRef<HTMLInputElement>(null);

  const filterDefault: FilterType = {
    page: 1,
    limit: 6,
  };

  const [filter, setFilter] = useState(filterDefault);

  const handleClickButtomSearch = (name: string | undefined) => {
    console.log({ name });
    setTotalPage(0);
    productsComponent?.current?.scrollIntoView();
    setFilter({
      ...filter,
      name: name,
    });
  };

  const setFilterFromMenuRight = (filterFromMenu: FilterType) => {
    setTotalPage(0);
    setFilter({
      ...filter,
      ...filterFromMenu,
    });
  };

  const calculatorlistProduct = (listProduct: ProductPropertyType[]) => {
    const newRow: ProductPropertyType[][] = [];
    if (listProduct.length <= 3) {
      newRow.push(listProduct);
    } else {
      const totalRow = Math.ceil(listProduct.length / 3);
      for (let index = 0; index < totalRow; index++) {
        const arrayChild = listProduct.filter((item, index2) => {
          return index2 < (index + 1) * 3 && index2 >= index * 3;
        });

        newRow.push(arrayChild);
      }
    }

    setListRowProduct(newRow);
  };

  const callAPI = () => {
    productApi
      .getAll(filter)
      .then((res: any) => {
        setTotalPage(Math.ceil(res.totalItem / Number(filter.limit)));
        calculatorlistProduct(res.products);
      })
      .catch((err) => {
        console.log('Have a error:', err);
      });
  };

  const hanldeChangePage = (page: Number) => {
    if (page <= totalPage && page > 0) {
      setFilter({
        ...filter,
        page: page,
      });
    }

    setListRowProduct([]);
    productsComponent?.current?.scrollIntoView();
  };

  useEffect(() => {
    callAPI();
  }, [filter]);

  return (
    <Fragment>
      <Banner />

      {/* page */}
      <div className="services-breadcrumb">
        <div className="agile_inner_breadcrumb">
          <div className="container">
            <ul className="w3_short">
              <li>
                <a href="/">Home</a>
                <i>|</i>
              </li>
              <li>Electronics</li>
            </ul>
          </div>
        </div>
      </div>
      {/* //page */}

      <div className="ads-grid py-sm-5 py-4">
        <div className="container py-xl-4 py-lg-2" ref={productsComponent}>
          {/* tittle heading */}
          <h3 className="tittle-w3l text-center mb-lg-5 mb-sm-4 mb-3">
            <span>M</span>obiles
            <span>&amp;</span>
            <span>C</span>omputers
          </h3>
          {/* //tittle heading */}

          <div className="row">
            <div className="agileinfo-ads-display col-lg-9">
              {totalPage > 0 ? (
                <div className="wrapper">
                  {listRowProduct.map((rowProduct, index) => {
                    return (
                      <div
                        className="product-sec1 px-sm-4 px-3 py-sm-5  py-3 mb-4"
                        key={'row' + index}
                      >
                        <div className="row">
                          {rowProduct.map((product, index2) => {
                            return (
                              <Product
                                key={index2}
                                name={product.name}
                                price={product.price}
                                priceOld={product.priceOld}
                                image={product.image}
                                brand={product.brand}
                              />
                            );
                          })}
                        </div>
                      </div>
                    );
                  })}

                  <div className="px-sm-4 px-3 py-sm-5  py-3 mb-4">
                    <div className="row float-right">
                      <Pagination
                        pageActive={filter.page}
                        totalPage={totalPage}
                        onChangePage={hanldeChangePage}
                      />
                    </div>
                  </div>
                </div>
              ) : (
                <Fragment></Fragment>
              )}
            </div>

            <MenuRight
              handleClickBtnSearch={handleClickButtomSearch}
              setFilterFromMenuRight={setFilterFromMenuRight}
              filter={filter}
            />
          </div>
        </div>
      </div>

      <MiddleSection />
    </Fragment>
  );
}

const mapStateToProps = () => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(ListProduct);
