import { useCallback, useContext, useMemo } from 'react';
import { throttle } from 'lodash';
import Divider from '@material-ui/core/Divider';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

import Select from '../Select';
import SearchQueryContext from '../SearchQueryContextProvider';
import { DEGREES } from '../../constants';
import useEducationStyles from './Education.styles';

const THROTTLED_FOS_UPDATE = 500;

const DEGREE_OPTIONS = DEGREES.map(degree => degree.text);

const Education = () => {
  const classes = useEducationStyles();
  const {
    degree,
    setDegree,
    setFos,
  } = useContext(SearchQueryContext);

  const onChangeDegree = useCallback((event: React.ChangeEvent<{ value: unknown }>) => {
    setDegree(DEGREES.find(degree => degree.text === (event.target.value as string)));
    /* eslint-disable-next-line react-hooks/exhaustive-deps */
  }, []);

  const onChangeFos = useCallback(
    (event: React.ChangeEvent<{ value: unknown }>) => setFos(event.target.value as string),
    /* eslint-disable-next-line react-hooks/exhaustive-deps */
    [],
  );

  const throttleOnChangeFos = useMemo(() => throttle(onChangeFos, THROTTLED_FOS_UPDATE), [onChangeFos])

  return (
    <div className={classes.container}>
      <Typography variant="h5">Enter Education Background</Typography>
      <Divider />
      <Select
        label="Degree"
        options={DEGREE_OPTIONS}
        selected={degree?.text}
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
