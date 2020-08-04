import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import NavBar from './layout/NavBar';
import DashBoard from './dashboard/DashBoard';

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path="/" component={DashBoard} />
      </Switch>
    </Router>
  );
}

export default App;
