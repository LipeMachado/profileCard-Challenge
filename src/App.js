import React from 'react';
import { GlobalStyle } from './globalStyled.jsx';

import { BrowserRouter as Router} from 'react-router-dom';
import Routes from './routes';

export function App() {
  return (
    <Router>
      <GlobalStyle />
      <Routes />
    </Router>
  );
}