import React, { Component } from 'react';
import logo from '../logo.svg';

export default class NavBar extends Component {
  render() {
    return (
      <nav className="jumbotron container-fluid">
        <h1><img src={logo} className="App-logo" alt="logo" />Play What?!</h1>
      </nav>
    )
  }
}