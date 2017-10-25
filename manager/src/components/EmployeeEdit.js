import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Comunications from 'react-native-communications';
import {
  Card,
  CardSection,
  Button
} from './common';
import { employeeUpdate, employeSave } from '../actions';
import EmployeeForm from './EmployeeForm';

class EmployeeEdit extends Component {

  componentWillMount() {
    console.log("componentWillMount", this.props);
    _.each(this.props.employee, (value, prop) => {
      console.log("each", prop, value);
      this.props.employeeUpdate({ prop, value });
    });
  }

  onButtonPress () {
    const { name, phone, shift } = this.props;

    this.props.employeSave({ name, phone, shift, uid: this.props.employee.uid });
  }

  onTextPress () {
      const { phone, shift } = this.props;

      Comunications.text(phone, `Your upcoming shift is on ${shift}`);
  }

  render () {
    console.log("render", this.props);

      return (
        <Card>

          <EmployeeForm />

          <CardSection>
            <Button onPress={this.onButtonPress.bind(this)}>
              Save Changues
            </Button>
          </CardSection>

          <CardSection>
            <Button onPress={this.onTextPress.bind(this)}>
              Text Schedule
            </Button>
          </CardSection>
        </Card>
      );
  }
}

const mapStateToProps = (state) => {
  const { name, phone, shift } = state.employeeForm;

  return {name, phone, shift};
}

export default connect(mapStateToProps, { employeeUpdate, employeSave })(EmployeeEdit);
