import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import firebase from 'firebase';

class App extends Component {

  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyAvkBQnRmi0eDQkmlxN7DT1e5OilyxDhv0',
      authDomain: 'mi-salario-real.firebaseapp.com',
      databaseURL: 'https://mi-salario-real.firebaseio.com',
      projectId: 'mi-salario-real',
      storageBucket: 'mi-salario-real.appspot.com',
      messagingSenderId: '805778536630'
    };
    firebase.initializeApp(config);
  }

  render() {
    return (
      <Provider store ={createStore(reducers)}>
        <View>
          <Text>
            Hello!
          </Text>
        </View>
      </Provider>
    );
  }
}

export default App;
