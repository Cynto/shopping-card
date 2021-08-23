import React, { useEffect, useState } from 'react';
import TotalAmount from '../components/TotalAmount';
import uniqid from 'uniqid';
import '../css/Basket.css';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { updateQuantityA, removeItem, getLocal } from '../actions/index';
import firebase from '../Firebase';
import 'firebase/firestore';
import 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';

function Basket(props: any) {
  const { leaveHome } = props;
  const dispatch = useDispatch();
  useEffect(() => {
    leaveHome();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  interface BasketItem {
    name: string;
    img: string[];
    alt: string;
    price: string;
    id: string;
    quantity: number;
  }
  const basketArray = useSelector((state: any) => state.basketArray);

  const updateQuantity = (negOrPos: string, index: number) => {
    const payloadObject: { index: number; negOrPos: string } = {
      index,
      negOrPos,
    };

    dispatch(updateQuantityA(payloadObject));
  };

  const deleteItem = (name: string, index: number) => {
    dispatch(removeItem(index));
  };
  const auth = firebase.auth();
  const db = firebase.firestore();
  let userBasketsRef: any;
  let unsubscribe;
  const [user] = useAuthState(auth);

  if (user) {
    userBasketsRef = db.collection('userBasket');
  }

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
    
    if (user && basketArray[0] !== undefined) {
      userBasketsRef.doc(user.uid).set({
        uid: user.uid,
        basketArray,
      });
    }
  }, [basketArray]);
  return (
    <div className="basket">
      <div className="total-container">
        <div className="top-basket-container"></div>

        <div className="bottom-basket-container">
          <h2>My Shopping Basket</h2>
          <div className="basket-item-container">
            {basketArray.length > 0
              ? basketArray.map((item: BasketItem, index: number) => (
                  <div key={uniqid()} className="basket-item">
                    <img src={item.img[0]} alt={item.alt} />
                    <Link to={`/product/${item.id}`}>{item.name}</Link>
                    <p className="basket-item-price">{item.price}</p>
                    <div className="quantity-container">
                      <button
                        onClick={() =>
                          item.quantity > 1 ? updateQuantity('-', index) : null
                        }
                      >
                        -
                      </button>
                      <span>{item.quantity}</span>
                      <button onClick={() => updateQuantity('+', index)}>
                        +
                      </button>
                    </div>
                    <button
                      className="basket-delete"
                      onClick={() => deleteItem(item.name, index)}
                    >
                      Delete
                    </button>
                  </div>
                ))
              : null}
          </div>
        </div>
        <TotalAmount basketArray={basketArray} />
        <Footer />
      </div>
    </div>
  );
}

export default Basket;
