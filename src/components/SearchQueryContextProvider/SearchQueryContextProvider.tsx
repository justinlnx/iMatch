import { useState, useReducer } from 'react';
import { debug } from 'debug';

import SearchQueryContext from './SearchQueryContext';
import { ISearchQueryContextProviderProps, ISearchQueryContext } from './SearchQueryContext.interface';
import { companyReducer, INITIAL_COMPANY_STATE } from './companyReducer';

import { useProxiedDispatch } from '../../hooks';
import { ROLE } from '../../constants';

const debugSearchQueryContext = debug("context:SearchQuery");

const SearchQueryContextProvider = (props: ISearchQueryContextProviderProps) => {
  const {
    children,
  } = props;

  const [locations, setLocations] = useState<string[]>([]);
  const [companies, rawDispatchCompanies] = useReducer(companyReducer, INITIAL_COMPANY_STATE);
  const [role, setRole] = useState<ROLE>();
  const [degree, setDegree] = useState<string>();
  const [fos, setFos] = useState<string>();

  const dispatchCompanies = useProxiedDispatch(rawDispatchCompanies);

  const context: ISearchQueryContext = {
    companies,
    degree,
    fos,
    locations,
    role,
    dispatchCompanies,
    setDegree,
    setFos,
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
