import React, { useState } from 'react';

function SingleItem(props) {
  const { item } = props;
  const [imgIndex, setImgIndex] = useState(0)
  return (
    <div onMouseEnter={() => (item.img.length > 1) ? setImgIndex(1) : null} onMouseLeave={() => setImgIndex(0)} className="shop-item">
      <img className="item-img" src={item.img[imgIndex]} alt={item.alt}></img>
      <h3>{item.name}</h3>
      <p>{item.price}</p>
    </div>
  );
}

export default SingleItem;
