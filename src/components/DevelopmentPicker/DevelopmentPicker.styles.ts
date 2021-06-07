import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useDevelopmentPickerStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      width: 500,
      '& > * + *': {
        marginTop: theme.spacing(3),
      },
    },
  }),
);

export default useDevelopmentPickerStyles;
