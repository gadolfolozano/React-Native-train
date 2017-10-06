import React, { Component } from 'react';
import { Text } from 'react-native';
import { CardSection } from './common';
import { connect } from 'react-redux';
import * as actions from '../actions';

class ListItem extends Component {
  render() {
    const { textTitleStyle } = styles;
    console.log(this.props);
    return(
      <CardSection>
        <Text style={textTitleStyle} >
          {this.props.library.title}
        </Text>
      </CardSection>
    );
  }
}

const styles = {
  textTitleStyle : {
    fontSize: 18,
    paddingLeft: 15
  }
};

export default connect(null, actions)(ListItem);
