import React, { useEffect } from 'react';
import TotalAmount from './TotalAmount';
import uniqid from 'uniqid';

function Basket(props) {
  const { leaveHome, basketArray, setBasketArray } = props;
  useEffect(() => {
    leaveHome();
  }, []);

  const updateQuantity = (negOrPos, name) => {
    const index = basketArray.findIndex((item) => item.name === name);
    let newArray = basketArray;
    if (negOrPos === '+') {
      newArray[index].quantity = newArray[index].quantity + 1;
    } else newArray[index].quantity = newArray[index].quantity - 1;

    setBasketArray([...newArray]);
  };

  const deleteItem = (name) => {
    const index = basketArray.findIndex((item) => item.name === name);
    let newArray = basketArray;
    newArray.splice(index, 1);
    setBasketArray([...newArray]);
  };
  return (
    <div className="basket">
      <div className="total-container">
        <div className="top-basket-container"></div>

        <div className="bottom-basket-container">
          <h2>My Shopping Cart</h2>
          <div className="basket-item-container">
            {basketArray.map((item) => (
              <div key={uniqid()} className="basket-item">
                <img src={item.img} alt={item.alt} />
                <h3>{item.name}</h3>
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
            ))}
          </div>
          <TotalAmount basketArray={basketArray}/>
        </div>
      </div>
    </div>
  );
}

export default Basket;
