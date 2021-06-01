import React from 'react';
import { COMPANY, ROLE, Level, Degree } from '../../constants';

export interface ISearchQueryContext {
  /**
   * states
   */
  companies: COMPANY[],
  degree?: Degree,
  fos?: string, // field of study
  level?: Level,
  locations: string[],
  role?: ROLE,

  /**
   * functions
   */
  dispatchCompanies: React.Dispatch<any>,
  setDegree: React.Dispatch<React.SetStateAction<Degree | undefined>>,
  setFos: React.Dispatch<React.SetStateAction<string | undefined>>,
  setLevel: React.Dispatch<React.SetStateAction<Level | undefined>>,
  setLocations: React.Dispatch<React.SetStateAction<string[]>>,
  setRole: React.Dispatch<React.SetStateAction<ROLE | undefined>>,
};

export interface ISearchQueryContextProviderProps {
  children: React.ReactNode,
}
