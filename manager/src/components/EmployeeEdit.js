import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Comunications from 'react-native-communications';
import {
  Card,
  CardSection,
  Button,
  Confirm
} from './common';
import { employeeUpdate, employeSave, employeDelete } from '../actions';
import EmployeeForm from './EmployeeForm';

class EmployeeEdit extends Component {
  state = { showModal: false };

  componentWillMount() {
    console.log("componentWillMount", this.props);
    _.each(this.props.employee, (value, prop) => {
      console.log("each", prop, value);
      this.props.employeeUpdate({ prop, value });
    });
  }

  onAccept() {
    this.props.employeDelete({ uid: this.props.employee.uid });
  }

  onDecline() {
    this.setState({ showModal: false });
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

          <CardSection>
            <Button onPress={() => this.setState({ showModal: !this.state.showModal })}>
              Fire Employe
            </Button>
          </CardSection>

          <Confirm
            visible={this.state.showModal}
            onAccept={this.onAccept.bind(this)}
            onDecline={this.onDecline.bind(this)}
          >
            Are you sure you want to delete this?
          </Confirm>
        </Card>
      );
  }
}

const mapStateToProps = (state) => {
  const { name, phone, shift } = state.employeeForm;

  return {name, phone, shift};
}

export default connect(mapStateToProps, { employeeUpdate, employeSave, employeDelete })(EmployeeEdit);
