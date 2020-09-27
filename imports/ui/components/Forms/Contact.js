import React, { useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import Button from '@material-ui/core/Button';
import Hidden from '@material-ui/core/Hidden';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme, withTheme } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import SendIcon from '@material-ui/icons/Send';
import EmailIcon from '@material-ui/icons/Email';
import PhoneIcon from '@material-ui/icons/LocalPhone';
import LocationIcon from '@material-ui/icons/LocationOn';
import Typography from '@material-ui/core/Typography';
import Snackbar from '@material-ui/core/Snackbar';
import CircularProgress from '@material-ui/core/CircularProgress';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import {
  Map,
  Marker,
  GoogleApiWrapper,
  InfoWindow
} from 'google-maps-react';
import { useText } from '../../theme/common';
import useStyles from './form-style';
import CrossParallax from '../Parallax/Cross';
import Title from '../Title/Title';
import HomeIcon from 'react-ionicons/lib/IosHomeOutline';
import BackIcon from 'react-ionicons/lib/IosArrowRoundBack';
function BubleMark() {
  const classes = useStyles();
 
  return (
    <div className={classes.bubelWrap}>
      <div className={classes.buble}>
        <Typography variant="h6" gutterBottom>
          Head Quarter
        </Typography>
        <Grid container>
          <Grid item sm={6} xs={12}>
            <Typography>
              <PhoneIcon className={classes.icon} />
              +98 765 432 10
            </Typography>
          </Grid>
          <Grid item sm={6} xs={12}>
            <Typography>
              <EmailIcon className={classes.icon} />
              hello@luxi.com
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography>
              <LocationIcon className={classes.icon} />
              Lorem ipsum street Block C - Vestibullum Building
            </Typography>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
function MapContainer(props) {
  const [activeMarker, setActive] = useState({});
  const [showingInfoWindow, setShow] = useState(false);
  const { google } = props;

  const onMarkerClick = marker => {
    // console.log(marker)
    // setActive(marker);
    // setShow(true);
  };

  const onMapClicked = () => {
    if (showingInfoWindow) {
      setShow(false);
      setActive(null);
    }
  };

  return (
    <Map
      google={google}
      onClick={onMapClicked}
      style={{ width: '100%', height: '500px', position: 'relative' }}
      initialCenter={{
        lat: -37.867550,
        lng: 144.830300
      }}
      zoom={14}
    >
      <Marker
        onClick={onMarkerClick}
        position={{ lat: -37.867550, lng: 144.830300 }}
      />
      <InfoWindow
        marker={activeMarker}
        visible={showingInfoWindow}
      >
        <div>
          <BubleMark />
        </div>
      </InfoWindow>
    </Map>
  );
}

MapContainer.propTypes = {
  google: PropTypes.object.isRequired
};

const MapWithAMarker = GoogleApiWrapper({ apiKey: '' })(MapContainer);

function Contact(props){
  const classes = useStyles();
  const text = useText();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [values, setValues] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });

  const [openNotif, setNotif] = useState(false);

  const [check, setCheck] = useState(false);
  const [SnackbarMessage,setSnackbarMessage] = useState('Message Sent')

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };
  
  const handleSubmit = () => {
    setNotif(true)
    Meteor.call('sendEmail',values,(err, res)=>{
      if (err) {
        setNotif(false)      
        setSnackbarMessage(err.reason)
      } else {
        setNotif(false); 
        setValues({
          name: '',
          email: '',
          phone: '',
          company: '',
          message: ''
        })
        window.scrollTo(0, 0);
      }
    }
);
  };

  const handleClose = () => {
    setNotif(false);
  };

  return(
    <div className={classes.pageWrap}>
        <div className={classes.bgDeco} >
        <CrossParallax />
        </div>
      <div className={classes.parallax}>
        <CrossParallax />
      </div>
      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        key="top right"
        open={openNotif}
        autoHideDuration={4000}
        onClose={handleClose}
        ContentProps={{
          'aria-describedby': 'message-id',
        }}
        message={<span id="message-id">Message Sent</span>}
      />
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
          <Grid item lg={1} xs={12} />
          <Grid item lg={5} xs={12} className={classes.wrapDeco}>
              <div className={classes.frmDeco} />
            <Paper className={clsx(classes.formBox, 'fragment-fadeUp')}>
              <div className={classes.fullFromWrap}>
                <div className={classes.form}>
                  <Title  style={{whiteSpace: 'pre-line'}}
                    head="Contact Us"
                    desc={
                      `Adress: ${Meteor.settings.public.AddressShow}
                      Phone: ${Meteor.settings.public.PhoneShow}
                      Email: ${Meteor.settings.public.EmailShow}`
                    }
                  />
                  <ValidatorForm
                    onSubmit={handleSubmit}
                  >
                    <Grid container spacing={6}>
                      <Grid item xs={12}>
                        <TextValidator
                          className={classes.input}
                          label="What is your name? *"
                          onChange={handleChange('name')}
                          name="Name"
                          value={values.name}
                          variant="outlined"
                          validators={['required']}
                          errorMessages={['this field is required']}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextValidator
                          className={classes.input}
                          label="What it your email? *"
                          onChange={handleChange('email')}
                          variant="outlined"
                          name="Email"
                          value={values.email}
                          validators={['required', 'isEmail']}
                          errorMessages={['this field is required', 'email is not valid']}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextValidator
                          className={classes.input}
                          label="What is your phone number?"
                          onChange={handleChange('phone')}
                          name="Phone"
                          variant="outlined"
                          value={values.phone}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextValidator
                          multiline
                          rows="6"
                          className={classes.input}
                          label="Write your message here"
                          onChange={handleChange('message')}
                          name="Message"
                          variant="outlined"
                          value={values.message}
                  validators={['required']}
                  errorMessages={['this field is required']}
                        />
                      </Grid>
                    </Grid>
                    <div className={classes.btnArea}>
                      <Button disabled={openNotif} variant="contained" fullWidth={isMobile} type="submit" color="primary" size="large">
                        
                        {!openNotif ? 'Send Message' : <CircularProgress size={24}  />}
                        <SendIcon className={classes.rightIcon} />
                      </Button>
                    </div>
                  </ValidatorForm>
                </div>
              </div>
            </Paper>
          </Grid>
          <Grid item lg={6} xs={12}>
              <Paper className={classes.map} elevation={10}>
                <MapWithAMarker
                  googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
                  loadingElement={<div style={{ height: '100%' }} />}
                  containerElement={<div style={{ height: '700px' }} />}
                  mapElement={<div style={{ height: '100%' }} />}
                />
              </Paper>
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}

export default withTheme(Contact)
