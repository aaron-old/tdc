import React from 'react';
import PropTypes from 'prop-types';

const EmailField = (props) => (

    <div className="form-group">
        <label className="control-label">Email</label>
        <input
            className="form-control"
            name={props.name}
            type="email"
            value={props.content}
            onChange={props.onChangeFunc}
            placeholder={props.placeholder || ""} />
    </div>
);

EmailField.propTypes = {
    name: PropTypes.string.isRequired,
    onChange: PropTypes.onChangeFunc,
    value: PropTypes.string.isRequired,
    placeholder: PropTypes.string
};

export default EmailField;