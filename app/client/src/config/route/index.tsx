import React from 'react';
import { App } from '@app/client/src/views';
import { Login } from '@app/client/src/views/Login';
import { CreateItem } from '@app/client/src/views/CreateItem';

const NotFound: React.FC = () => (
  <React.Fragment>NotFound</React.Fragment>
);

NotFound.displayName = 'NotFound';

export const routes = [
  {
    component: App,
    routes: [
      {
        path: '/',
        component: Login,
        exact: true
      },
      {
        path: '/createitem',
        component: CreateItem,
        exact: true
      },
      {
        path: '*',
        component: NotFound
      }
    ]
  }
];
