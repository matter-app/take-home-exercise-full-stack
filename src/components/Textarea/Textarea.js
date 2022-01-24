import React from "react";
import PropTypes from "prop-types";
import "./Textarea.css";

const Textarea = ({ onChange, value, name, placeholder, error }) => (
  <>
    <textarea
      onChange={onChange}
      value={value}
      name={name}
      placeholder={placeholder}
    />
    <div className="errorMsg">{error}</div>
  </>
);

Textarea.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  error: PropTypes.string
};

export default Textarea;
