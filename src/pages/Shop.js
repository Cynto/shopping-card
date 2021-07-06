import React, { useState, useEffect } from 'react';
import ShopNav from '../components/ShopNav';
import AllItems from '../components/AllItems';
import Cases from '../components/Cases';
import styles from '../css/Shop.css'
import { Switch, Route } from 'react-router-dom';
import uniqid from 'uniqid';

function Shop(props) {
  
  const [category, setCategory] = useState('All Products');
  
  useEffect(() => {
    props.leaveHome();
    setCategory('All Products');
  }, []);
  return (
    <div className="shop">
      <div className="total-container">
        <div className="top-shop-container"></div>
        <div className="bottom-shop-container">
          <div className="left-shop-container">
            <h3>
              Shop / <br /> <p>{category}</p>
            </h3>
            <ShopNav setCategory={setCategory} />
          </div>
          <div className="shop-items-container">
            <Switch>
              <Route exact path="/shop/">
                <AllItems totalArray={props.totalArray} setCategory={setCategory} />
              </Route>
              <Route path="/shop/cases">
                <Cases setCategory={setCategory} />
              </Route>
            </Switch>
          </div>
        </div>
        <Switch>
          
        </Switch>
      </div>
    </div>
  );
}

export default Shop;
