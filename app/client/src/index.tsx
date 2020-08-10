import React from 'react';
import ReactDOM from 'react-dom';
import { createGlobalStyle } from 'styled-components';
import { defaultStyle } from '@app/assets/styles/default';
import { BrowserRouter as Router } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import { routes } from './config/route';
import { configureStore } from './config/store';
import { Provider } from 'react-redux';

const GlobalStyle = createGlobalStyle`
  ${defaultStyle}
`;

const store = configureStore();

ReactDOM.render(
  <React.Fragment>
    <GlobalStyle />
    <Provider store={store}>
      <Router>{renderRoutes(routes)}</Router>
    </Provider>
  </React.Fragment>,
  document.getElementById('root')
);
