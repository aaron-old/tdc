import React, { Component } from 'react';
import EmailField from './Field/Email';
import PasswordField from './Field/Password';

const styles = {
  marginTop: 20,
  marginLeft: 20,
};

class LoginForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handleEmailChange.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }

  handleLogin(event) {
    event.preventDefault();
        // TODO: Create authentication service call with the payload.
  }

  handleEmailChange(event) {
    this.setState({ email: event.target.value });
  }

  handlePasswordChange(event) {
    this.setState({ password: event.target.value });
  }

  render() {
    return (
      <form className="login-form" style={styles}>
        <EmailField
          label="Email"
          name="loginEmail"
          value={this.state.email}
          onChange={this.handleEmailChange}
        />
        <PasswordField
          label="Password"
          name="loginPassword"
          value={this.state.password}
          onChange={this.handlePasswordChange}
        />
        <button
          type="submit"
          className="btn btn-primary"
          onClick={this.handleLogin}
        >Submit</button>
      </form>
    );
  }
}
export default LoginForm;
