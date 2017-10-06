import React, { Component } from 'react';
import {
  Text,
  TouchableWithoutFeedback,
  View,
  LayoutAnimation
} from 'react-native';
import { CardSection } from './common';
import { connect } from 'react-redux';
import * as actions from '../actions';

class ListItem extends Component {

  componentWillUpdate(){
    LayoutAnimation.spring();
  }

  renderDetail(){
    if( this.props.expanded ) {
      return (
        <CardSection>
          <Text style={{ flex:1 }}>
            { this.props.library.description }
          </Text>
        </CardSection>
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

const mapStateToProps = ( state, OwnProps ) => {
  const expanded = state.selectedLibraryId === OwnProps.library.id;
  return { expanded: expanded };
}

export default connect(mapStateToProps, actions)(ListItem);
