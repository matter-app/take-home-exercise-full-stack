import React from "react";
import PropTypes from "prop-types";
import "./Button.css";

const Button = ({ onClick, children, type = null, variant }) => (
  <button type={type} className={variant} onClick={onClick}>
    {children}
  </button>
);

Button.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.string,
  type: PropTypes.string,
  variant: PropTypes.string
};

export default Button;
