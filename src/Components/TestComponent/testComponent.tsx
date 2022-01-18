import React, { Fragment, useCallback, useEffect, useState } from 'react';
import productApi from '../../api/productApi';
import { FilterType } from '../menu/type';

function TestComponent() {
  const [count, setCount] = useState(0);
  // const [listProduce, setListProduct] = useState([]);
  useEffect(() => {
    console.log('Count:', count);
  }, [count]);

  const testMeno = (count: number) => {
    console.log('Meno', count);
  };

  const handle = useCallback(() => {
    console.log('MenoT');
    return 'Ha';
  }, []);

  useEffect(() => {
    console.log('Count[]:', count);
    const param: FilterType = {
      name: 'iphone',
      page: 0,
    };
    productApi.getAll(param).then((res: any) => {
      console.log('response', res[0].productName);
      testMeno(1);
    });
  }, []);

  return (
    <Fragment>
      <div>
        <button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          ClickMe {handle()}
        </button>
      </div>
    </Fragment>
  );
}

export default TestComponent;
