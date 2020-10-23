import { useContext } from 'react';
import { PossoContext } from '../provider';

export const usePermissions = () => useContext(PossoContext);
