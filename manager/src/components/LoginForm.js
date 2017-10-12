import React, {Component} from 'react';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, loginUser } from '../actions';
import {
  Card,
  CardSection,
  Input,
  Button
} from './common';
import { Text } from 'react-native';

class LoginForm extends Component {

  onEmailChange(text) {
    this.props.emailChanged(text);
  }

  onPasswordChange(text) {
    this.props.passwordChanged(text);
  }

  onButtonPress() {
    const { email, password } = this.props;

    this.props.loginUser({ email, password });
  }

  render() {
    console.log(this.props);
    return (
      <Card>
        <CardSection>
          <Input
            placeholder = {'user@gmail.com'}
            label = {'Email'}
            onChangeText = {this.onEmailChange.bind(this)}
            value = {this.props.email} />
        </CardSection>

        <CardSection>
          <Input
            secureTextEntry
            placeholder = {'password'}
            label = {'Password'}
            onChangeText = {this.onPasswordChange.bind(this)}
            value = {this.props.password} />
        </CardSection>

        <Text style={styles.errorStyle}>
          {this.props.error}
        </Text>

        <CardSection>
          <Button onPress = {this.onButtonPress.bind(this)}>
            Login
          </Button>
        </CardSection>
      </Card>
    );
  }
}

const styles = {
  errorStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
};

const mapStateToProps = state => {
  return {
    email: state.auth.email,
    password: state.auth.password,
    error: state.auth.error
  }
}

export default connect(mapStateToProps,
  { emailChanged, passwordChanged, loginUser })(LoginForm);
