import React, { Component } from 'react';
import {ScrollView} from 'react-native';
import Axios from 'axios';
import AlbumDetail from './AlbumDetail';

class AlbumList extends Component{

	state = { albums: [] };

	componentWillMount() {
		Axios.get('https://rallycoding.herokuapp.com/api/music_albums')
			.then(response => this.setState({ albums: response.data }) );
	}


	renderAlbums() {
		return this.state.albums.map((albumItem, index) => 
			<AlbumDetail key={index} album={albumItem} />
		);
	}

	render() {

		console.log(this.state);

		return(
			<ScrollView>
				{this.renderAlbums()}
			</ScrollView>
		);
	}	
}

export default AlbumList;
