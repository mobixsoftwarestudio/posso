type AuthorizationStrategy<P, R> = (permissions: P, requirement: R) => any;

type Permissions = {
  permissions: Array<string>;
  authorizationStrategy?: AuthorizationStrategy<any, any>;
};

type PossoProviderProps = Permissions & {
  isAuthenticated?: boolean;
  notAuthenticatedRedirect?: JSX.Element;
  authenticatedRedirect?: string;
};

type PossoRouteProps = {
  isPrivate: true;
  notAllowedComponent?: JSX.Element;
  permissions?: Array<string>;
  authorizationStrategy?: AuthorizationStrategy<any, any>;
};

export {
  Permissions,
  PossoProviderProps,
  AuthorizationStrategy,
  PossoRouteProps,
};
