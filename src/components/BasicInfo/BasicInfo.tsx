import React, { useContext, useCallback } from 'react';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

import useBasicInfoStyles from './BasicInfo.styles';
import Select from "../Select";
import BasicInfoContext from '../BasicInfoContextProvider';
import { COMPANY, LOCATION, ROLE } from '../../constants';

const BasicInfo = () => {
  const {
    locations,
    setLocations,
    companies,
    dispatchCompanies,
    role,
    setRole,
  } = useContext(BasicInfoContext);
  const classes = useBasicInfoStyles();

  const onChangeLocation = useCallback(
    (event: React.ChangeEvent<{ value: unknown }>) => setLocations([event.target.value as string]),
    [setLocations],
  );

  const onChangeCompanies = useCallback(
    (event: React.ChangeEvent<{ value: unknown }>) => (dispatchCompanies as any).onChange(event.target.value as COMPANY),
    [dispatchCompanies],
  );

  const onChangeRole = useCallback(
    (event: React.ChangeEvent<{ value: unknown }>) => setRole(event.target.value as ROLE),
    [setRole],
  );

  return (
    <div className={classes.container}>
      <Typography variant="h5">Enter Basic Info</Typography>
      <Divider />
      <Select
        label="Location"
        options={Object.values(LOCATION)}
        selected={locations[0]}
        onChange={onChangeLocation}
      />
      <Divider />
      <Select
        label="Company"
        options={Object.values(COMPANY)}
        selected={companies[0]}
        onChange={onChangeCompanies}
      />
      <Divider />
      <Select
        label="Role"
        options={Object.values(ROLE)}
        selected={role}
        onChange={onChangeRole}
      />
    </div>
  )
};

export default BasicInfo;
