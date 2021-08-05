import React, { Component } from "react";
import FormInput from "../../Components/FormInput/FormInput";
import CustomButton from "../../Components/CustomButton/CustomButton";

export class Contact extends Component {
  constructor() {
    super();
    this.state = {
      displayName: "",
      email: "",
      number: "",
      message: "",
    };
  }
  handleSubmit = (event) => {
    event.preventDefault();
  };
  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };
  render() {
    const { displayName, email, number, message } = this.state;
    return (
      <div className='sign-up'>
        <h2 className='title'>Contact Us</h2>
        <form onSubmit={this.handleSubmit} className='sign-up-form'>
          <FormInput
            type='text'
            name='displayName'
            value={displayName}
            onChange={this.handleChange}
            label='Display Name'
            required
          ></FormInput>
          <FormInput
            type='email'
            name='email'
            value={email}
            onChange={this.handleChange}
            label='Email'
            required
          ></FormInput>
          <FormInput
            type='tel'
            name='number'
            value={number}
            onChange={this.handleChange}
            label='Number'
            required
          ></FormInput>
          <FormInput
            type='text'
            name='message'
            value={message}
            onChange={this.handleChange}
            label='Message'
            required
          ></FormInput>
          <CustomButton type='submit'>Submit</CustomButton>
        </form>
      </div>
    );
  }
}

export default Contact;
