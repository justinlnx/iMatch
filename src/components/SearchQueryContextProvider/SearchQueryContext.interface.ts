import React from 'react';
import { COMPANY, ROLE } from '../../constants';

export interface ISearchQueryContext {
  /**
   * states
   */
  companies: COMPANY[],
  degree?: string,
  fos?: string, // field of study
  locations: string[],
  role?: ROLE,

  /**
   * functions
   */
  dispatchCompanies: React.Dispatch<any>,
  setDegree: React.Dispatch<React.SetStateAction<string | undefined>>,
  setFos: React.Dispatch<React.SetStateAction<string | undefined>>,
  setLocations: React.Dispatch<React.SetStateAction<string[]>>,
  setRole: React.Dispatch<React.SetStateAction<ROLE | undefined>>,
};

export interface ISearchQueryContextProviderProps {
  children: React.ReactNode,
}
