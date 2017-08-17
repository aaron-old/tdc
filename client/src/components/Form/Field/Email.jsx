import React from 'react';
import PropTypes from 'prop-types';

const EmailField = props => (
  <div className="form-group">
    <label className="control-label" htmlFor={props.name}>{props.label}</label>
    <input
      id={props.inputId}
      className="form-control"
      name={props.name}
      type="email"
      value={props.value}
      onChange={props.onChange}
      placeholder={props.placeholder}
    />
  </div>
);

EmailField.propTypes = {
  inputId: PropTypes.string,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
};

EmailField.defaultProps = {
  onChange: null,
  placeholder: '',
  inputId: 'email_id',
};

export default EmailField;
