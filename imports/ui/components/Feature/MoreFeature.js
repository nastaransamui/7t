import React from 'react';
import clsx from 'clsx';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import ReactWOW from 'react-wow';
import useStyles from './feature-style';
import { useTextAlign } from '../../theme/common';
import imgAPI from '../../../../public/images/imgAPI';

function MainFeature() {
  const classes = useStyles();
  const align = useTextAlign();
  return (
    <div className={clsx(classes.featureMore)}>
      <Grid container spacing={6}>
        <Grid md={6} item>
          <div className={classes.featureItem}>
            <ReactWOW animation="fadeInLeft" duration="0.6s">
              <Typography variant="h3" className={classes.title}>
                ESTIMATING 
              </Typography>
            </ReactWOW>
            <ReactWOW animation="fadeInLeft" delay="0.3s" duration="0.6s">
              <Typography variant="body1" className={classes.text}>
              We offer our services to developers, builders, subcontractors, architects, owner builders and suppliers. We are experienced with all trades including Concrete and civil works, brick and block layers, carpentry (frame, lockup and fix), cladding, windows and glazing, plastering, finishes trades such as painters, tilers, joiners etc. Services trades including plumbers, electricians and mechanical services
              </Typography>
            </ReactWOW>
          </div>
        </Grid>
        <Grid md={6} item>
          <div className={classes.featureItem}>
            <ReactWOW animation="zoomIn" delay="0.3s" duration="0.6s">
              <div className={classes.deco1} />
            </ReactWOW>
            <ReactWOW animation="fadeInRight" delay="0.5s" duration="0.6s">
              <figure className={classes.img}>
                <img src='https://www.7tconstructions.com.au/wp-content/uploads/2014/09/estimating-self-build-costs-300x225.jpg' alt="img" />
              </figure>
            </ReactWOW>
          </div>
        </Grid>
      </Grid>
      <Grid container spacing={6}>
        <Grid md={6} item>
          <div className={classes.featureItem}>
            <ReactWOW animation="zoomIn" delay="0.3s" duration="0.6s">
              <div className={classes.deco1} />
            </ReactWOW>
            <ReactWOW animation="fadeInLeft" delay="0.5s" duration="0.6s">
              <figure className={classes.img}>
                <img src='https://www.7tconstructions.com.au/wp-content/uploads/2014/09/photo-680x418.jpg' alt="img" />
              </figure>
            </ReactWOW>
          </div>
        </Grid>
        <Grid md={6} item>
          <div className={classes.featureItem}>
            <ReactWOW animation="fadeInRight" duration="0.6s">
              <Typography variant="h3" className={classes.title}>
              RESIDENTIAL SERVICES
              </Typography>
            </ReactWOW>
            <ReactWOW animation="fadeInRight" delay="0.3s" duration="0.6s">
              <Typography variant="body1" className={classes.text}>
              7 T Constructions is established by a team of registered and qualified construction industry professionals to undertake all sorts of projects and overcome its challenges.
              We are experienced in single dwelling, units and townhouses, multi-story and mid-rise apartments.7 T Constructions has experience on new builds, additions and extensions, redevelopment and refurbishment works
              </Typography>
            </ReactWOW>
          </div>
        </Grid>
      </Grid>
      <Grid container className={classes.root} spacing={6}>
        <Grid md={12} item>
          <div className={classes.featureMore}>
            <div className={clsx(align.textCenter, classes.featureItem, classes.last)}>
              <ReactWOW animation="fadeInUp" duration="0.6s">
                <Typography variant="h3" className={classes.title}>
                COMMERCIAL SERVICES
                </Typography>
              </ReactWOW>
              <ReactWOW animation="fadeInUp" delay="0.3s" duration="0.6s">
                <Typography variant="body1" className={classes.text}>
                  7 T Constructions is established by a team of registered and qualified construction industry professionals to undertake all sorts of projects and overcome its challenges. Our experienced, and safety oriented team; strive to deliver your project on time, on budget and beyond your expectations.
                </Typography>
              </ReactWOW>
              <ReactWOW animation="zoomIn" delay="0.3s" duration="0.6s">
                <div className={classes.deco2} />
              </ReactWOW>
              <ReactWOW animation="fadeInUp" delay="0.5s" duration="0.6s">
                <figure className={classes.imgFull}>
                  <img src='https://www.7tconstructions.com.au/wp-content/uploads/2014/09/6.2.12-0182-300x225.jpg' alt="img" />
                </figure>
              </ReactWOW>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default MainFeature;
