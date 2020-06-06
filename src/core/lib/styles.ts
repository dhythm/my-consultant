import { createMuiTheme, makeStyles, Theme } from '@material-ui/core/styles';

export const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#7986cb',
      main: '#3f51b5',
      dark: '#303f9f',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff4081',
      main: '#f50057',
      dark: '#c51162',
      contrastText: '#fff',
    },
  },
});

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
    fab: {
      position: 'fixed',
      bottom: theme.spacing(3),
      right: theme.spacing(3),
    },
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      border: `1px solid ${theme.palette.primary.main}`,
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
    backdrop: {
      zIndex: theme.zIndex.drawer + 1,
      color: '#fff',
    },
  }))();
