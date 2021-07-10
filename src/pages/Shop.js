import React, { useState, useEffect } from 'react';
import ShopNav from '../components/ShopNav';
import AllItems from '../components/AllItems';
import Cases from '../components/Cases';
import Processors from '../components/Processors';
import Memory from '../components/Memory';
import '../css/Shop.css';
import { Switch, Route } from 'react-router-dom';

import Motherboards from '../components/Motherboards';
import GraphicsCards from '../components/GraphicsCards';
import Footer from '../components/Footer';

function Shop(props) {
  const [category, setCategory] = useState('All Products');
  const {
    leaveHome,
    totalArray,
    casesArray,
    processorsArray,
    memoryArray,
    motherboardsArray,
    gpuArray,
  } = props;
  useEffect(() => {
    leaveHome();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="shop">
      <div className="total-container">
        <div className="top-shop-container"></div>
        <div className="bottom-shop-container">
          <div className="left-shop-container">
            <div className="category-container">
              <h3>
                Shop / <br /> <p>{category}</p>
              </h3>
            </div>
            <ShopNav setCategory={setCategory} />
          </div>
          <div className="shop-items-container">
            <Switch>
              <Route exact path="/shop/">
                <AllItems totalArray={totalArray} setCategory={setCategory} />
              </Route>
              <Route path="/shop/cases">
                <Cases casesArray={casesArray} setCategory={setCategory} />
              </Route>
              <Route path="/shop/processors">
                <Processors
                  setCategory={setCategory}
                  processorsArray={processorsArray}
                />
              </Route>
              <Route path="/shop/motherboards">
                <Motherboards
                  setCategory={setCategory}
                  motherboardsArray={motherboardsArray}
                />
              </Route>
              <Route path="/shop/graphics-cards">
                <GraphicsCards setCategory={setCategory} gpuArray={gpuArray} />
              </Route>
              <Route path="/shop/memory">
                <Memory setCategory={setCategory} memoryArray={memoryArray} />
              </Route>
            </Switch>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Shop;
