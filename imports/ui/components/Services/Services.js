import React from 'react';
import PropTypes from 'prop-types';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { useText } from '../../theme/common';
import Title from '../Title/Title';
import useStyles from './services-style';
import { withTheme } from '@material-ui/core';

function Services(props){
  const classes = useStyles();
  const text = useText();
  return(
    <div className={classes.root}>
      <Container>
        <Title
        head="Our Services"
        desc="Full-service global consulting firm that delivers innovative architecture." />
      </Container>
      <Container fixed>
        <Grid container spacing={8} className={classes.grid}>
        <Grid item md={4}>
        <div className={classes.figure}>
          <svg className={classes.fill}>
            <use xlinkHref="/architect/services-fill-1.svg#main" />
          </svg>
          <svg className={classes.outline}>
            <use xlinkHref="/architect/services-outline-1.svg#main" />
          </svg>
        </div>
        <Typography variant="h5" className={text.subtitle2}>
          Schematic Design
        </Typography>
        <Typography component="p" className={text.paragraph}>
          Your architect will begin by preparing design sketches based on your requirements and budget to explore possible options.
        </Typography>
        </Grid>
        <Grid item md={4}>
          <div className={classes.figure}>
            <svg className={classes.fill}>
              <use xlinkHref="/architect/services-fill-2.svg#main" />
            </svg>
              <svg className={classes.outline}>
                <use xlinkHref="/architect/services-outline-2.svg#main" />
              </svg>
          </div>
          <Typography variant="h5" className={text.subtitle2}>
            Working with an Architect
          </Typography>
          <Typography component="p" className={text.paragraph}>
            An architect does a lot more than just provide you with a set of drawings, they will guide you through the planning process
          </Typography>
        </Grid>
        <Grid item md={4}>
          <div className={classes.figure}>
              <svg
                className={classes.fill}
              >
                <use xlinkHref="/architect/services-fill-3.svg#main" />
              </svg>
              <svg
                className={classes.outline}
              >
                <use xlinkHref="/architect/services-outline-3.svg#main" />
              </svg>
          </div>
          <Typography variant="h5" className={text.subtitle2}>
            Architectural Technology
          </Typography>
          <Typography component="p" className={text.paragraph}>
            Our technology develop specialisations in particular areas, such as specification writing, technology, materials, and regulations
          </Typography>
        </Grid>
        </Grid>
      </Container>
    </div>
  )
}

export default withTheme(Services)