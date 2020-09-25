import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { useTheme, withTheme } from '@material-ui/core/styles';
import { Accordion } from '@material-ui/core'
import { AccordionSummary } from '@material-ui/core'
import { AccordionDetails } from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import IconButton from '@material-ui/core/IconButton';
import useStyles from './footer-style';
import FacebookIcon from 'react-ionicons/lib/LogoFacebook';
import TwitterIcon from 'react-ionicons/lib/LogoTwitter';
import InstagramIcon from 'react-ionicons/lib/LogoInstagram';
import LinkedinIcon from 'react-ionicons/lib/LogoLinkedin';
function Copyright() {
  return (
    <Typography variant="body2" display="block" color="textSecondary">
      &copy;&nbsp;
      {Meteor.settings.public.footerText}
    </Typography>
  );
}

const footers = [
  {
    title: 'Company',
    description: ['Team', 'History', 'Contact us', 'Locations'],
    link: ['#team', '#history', '#contact-us', '#locations'],
  },
  {
    title: 'Resources',
    description: ['Resource', 'Resource name', 'Another resource', 'Final resource'],
    link: ['#resource', '#resource-name', '#another-resource', '#final-resource'],
  },
  {
    title: 'Legal',
    description: ['Privacy policy', 'Terms of use'],
    link: ['#privacy-policy', '#terms-of-use'],
  },
];

function Footer(props){
  const [ctn, setCtn] = useState(null);
  const classes = useStyles();
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  useEffect(() => {
    setCtn(document.getElementById('main-wrap'));
  }, []);
  return(
    <Container maxWidth="lg" component="footer" className={classes.footer}>
    <Grid container spacing={4}>
      <Grid item xs={12} md={3}>
        <div className={classes.logo}>
          <img src='/images/logo.png' alt="logo" />
          <Typography variant="h6" color="textPrimary">
            {Meteor.settings.public.projectName}
          </Typography>
        </div>
        <Typography color="textPrimary" className={classes.footerDesc} gutterBottom>
        {Meteor.settings.public.desc}
        </Typography>
        <Copyright />
      </Grid>
      <Grid item xs={12} md={6}>
        <Grid container spacing={4} justify="space-evenly">
          {footers.map(footer => (
            <Grid item xs={12} md={3} key={footer.title} className={classes.siteMapItem}>
              {isDesktop && (
                <div>
                  <Typography variant="h6" className={classes.title} color="textPrimary" gutterBottom>
                    {footer.title}
                  </Typography>
                  <ul>
                    {footer.description.map((item, index) => (
                      <li key={item}>
                        <Link href={footer.link[index]} variant="subtitle1" color="textSecondary">
                          {item}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {isMobile && (
                <Accordion
                  square
                  classes={{
                    root: classes.accordionRoot,
                  }}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon className={classes.accordionIcon} />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    classes={{
                      content: classes.accordionContent,
                    }}
                  >
                    <strong>
                      {footer.title}
                    </strong>
                  </AccordionSummary>
                  <AccordionDetails>
                    <ul>
                      {footer.description.map((item, index) => (
                        <li key={item}>
                          <Link href={footer.link[index]} variant="subtitle1" color="textSecondary">
                            {item}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </AccordionDetails>
                </Accordion>
              )}
            </Grid>
          ))}
        </Grid>
      </Grid>
      <Grid item xs={12} md={3}>
        <div className={classes.socmed}>
          <IconButton aria-label="FB" className={classes.margin} size="small">
          <a rel="noopener noreferrer" href="#" target="_blank">
             <TwitterIcon fontSize="26px" />
             </a>
          </IconButton>
          <IconButton aria-label="TW" className={classes.margin} size="small">
          <a rel="noopener noreferrer" href="#" target="_blank">
            <FacebookIcon fontSize="26" />
             </a>
          </IconButton>
          <IconButton aria-label="IG" className={classes.margin} size="small">
          <a rel="noopener noreferrer" href="#" target="_blank">
             <InstagramIcon fontSize="26px" />
             </a>
          </IconButton>
          <IconButton aria-label="LI" className={classes.margin} size="small">
          <a rel="noopener noreferrer" href="#" target="_blank">
             <LinkedinIcon fontSize="26px" />
             </a>
          </IconButton>
        </div>
        </Grid>
    </Grid>
  </Container>
  )
};

export default withTheme(Footer)