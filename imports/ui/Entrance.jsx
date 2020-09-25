import React, { useState } from 'react';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme, makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Hidden from '@material-ui/core/Hidden';
import Header from "./components/Header/Header";
import VideoBanner from './components/VideoBanner/VideoBanner'
import {withTheme } from '@material-ui/core/styles';
import Services from "./components/Services/Services";
import Project from "./components/Project/Project";
import Featured from "./components/Featured/Featured";
import About from './components/About/About';
import Team from './components/Team/Team';
import Blog from './components/Blog/Blog';
import Footer from './components/Footer/Footer';
import Subscribe from './components/SubscribeForm/SubscribeForm';
import PageNav from './components/PageNav/PageNav'

const sectionMargin = margin => (margin * 20);
const useStyles = makeStyles(theme => ({
  mainWrap: {
    position: 'relative',
    width: '100%',
    overflow: 'hidden',
    background: theme.palette.type === 'dark' ? theme.palette.background.default : theme.palette.background.paper,
  },
  spaceBottom: {
    paddingBottom: sectionMargin(theme.spacing()),
    [theme.breakpoints.down('md')]: {
      paddingBottom: sectionMargin(6),
    }
  },
  spaceBottomShort: {
    paddingBottom: sectionMargin(theme.spacing() / 2)
  },
  spaceTop: {
    paddingTop: sectionMargin(theme.spacing()),
    [theme.breakpoints.down('md')]: {
      paddingTop: sectionMargin(6),
    }
  },
  spaceTopShort: {
    paddingTop: sectionMargin(theme.spacing() / 2)
  },
  containerWrap: {
    '& > section': {
      position: 'relative'
    }
  }
}));


function Entrance(props){
  const classes = useStyles();
  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));
  const isMobile = useMediaQuery(theme.breakpoints.down('xs'));
  const { onToggleDark } = props;
  return (
    <React.Fragment>
      <CssBaseline />
    <div className={classes.mainWrap}>
    <Header
    history={props.history}
     onToggleDark={onToggleDark}
        />
    <main className={classes.containerWrap}>
      <section id="home" >
        <VideoBanner history={props.history}/>
      </section>
      <section id="services" className={classes.spaceTopShort}>
         <Services />
      </section>
      <section id="project" className={isMobile ? classes.spaceTopShort : classes.spaceTop}>
        <Project />
      </section>
      <section id="featured" className={isMobile ? classes.spaceTopShort : classes.spaceTop}>
        <Featured />
      </section>
      <section id="about">
        <div className={isTablet ? classes.spaceTopShort : classes.spaceTop}>
          <About />
        </div>
        <div className={classes.spaceTopShort}>
          <Team />
        </div>
      </section>
      <div id="blog" className={classes.spaceTopShort}>
        <Blog />
      </div>
      <section id="subscribe" className={classes.spaceTopShort}>
        <Subscribe />
      </section>
          <Footer />
    </main>
        <Hidden mdDown>
          <PageNav />
        </Hidden>
    </div>
    </React.Fragment>
  );
};

export default withTheme(Entrance)