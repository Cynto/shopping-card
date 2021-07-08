import React, { useEffect, useState } from 'react';
import uniqid from 'uniqid';
import { NavLink } from 'react-router-dom';
import SingleItem from './SingleItem'

function AllItems(props) {
  const { setCategory, totalArray, setCurrentProduct } = props;
  
  useEffect(() => {
    setCategory('All Products');
    
  }, []);
  return (
    <div className="products-container">
      {totalArray.map((item) => (
        <NavLink  className="total-item" onClick={() => setCurrentProduct(item)} key={uniqid()} to={`/product/${item.id}`}>
          <SingleItem item={item}/>
        </NavLink>
      ))}
    </div>
  );
}

export default AllItems;
