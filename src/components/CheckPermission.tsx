/**
 *
 * CheckPermission
 *
 */
import React from 'react';

type Props = {
  permissions: Array<string>;
  allPermissions: Array<string>;
  alternateView?: JSX.Element | null;
};

const Can: React.FC<Props> = ({ children, permissions, allPermissions, alternateView }) => (
  <React.Fragment>
    {allPermissions.find(state => permissions.includes(state)) ? (
      <React.Fragment>{children}</React.Fragment>
    ) : alternateView}
  </React.Fragment>
)

export const CheckPermission: React.FC<Props> = ({ children, permissions, allPermissions, alternateView = null }) => (
  <Can permissions={permissions} allPermissions={allPermissions} alternateView={alternateView}>
    {children}
  </Can>
);
