import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

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

export default App;
