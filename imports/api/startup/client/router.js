import React ,{useState, useEffect} from "react";
import { Router, Route,  Switch } from 'react-router';
import { createBrowserHistory } from 'history';
import App from "../../../ui/App";
import Head from "../../../ui/head";

const browserHistory = createBrowserHistory();

export default function RenderRoutes(){
  return(
    <Router history={browserHistory}>
      <div>
        <Head />
        <Switch>
          <App history={browserHistory} />
        </Switch>
      </div>
    </Router>
  )
}