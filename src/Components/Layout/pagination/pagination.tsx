import React, { ReactElement, useEffect, useState } from 'react';
import { PaginationProps } from './type';

function Pagination(props: PaginationProps): ReactElement  {
  const { totalPage, pageActive, onChangePage } = props;

  const pageItemsDefault: Number[] = [];

  const [pageItems, setTotalPageItem] = useState(pageItemsDefault);

  useEffect(() => {
    for (let index = 0; index < totalPage; index++) {
      pageItems.push(index + 1);
    }
    setTotalPageItem([...pageItems]);
  }, [totalPage]);

  return (
    <nav aria-label="...">
      <ul className="pagination">
        <li
          className="page-item"
          // disabled ={pageActive >= 2}
          onClick={() => pageActive >= 2 && onChangePage(Number(pageActive?pageActive.valueOf(): 0 - 1))}
        >
          <a className="page-link" tabIndex={-1}>
            Previous
          </a>
        </li>
        {pageItems &&
          pageItems.map((pageIndex) => {
            return (
              <li
                className={
                  pageIndex === pageActive ? 'page-item active' : 'page-item'
                }
                onClick={() =>
                  pageActive !== pageIndex && onChangePage(pageIndex)
                }
                key={pageIndex.toString()}
              >
                <a className="page-link"> {pageIndex} </a>
              </li>
            );
          })}
        <li
          className="page-item"
          // disabled={pageActive < totalPage}
          onClick={() => pageActive < totalPage && onChangePage(pageActive.valueOf() + 1)}
        >
          <a className="page-link" tabIndex={-1}>
            Next
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Pagination;
