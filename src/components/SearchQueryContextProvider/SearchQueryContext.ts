import { createContext } from 'react';
import { noop } from 'lodash';

import { ISearchQueryContext } from './SearchQueryContext.interface';

const SearchQueryContext = createContext<ISearchQueryContext>({
  companies: [],
  languages: [],
  locations: [],
  dispatchCompanies: noop,
  setDegree: noop,
  setFos: noop,
  setLanguages: noop,
  setLevel: noop,
  setLocations: noop,
  setRole: noop,
});

export default SearchQueryContext;
