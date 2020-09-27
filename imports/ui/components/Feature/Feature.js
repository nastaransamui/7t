import React from 'react';
import Container from '@material-ui/core/Container';
import MoreFeature from './MoreFeature';
import Parallax from './Parallax';
import useStyles from './feature-style';

function Feature() {
  const classes = useStyles();
  return (
    <div className={classes.featureWrap}>
      <Parallax />
      <Container fixed>
        <MoreFeature />
      </Container>
    </div>
  );
}

export default Feature;