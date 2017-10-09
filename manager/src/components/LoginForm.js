import React, {Component} from 'react';
import {
  Card,
  CardSection,
  Input,
  Button
} from './common';

class LoginForm extends Component {

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            placeholder = {'user@gmail.com'}
            label = {'Email'}/>
        </CardSection>

        <CardSection>
          <Input
            secureTextEntry
            placeholder = {'password'}
            label = {'Password'}/>
        </CardSection>

        <CardSection>
          <Button>
            Login
          </Button>
        </CardSection>
      </Card>
    );
  }
}

export default LoginForm;