import React from 'react'

import { Switch, Redirect } from 'react-router-dom';
import { PossoProvider, PossoRoute } from 'posso';
import Home from '../screens/Home';
import About from '../screens/About';
import Contact from '../screens/Contact';
import Login from '../screens/Login';
import ForgotPassword from '../screens/ForgotPassword';


const Routes = () => {
  const permissionsOfApp = ['page/home'];
  const isAuthenticated = React.useCallback(() => localStorage.getItem('exampleToken') !== null, []);
  const NotAllowedComponent = () => {
    return (
      <div>
        <h2>Not allowed page.</h2>
      </div>
    )
  }


  return (
      <PossoProvider permissions={permissionsOfApp} isAuthenticated={isAuthenticated()} notAuthenticatedRedirect={<Redirect to="/" />} authenticatedRedirect="/home">
        <Switch>
          <PossoRoute exact path={'/'} component={Login} />
          <PossoRoute exact path={'/forgot-password'} render={() => <ForgotPassword />} />
          <PossoRoute isPrivate exact path={'/home'} component={Home} permissions={['page/home']} />
          <PossoRoute isPrivate exact path={'/about'} component={About} permissions={['page/about']} notAllowedComponent={<NotAllowedComponent />} />
          <PossoRoute isPrivate exact path={'/contact'} component={Contact} permissions={['page/contact']} />
        </Switch>
    </PossoProvider>
  )
}

export default Routes;
