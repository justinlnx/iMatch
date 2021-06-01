import { createReducer } from '../../helpers';
import { COMPANY } from '../../constants';

export const INITIAL_COMPANY_STATE = [];

function clearAll(state: COMPANY[]): COMPANY[] {
  return [];
}

function selectAll(state: COMPANY[]): COMPANY[] {
  return Object.values(COMPANY)
}

function onChange(state: COMPANY[], company: COMPANY): COMPANY[] {
  const selectedIndex = state.indexOf(company);
  if (selectedIndex === -1) {
    return [...state, company];
  }

  return state.slice(0, selectedIndex).concat(state.slice(selectedIndex + 1));
}

const companyActions = {
  clearAll,
  selectAll,
  onChange,
};

export const companyReducer = createReducer(companyActions);
