import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import React from 'react';
import './App.scss';
import Navbar from './components/Navbar/Navbar';
import Dashboard from './views/Dashboard';
import Onboarding from './views/Onboarding';
import Employees from './views/Employees';
import OrgSettings from './views/OrgSettings';
import Account from './views/Account';
import SignUp from './views/SignUp';
import LogIn from './views/LogIn';
import CreateTask from './views/CreateTask';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/user/team" component={Employees} />
          <Route exact path="/onboarding" component={Onboarding} />
          <Route exact path="/corp/settings" component={OrgSettings} />
          <Route exact path="/corp/user/:id" component={Account} />
          <Route exact path="/auth/signup" component={SignUp} />
          <Route exact path="/auth/login" component={LogIn} />
          <Route exact path="/task/create" component={CreateTask} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
