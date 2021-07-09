import React, { useEffect, useState } from 'react';
import '../css/Product.css';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

function Product(props) {
  const { currentProduct, leaveHome, setBasketArray, basketArray } = props;
  const [img1Class, setImg1Class] = useState('gallery-img img1 active-img');
  const [img2Class, setImg2Class] = useState('gallery-img img2');
  const [imgIndex, setImgIndex] = useState(0);
  const [addedToCart, setAddedToCart] = useState(false);
  const [blurStyle, setBlurStyle] = useState({})

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
    if (!basketArray.some((item) => item.name === currentProduct.name)) {
      let newItem = currentProduct;
      newItem.quantity = 1;
      setBasketArray((oldArray) => [...oldArray, newItem]);
    } else {
      let newArray = basketArray;

      const index = newArray.findIndex(
        (item) => item.name === currentProduct.name,
      );

      newArray[index].quantity = newArray[index].quantity + 1;
      setBasketArray([...newArray]);
    }
  };

  const removeFromBasket = () => {
    const newArray = basketArray;
    const index = basketArray.findIndex(
      (item) => item.name === currentProduct.name,
    );
    newArray.splice(index, 1);
    setBasketArray([...newArray]);
  };

  return (
    <div className="product-page">
      <div className="total-product-page-container">
        <div className="top-container"></div>
        <div className="bottom-container" style={blurStyle}>
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
              <button
                className="add-button"
                onClick={() => {
                  addToBasket();
                  setAddedToCart(true);
                  setBlurStyle({filter: 'blur(8px)'})
                }}
              >
                {!basketArray.some((item) => item.name === currentProduct.name)
                  ? 'Add To Cart'
                  : 'Add Another'}
              </button>
              {basketArray.some((item) => item.name === currentProduct.name) ? (
                <button className="remove-button" onClick={removeFromBasket}>
                  Remove From Cart
                </button>
              ) : null}
            </div>
          </div>
          
        </div>
        {addedToCart === true ? (
            <div className="added-message-container">
              <div className="main-message-container">
                <h3>Successfully Added Item To Cart!</h3>
                <Link to="/basket">
                  <button>Go To Basket</button>
                </Link>
              </div>
              <button className="exit-button" onClick={() => {setAddedToCart(false); setBlurStyle({})}}>X</button>
            </div>
          ) : null}
        <Footer />
      </div>
    </div>
  );
}

export default Product;
