import React from 'react';
import PropTypes from 'prop-types';

const PasswordField = (props) => {

    return (
        <div className="form-group">
            <label>{props.label}</label>
            <input
                className="form-control"
                name={props.name}
                type="password"
                value={props.content}
                onChange={props.onChange}
                placeholder={props.placeholder || ""}/>
        </div>
    )
};

PasswordField.propTypes = {
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    placeholder: PropTypes.string
};

export default PasswordField;