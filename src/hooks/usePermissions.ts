import React from 'react';

export const usePermissions = (permissionsInitiated: string[]) => {
  const [permissions, setPermissions] = React.useState(permissionsInitiated);

  const handlePermissions = (permissions: string[]) => {
    setPermissions(permissions);
  }

  return ({ permissions, handlePermissions });
}
