import React, { useState, useEffect } from 'react';
import Homepage from './pages/Homepage';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Basket from './pages/Basket';
import Shop from './pages/Shop';
import Product from './pages/Product';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  const [navColor, setNavColor] = useState({ color: 'white' });
  const [underlineClass, setUnderlineClass] = useState('white-underline');
  const [borderClass, setBorderClass] = useState('no-border');
  const [basketArray, setBasketArray] = useState([]);

  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });
  const casesArray = [];
  const processorsArray = [
    {
      name: 'AMD CPU',
      img:
        'https://infonetonline.org/wp-content/uploads/2021/02/0821-000-5580.jpg',
      price: formatter.format(49.9),
      quantity: 1,
      alt: 'AMD CPU',
      id: 'AMD-CPU-1',
    },
    {
      name: 'AMD CPU3',
      img:
        'https://infonetonline.org/wp-content/uploads/2021/02/0821-000-5580.jpg',
      price: formatter.format(49.8),
      quantity: 1,
      alt: 'AMD CPU 3',
      id: 'AMD-CPU-3',
    },
    {
      name: 'AMD CPU2',
      img:
        'https://infonetonline.org/wp-content/uploads/2021/02/0821-000-5580.jpg',
      price: formatter.format(49.8),
      quantity: 1,
      alt: 'AMD CPU2',
      id: 'AMD-CPU-2',
    },
  ];
  const totalArray = casesArray.concat(processorsArray);

  const leaveHome = () => {
    setNavColor({ color: '#1f1f1f' });
    setUnderlineClass('black-underline');
    setBorderClass('bottom-border');
  };
  const openHome = () => {
    setNavColor({ color: 'white' });
    setBorderClass('no-border');
    setUnderlineClass('white-underline');
  };
  return (
    <Router>
      <div className="App">
        <Nav
          navColor={navColor}
          setNavColor={setNavColor}
          setUnderlineClass={setUnderlineClass}
          setBorderClass={setBorderClass}
          underlineClass={underlineClass}
          borderClass={borderClass}
          leaveHome={leaveHome}
        />
        <Switch>
          <Route exact path="/">
            <Homepage openHome={openHome} leaveHome={leaveHome} />
          </Route>

          <Route path="/shop">
            <Shop totalArray={totalArray} leaveHome={leaveHome} />
          </Route>
          {totalArray.map((item) => (
            <Route key={item.id} path={`/product/${item.id}`}>
              <Product leaveHome={leaveHome} />
            </Route>
          ))}
          <Route path="/basket">
            <Basket
              basketArray={basketArray}
              setBasketArray={setBasketArray}
              leaveHome={leaveHome}
            />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
