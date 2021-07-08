import React from 'react';
import { NavLink } from 'react-router-dom';
import uniqid from 'uniqid';
import SingleItem from './SingleItem'

function Processors(props) {
  const { processorsArray, setCurrentProduct } = props;
  return (
    <div className="products-container">
      {processorsArray.map((item) => (
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

export default Processors;
