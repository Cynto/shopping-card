import Homepage from './components/Homepage';
import Nav from './components/Nav'
import { HashRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route exact path="/" render={() => <Homepage />} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
