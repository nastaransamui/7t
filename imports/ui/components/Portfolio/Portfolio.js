import React, { useState } from 'react';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import HomeIcon from 'react-ionicons/lib/IosHomeOutline';
import BackIcon from 'react-ionicons/lib/IosArrowRoundBack';
import { useTheme, withTheme } from '@material-ui/core';
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
import Projects from "./Projects";
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
    padding: theme.spacing(1),
    paddingBottom: theme.spacing(10),
  },
  paper: {
    height: 140,
    width: 100,
  },  root: {
    // minWidth: 345,
    backgroundColor: theme.palette.background.default
    },
    card: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      borderRadius: 10
    },
  
    cardContent: {
      flexGrow: 1,
    },
    cardMedia: {
      paddingTop: '56.25%', // 16:9
    },
 }))

 const PortfolioObjects = [
  {
    name: 'AllWorks',
    label: 'All Works',
  },
  {
    name: 'Commercial',
    label: 'Commercial',
  },
  {
    name: 'Estimating',
    label: 'Estimating',
  },
  {
    name: 'Residential',
    label: 'Residential',
  },
]
function Portfolio(props){
  const classes = useStyles();
  const theme = useTheme();
  const {history} = props;
  const [selected, SetSelected] = useState('AllWorks')
  const handleClick = (item) =>{
    SetSelected(item.name)
  }
  console.log(Projects)
const FilterProjects = Projects.filter(item =>selected ==='AllWorks' ? item : item.type  === selected);
  const MoreDetails =(Project) =>{
    console.log(Project)
    history.push({
      pathname: `/project`,
      search: `?_id=${Project._id}`,
    })
  }
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
        <Grid container >
          <Grid item g={1} xs={12}/>
          <Grid item lg={12} md={12}  className={classes.wrapDeco}>
            {PortfolioObjects.map((item, index) =>{
              return(
                <Chip key={index.toString()} 
                style={{marginLeft: '12px'}}
                avatar={<Avatar>{item.name.charAt(0)}</Avatar>}
                label={item.label} 
                clickable
                onDelete={()=>{SetSelected(item.name)}}
                deleteIcon={<DoneIcon />}
                color={selected === item.name ? 'primary' : 'secondary'}
                onClick={()=>handleClick(item)} 
                deleteIcon={selected === item.name ? <DoneIcon /> : null}/>
              )
            })}
          </Grid>
          <Grid container spacing={4} >
          {FilterProjects.map((Project, index) => {
            return(
              <Grid item key={index.toString()} xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <CardMedia
                onClick={()=>MoreDetails(Project)}
                  className={classes.cardMedia}
                  style={{cursor: 'pointer'}}
                  image={Project.Images[0]}
                  title={Project.name}
                />
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h5" component="h2">
                    {Project.name}
                  </Typography>
                  <Typography component="span">
                  <ReadMoreAndLess
                ref={this.ReadMore}
                className="read-more-content"
                charLimit={20}
                readMoreText="Read more"
                readLessText="Read less"
            >
        {Project.discription}
          </ReadMoreAndLess>
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" color="primary" onClick={()=>MoreDetails(Project)}>
                    Project Details
                  </Button>
                </CardActions>
              </Card>
            </Grid>
         
            )
          })}
        
          </Grid>
        </Grid>
        </Container>
    </div>
  )
};

export default withTheme(Portfolio);