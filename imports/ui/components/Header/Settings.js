import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import Popover from '@material-ui/core/Popover';
import IconButton from '@material-ui/core/IconButton';
import SettingsIcon from '@material-ui/icons/Settings';
import CheckIcon from '@material-ui/icons/Check';
import List from '@material-ui/core/List';
import ListSubheader from '@material-ui/core/ListSubheader';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Switch from '@material-ui/core/Switch';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import useStyles from './header-style';
import {withTheme } from '@material-ui/core/styles';
let themeType = 'light';
if (typeof Storage !== 'undefined') {
  themeType = localStorage.getItem('luxiTheme') || 'light';
}

function Settings(props){
  const [ctn, setCtn] = useState(null);
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const [isDark, setDark] = useState(themeType === 'dark');
  function handleClick(event) {
    setAnchorEl(event.currentTarget);
  }
  function handleClose() {
    setAnchorEl(null);
  }
  const handleChangeMode = () => {
    setDark(!isDark);
    props.toggleDark();
  };
  useEffect(() => {
    setCtn(document.getElementById('main-wrap'));
  });
  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;
  const { invert} = props;
  return(
    <div className={classes.setting}>
      <IconButton aria-describedby={id}
      aria-label="Settings"
      onClick={handleClick}
      className={
        clsx(
          classes.icon,
          open && classes.active,
          invert && classes.invert
        )
      }>
        <SettingsIcon fontSize="inherit" />
      </IconButton>
      <Popover
      id={id}
      open={open}
      anchorEl={anchorEl}
      onClose={handleClose}
      container={ctn}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'center',
      }}>
        <List component="nav"
        className={classes.modeMenu}
        aria-label="Mode-menu"
        subheader={(
          <ListSubheader component="div">
            theme mode
          </ListSubheader>
        )}>
          <ListItem>
            <Typography component="div">
              <Grid component="label" container alignItems="center" spacing={1}>
              <Grid item>light</Grid>
              <Grid item>
                <Switch checked={isDark}
                onChange={handleChangeMode}
                value={isDark}
                inputProps={{'aria-label': 'checkbox'}}/>
              </Grid>
              <Grid item>dark</Grid>
              </Grid>
            </Typography>
          </ListItem>
        </List>
        <Divider />
      </Popover>
    </div>
  )
}

Settings.propTypes = {
  toggleDark: PropTypes.func.isRequired,
  invert: PropTypes.bool,
};
Settings.defaultProps = {
  invert: false
};

export default withTheme(Settings)