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
  const [currentProduct, setCurrentProduct] = useState({});

  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });
  const casesArray = [
    {
      name: 'Phanteks Enthoo Primo',
      img: [
        'https://phanteks.com/images/product/Enthoo-Primo/Black/Primo-1z.jpg',
        'https://phanteks.com/images/product/Enthoo-Primo/Black/Primo-6z.jpg',
      ],

      alt: 'Enthoo Primo PC Case',
      price: formatter.format(120),
      id: 'Phanteks-Enthoo-Primo',
    },
    {
      name: 'Corsair iCUE 4000X RGB',
      img: [
        'https://images-na.ssl-images-amazon.com/images/I/81MvIP9T0mL._AC_SL1500_.jpg', 
        'https://cwsmgmt.corsair.com/pdp/4000-series/corsair-4000x/images/all-the-storage-comp-mobile.png'
      ],
      alt: 'Corsair PC Case',
      price: formatter.format(129.99),
      id: 'Corsair-4000X-RGB'
    }
  ];
  const processorsArray = [
    {
      name: 'AMD Ryzen CPU',
      img: [
        'https://infonetonline.org/wp-content/uploads/2021/02/0821-000-5580.jpg',
        'https://m.media-amazon.com/images/I/61d5eSkfnpL._AC_SS450_.jpg',
      ],
      price: formatter.format(49.9),
      alt: 'AMD Ryzen CPU',
      id: 'AMD-RYZEN-CPU-1',
    },
    {
      name: 'Intel i9 CPU',
      img: [
        'https://www.zenick.it/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/0/1/01c43106-751a-4fa4-962b-28f6160c15fe.jpg',
        'https://images-na.ssl-images-amazon.com/images/I/81eoV5SY8RL._AC_SY450_.jpg',
      ],
      price: formatter.format(659.41),
      alt: 'AMD CPU 3',
      id: 'AMD-CPU-3',
    },
    
  ];
  const totalArray = casesArray.concat(processorsArray);

  useEffect(() => {
    console.log(currentProduct);
  }, [currentProduct]);
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
            <Shop
              casesArray={casesArray}
              processorsArray={processorsArray}
              totalArray={totalArray}
              setCurrentProduct={setCurrentProduct}
              leaveHome={leaveHome}
            />
          </Route>
          {totalArray.map((item) => (
            <Route key={item.id} path={`/product/${item.id}`}>
              <Product currentProduct={currentProduct} leaveHome={leaveHome} />
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
