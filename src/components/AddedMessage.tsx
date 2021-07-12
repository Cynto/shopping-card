import React from 'react';
import { Link } from 'react-router-dom';


function AddedMessage(props: any) {
  return (
    <div className="added-message-container">
      <div className="main-message-container">
        <h3>Successfully Added Item To Basket!</h3>
        <Link to="/basket">
          <button>Go To Basket</button>
        </Link>
      </div>
      <button
        className="exit-button"
        onClick={() => {
          props.setAddedToCart(false);
          props.setBlurStyle({});
        }}
      >
        X
      </button>
    </div>
  );
}

export default AddedMessage;
