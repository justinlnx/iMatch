import { useCallback, useContext } from 'react';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Divider from '@material-ui/core/Divider';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

import { DEVELOPMENTS } from '../../constants';
import { Development } from '../../types';
import SearchQueryContext from '../SearchQueryContextProvider';
import useDevelopmentPickerStyles from './DevelopmentPicker.styles';

const DevelopmentPicker = () => {
  const classes = useDevelopmentPickerStyles();
  const { setDevelopments } = useContext(SearchQueryContext);

  const onChange = useCallback(
    (event: React.ChangeEvent<{}>, value: Development[]) => setDevelopments(value),
    /* eslint-disable-next-line react-hooks/exhaustive-deps */
    [],
  );

  return (
    <div className={classes.container}>
      <Typography variant="h5">Software Development</Typography>
      <Divider />
      <Autocomplete
        multiple
        id="tags-outlined"
        options={DEVELOPMENTS}
        getOptionLabel={(option) => option.name}
        defaultValue={undefined}
        filterSelectedOptions
        onChange={onChange}
        renderInput={(params) => (
          <TextField
            {...params}
            variant="outlined"
            label="ex: Web Development"
            placeholder="Favorites"
          />
        )}
      />
    </div>
  );
};

export default DevelopmentPicker;
