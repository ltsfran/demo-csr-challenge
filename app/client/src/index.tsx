import React from 'react';
import ReactDOM from 'react-dom';
import { createGlobalStyle } from 'styled-components';
import { defaultStyle } from '@app/assets/styles/default';

const GlobalStyle = createGlobalStyle`
  ${defaultStyle}
`;

ReactDOM.render(
  <React.Fragment>
    <GlobalStyle />
    <div>Hola mundo</div>
  </React.Fragment>,
  document.getElementById('root')
);
