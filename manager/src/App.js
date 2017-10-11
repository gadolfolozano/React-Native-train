import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import LoginForm from './components/LoginForm';

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

    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store ={store}>
        <LoginForm/>
      </Provider>
    );
  }
}

export default App;
