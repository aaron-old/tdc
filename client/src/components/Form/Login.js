import React, {Component} from 'react';
import EmailField from './Field/Email';
import PasswordField from './Field/Password';

const styles = {
  marginTop: 20,
  marginLeft: 20
};

class LoginForm extends Component{

    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: ""
        }
    }

    updateFieldState(event) {
        console.log(event);
    }

    render() {
        return (
            <form className="login-form" style={styles}>
                <EmailField
                    name="loginEmail"
                    value={this.state.email}
                    onChange={this.updateFieldState.bind(this)}
                />
                <PasswordField/>
                <button type="submit">Submit</button>
            </form>
        )
    }
};

export default LoginForm;