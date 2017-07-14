import React from 'react';
import PropTypes from 'prop-types';

const EmailField = (props) => {

    return (
        <div className="form-group">
            <label className="control-label">{props.label}</label>
            <input
                className="form-control"
                name={props.name}
                type="email"
                value={props.content}
                onChange={props.onChange}
                placeholder={props.placeholder || ""} />
        </div>
    )
};

EmailField.propTypes = {
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func,
    value: PropTypes.string.isRequired,
    placeholder: PropTypes.string
};

export default EmailField;