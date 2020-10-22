type AuthorizationStrategy<P, R> = (permissions: P, requirement: R) => any;

type Permissions = {
  permissions: Array<string>;
  authorizationStrategy?: AuthorizationStrategy<any, any>;
};

type PossoProviderProps = Permissions;

export { Permissions, PossoProviderProps, AuthorizationStrategy };
