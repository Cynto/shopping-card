import React, { useEffect} from 'react';
import uniqid from 'uniqid';
import { NavLink } from 'react-router-dom';
import SingleItem from './SingleItem'

function AllItems(props) {
  const { setCategory, totalArray } = props;
  
  useEffect(() => {
    setCategory('All Products');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="products-container">
      {totalArray.map((item) => (
        <NavLink  className="total-item"  key={uniqid()} to={`/product/${item.id}`}>
          <SingleItem item={item}/>
        </NavLink>
      ))}
    </div>
  );
}

export default AllItems;
