import React, {useEffect} from 'react';
import { NavLink } from 'react-router-dom';
import uniqid from 'uniqid';
import SingleItem from './SingleItem'

function Memory(props: any) {
  const { memoryArray, setCategory } = props;
  useEffect(() => {
    setCategory('Memory');
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
      {memoryArray.map((item: IsItem) => (
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

export default Memory;