/**
 *
 * CheckPermission
 *
 */
import React from 'react';
import { useAuthorize } from '../hooks/useAuthorize';
import { Permissions } from '../types';

type Props = Permissions & {
  alternateView?: JSX.Element | null;
};

const Can: React.FC<Props> = ({
  children,
  permissions,
  authorizationStrategy,
  alternateView,
}) => (
  <React.Fragment>
    {useAuthorize(permissions, authorizationStrategy) ? (
      <React.Fragment>{children}</React.Fragment>
    ) : (
      alternateView
    )}
  </React.Fragment>
);

export const CheckPermission: React.FC<Props> = ({
  children,
  permissions,
  authorizationStrategy,
  alternateView = null,
}) => (
  <Can
    permissions={permissions}
    authorizationStrategy={authorizationStrategy}
    alternateView={alternateView}
  >
    {children}
  </Can>
);
