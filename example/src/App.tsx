import React from 'react'

import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { PossoProvider, PossoRoute } from 'posso';
import Home from './screens/Home';
import About from './screens/About';
import Contact from './screens/Contact';
import Login from './screens/Login';

const App = () => {
  const permissionsOfApp = ['page/home'];
  const isAuthenticated = sessionStorage.getItem('exampleToken');

  const NotAllowedComponent = () => {
    return (
      <div>
        <h2>Not allowed page.</h2>
      </div>
    )
  }

  return (
    <PossoProvider permissions={permissionsOfApp} isAuthenticated={isAuthenticated !== null} notAuthenticatedRedirect={<Redirect to="/" />}>
      <BrowserRouter>
        <Switch>
          <Route exact path={'/'} component={Login} />
          <PossoRoute exact path={'/home'} component={Home} permissions={['page/home']} />
          <PossoRoute exact path={'/about'} component={About} permissions={['page/about']} notAllowedComponent={<NotAllowedComponent />} />
          <PossoRoute exact path={'/contact'} component={Contact} permissions={['page/contact']} />
        </Switch>
      </BrowserRouter>
    </PossoProvider>
  )
}

export default App;
