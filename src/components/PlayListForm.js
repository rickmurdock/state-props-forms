import React, { Component } from 'react';

export default class PlayListForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      songArtist: "",
      songTitle: "",
      songNotes: ""
    }
  };
  render() {
    return (
      <div className="text-left">
        <div className="card">
          <form>
            <label>User Name: </label>
            <br />
            <input type="text" placeholder="Name or User Name"/>
            <br />
            <label>Artist/Band: </label>
            <br />
            <input type="text" placeholder="Artist or Band Name"/>
            <br />
            <label>Song Title: </label>
            <br />
            <input type="text" placeholder="Song Title"/>
            <br />
            <label>Notes about Song: </label>
            <br />
            <input type="textarea" placeholder=""/>
          </form>
        </div>
      </div>
    )
  }
}