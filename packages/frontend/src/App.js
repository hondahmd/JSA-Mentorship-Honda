import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { hot } from 'react-hot-loader/root';

import MainPage from './components/MainPage/MainPage';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <MainPage />
          </Route>
          {/* dashborad */}
        </Switch>
      </Router>
    </div>
  );
}

export default process.env.NODE_ENV === 'development' ? hot(App) : App;
