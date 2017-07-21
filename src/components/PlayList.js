import React, { Component } from 'react';
import PlayListItem from './PlayListItem';

export default class PlayList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      songs: []
    }
  }

  componentDidMount() {
    fetch('https://tiny-lasagna-server.herokuapp.com/collections/playlisting').then(results => {
      return results.json();
    }).then(data => {
      this.setState({songs: data});
      console.log("state", this.state.songs);
    })
  }
  
  render() {
    return(
      <div className="App">
        <PlayListItem state={this.state}/>
      </div>
    );
  }

};