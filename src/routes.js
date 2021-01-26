import { Switch, Route } from 'react-router-dom';
import React from 'react';

import MainPage from './Pages/MainPage';

function Routes() {
  return (
    <Switch>
      <Route path="/" component={MainPage} />;
    </Switch>
  );
}

export default Routes;
