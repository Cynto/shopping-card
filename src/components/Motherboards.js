import React, {useEffect} from 'react';
import { NavLink } from 'react-router-dom';
import uniqid from 'uniqid';
import SingleItem from './SingleItem'

function Motherboards(props) {
  const { motherboardsArray, setCategory } = props;
  useEffect(() => {
    setCategory('Motherboards');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="products-container">
      {motherboardsArray.map((item) => (
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

export default Motherboards;