import React, {Component} from 'react';
import { TextInput } from 'react-native';
import { Button, Card, CardSection, Input } from './common';

class LoginForm extends Component {
  state = {
    email: '',
    password: ''
  };

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            placeholder = {'user@gmail.com'}
            label = {'Email'}
            value = {this.state.text}
            onChangeText = {text => this.setState({ email: text })}/>
        </CardSection>

        <CardSection>
          <Input
            secureTextEntry
            placeholder = {'password'}
            label = {'Password'}
            value = {this.state.password}
            onChangeText = {password => this.setState({ password })}/>
        </CardSection>

        <CardSection>
          <Button>
            Log in
          </Button>
        </CardSection>
      </Card>
    );
  }
}

export default LoginForm;
