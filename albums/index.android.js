import React from 'react';
import {View, AppRegistry} from 'react-native';
import Header from './src/modules/Header';
import AlbumList from './src/modules/AlbumList';

const App = () => {
  return(
    <View style={{ flex: 1 }}>
      <Header headerText={'Albums!'}/>
      <AlbumList/>
    </View>
  );
};

AppRegistry.registerComponent('albums', () => App);