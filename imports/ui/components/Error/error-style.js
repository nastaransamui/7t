import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  title: {},
  errorWrap: {
    minHeight: '100%',
    position: 'relative',
    width: '100%',
    alignItems: 'center',
    '& $title': {
      fontWeight: theme.typography.fontWeightMedium,
    },
    '& a': {
      color: theme.palette.type === 'dark' ? theme.palette.primary.light : theme.palette.primary.main,
      textTransform: 'none',
      fontSize: 16,
      textDecoration: 'none',
      fontWeight: theme.typography.fontWeightRegular,
    }
  },
  flex: {
    display: 'flex',
    justifyContent: 'center'
  },
  deco: {
    position: 'relative',
    [theme.breakpoints.down('md')]: {
      height: 320,
    },
    '& h3': {
      fontFamily: 'Roboto Condensed',
      color: theme.palette.common.white,
      fontSize: 106,
      textTransform: 'capitalize',
      fontWeight: 700,
      paddingTop: 40,
      paddingLeft: 20,
      position: 'relative',
      zIndex: 1,
    },
    '&:before': {
      content: '""',
      width: 210,
      height: 220,
      background: theme.palette.primary.main,
      borderRadius: 24,
      transform: 'rotate(45deg)',
      position: 'absolute',
      top: theme.spacing(-1),
      left: 0,
    }
  },
  text: {
    [theme.breakpoints.up('md')]: {
      borderLeft: `1px solid ${theme.palette.divider}`,
      paddingLeft: theme.spacing(5),
    },
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center'
    },
    '& h4': {
      fontWeight: theme.typography.fontWeightBold,
      marginBottom: theme.spacing(4)
    },
    '& p': {
      fontSize: 22,
      color: theme.palette.text.secondary
    }
  },
  button: {
    marginTop: theme.spacing(4)
  },
  logoHeader: {},
  logo: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '&$logoHeader': {
      flexDirection: 'column',
      alignItems: 'center',
      position: 'relative',
      zIndex: 10,
      textAlign: 'center'
    },
    '& img': {
      width: 64,
    },
    '& p, span': {
      display: 'block',
      textTransform: 'uppercase',
      fontSize: 24,
      paddingBottom: 4,
      fontWeight: theme.typography.fontWeightBold
    }
  },
}));

export default useStyles;
