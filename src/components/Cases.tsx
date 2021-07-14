import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import uniqid from 'uniqid';
import SingleItem from './SingleItem';

function Cases(props: any) {
  const { setCategory, casesArray } = props;
  useEffect(() => {
    setCategory('Cases');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  interface ShopItem {
    name: string;
    img: string[];
    alt: string;
    price: string;
    id: string;
  }
  return (
    <div className="products-container">
      {casesArray.map((item: ShopItem) => (
        <NavLink
          
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
