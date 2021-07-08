import React, {useEffect} from 'react';
import { NavLink } from 'react-router-dom';
import uniqid from 'uniqid';
import SingleItem from './SingleItem'

function Motherboards(props) {
  const { motherboardsArray, setCurrentProduct, setCategory } = props;
  useEffect(() => {
    setCategory('Motherboards');
  }, []);
  return (
    <div className="products-container">
      {motherboardsArray.map((item) => (
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

export default Motherboards;