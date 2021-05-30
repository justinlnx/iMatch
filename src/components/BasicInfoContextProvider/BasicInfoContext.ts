import { createContext } from 'react';
import { noop } from 'lodash';

import { IBasicInfoContext } from './BasicInfoContext.interface';

const BasicInfoContext = createContext<IBasicInfoContext>({
  locations: [],
  companies: [],
  dispatchCompanies: noop,
  setLocations: noop,
  setRole: noop,
});

export default BasicInfoContext;
