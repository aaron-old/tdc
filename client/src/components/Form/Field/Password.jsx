import React from 'react';
import PropTypes from 'prop-types';

const PasswordField = props => (
  <div className="form-group">
    <label className="control-label" htmlFor={props.inputId}>{props.label}</label>
    <input
      className="form-control"
      name={props.name}
      type="password"
      value={props.value}
      onChange={props.onChange}
      placeholder={props.placeholder}
    />
  </div>
);

PasswordField.propTypes = {
  inputId: PropTypes.string,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
};

PasswordField.defaultProps = {
  inputId: 'password_id',
  placeholder: '',
};

export default PasswordField;
