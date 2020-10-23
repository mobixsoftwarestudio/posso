// NOT AUTHENTICATED STRATEGY

// RECEIVE IF IT'S AUTHENTICATED

//

import React from 'react';
import { PossoProviderProps } from '../types';

export const PossoContext = React.createContext<PossoProviderProps>({
  permissions: [''],
});

export const PossoProvider: React.FC<PossoProviderProps> = ({
  children,
  ...rest
}) => {
  return <PossoContext.Provider value={rest}>{children}</PossoContext.Provider>;
};

export default PossoProvider;
