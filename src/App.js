import React from 'react';

// import logo from './logo.svg';
import './App.css';
import './App.sass';
import Router from './Router.jsx'
require('./Background.css');

export default class App extends React.Component{



  render(){
    return <Router/>
  }
}

