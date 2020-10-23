/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Route, RouteComponentProps, RouteProps } from 'react-router-dom';
import { useAuthorize } from '../hooks/useAuthorize';
import { usePermissions } from '../hooks/usePermissions';
import { Permissions, PossoRouteProps } from '../types';

const DefaultNotAllowedPage = () => {
  return (
    <div>
      <h2>You're not allowed to see this page.</h2>
    </div>
  );
};

type Props = RouteProps & Permissions & PossoRouteProps;

export const PossoRoute: React.FC<Props> = ({
  path,
  exact,
  render,
  component: Component,
  permissions,
  authorizationStrategy,
  notAllowedComponent,
}) => {
  const isAuthorized = useAuthorize(permissions, authorizationStrategy);
  const {
    isAuthenticated,
    notAuthenticatedRedirect: redirect,
  } = usePermissions();

  const handleNotAuthorized = () => {
    if (notAllowedComponent) {
      return notAllowedComponent;
    }

    return <DefaultNotAllowedPage />;
  };

  const handleRenderComponent = (
    props: RouteComponentProps<any, any, unknown>,
  ) => {
    if (Component) {
      return <Component {...props} />;
    }
    return render;
  };

  const handleCheckAuthorization = (
    props: RouteComponentProps<any, any, unknown>,
  ) => {
    if (isAuthenticated) {
      if (!isAuthorized) {
        return handleNotAuthorized();
      }

      return handleRenderComponent(props);
    }

    return redirect;
  };

  return <Route exact={exact} path={path} render={handleCheckAuthorization} />;
};
