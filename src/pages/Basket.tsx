import React, { useEffect} from 'react';
import TotalAmount from '../components/TotalAmount';
import uniqid from 'uniqid';
import '../css/Basket.css';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {updateQuantityA, removeItem} from '../actions/index'


function Basket(props: any) {
  const { leaveHome} = props;
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
    quantity: number
  }
  const basketArray = useSelector((state: any) => state.basketArray);
  
  
  
  const updateQuantity = (negOrPos: string, name: string) => {
    const index = basketArray.findIndex((item: BasketItem) => item.name === name);
    const payloadObject: {index: number, negOrPos: string} = {index, negOrPos}
    dispatch(updateQuantityA(payloadObject))
  };

  const deleteItem = (name: string) => {
    const index = basketArray.findIndex((item: BasketItem) => item.name === name);
    dispatch(removeItem(index))
  };
  return (
    <div className="basket">
      <div className="total-container">
        <div className="top-basket-container"></div>

        <div className="bottom-basket-container">
          <h2>My Shopping Basket</h2>
          <div className="basket-item-container">
            {(basketArray.length > 0) ? basketArray.map((item: BasketItem) => (
              <div key={uniqid()} className="basket-item">
                <img src={item.img[0]} alt={item.alt} />
                <Link to={`/product/${item.id}`}>{item.name}</Link>
                <p className="basket-item-price">{item.price}</p>
                <div className="quantity-container">
                  <button
                    onClick={() =>
                      item.quantity > 1 ? updateQuantity('-', item.name) : null
                    }
                  >
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button onClick={() => updateQuantity('+', item.name)}>
                    +
                  </button>
                </div>
                <button
                  className="basket-delete"
                  onClick={() => deleteItem(item.name)}
                >
                  Delete
                </button>
              </div>
            )) : null }
          </div>
        </div>
        <TotalAmount basketArray={basketArray} />
        <Footer />
      </div>
    </div>
  );
}

export default Basket;
