import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import uniqid from 'uniqid';
import SingleItem from './SingleItem';

function Cases(props) {
  const { setCategory, casesArray, setCurrentProduct } = props;
  useEffect(() => {
    setCategory('Cases');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="products-container">
      {casesArray.map((item) => (
        <NavLink
          onClick={() => setCurrentProduct(item)}
          key={uniqid()}
          to={`/product/${item.id}`}
        >
          <SingleItem item={item} />
        </NavLink>
      ))}
    </div>
  );
}

export default Cases;
