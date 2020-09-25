import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import { Parallax } from 'react-parallax';
import imgAPI from '../../../../public/images/imgAPI';
import { useText } from '../../theme/common';
import useStyles from './subscribe-style';
import { withTheme } from '@material-ui/core';

function SubscribeForm(props){
  const classes = useStyles();
  const text = useText();
  const [value, setValue] = useState('');

  function handleChange(event) {
    setValue(event.target.value);
  }
  return(
    <div className={classes.root}>
    <Parallax
      blur={0}
      bgImage={imgAPI.architect[15]}
      bgImageAlt="benefit"
      strength={300}
    >
      <div className={classes.parallaxWrap} />
    </Parallax>
    <Container fixed>
      <Paper className={classes.form}>
        <Typography variant="h4" className={text.title2}>
          Stay in touch
        </Typography>
        <Typography className={text.subtitle2}>
        Subscribe to our newsletter and stay updated on the latest developments and special offers!
        </Typography>
        <form>
          <TextField
            className={classes.field}
            fullWidth
            label="Enter your email address"
            placeholder="Subscribe"
            onChange={(e) => handleChange(e)}
            value={value}
          />
          <Button variant="contained" size="large" color="secondary" className={classes.button}>
            Subscribe
          </Button>
        </form>
      </Paper>
    </Container>
  </div>
  )
};

export default withTheme(SubscribeForm)