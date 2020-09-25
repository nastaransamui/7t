import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import useStyles from './header-style';
import navMenu from './menu';
import routeLink from "../../../api/startup/client/link";
import {withTheme } from '@material-ui/core/styles';
function MobileMenu(props){
  const classes = useStyles();
  const { toggleDrawer, open } = props;
  const SideList = () =>(
    <div className={classes.mobileNav} role="presentation" onClick={toggleDrawer} onKeyDown={toggleDrawer}>
      <div className={clsx(classes.menu, open && classes.menuOpen)}>
        <List component="nav">
          {navMenu.map((item, index) => {
            return(
              <ListItem button
              component="a"
              href={`#${item}`}
              key={index.toString()}
              style={{animationDuration: index * 0.15 + 'S'}}>
                <ListItemText primary={item} className={classes.menuList} />
              </ListItem>
            )
          })}
        </List>
        <ListItem button component="a" 
        href={routeLink.contact} 
        style={{ animationDuration: navMenu.length * 0.15 + "s"}}>
          <ListItemText primary="contact" className={classes.menuList}/>
        </ListItem>
      </div>
    </div>
  )

  return (
    <SwipeableDrawer open={open} onClose={toggleDrawer}
    onOpen={toggleDrawer}
    classes={{
      paper: classes.paperNav
    }}>
      <SideList />
    </SwipeableDrawer>
  )
}
MobileMenu.propTypes = {
  toggleDrawer: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired
};

export default withTheme(MobileMenu)