import React from 'react';
import PropTypes from 'prop-types';
import Container from '@material-ui/core/Container';
import Hidden from '@material-ui/core/Hidden';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import imgAPI from '../../../../public/images/imgAPI';
import { useText } from '../../theme/common';
import Title from '../Title/Title';
import useStyles from './about-style';
import { withTheme } from '@material-ui/core';

function About(props){
  const classes = useStyles();
  const text = useText();
  return (
    <div className={classes.root}>
    <div className={classes.bgDeco}>
      <img src={imgAPI.architect[8]} alt="3d home model" />
    </div>
    <Container fixed>
      <Grid container justify="center" spacing={6}>
        <Grid item md={7} xs={12}>
          <Title
            head="About us"
            dark
          />
          <Typography className={text.paragraph}>
          "We are professionals who is both highly trained and greatly experienced in the design of buildings. We are skilled on commercial or residential projects, and also work closely with municipalities to ensure communities and cities are designed with safety and perspective."
          </Typography>
        </Grid>
        <Grid item md={5} xs={12} className={classes.illusWrap}>
          <Hidden smDown>
            <div>
              <img src={imgAPI.architect[8]} alt="3d home model" className={classes.illustration} />
            </div>
          </Hidden>
        </Grid>
      </Grid>
    </Container>
  </div>
  )
};

export default withTheme(About);