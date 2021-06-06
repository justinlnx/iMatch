import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useProgrammingLanguageStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      width: 500,
      '& > * + *': {
        marginTop: theme.spacing(3),
      },
    },
  }),
);

export default useProgrammingLanguageStyles;
