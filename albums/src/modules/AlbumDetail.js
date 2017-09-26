import React from 'react';
import {View, Text, Image} from 'react-native';
import Card from './Card'; 
import CardSection from './CardSection';
import Button from './Button'

const AlbumDetail = ({album}) => {

	const { 
		title, 
		artist, 
		image,
		thumbnail_image,
		thumbnailContainerStyle
	} = album;
	const { 
		headerContentStyle,
		thumbnailStyle, 
		headerTextStyle,
		imageStyle 
	} = styles;

	return (
		<Card>
			<CardSection>
				<View style = {thumbnailContainerStyle}>
					<Image
						style = {thumbnailStyle}
						source = {{ uri: thumbnail_image }}
					/>
				</View>
				<View style = {headerContentStyle}>
					<Text style = {headerTextStyle}>{title}</Text>
					<Text>{artist}</Text>
				</View>	
			</CardSection>	

			<CardSection>
				<Image
					style = {imageStyle}
					source = {{ uri: image }}
				/>
			</CardSection>	

			<CardSection>
				<Button/>
			</CardSection>	
			
		</Card>
	);
};


const styles = {
	headerContentStyle: {
		flexDirection: 'column',
		justifyContent: 'space-around'
	},
	headerTextStyle: {
		fontSize: 18
	},
	thumbnailStyle: {
		height: 50,
		width: 50,
		marginLeft: 10,
		marginRight: 10
	},
	thumbnailContainerStyle: {
		justifyContent: 'center',
		alignItems: 'center'
	}, 
	imageStyle: {
		height: 300,
		flex: 1,
		width: null
	}
}

export default AlbumDetail;