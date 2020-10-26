import { AuthorizationStrategy } from '../types';
import { usePermissions } from './usePermissions';

export const useAuthorize = (
  requirements: Array<string>,
  authorizationStrategy?: AuthorizationStrategy<any, any>,
): boolean => {
  const {
    permissions,
    authorizationStrategy: providerStrategy,
  } = usePermissions();

  if (requirements.length === 0) {
    return true;
  }

  const defaultStrategy = () => {
    return !!permissions.find(state => requirements.includes(state));
  };

  if (authorizationStrategy) {
    return authorizationStrategy(permissions, requirements);
  }

  if (providerStrategy) {
    return providerStrategy(permissions, requirements);
  }

  return defaultStrategy();
};
