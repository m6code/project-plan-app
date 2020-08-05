import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import NavBar from './layout/NavBar';
import DashBoard from './dashboard/DashBoard';
import ProjectDetails from './projects/ProjectDetails';
import SignIn from './auth/SignIn';
import SignUp from './auth/SignUp';

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/" component={DashBoard} />
        <Route path="/project/:id" component={ProjectDetails} />
        <Route path="/sign-in" component={SignIn} />
        <Route path="/sign-up" component={SignUp} />
      </Switch>
    </Router>
  );
}

export default App;
