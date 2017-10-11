import React, {Component} from 'react';
import { connect } from 'react-redux';
import { emailChanged } from '../actions';
import {
  Card,
  CardSection,
  Input,
  Button
} from './common';

class LoginForm extends Component {

  onEmailChange(text) {
    this.props.emailChanged(text);
  }

  render() {
    console.log(this.props);
    return (
      <Card>
        <CardSection>
          <Input
            placeholder = {'user@gmail.com'}
            label = {'Email'}
            onChangeText={this.onEmailChange.bind(this)}
            value= {this.props.email} />
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

const mapStateToProps = state => {
  return {
    email: state.auth.email
  }
}

export default connect(mapStateToProps, { emailChanged })(LoginForm);
