import React from 'react';
import {Switch, Route, Link} from 'react-router-dom';

import './App.css';

import Homepage from './pages/homepage/homepage.component';

const HatsPage = (props) => (
  <div>
    {/* <button onClick={() => props.history.push('/')}>Homepage</button> */}
    {/* <Link to='/'>Homepage</Link> */}
    <h1>HATS PAGE</h1>
    </div>
);

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route path='/hats' component={HatsPage} />
      </Switch>
    </div>
  );
}

export default App;
