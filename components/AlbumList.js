import React, { Component } from 'react';
import { Text, ScrollView } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

class AlbumList extends Component {

  state = {
    albums: []
  }

  componentDidMount() {
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
    .then((res) => {
      this.setState({ albums: res.data });
      console.log(this.state.albums);
    });
  }

  render() {
    let albums = <Text>Loading albums...</Text>;

    if (this.state.albums.length > 0) {
      albums = this.state.albums.map((album) => {
        return (        
            <AlbumDetail key={album.title} album={album} />
        );
      });
    }

    return (
      <ScrollView>{albums}</ScrollView>
    )
  }
}

export default AlbumList;
