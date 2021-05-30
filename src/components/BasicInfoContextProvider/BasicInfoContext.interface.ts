import React from 'react';
import { COMPANY, ROLE } from '../../constants';

export interface IBasicInfoContext {
  locations: string[],
  companies: COMPANY[],
  role?: ROLE,

  dispatchCompanies: React.Dispatch<any>,
  setLocations: React.Dispatch<React.SetStateAction<string[]>>,
  setRole: React.Dispatch<React.SetStateAction<ROLE | undefined>>,
};

export interface IBasicInfoContextProviderProps {
  children: React.ReactNode,
}
