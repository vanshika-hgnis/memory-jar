import React from "react";
import PropTypes from "prop-types";

const Button = ({
  variant = "filled", // 'filled', 'outline'
  size = "mid", // 'small', 'mid', 'big'
  children,
  onClick,
  className = "",
}) => {
  // Define base styles
  const baseStyles = `inline-flex items-center justify-center font-medium rounded transition-colors duration-500 focus:outline-none focus:ring-2 focus:ring-offset-2`;

  // Define size styles
  const sizeStyles = {
    small: "py-1 px-3 text-sm",
    mid: "py-2 px-4 text-base",
    big: "py-3 px-6 text-lg",
  };

  // Define variant styles
  const variantStyles = {
    filled: "bg-black/80 text-white hover:bg-black/70",
    outline: "border border-black text-black hover:bg-gray-100",
    theme: "bg-blue text-white hover:bg-blue-700",
  };

  // Compute final styles
  const styles = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;

  return (
    <button className={styles} onClick={onClick}>
      {children}
    </button>
  );
};

// Define PropTypes for type checking
Button.propTypes = {
  variant: PropTypes.oneOf(["filled", "outline"]),
  size: PropTypes.oneOf(["small", "mid", "big"]),
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  className: PropTypes.string,
};

export default Button;
