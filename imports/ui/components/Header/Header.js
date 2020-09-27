import React, { useState, useEffect, Fragment } from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Grid from '@material-ui/core/Grid';
import clsx from 'clsx';
import Button from '@material-ui/core/Button';
import Link from 'react-router-dom';
import IconButton from '@material-ui/core/IconButton';
import Container from '@material-ui/core/Container';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Scrollspy from 'react-scrollspy';
import Settings from './Settings';
import MobileMenu from './MobileMenu';
import useStyles from './header-style';
import navMenu from './menu';
import routeLink from "../../../api/startup/client/link";
import {withTheme } from '@material-ui/core/styles';
import '../../../../public/hamburger-menu.css';
let counter = 0;
function createData(name, url, offset){
  counter +=1;
  return {
    id: counter,
    name,
    url,
    offset,
  }
}

function Header(props){
  const [fixed, setFixed] = useState(false);
  let flagFixed = false;
  const handleScroll = () => {
    const doc = document.documentElement;
    const scroll = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
    const newFlagFixed = (scroll > 100);
    if (flagFixed !== newFlagFixed) {
      setFixed(newFlagFixed);
      flagFixed = newFlagFixed;
    }
  };
  useEffect(() => {
    let isMount = true;
    if (isMount) {
      window.addEventListener('scroll', handleScroll);
    }
    return () => {
      isMount = false;
      window.removeEventListener('scroll', handleScroll)
    }
  }, []);
  const classes = useStyles();
  const theme = useTheme();
  const {
    onToggleDark,
    invert,
  } = props;
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [menuList] = useState([
    createData(navMenu[0], '#' + navMenu[0]),
    createData(navMenu[1], '#' + navMenu[1]),
    createData(navMenu[2], '#' + navMenu[2]),
    createData(navMenu[3], '#' + navMenu[3]),
    createData(navMenu[4], '#' + navMenu[4]),
    createData(navMenu[5], '#' + navMenu[5]),
  ]);
  const [openDrawer, setOpenDrawer] = useState(false);
  const handleOpenDrawer = () => {
    setOpenDrawer(!openDrawer);
  };
  return(
    <Fragment>
      { isMobile && (<MobileMenu history={props.history} open={openDrawer} toggleDrawer={handleOpenDrawer} />) }
      <AppBar
      position="relative"
      id="header"
      className={clsx(
        classes.header,
        fixed && classes.fixed,
        invert && classes.invert,
        openDrawer && classes.openDrawer
      )}>
        <Container >
          <Grid container>
            <Grid item sm={2} xs={7} >
              <div className={classes.logo}>
                {isMobile && (
                  <IconButton onClick={handleOpenDrawer}
                  className={clsx('hamburger hamburger--spring', classes.mobileMenu, openDrawer && 'is-active')}>
                    <span className="hamburger-box">
                      <span className={clsx(classes.bar, 'hamburger-inner')} />
                    </span>
                  </IconButton>
                )}
                {invert ? (
                  <Link href="/">
                    <a>
                      <img src="/images/logo.png" alt="logo" />
                      {isDesktop && Meteor.settings.public.projectName}
                    </a>
                  </Link>
                ):(
                  <AnchorLink href="#home" >
                    <img src="/images/logo.png" alt="logo" />
                    {isDesktop && Meteor.settings.public.projectName}
                  </AnchorLink>
                )}
              </div>
            </Grid>
            <Grid item sm={isTablet ? 10 : 9} xs={5}>
            <div className={classes.headerContent}>
            <nav className={clsx(classes.navMenu, invert && classes.invert)}>
              {isDesktop && (
                <Scrollspy items={navMenu} currentClassName="active">
                  {menuList.map((item) =>{
                    return(
                      <li key={item.id.toString()}>
                        {invert ? (
                          <Button offset={item.offset || 0} href={'/' +item.url}>
                            {item.name}
                          </Button>
                        ):(
                          <Button component={AnchorLink} offset={item.offset || 0} href={item.url}>
                            {item.name}
                          </Button>
                        )}
                      </li>
                    )
                  })}
                  <li>
                    <Button onClick={()=>{props.history.push('/contact')}} style={{color: '#fff'}} >
                          contact
                      </Button>
                  </li>
                </Scrollspy>
              )}
            </nav>
            <nav >
            <Settings toggleDark={onToggleDark}  invert={invert} />
            </nav>
            </div>
            </Grid>
          </Grid>
        </Container>
      </AppBar>
    </Fragment>
  )
}

Header.propTypes = {
  onToggleDark: PropTypes.func.isRequired,
  invert: PropTypes.bool,
};

Header.defaultProps = {
  sticky: false,
  invert: false
};

export default withTheme(Header)