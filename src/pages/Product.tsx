import React, { useEffect, useState } from 'react';
import '../css/Product.css';
import Footer from '../components/Footer';
import AddedMessage from '../components/AddedMessage';
import Gallery from '../components/Gallery';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import {
  removeItem,
  addItem,
  updateQuantityA,
  getLocal,
} from '../actions/index';
import firebase from '../Firebase';
import 'firebase/firestore';
import 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';

function Product(props: any) {
  const { currentProduct, leaveHome, index } = props;
  const [img1Class, setImg1Class] = useState('gallery-img img1 active-img');
  const [img2Class, setImg2Class] = useState('gallery-img img2');
  const [imgIndex, setImgIndex] = useState(0);
  const [addedToCart, setAddedToCart] = useState(false);
  const [blurStyle, setBlurStyle] = useState({});

  const basketArray = useSelector((state: any) => state.basketArray);
  const dispatch = useDispatch();
  useEffect(() => {
    leaveHome();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const auth = firebase.auth();
  const db = firebase.firestore();
  let userBasketsRef: any;
  let unsubscribe;
  const [user] = useAuthState(auth);

  if (user) {
    userBasketsRef = db.collection('userBasket');
  }

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
    console.log(currentProduct.name);
    if (
      !basketArray.some(
        (item: { name: string }) => item.name === currentProduct.name,
      )
    ) {
      let newItem = currentProduct;
      newItem.quantity = 1;
      dispatch(addItem(newItem));
    } else {
      dispatch(updateQuantityA({ index, negOrPos: '+' }));
    }
  };

  const removeFromBasket = (index: number) => {
    dispatch(removeItem(index));
  };
  useEffect(() => {
    if (user) {
      const userBasketRef = userBasketsRef.doc(user.uid);
      userBasketRef.get().then((docSnapshot: any) => {
        if (docSnapshot.exists) {
          const basket = docSnapshot.data().basketArray;
          dispatch(getLocal(basket));
        }
      });
    }
  }, []);
  useEffect(() => {
    console.log(basketArray[1])
    if (user && !basketArray.some((item: any) => item === undefined)) {
      userBasketsRef
        .doc(user.uid)
        .set({ basketArray: basketArray, uid: user.uid });
    }
  }, [basketArray]);
  useEffect(() => {
    console.log(currentProduct);
  }, [currentProduct]);

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
              {basketArray.some(
                (item: { name: string }) => item.name === currentProduct.name,
              ) ? (
                <button
                  className="remove-button"
                  onClick={() => removeFromBasket(index)}
                >
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
  }),
};
export default Product;
