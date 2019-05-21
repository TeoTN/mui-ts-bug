import { createStyles, makeStyles } from '@material-ui/styles';
import { Theme } from '@material-ui/core';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    card: {
      marginTop: theme.spacing(5),
      marginLeft: 'auto',
      marginRight: 'auto',
      width: '25vw',
      maxWidth: '450px',
      padding: theme.spacing(2),
    },
  }),
);
