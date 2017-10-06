import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import { CardSection } from './common';
import { connect } from 'react-redux';
import * as actions from '../actions';

class ListItem extends Component {

  renderDetail(){
    if( this.props.library.id === this.props.selectedLibraryId ) {
      return (
        <Text>
          { this.props.library.description }
        </Text>
      );
    }
  }

  render() {
    const { textTitleStyle } = styles;
    console.log(this.props);
    return(
      <TouchableWithoutFeedback
        onPress={() => this.props.selectLibrary(this.props.library.id)}>
        <View>
          <CardSection>
            <Text style={textTitleStyle} >
              {this.props.library.title}
            </Text>
          </CardSection>
          {this.renderDetail()}
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = {
  textTitleStyle : {
    fontSize: 18,
    paddingLeft: 15
  }
};

const mapStateToProps = state => {
  return { selectedLibraryId: state.selectedLibraryId };
}

export default connect(mapStateToProps, actions)(ListItem);
