// NOT AUTHENTICATED STRATEGY

// RECEIVE IF IT'S AUTHENTICATED

//

import React from 'react';
import { useAuth } from '../hooks/useAuth';
import { PossoProviderProps } from '../types';

type handleAuthenticationProps = {
  handleAuthentication: () => void
  handleLogout: () => void
}

type ContextProps = PossoProviderProps & handleAuthenticationProps;


export const PossoContext = React.createContext<ContextProps>({
  permissions: [''],
} as ContextProps);

export const PossoProvider: React.FC<PossoProviderProps> = ({
  children,
  isAuthenticated,
  ...rest
}) => {

  const { authenticated, handleAuthentication, handleLogout } = useAuth(!!isAuthenticated);

  return (
    <PossoContext.Provider value={{
      ...rest,
      isAuthenticated: authenticated,
      handleAuthentication,
      handleLogout
    }}>
      {children}
    </PossoContext.Provider>
  )
};

export default PossoProvider;
