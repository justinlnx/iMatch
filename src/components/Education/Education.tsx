import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

import useEducationStyles from './Education.styles';

const Education = () => {
  const classes = useEducationStyles();

  return (
    <div className={classes.container}>
      <Typography variant="h5">Enter Education Background</Typography>
      <Divider />
    </div>
  )
};

export default Education;
