import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner, Card, CardSection } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  state = {
    loggedIn: null
  };

  componentWillMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyAvkBQnRmi0eDQkmlxN7DT1e5OilyxDhv0",
      authDomain: "mi-salario-real.firebaseapp.com",
      databaseURL: "https://mi-salario-real.firebaseio.com",
      projectId: "mi-salario-real",
      storageBucket: "mi-salario-real.appspot.com",
      messagingSenderId: "805778536630"
    });

    firebase.auth().onAuthStateChanged((user) => {
      console.log(user);
      if(user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return(
          <Card>
            <CardSection>
              <Button onPress = {() => firebase.auth().signOut()}>
                Log Out
              </Button>
            </CardSection>
          </Card>
        );
        break;
      case false:
        return(
          <LoginForm/>
        );
        break;
      default:
        return (
          <Spinner size={'large'}/>
        );
    }
  }

  render() {
    return (
      <View>
        <Header headerText={'Auth App'}/>
        {this.renderContent()}
      </View>
    );
  }
}

export default App;
