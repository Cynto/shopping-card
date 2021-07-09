import React, { useEffect, useState } from 'react';
import '../css/Product.css';
import Footer from '../components/Footer';
import uniqid from 'uniqid';

function Product(props) {
  const { currentProduct, leaveHome, setBasketArray } = props;
  const [img1Class, setImg1Class] = useState('gallery-img img1 active-img');
  const [img2Class, setImg2Class] = useState('gallery-img img2');
  const [imgIndex, setImgIndex] = useState(0);

  useEffect(() => {
    leaveHome();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const setActiveImg = (e) => {
   
    if (e.target.className.includes('img1')) {
      setImg1Class('gallery-img img1 active-img');
      setImg2Class('gallery-img img2');
      setImgIndex(0);
    } else if (e.target.className.includes('img2')) {
      setImg2Class('gallery-img img2 active-img');
      setImg1Class('gallery-img img1');
      setImgIndex(1);
    }
  };
  const addToBasket = () => {
    
    let newItem = currentProduct;
    currentProduct.quantity = 1;
    setBasketArray((oldArray) => [...oldArray, newItem] )
  }
  return (
    <div className="product-page">
      <div className="total-product-page-container">
        <div className="top-container"></div>
        <div className="bottom-container">
          <div className="gallery-container">
            <img
              src={currentProduct.img[0]}
              alt={currentProduct.alt}
              className={img1Class}
              onMouseEnter={(e) => setActiveImg(e)}
            />
            <img
              src={currentProduct.img[1]}
              alt={currentProduct.alt}
              className={img2Class}
              onMouseEnter={(e) => setActiveImg(e)}
            />
          </div>
          <div className="main-img-container">
            <img src={currentProduct.img[imgIndex]} alt={currentProduct.alt} />
          </div>
          <div className="title-price-container">
            <h2>{currentProduct.name}</h2>
            <p>{currentProduct.price}</p>
            <div className="buy-button-container">
              <button onClick={() => addToBasket()}>Add To Cart</button>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Product;
