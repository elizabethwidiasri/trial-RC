import React from 'react';
import Home from './containers/Home'
import Detail from './containers/Detail'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'
import './App.css'

function App() {
  return (
    <Router>
      <div className="App">
        {/* <Link to="/">Home</Link> */}

        {/* <Link to="/detail">Detail</Link> */}

        <Switch>
          <Route path="/detail">
            <Detail /> 
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
