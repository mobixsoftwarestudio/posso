import React from 'react'

import { BrowserRouter, Switch } from 'react-router-dom';
import { PossoProvider, PossoRoutes } from 'posso';
import Home from './screens/Home';
import About from './screens/About';

const App = () => {
  const permissionsOfApp = ['page/about', 'page/home'];

  return (
    <PossoProvider permissions={permissionsOfApp}>
      <BrowserRouter>
        <Switch>
          <PossoRoutes exact path={'/home'} component={Home} permissions={['page/home']} />
          <PossoRoutes exact path={'/about'} component={About} permissions={['page/about']} />
        </Switch>
      </BrowserRouter>
    </PossoProvider>
  )
}

export default App;
