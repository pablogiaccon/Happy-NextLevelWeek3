import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Landing from '../pages/Landing';
import OrphanagesMap from '../pages/OrphanagesMap';
import Orphanage from '../pages/Orphanage';
import CreateOrphanage from '../pages/CreateOrphanage';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route exact component={Landing} path="/" />
      <Route component={OrphanagesMap} path="/app" />

      <Route component={CreateOrphanage} path="/orphanages/create" />
      <Route component={Orphanage} path="/orphanages/:id" />
    </Switch>
  );
};

export default Routes;
