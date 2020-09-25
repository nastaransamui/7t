import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Container from '@material-ui/core/Container';
import clsx from 'clsx';
import Hidden from '@material-ui/core/Hidden';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme, withTheme } from '@material-ui/core/styles';
import PlayIcon from '@material-ui/icons/PlayArrow';
import PauseIcon from '@material-ui/icons/Pause';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import YouTube from 'react-youtube';
import Button from '@material-ui/core/Button';
import imgAPI from '../../../../public/images/imgAPI';
import { useText } from '../../theme/common';
// import yt from '~/youtube';
import CrossParallax from '../Parallax/Cross';
import useStyles from './banner-style';

function Banner(props){
  const classes = useStyles();
  const text = useText();
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [play, setPlayed] = useState(false);
  const [playCtrl, setPlayedCtrl] = useState(true);
  const [player, setPlayer] = useState([]);
  useEffect(() => {
    if (isDesktop) {
      /* Attention
      ** HandleScroll function to optimize site with video background may give an error log
      ** Uncaught TypeError: Cannot read property 'src' of null
      ** It's because HMR in development mode, and react-youtube need to refresh.
      ** The error log will not happen in production mode or just reload browser (development mode)
      ** You can uncomment _onPlay() function, if you don't want see error browser log.
      ** But then every changes you make, the browser will auto reload.
      */
      // _onPlay();
    }
  }, []);
  const _onEnd = event => {
    event.target.playVideo();
  };
  const _onPlay = () => {
    const curTime = player[0].getCurrentTime();
    if (curTime > 0) {
      setPlayed(true);
    }
  };
  const _onReady = event => {
    player.push(event.target);
    setPlayer(player);
  };

  const _onTogglePause = () => {
    setPlayedCtrl(!playCtrl);
    if (playCtrl) {
      player[0].pauseVideo();
    } else {
      player[0].playVideo();
    }
  };
  const opts = {
    height: '720',
    width: '1080',
    playerVars: { // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
      controls: 0,
      rel: 0,
      showinfo: 0,
      mute: 1,
      origin: 'http://localhost:3000'
    }
  };

  return (
    <div className={classes.root}>
        {play &&(
          <IconButton className={classes.btnPlay}
          onClick={_onTogglePause}>
            {playCtrl ? <PauseIcon /> : <PlayIcon />}
          </IconButton>
        )}
      <Container fixed={!isMobile} className={classes.bannerWrap}>
        <div className={classes.video}>
          <div className={classes.overlay} />
          {/* {!play || isMobile ? <img src={imgAPI.architect[0]} alt="cover" /> : null} */}
          <YouTube
             videoId="TA04Qau-UnA"
              opts={opts}
              onReady={_onReady}
              onEnd={_onEnd}
              onPlay={_onPlay} />
        </div>
        <div className={classes.parallax}>
          <CrossParallax />
        </div>
        <div className={classes.block}>
          <Grid container justify="flex-end">
            <Grid item md={9} xs={12}>
              <div className={classes.paperWrap}>
                <Paper className={classes.paper}>
                <Typography variant="h4" className={text.title2}>
                7 T Constructions is established by professional engineers.
                </Typography>
                <Typography className={clsx(classes.subtitle, text.subtitle2)}>
                project managers, registered building practitioners and quantity surveyors.
                </Typography>
                <Button color="primary" size="large" variant="contained" 
                className={classes.button} 
                onClick={()=>props.history.push('/aboutus')}>
                  see more
                </Button>
                </Paper>
              </div>
            </Grid>
          </Grid>
        </div>
      </Container>
    </div>
  )
}

export default withTheme(Banner);