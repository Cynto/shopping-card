import React, { useState, useEffect } from 'react';
import ShopNav from './ShopNav';
import AllItems from './AllItems'
import Cases from './Cases'
import { Switch, Route } from 'react-router-dom';


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
                <AllItems setCategory={setCategory}/>
              </Route>
              <Route path="/shop/cases">
                <Cases setCategory={setCategory}/>
              </Route>
            </Switch>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Shop;
