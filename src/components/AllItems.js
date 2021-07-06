import React, { useEffect } from 'react';
import uniqid from 'uniqid';
import { NavLink } from 'react-router-dom';

function AllItems(props) {
  const { setCategory, totalArray } = props;
  useEffect(() => {
    setCategory('All Products');
  }, []);
  return (
    <div className="products-container">
      {totalArray.map((item) => (
        <NavLink key={uniqid()} to={`/product/${item.id}`}>
          <div  className="shop-item">
            <img src={item.img} alt={item.alt}></img>
            <h3>{item.name}</h3>
            <p>{item.price}</p>
          </div>
        </NavLink>
      ))}
    </div>
  );
}

export default AllItems;
