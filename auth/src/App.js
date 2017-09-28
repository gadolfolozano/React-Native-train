import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {

  componentWillMount() {
    firebase.initializeApp({
    apiKey: "AIzaSyAvkBQnRmi0eDQkmlxN7DT1e5OilyxDhv0",
    authDomain: "mi-salario-real.firebaseapp.com",
    databaseURL: "https://mi-salario-real.firebaseio.com",
    projectId: "mi-salario-real",
    storageBucket: "mi-salario-real.appspot.com",
    messagingSenderId: "805778536630"
    });
  }

  render() {
    return (
      <View>
        <Header headerText={'Auth App'}/>
        <LoginForm/>
      </View>
    );
  }
}

export default App;
