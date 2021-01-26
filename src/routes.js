import { Switch, Route } from 'react-router-dom';
import React from 'react';

import MainPage from './pages/MainPage';

function Routes() {
  return (
    <Switch>
      <Route path="/" component={MainPage} />;
    </Switch>
  );
}

export default Routes;
