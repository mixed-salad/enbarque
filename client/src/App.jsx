import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import React, { useState } from 'react';
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
  const [user, setUser] = useState(null);

  function handleUserChange(user) {
    setUser(user);
  }
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route
            exact
            path="/dashboard"
            render={(props) => (
              <Dashboard
                user={user}
                {...props}
                onUserChange={handleUserChange}
              />
            )}
          />
          <Route exact path="/user/team" component={Employees} />
          <Route exact path="/onboarding" component={Onboarding} />
          <Route exact path="/corp/settings" component={OrgSettings} />
          <Route exact path="/corp/user/:id" component={Account} />
          <Route
            exact
            path="/auth/signup"
            render={(props) => (
              <SignUp {...props} onUserChange={handleUserChange} />
            )}
          />
          <Route
            exact
            path="/auth/login"
            render={(props) => (
              <LogIn {...props} onUserChange={handleUserChange} />
            )}
          />
          <Route exact path="/task/create" component={CreateTask} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
