
import React, {Component} from 'react';

class PasswordField extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: "",
            valid: false
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    render() {
        return (
            <div className="form-group">
                <label>Password</label>
                <input
                    type="password"
                    value={this.state.value}
                    onChange={this.handleChange}
                    className="form-control"/>
            </div>
        )
    }
}

export default PasswordField;