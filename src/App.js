import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Routes from './routes';
import Header from './components/Header';
import New from './components/New';

function App(){
  return (
    <BrowserRouter>
     <Header/>
     <New/>
     <h1>ToDo</h1>
     <Routes/>
     <h2>Done</h2>
     
    </BrowserRouter>
  );
}

export default App;
