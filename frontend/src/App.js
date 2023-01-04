import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Admin from './pages/Admin';
import HomePage from './pages/HomePage';

import Shell from './Shell';

const App = () => {
  return (
    <BrowserRouter>
      <Shell>
        <Switch>
          <Route
            exact
            path="/"
            render={() => <HomePage />}
          />
          <Route
            exact
            path="/admin/:action"
            render={() => <Admin />}
          />
        </Switch>
      </Shell>
    </BrowserRouter>
  );
};

export default App;