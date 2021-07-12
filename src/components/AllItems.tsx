import React, { useEffect} from 'react';
import uniqid from 'uniqid';
import { NavLink } from 'react-router-dom';
import SingleItem from './SingleItem'

function AllItems(props: any) {
  const { setCategory, totalArray } = props;
  
  useEffect(() => {
    setCategory('All Products');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  interface IsItem {
    name: string;
    img: string[];
    alt: string;
    price: string;
    id: string;
  }
  return (
    <div className="products-container">
      {totalArray.map((item: IsItem) => (
        <NavLink  className="total-item"  key={uniqid()} to={`/product/${item.id}`}>
          <SingleItem item={item}/>
        </NavLink>
      ))}
    </div>
  );
}

export default AllItems;
