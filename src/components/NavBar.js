import React, { Component } from 'react';
import logo from '../logo.svg';

const backgroundshade = {
  backgroundImage: 'linear-gradient(90deg, #4F364C, #FFFFFF)'
}

export default class NavBar extends Component {
  render() {
    return (
      <nav className="jumbotron"  style={backgroundshade}>
        <h1 className="float-left text-white"><img src={logo} className="App-logo" alt="logo" />Play What?!</h1>
      </nav>
    )
  }
}