import { createContext } from 'react';
import { noop } from 'lodash';

import { ISearchQueryContext } from './SearchQueryContext.interface';

const SearchQueryContext = createContext<ISearchQueryContext>({
  companies: [],
  locations: [],
  dispatchCompanies: noop,
  setDegree: noop,
  setFos: noop,
  setLocations: noop,
  setRole: noop,
});

export default SearchQueryContext;
