import React, { useContext, useCallback } from 'react';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import TextField from '@material-ui/core/TextField';

import useBasicInfoStyles from './BasicInfo.styles';
import Select from "../Select";
import SearchQueryContext from '../SearchQueryContextProvider';
import { COMPANY, LOCATION, ROLE } from '../../constants';

/* eslint-disable react-hooks/exhaustive-deps */
const BasicInfo = () => {
  const {
    locations,
    setLocations,
    companies,
    setCompanies,
    role,
    setRole,
  } = useContext(SearchQueryContext);
  const classes = useBasicInfoStyles();

  const onChangeLocation = useCallback(
    (event: React.ChangeEvent<{ value: unknown }>) => setLocations([event.target.value as string]),
    [],
  );

  const onChangeCompanies = useCallback(
    (event: React.ChangeEvent<{}>, value: COMPANY[]) => setCompanies(value),
    [setCompanies],
  );

  const onChangeRole = useCallback(
    (event: React.ChangeEvent<{ value: unknown }>) => setRole(event.target.value as ROLE),
    [],
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
      <Autocomplete
        multiple
        options={Object.values(COMPANY)}
        getOptionLabel={(option) => option}
        defaultValue={companies}
        filterSelectedOptions
        onChange={onChangeCompanies}
        renderInput={(params) => (
          <TextField
            {...params}
            variant="outlined"
            label="Company (ex: Microsoft)"
            placeholder="Company"
          />
        )}
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
