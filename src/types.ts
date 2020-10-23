type AuthorizationStrategy<P, R> = (permissions: P, requirement: R) => any;

type Permissions = {
  permissions: Array<string>;
  authorizationStrategy?: AuthorizationStrategy<any, any>;
};

type PossoProviderProps = Permissions & {
  isAuthenticated?: boolean;
  notAuthenticatedRedirect?: JSX.Element;
};

type PossoRouteProps = {
  notAllowedComponent?: JSX.Element;
};

export {
  Permissions,
  PossoProviderProps,
  AuthorizationStrategy,
  PossoRouteProps,
};
