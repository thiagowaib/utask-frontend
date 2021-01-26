import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Routes from './routes';
import New from './components/New';

function App() {
  return (
    <BrowserRouter>
      <New />
      <Routes />
    </BrowserRouter>
  );
}

export default App;
