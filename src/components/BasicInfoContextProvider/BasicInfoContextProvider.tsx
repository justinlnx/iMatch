import { useState, useReducer } from 'react';
import { debug } from 'debug';

import BasicInfoContext from './BasicInfoContext';
import { IBasicInfoContextProviderProps, IBasicInfoContext } from './BasicInfoContext.interface';
import { companyReducer, INITIAL_COMPANY_STATE } from './companyReducer';

import { useProxiedDispatch } from '../../hooks';
import { ROLE } from '../../constants';

const debugBasicInfoContext = debug("context:BasicInfo");

const BasicInfoContextProvider = (props: IBasicInfoContextProviderProps) => {
  const {
    children,
  } = props;

  const [locations, setLocations] = useState<string[]>([]);
  const [companies, rawDispatchCompanies] = useReducer(companyReducer, INITIAL_COMPANY_STATE);
  const [role, setRole] = useState<ROLE>();

  const dispatchCompanies = useProxiedDispatch(rawDispatchCompanies);

  const context: IBasicInfoContext = {
    locations,
    companies,
    role,
    dispatchCompanies,
    setLocations,
    setRole,
  }

  debugBasicInfoContext(context);

  return (
    <BasicInfoContext.Provider value={context}>
      {children}
    </BasicInfoContext.Provider>
  )
};

export default BasicInfoContextProvider;
