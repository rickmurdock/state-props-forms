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
  }

  handleUserName = (e) => {
    this.setState({userName: e.target.value});
  }

  handleSongArtist = (e) => {
    this.setState({songArtist: e.target.value});
  }

  handleSongTitle = (e) => {
    this.setState({songTitle: e.target.value});
  }

  handleSongNotes =(e) => {
    this.setState({songNotes: e.target.value});
  }

  addToList = (e) => {
      e.preventDefault();
      this.setState({userName: e.target.value, songTitle: e.target.value, songArtist: e.target.value, songNotes: e.target.value});
      let listItem = JSON.stringify(this.state);

      fetch("https://tiny-lasagna-server.herokuapp.com/collections/playlisting", {
        method: "POST",
        body: listItem,
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
      }
    }
    ).then(response => {
      console.log(response, "yay");

    }).catch(err => {
      console.log(err, "boo!");
    });
    this.setState({userName: '', songNotes: '', songArtist: '', songTitle:''});

  };

  render() {
    return (
     
      <div className="col-sm-6">
        <div className="text-left">
          {/*<div className="card">*/}
            <form onSubmit={this.addToList}>
              <div className="form-group">
                <label className="text-white" for="user-name">User Name:</label>
                <input type="text" className="form-control" id="user-name" onChange={this.handleUserName} placeholder="Name or User Name" value={this.state.userName} required />
              </div>
              <div className="form-group">
                <label className="text-white" for="song-artist">Artist/Band: </label>
                <input type="text" className="form-control" id="song-artist" onChange={this.handleSongArtist} placeholder="Artist or Band Name" value={this.state.songArtist} required />
              </div>  
              <div className="form-group">
                <label className="text-white" for="song-title">Song Title: </label>
                <input type="text" className="form-control" id="song-title" onChange={this.handleSongTitle} placeholder="Song Title" value={this.state.songTitle} required />
              </div>
              <div className="form-group">
                <label  className="text-white" for="song-notes">Notes about Song: </label>
                <textarea className="form-control" rows="3" id="song-notes" onChange={this.handleSongNotes} placeholder="" value={this.state.songNotes} />
              </div>
              <input className="btn btn-primary" type="submit"/>
            </form>
          {/*</div>*/}
        </div>
      </div>
      
    )
  }
}