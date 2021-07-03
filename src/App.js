import React, { useState, useEffect } from 'react';
import Homepage from './components/Homepage';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Basket from './components/Basket';
import Shop from './components/Shop';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  const [navColor, setNavColor] = useState({ color: 'white' });
  const [underlineClass, setUnderlineClass] = useState('white-underline');
  const [borderClass, setBorderClass] = useState('no-border');
  const [basketArray, setBasketArray] = useState([
    {
      name: 'AMD CPU',
      img:
        'https://infonetonline.org/wp-content/uploads/2021/02/0821-000-5580.jpg',
      price: 49.99,
      quantity: 1,
      alt: 'AMD CPU',
    },
    {
      name: 'AMD CPU2',
      img:
        'https://infonetonline.org/wp-content/uploads/2021/02/0821-000-5580.jpg',
      price: 49.99,
      quantity: 1,
      alt: 'AMD CPU',
    },
  ]);

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
            <Shop leaveHome={leaveHome} />
          </Route>
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
