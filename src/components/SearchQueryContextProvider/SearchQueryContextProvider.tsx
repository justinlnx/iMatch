import { useState } from 'react';
import { debug } from 'debug';

import SearchQueryContext from './SearchQueryContext';
import { ISearchQueryContextProviderProps, ISearchQueryContext } from './SearchQueryContext.interface';

import { COMPANY, ROLE } from '../../constants';
import { Level, Degree, Language, Development }  from '../../types';

const debugSearchQueryContext = debug("context:SearchQuery");

const SearchQueryContextProvider = (props: ISearchQueryContextProviderProps) => {
  const {
    children,
  } = props;

  const [locations, setLocations] = useState<string[]>([]);
  const [companies, setCompanies] = useState<COMPANY[]>([]);
  const [role, setRole] = useState<ROLE>();
  const [degree, setDegree] = useState<Degree>();
  const [fos, setFos] = useState<string>();
  const [level, setLevel] = useState<Level>();
  const [languages, setLanguages] = useState<Language[]>([]);
  const [developments, setDevelopments] = useState<Development[]>([]);

  const context: ISearchQueryContext = {
    companies,
    degree,
    developments,
    fos,
    languages,
    level,
    locations,
    role,
    setCompanies,
    setDegree,
    setDevelopments,
    setFos,
    setLanguages,
    setLevel,
    setLocations,
    setRole,
  }

  debugSearchQueryContext(context);

  return (
    <SearchQueryContext.Provider value={context}>
      {children}
    </SearchQueryContext.Provider>
  )
};

export default SearchQueryContextProvider;
