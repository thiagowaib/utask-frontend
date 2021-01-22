import { Switch, Route } from 'react-router-dom';
import React from 'react';

// -------------------------------------------------
// Importar a página (com o endereço/nome certo \o/)
// -------------------------------------------------
import Page from './Pages/Page.js';

function Routes() {
  // ----------------------------------------
  // Como "component={}" colocar o componente
  //      importado da página acima
  // ----------------------------------------
  return <Route path="/" component={Page} />;
}

export default Routes;
