import React, { Component } from 'react';

export default class PlayListItem extends Component {

  render() {
    let songs = this.props.state.songs.map( e => {
      return(
        <div className="col-sm-6">
          <div key={e._id} className="card">
            <div className="card">
              <div className="card-block">
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">User: {e.userName}</li>
                  <li className="list-group-item">Artist/Band: {e.songArtist}</li>
                  <li className="list-group-item">Title: {e.songTitle}</li>
                  <li className="list-group-item">Notes: {e.songNotes}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      );
    });
    return(
      <div className="row">
        {songs}
      </div>
    ) 
  }
}