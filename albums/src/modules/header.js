import React from 'react';
import {Text} from 'react-native';

const Header = () => {

	const { textStyle } = styles;

	return (
		<Text style={textStyle}>Albums!</Text>
	);
};

const styles = {
	textStyle: {
		fontSize: 30
	}
};

export default Header;