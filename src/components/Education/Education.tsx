import { useCallback, useContext, useMemo } from 'react';
import { throttle } from 'lodash';
import Divider from '@material-ui/core/Divider';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

import Select from '../Select';
import SearchQueryContext from '../SearchQueryContextProvider';
import { DEGREE_MAP } from '../../constants';
import useEducationStyles from './Education.styles';

const THROTTLED_FOS_UPDATE = 500;

/* eslint-disable react-hooks/exhaustive-deps */
const Education = () => {
  const classes = useEducationStyles();
  const {
    degree,
    setDegree,
    setFos,
  } = useContext(SearchQueryContext);

  const onChangeDegree = useCallback(
    (event: React.ChangeEvent<{ value: unknown }>) => setDegree(event.target.value as string),
    [],
  );

  const onChangeFos = useCallback(
    (event: React.ChangeEvent<{ value: unknown }>) => setFos(event.target.value as string),
    [],
  );

  const throttleOnChangeFos = useMemo(() => throttle(onChangeFos, THROTTLED_FOS_UPDATE), [onChangeFos])

  return (
    <div className={classes.container}>
      <Typography variant="h5">Enter Education Background</Typography>
      <Divider />
      <Select
        label="Degree"
        options={Object.values(DEGREE_MAP)}
        selected={degree}
        onChange={onChangeDegree}
      />
      <Divider />
      <form noValidate autoComplete="off">
        <TextField
          label="Field of Study"
          onChange={throttleOnChangeFos}
        />
      </form>
    </div>
  )
};

export default Education;
