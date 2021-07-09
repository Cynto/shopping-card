import React, {useEffect} from 'react';
import { NavLink } from 'react-router-dom';
import uniqid from 'uniqid';
import SingleItem from './SingleItem'

function Processors(props) {
  const { processorsArray, setCurrentProduct, setCategory } = props;
  useEffect(() => {
    setCategory('Processors');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
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
