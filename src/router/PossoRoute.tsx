/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Redirect, Route, RouteComponentProps, RouteProps } from 'react-router-dom';
import { useAuthorize } from '../hooks/useAuthorize';
import { usePosso } from '../hooks/usePosso';
import { PossoRouteProps } from '../types';

const DefaultNotAllowedPage = () => {
  return (
    <div>
      <h2>You're not allowed to see this page.</h2>
    </div>
  );
};

type Props = RouteProps & PossoRouteProps;

export const PossoRoute: React.FC<Props> = ({
  path,
  exact,
  render,
  component: Component,
  permissions = [],
  authorizationStrategy,
  notAllowedComponent,
  isPrivate,
  redirectWhenAthenticated = true,
}) => {
  const isAuthorized = useAuthorize(permissions, authorizationStrategy);
  const {
    isAuthenticated,
    notAuthenticatedRedirect: redirect,
    authenticatedRedirect,
  } = usePosso();

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

    return render?.(props);
  };

  const handleAuthenticationRedirect = (
    props: RouteComponentProps<any, any, unknown>,
  ) => {
      return (
        <Redirect to={{
            pathname: authenticatedRedirect,
            state: { from: props.location },
          }}
        />
      )
  }

  const handleNotAuthenticatedRedirect = (
    props: RouteComponentProps<any, any, unknown>, pathname: string,
  ) => {
      return (
        <Redirect to={{
            pathname,
            state: { from: props.location },
          }}
        />
      )
  }

  const handleCheckAuthorization = (
    props: RouteComponentProps<any, any, unknown>,
  ) => {
    if (isAuthenticated) {
      if (!isAuthorized && isPrivate) {
        return handleNotAuthorized();
      }

      if(!isPrivate  && redirectWhenAthenticated) {
        return handleAuthenticationRedirect(props);
      }

      return handleRenderComponent(props);
    }

    if (!isPrivate) {
      return handleRenderComponent(props);
    }

    if (typeof redirect === 'string') {
      return handleNotAuthenticatedRedirect(props, redirect);
    }

    return redirect;
  };

  return <Route exact={exact} path={path} render={handleCheckAuthorization} />;
};
