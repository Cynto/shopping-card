import React, {useState} from 'react'
import Homepage from './components/Homepage';
import Nav from './components/Nav'
import Footer from './components/Footer'
import { HashRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  const [navColor, setNavColor] = useState({ color: 'white' });
  const [underlineClass, setUnderlineClass] = useState('white-underline');
  const [borderClass, setBorderClass] = useState('no-border');

  const openShop = () => {
    setNavColor({color: '#1f1f1f'})
    setUnderlineClass('black-underline')
    setBorderClass('bottom-border')
  }
  return (
    <Router>
      <div className="App">
        <Nav navColor={navColor} setNavColor={setNavColor} setUnderlineClass={setUnderlineClass} setBorderClass={setBorderClass} underlineClass={underlineClass} borderClass={borderClass} openShop={openShop}/>
        <Switch>
          <Route exact path="/" render={() => <Homepage openShop={openShop} />} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
