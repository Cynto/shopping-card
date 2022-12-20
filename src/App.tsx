import React, { useState, useEffect } from 'react';
import firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import Homepage from './pages/Homepage';
import Nav from './components/Nav';

import Basket from './pages/Basket';
import Shop from './pages/Shop';
import Product from './pages/Product';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getLocal } from './actions/index';

function App() {
  const [navColor, setNavColor] = useState({ color: 'white' });
  const [underlineClass, setUnderlineClass] = useState('white-underline');
  const [borderClass, setBorderClass] = useState<string>('no-border');

  const dispatch = useDispatch();
  const basketArray = useSelector((state: any) => state.basketArray);
  useEffect(() => {
    if (localStorage.getItem('basketArray') !== null) {
      let basketArrayLocal: any = localStorage.getItem('basketArray');
      basketArrayLocal = JSON.parse(basketArrayLocal);

      dispatch(getLocal(basketArrayLocal));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    localStorage.setItem('basketArray', JSON.stringify(basketArray));
  }, [basketArray]);

  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });

  interface ShopItem {
    name: string;
    img: string[];
    alt: string;
    price: string;
    id: string;
  }
  const casesArray: ShopItem[] = [
    {
      name: 'Phanteks Enthoo Primo',
      img: [
        'https://phanteks.com/images/product/Enthoo-Primo/Black/Primo-1z.jpg',
        'https://phanteks.com/images/product/Enthoo-Primo/Black/Primo-6z.jpg',
      ],

      alt: 'Enthoo Primo PC Case',
      price: formatter.format(120),
      id: 'PHANTEKS-ENTHOO-PRIMO',
    },
    {
      name: 'Corsair iCUE 4000X RGB',
      img: [
        'https://www.corsair.com/medias/sys_master/images/images/h1f/hcf/9584653860894/base-4000x-rgb-config/Gallery/4000X_BLACK_01/-base-4000x-rgb-config-Gallery-4000X-BLACK-01.png_515Wx515H',
        'https://cwsmgmt.corsair.com/pdp/4000-series/corsair-4000x/images/all-the-storage-comp-mobile.png',
      ],
      alt: 'Corsair PC Case',
      price: formatter.format(129.99),
      id: 'CORSAIR-4000X-RGB',
    },
  ];
  const processorsArray: ShopItem[] = [
    {
      name: 'AMD Ryzen CPU',
      img: [
        'https://infonetonline.org/wp-content/uploads/2021/12/0821-000-5580-1.jpg',
        'https://m.media-amazon.com/images/I/61d5eSkfnpL._AC_SS450_.jpg',
      ],
      price: formatter.format(499.9),
      alt: 'AMD Ryzen CPU',
      id: 'AMD-RYZEN-CPU-1',
    },
    {
      name: 'Intel i9 CPU',
      img: [
        'https://m.media-amazon.com/images/I/61oiLbWvC-L.jpg',
        'https://images-na.ssl-images-amazon.com/images/I/81eoV5SY8RL._AC_SY450_.jpg',
      ],
      price: formatter.format(659.41),
      alt: 'Intel i9 CPU',
      id: 'Intel-i9-CPU',
    },
  ];
  const motherboardsArray: ShopItem[] = [
    {
      name: 'Gigabyte Ga-B365M-D3H Motherboard',
      img: [
        'https://images-na.ssl-images-amazon.com/images/I/71cb2RG0hmL._AC_SY450_.jpg',
        'https://www.gigabyte.com/FileUpload/Global/KeyFeature/1146/images/spec-small.png',
      ],
      price: formatter.format(120),
      alt: 'Gigabyte motherboard',
      id: 'GIGABYTE-GA-B365M-MOTHERBOARD',
    },
    {
      name: 'ASUS B450 Gaming Motherboard',
      img: [
        'https://images-na.ssl-images-amazon.com/images/I/91buE992yIL._AC_SX466_.jpg',
        'https://dlcdnwebimgs.asus.com/gain/6BDDB156-FB29-4D59-A48D-5D386A90D579/w717/h525',
      ],
      price: formatter.format(125.99),
      alt: 'ASUS Motherboard',
      id: 'ASUS-B450-MOTHERBOARD',
    },
  ];
  const memoryArray: ShopItem[] = [
    {
      name: 'Corsair High Performance 16GB RAM',
      img: [
        'https://images-na.ssl-images-amazon.com/images/I/61xASlWV%2BEL._AC_SL1000_.jpg',
        'https://images-na.ssl-images-amazon.com/images/I/51kHiPeTSmL._AC_SX466_.jpg',
      ],
      price: formatter.format(99.99),
      alt: 'Corsair RAM',
      id: 'CORSAIR-16GB-RAM',
    },
    {
      name: 'G.SKILL Trident 16GB RAM',
      img: [
        'https://d3fa68hw0m2vcc.cloudfront.net/4ad/173596822.jpeg',
        'https://d3fa68hw0m2vcc.cloudfront.net/6ad/173596843.jpeg',
      ],
      price: formatter.format(89.99),
      alt: 'GSKILL RAM',
      id: 'GSKILL-16GB-RAM',
    },
  ];
  const gpuArray: ShopItem[] = [
    {
      name: 'Nvidia RTX 3090 Graphics Card',
      img: [
        'https://images-na.ssl-images-amazon.com/images/I/61wbV8oqAbL._AC_SL1500_.jpg',
        'https://images.stockx.com/images/NVIDIA-GeForce-RTX-3090-Graphics-Card--Founders-Edition-Black.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&q=90&dpr=2&trim=color&updated_at=1606323410',
      ],
      price: formatter.format(999.99),
      alt: 'Nvidia GPU',
      id: 'NVIDIA-3090-GPU',
    },
    {
      name: 'AMD Radeon RX 6900 XT Graphics Card',
      img: [
        'https://images-na.ssl-images-amazon.com/images/I/81U5H5c0jyL._AC_SL1500_.jpg',
        'https://images.stockx.com/images/AMD-Radeon-RX6900-XT-Graphics-Cards.png?fit=clip&bg=FFFFFF&w=1140&h=500&auto=compress&q=90&dpr=2&trim=color&updated_at=1607624156&fm=jpg&ixlib=react-9.1.5',
      ],
      price: formatter.format(699.99),
      alt: 'AMD GPU',
      id: 'AMD-RADEON-6900-GPU',
    },
  ];
  const totalArray = casesArray.concat(
    processorsArray,
    motherboardsArray,
    gpuArray,
    memoryArray,
  );
  const auth = firebase.auth();
  const db = firebase.firestore();
  let userBasketsRef: any;
  let usersRef: any;
  let unsubscribe;
  const [user] = useAuthState(auth);

  if (user) {
    userBasketsRef = db.collection('userBasket');
    usersRef = db.collection('users');
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
      const { serverTimestamp } = firebase.firestore.FieldValue;
      const userRef = db.collection('users').doc(user.uid);
      userRef.get().then((docSnapshot) => {
        if (!docSnapshot.exists) {
          usersRef.doc(user.uid).set({
            uid: user.uid,
            name: user.displayName,
            createdAt: serverTimestamp(),
          });
        }
      });
    }
  }, [user]);
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
  const shopProps = {
    casesArray,
    processorsArray,
    memoryArray,
    motherboardsArray,
    gpuArray,
    totalArray,
    leaveHome,
  };
  const productProps = {
    leaveHome,
    basketArray,
    index: 0,
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
            <Shop {...shopProps} />
          </Route>
          {totalArray.map((currentProduct, index) => {
            productProps.index = index;
            return (
              <Route
                key={currentProduct.id}
                path={`/product/${currentProduct.id}`}
              >
                <Product currentProduct={currentProduct} {...productProps} />
              </Route>
            );
          })}
          <Route path="/basket">
            <Basket basketArray={basketArray} leaveHome={leaveHome} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
