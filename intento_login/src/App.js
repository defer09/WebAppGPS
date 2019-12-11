
import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Home from './Components/Pages/Public/Home/Home';
import Login from './Components/Pages/Public/Login/Login';
import Signin from './Components/Pages/Public/Signin/Signin';

import Dashboard from './Components/Pages/Private/Dashboard/Dashboard';
import NavBar from './Components/Common/NavBar/NavBar';

function App() {

  return (
    <Router>
      <Route path="/Home" exact component={Home} />
      <Route path="/Login" component={Login} />
      <Route path="/Dashboard" component={Dashboard} />
      <NavBar />
    </Router>

  );
}

export default App;
