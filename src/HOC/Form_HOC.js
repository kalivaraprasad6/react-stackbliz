import React, { Component } from 'react';

const Form_HOC = (OriginalComponent) => {
  class NewComponent extends Component {
    constructor(props) {
      super(props);
      this.state = {
        name: '',
        email: '',
        age: '',
        role: '',
      };
    }
    changeHandler = (e) => {
      this.setState({ ...this.state, [e.target.name]: [e.target.value] });
    };
    submitHandler = (e) => {
      e.preventDefault();
      console.log(
        `${this.state.email} ,  ${this.state.name} , ${this.state.age} , ${this.state.role}`
      );
    };
    render() {
      return (
        <OriginalComponent
          changeHandler={this.changeHandler}
          submitHandler={this.submitHandler}
          info={this.state}
        />
      );
    }
  }
  return NewComponent;
};
export default Form_HOC;
