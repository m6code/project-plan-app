import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import NavBar from './layout/NavBar';
import DashBoard from './dashboard/DashBoard';
import ProjectDetails from './projects/ProjectDetails';

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/" component={DashBoard} />
        <Route path="/project/:id" component={ProjectDetails} />
      </Switch>
    </Router>
  );
}

export default App;
