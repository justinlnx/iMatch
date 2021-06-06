import React, { useCallback, useContext } from 'react';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

import { PROGRAMMING_LANGUAGES } from '../../constants';
import { Language } from '../../types';
import SearchQueryContext from '../SearchQueryContextProvider';
import useProgrammingLanguageStyles from './ProgrammingLanguage.styles';

const ProgrammingLanguage = () => {
  const classes = useProgrammingLanguageStyles();
  const { setLanguages } = useContext(SearchQueryContext);

  const onChange = useCallback(
    (event: React.ChangeEvent<{}>, value: Language[]) => setLanguages(value),
    /* eslint-disable-next-line react-hooks/exhaustive-deps */
    [],
  );

  return (
    <div className={classes.container}>
      <Typography variant="h5">Programming Languages</Typography>
      <Divider />
      <Autocomplete
        multiple
        id="tags-outlined"
        options={PROGRAMMING_LANGUAGES}
        getOptionLabel={(option) => option.name}
        defaultValue={undefined}
        filterSelectedOptions
        onChange={onChange}
        renderInput={(params) => (
          <TextField
            {...params}
            variant="outlined"
            label="ex: C++"
            placeholder="Favorites"
          />
        )}
      />
    </div>
  )
};

export default ProgrammingLanguage;
