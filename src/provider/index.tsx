// NOT AUTHENTICATED STRATEGY

// RECEIVE IF IT'S AUTHENTICATED

//

import React from 'react';
import { useAuth } from '../hooks/useAuth';
import { usePermissions } from '../hooks/usePermissions';
import { PossoProviderProps } from '../types';

type handleAuthenticationProps = {
  handleAuthentication: () => void
  handleLogout: () => void
}

type setPermissionsProps = {
  setPermissions: (permissions: string[]) => void
}

type ContextProps = PossoProviderProps & handleAuthenticationProps & setPermissionsProps;

export const PossoContext = React.createContext<ContextProps>({
  permissions: [''],
  
} as ContextProps);

export const PossoProvider: React.FC<PossoProviderProps> = ({
  children,
  isAuthenticated,
  permissions,
  ...rest
}) => {
  const { authenticated, handleAuthentication, handleLogout } = useAuth(!!isAuthenticated);
  const { permissions: permissionsState, setPermissions } = usePermissions(permissions);

  return (
    <PossoContext.Provider value={{
      ...rest,
      isAuthenticated: authenticated,
      permissions: permissionsState,
      handleAuthentication,
      handleLogout,
      setPermissions,
    }}>
      {children}
    </PossoContext.Provider>
  )
};

export default PossoProvider;
