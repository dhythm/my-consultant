import { makeStyles, Theme } from '@material-ui/core/styles';

export const useStyles = () =>
  makeStyles<Theme>(theme => ({
    root: {
      width: '100%',
      margin: 0,
      padding: 0,
    },
    header: {
      width: '100%',
      margin: 0,
      padding: 0,
    },
    body: {
      width: '100%',
      padding: 0,
    },
  }))();