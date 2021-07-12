import React, { useEffect, useState } from 'react';
import '../css/Product.css';
import Footer from '../components/Footer';
import AddedMessage from '../components/AddedMessage';
import Gallery from '../components/Gallery';
import PropTypes from 'prop-types'

function Product(props: any) {
  const { currentProduct, leaveHome, setBasketArray, basketArray } = props;
  const [img1Class, setImg1Class] = useState('gallery-img img1 active-img');
  const [img2Class, setImg2Class] = useState('gallery-img img2');
  const [imgIndex, setImgIndex] = useState(0);
  const [addedToCart, setAddedToCart] = useState(false);
  const [blurStyle, setBlurStyle] = useState({});

  useEffect(() => {
    leaveHome();
    
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  

  const setActiveImg = (e: any) => {
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
    if (!basketArray.some((item: {name: string}) => item.name === currentProduct.name)) {
      let newItem = currentProduct;
      newItem.quantity = 1;
      setBasketArray((oldArray: [{}]) => [...oldArray, newItem]);
    } else {
      let newArray = basketArray;

      const index = newArray.findIndex(
        (item: {name: string}) => item.name === currentProduct.name,
      );

      newArray[index].quantity = newArray[index].quantity + 1;
      setBasketArray([...newArray]);
    }
  };

  const removeFromBasket = () => {
    const newArray = basketArray;
    const index = basketArray.findIndex(
      (item: {name: string}) => item.name === currentProduct.name,
    );
    newArray.splice(index, 1);
    setBasketArray([...newArray]);
  };

  return (
    <div className="product-page">
      <div className="total-product-page-container">
        <div className="top-container"></div>
        <div className="bottom-container" style={blurStyle}>
          <Gallery
            setActiveImg={setActiveImg}
            currentProduct={currentProduct}
            img1Class={img1Class}
            img2Class={img2Class}
          />
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
                  setBlurStyle({ filter: 'blur(8px)' });
                }}
              >
                Add To Basket
              </button>
              {basketArray.some((item: {name: string}) => item.name === currentProduct.name) ? (
                <button className="remove-button" onClick={removeFromBasket}>
                  Remove From Basket
                </button>
              ) : null}
            </div>
          </div>
        </div>
        {addedToCart === true ? (
          <AddedMessage
            setAddedToCart={setAddedToCart}
            setBlurStyle={setBlurStyle}
          />
        ) : null}
        <Footer />
      </div>
    </div>
  );
}
Product.propTypes = {
  currentProduct: PropTypes.shape({
    name: PropTypes.string,
    img: PropTypes.arrayOf(PropTypes.string),
    price: PropTypes.string,
    alt: PropTypes.string,
    id: PropTypes.string,
  })
}
export default Product;
