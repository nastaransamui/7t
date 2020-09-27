import React, { useState } from 'react';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import HomeIcon from 'react-ionicons/lib/IosHomeOutline';
import BackIcon from 'react-ionicons/lib/IosArrowRoundBack';
import { Divider, useTheme, withTheme } from '@material-ui/core';
import clsx from 'clsx';
import Button from '@material-ui/core/Button';
import ReadMoreAndLess from 'react-read-more-less';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import DoneIcon from '@material-ui/icons/Done';
import Paper from '@material-ui/core/Paper';
import Projects from "../Portfolio/Projects";
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Tooltip from '@material-ui/core/Tooltip';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css'
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Link from '@material-ui/core/Link';
const useStyles = makeStyles(theme => ({
  title: {},
  pageWrap: {
    minHeight: '100%',
    position: 'relative',
    width: '100%',
    alignItems: 'center',
    '& $title': {
      fontWeight: theme.typography.fontWeightMedium,
    },
    '& a': {
      color: theme.palette.type === 'dark' ? theme.palette.primary.light : theme.palette.primary.main,
      textTransform: 'none',
      fontSize: 16,
      textDecoration: 'none',
      fontWeight: theme.typography.fontWeightRegular,
    }
  },
  logoHeader: {},
  logo: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '&$logoHeader': {
      flexDirection: 'column',
      alignItems: 'center',
      position: 'relative',
      zIndex: 10,
      textAlign: 'center'
    },
    '& img': {
      width: 64,
    },
    '& p, span': {
      display: 'block',
      textTransform: 'uppercase',
      fontSize: 24,
      paddingBottom: 4,
      fontWeight: theme.typography.fontWeightBold
    }
  },
  innerWrap: {
    textAlign: 'left',
  },
  backtohome: {
    width: 80,
    height: 80,
    position: 'relative',
    zIndex: 20,
    '& i': {
      fontSize: 32,
      color: theme.palette.text.disabled
    },
    '& > span i:first-child': {
      opacity: 1,
      transition: 'opacity 0.3s ease'
    },
    '& > span i:last-child': {
      position: 'absolute',
      right: 0,
      opacity: 0,
      transition: 'all 0.3s ease'
    },
    '&:hover': {
      '& > span i:first-child': {
        opacity: 0,
      },
      '& > span i:last-child': {
        right: 30,
        opacity: 1,
      },
    }
  },  
  wrapDeco: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: 'blue',
    padding: theme.spacing(1),
    paddingBottom: theme.spacing(10),
  },
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(1),
      width: '100%',
    },
  },
 }))

 function SingleProject(props){
  const classes = useStyles();
  const theme = useTheme();
  var paramsString = props.history.location.search;
  var searchParams = new URLSearchParams(paramsString);
  let paramObj = {}
const isMobile = useMediaQuery(theme.breakpoints.down('xs'));
  searchParams.forEach(function(value, key){
    paramObj[key] = value;
  })
  
  const ImageForGallery = Projects.filter(item => item._id === paramObj._id)[0].Images.map((image,index) =>{
    return(
      {
        original: image,
        thumbnail: image
      }
    )
  })
  return(
    <div className={classes.pageWrap}>
    <div className={clsx(classes.logo, classes.logoHeader)} >
<a onClick={()=>{props.history.push('/')}} style={{color: theme.palette.secondary.main}}>
  <img src='/images/logo.png' alt="logo" />
  <Typography component="span" >
    {Meteor.settings.public.projectName}
  </Typography>
</a>
</div>
<Container maxWidth="lg" className={classes.innerWrap}>
<IconButton onClick={()=>{props.history.push('/')}} className={classes.backtohome}>
<HomeIcon fontSize="60px" color="#43853d"/>
<BackIcon fontSize="60px" color="#43853d"/>
</IconButton>
    <Grid container>
      <Grid item g={1} xs={2}/>
      <Grid container direction={isMobile ?"column-reverse" :"row"}>
      <Grid item lg={10} md={10} sm={10}  >
      {Projects.filter(item => item._id === paramObj._id).map((details,index)=>{
        return(
          <Card key={details._id} style={{borderRadius: 10}}>
            <CardHeader title={details.name} />
            <ImageGallery items={ImageForGallery}
                showPlayButton={false} 
                thumbnailPosition="bottom"
                showBullets/>
                <CardContent>
                <Typography variant="h6" gutterBottom>
                {details.name}
                </Typography>
                <Divider />
             <Typography variant="subtitle1" gutterBottom>
                 {details.discription}
             </Typography>
                <Divider />
                <Typography variant="button" display="block" gutterBottom>
                Contract Value: {details.value}
                </Typography>
                </CardContent>
          </Card>
        )
      })}
      </Grid>
      <Grid item lg={2} md={2} sm={2}  >
        <div className={classes.root}>
        <Link
  component="button"
  variant="body2"
  onClick={()=>props.history.push('/portfolio')}
>
  Go back to Portfolio
</Link>
        </div>
      
      </Grid>
      </Grid>
    </Grid>
</Container>
</div>
  )
 };

 export default withTheme(SingleProject);