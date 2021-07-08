import React, {useEffect} from 'react';
import { NavLink } from 'react-router-dom';
import uniqid from 'uniqid';
import SingleItem from './SingleItem'

function Memory(props) {
  const { memoryArray, setCurrentProduct, setCategory } = props;
  useEffect(() => {
    setCategory('Memory');
  }, []);
  return (
    <div className="products-container">
      {memoryArray.map((item) => (
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

export default Memory;