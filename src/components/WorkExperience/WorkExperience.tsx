import { useCallback, useContext } from 'react';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

import Select from '../Select';
import SearchQueryContext from '../SearchQueryContextProvider';
import { LEVELS } from '../../constants';
import useEducationStyles from './WorkExperience.styles';

const LEVEL_OPTIONS = LEVELS.map(level => level.text);

const Education = () => {
  const classes = useEducationStyles();

  const {
    level, setLevel
  } = useContext(SearchQueryContext);

  const onChangeLevel = useCallback((event: React.ChangeEvent<{ value: unknown }>) => {
    setLevel(LEVELS.find(level => level.text === (event.target.value as string)));
    /* eslint-disable-next-line react-hooks/exhaustive-deps */
  }, []);

  return (
    <div className={classes.container}>
      <Typography variant="h5">Enter Past Work Experience</Typography>
      <Divider />
      <Typography variant="caption" gutterBottom>
        * Enter the number of years working as a professional. Please do not include Co-op/intern time. 
      </Typography>
      <Select
        label="Degree"
        options={LEVEL_OPTIONS}
        selected={level?.text}
        onChange={onChangeLevel}
      />
    </div>
  )
};

export default Education;
