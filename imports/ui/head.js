import React from 'react';
import { Helmet } from "react-helmet";
import theme from "./theme/palette";

export default function Head(props){
  return(
    <Helmet>
      <meta charSet="utf-8" />
      <title>{Meteor.settings.public.name}</title>
      <meta name="description" content={Meteor.settings.public.desc} />
      <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"/>
      <link rel="icon" type="image/png" href="images/logo.png"></link>  
      <link rel="apple-touch-icon" sizes="57x57" href="/favicons/apple-icon-57x57.png" />
      <link rel="apple-touch-icon" sizes="60x60" href="/favicons/apple-icon-60x60.png" />
      <link rel="apple-touch-icon" sizes="72x72" href="/favicons/apple-icon-72x72.png" />
      <link rel="apple-touch-icon" sizes="76x76" href="/favicons/apple-icon-76x76.png" />
      <link rel="apple-touch-icon" sizes="114x114" href="/favicons/apple-icon-114x114.png" />
      <link rel="apple-touch-icon" sizes="120x120" href="/favicons/apple-icon-120x120.png" />
      <link rel="apple-touch-icon" sizes="144x144" href="/favicons/apple-icon-144x144.png" />
      <link rel="apple-touch-icon" sizes="152x152" href="/favicons/apple-icon-152x152.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-icon-180x180.png" />
      <link rel="manifest" href="/favicons/manifest.json" />
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="msapplication-TileImage" content="/favicons/ms-icon-144x144.png" />
  
  <meta name="theme-color" content={theme.greenLeaf.palette.primary.main} />
  <link
    rel="stylesheet"
    href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
  />
  <link href="https://fonts.googleapis.com/css?family=Roboto+Condensed:400,700&display=swap" rel="stylesheet" />
  <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.0.0/animate.min.css"
  />
  <meta property="author" content={Meteor.settings.public.name} />
  <meta property="og:site_name" content={Meteor.settings.public.projectName} />
  <meta property="og:locale" content="en_US" />
  <meta property="og:type" content="website" />
  
  <meta property="twitter:site" content={Meteor.settings.public.url} />
  <meta property="twitter:domain" content={Meteor.settings.public.url} />
  <meta property="twitter:creator" content={Meteor.settings.public.name} />
  <meta property="twitter:card" content="summary" />
  <meta property="twitter:image:src" content="/images/logo.png" />
  <meta property="og:url" content={Meteor.settings.public.url} />
  <meta property="og:title" content={Meteor.settings.public.name} />
  <meta
    property="og:description"
    content={Meteor.settings.public.desc}
  />
  <meta name="twitter:site" content={Meteor.settings.public.url} />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:image" content={Meteor.settings.public.img} />
  <meta property="og:image" content={Meteor.settings.public.img} />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
      <script defer src="https://use.fontawesome.com/releases/v5.0.13/js/solid.js"  crossorigin="anonymous"></script>
    <script defer src="https://use.fontawesome.com/releases/v5.0.13/js/fontawesome.js"  crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/ua-parser-js@0/dist/ua-parser.min.js"></script>
    </Helmet>
  )
}