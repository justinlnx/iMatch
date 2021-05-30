import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useSelectStyles = makeStyles((theme: Theme) => 
  createStyles({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
    chips: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    chip: {
      margin: 2,
    },
  }),
);

export default useSelectStyles;
