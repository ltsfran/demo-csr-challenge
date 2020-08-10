import React from 'react';
import { renderRoutes } from 'react-router-config';

export const App: React.FC<any> = ({ route }) => (
  <React.Fragment>{renderRoutes(route.routes)}</React.Fragment>
);

App.displayName = 'App';