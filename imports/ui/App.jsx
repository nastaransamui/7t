import React, { useState, useLayoutEffect , useEffect} from 'react';
import { Router, Route, Redirect, Switch, useLocation } from 'react-router';
import appTheme from "./theme/appTheme";
import { MuiThemeProvider, createMuiTheme, withTheme } from '@material-ui/core/styles';
import { create } from 'jss';
import rtl from 'jss-rtl';
import Header from "./components/Header/Header";
import { StylesProvider, jssPreset } from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import LoadingBar from 'react-top-loading-bar';
import Entrance from './Entrance';
import { Info } from './Info.jsx';
let themeType = 'light';
if (typeof Storage !== 'undefined') { // eslint-disable-line
  themeType = localStorage.getItem('luxiTheme') || 'light';
}
function App(props){
  const [loading, setLoading] = useState(0);
  const [theme, setTheme] = useState({
    ...appTheme('greenLeaf', themeType)
  });
  const toggleDarkTheme = () => {
    const newPaletteType = theme.palette.type === 'light' ? 'dark' : 'light';
    localStorage.setItem('luxiTheme', theme.palette.type === 'light' ? 'dark' : 'light');
    setTheme({
      ...appTheme('greenLeaf', newPaletteType),
      direction: theme.direction,
    });
  };

  useEffect(() =>{
     // Remove loading bar
     setLoading(0);
     setTimeout(() => { setLoading(100); }, 2000);

    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  },[])
  const muiTheme = createMuiTheme(theme);
  const jss = create({ plugins: [...jssPreset().plugins, rtl()] });
  
  return(
    <React.Fragment >
      <StylesProvider jss={jss}>
      <MuiThemeProvider theme={muiTheme}>
        <CssBaseline />
        <LoadingBar
          height={3}
          color={theme.palette.primary.main}
          progress={loading}
        />
        <Router history={props.history}>
          <Switch>
            <Route exact path="/" render={()=>(<Entrance
             history={props.history}
             onToggleDark={toggleDarkTheme} />)} />
          </Switch>
        </Router>
      </MuiThemeProvider>
      </StylesProvider>
  </React.Fragment>
  )
};

export default withTheme(App)
