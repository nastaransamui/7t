import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import useStyles from './error-style';
import clsx from 'clsx';
import { useTheme } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import HomeIcon from 'react-ionicons/lib/IosHomeOutline';
import BackIcon from 'react-ionicons/lib/IosArrowRoundBack';
function Error(props){
  const classes = useStyles();
  const { errCode, text} = props;
    const theme = useTheme();
  return(
    <div className={classes.errorWrap}>
        <div className={clsx(classes.logo, classes.logoHeader)} >
        <a onClick={()=>{props.history.push('/')}} style={{color: theme.palette.secondary.main}}>
            <img src='/images/logo.png' alt="logo" />
            <Typography component="span" >
              {Meteor.settings.public.projectName}
            </Typography>
          </a>
        </div>
    <Container maxWidth="md">
    <IconButton onClick={()=>{props.history.push('/')}} className={classes.backtohome}>
        <HomeIcon fontSize="60px" color="#43853d"/>
        <BackIcon fontSize="60px" color="#43853d"/>
        </IconButton>
      <Grid container>
        <Grid item md={5} xs={12}>
          <div className={classes.flex}>
            <div className={classes.deco}>
              <Typography variant="h3">
                {errCode}
              </Typography>
            </div>
          </div>
        </Grid>
        <Grid item md={7} xs={12}>
          <div className={classes.text}>
            <Typography variant="h4">{text}</Typography>
            <Typography>
            You can either stay and chill here, or go back to the beginning.
            </Typography>
            <Button variant="outlined" color="primary" onClick={()=>props.history.push('/')} size="large" className={classes.button}>
            back to home
            </Button>
          </div>
        </Grid>
      </Grid>
    </Container>
  </div>
  )
}

Error.propTypes = {
  errCode: PropTypes.string,
  text: PropTypes.string,
};

Error.defaultProps = {
  errCode: '404',
  text: '',
};

export default Error;