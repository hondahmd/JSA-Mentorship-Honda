import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { hot } from 'react-hot-loader/root';

import MainPage from './components/MainPage/MainPage';
import DashBoard from './containers/DashBoard/DashBoard';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/dashboard">
            <DashBoard />
          </Route>
          <Route path="/">
            <MainPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default process.env.NODE_ENV === 'development' ? hot(App) : App;
