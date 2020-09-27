import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { useText } from '../../theme/common';
import useStyles from './cards-style';

export default function General(props){
  const classes = useStyles();
  const text = useText();
  const {
    img,
    title,
    desc,
    history,
    _id
  } = props;
  return(
    <Paper className={classes.generalCard}>
      <figure>
        <img src={img} alt={title} />
      </figure>
      <Paper className={classes.desc}>
        <Typography variant="h6" gutterBottom>{title}</Typography>
        <Typography className={text.paragraph}>
          {desc}
        </Typography>
        <Button className={classes.button} 
        color="secondary" 
        size="small" 
        variant="contained"
        onClick={()=>{
          history.push({
            pathname: `/project`,
            search: `?_id=${_id}`,
          })
        }}>
          See Detail
        </Button>
      </Paper>
    </Paper>
  )
};

General.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  history: PropTypes.object.isRequired,
  _id: PropTypes.string.isRequired,
};