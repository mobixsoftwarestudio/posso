import React from 'react';

export const usePermissions = (initialPermissions: string[]) => {
  const [permissions, setPermissions] = React.useState(initialPermissions);

  return ({ permissions, setPermissions });
}
