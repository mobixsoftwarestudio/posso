import React from 'react';

export const useAuth = (isAuthenticated: boolean) => {
  const [authenticated, setAuthenticated] = React.useState(isAuthenticated);

  const handleAuthentication = () => {
    setAuthenticated(true);
  }

  const handleLogout = () => {
    setAuthenticated(false);
  }

  return ({ authenticated, handleAuthentication, handleLogout });
}
