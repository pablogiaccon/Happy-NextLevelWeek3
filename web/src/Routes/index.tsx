import React from 'react';

import { Switch, Route } from 'react-router-dom';
import Landing from '../pages/Landing';
import OrphanagesMap from '../pages/OrphanagesMap';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route exact component={Landing} path="/" />
      <Route exact component={OrphanagesMap} path="/app" />
    </Switch>
  );
};

export default Routes;
