/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Route, RouteProps } from 'react-router-dom';
import { useAuthorize } from '../hooks/useAuthorize';
import { Permissions } from '../types';

const NotAllowedPage = () => {
  return (
    <div>
      <h2>Você não está autorizado para usar esta página.</h2>
    </div>
  );
};

type Props = RouteProps & Permissions;

export const PossoRoutes: React.FC<Props> = ({
  path,
  exact,
  component,
  render,
  permissions,
  authorizationStrategy,
}) => {
  const isAuthorized = useAuthorize(permissions, authorizationStrategy);
  return (
    <Route
      exact={exact}
      path={path}
      component={isAuthorized ? component : NotAllowedPage}
      render={render}
    />
  );
};
