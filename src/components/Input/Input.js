import React from "react";
import PropTypes from "prop-types";
import "./Input.css";

const Input = ({ onChange, value, name, placeholder, error }) => (
  <>
    <input
      onChange={onChange}
      value={value}
      name={name}
      placeholder={placeholder}
    />
    <div className="errorMsg">{error}</div>
  </>
);

Input.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  error: PropTypes.string
};

export default Input;
