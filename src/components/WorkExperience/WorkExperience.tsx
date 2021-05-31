import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

import useEducationStyles from './WorkExperience.styles';

const Education = () => {
  const classes = useEducationStyles();

  return (
    <div className={classes.container}>
      <Typography variant="h5">Enter Past Work Experience</Typography>
      <Divider />
    </div>
  )
};

export default Education;
