import React from "react";

export default interface MButtonProps {
  variant?: "text" | "outlined" | "contained"; // Which type of button you want to use: text, outlined, contained

  label?: string; // label for button

  color?: 'primary' | 'secondary' | 'error' | 'warning' | 'success' | 'info'; // Color for button

  size?: 'small' | 'medium' | 'large'; // Sizes for button

  onClick?: () => void; // Events

  disabled?: boolean; // 	If true, the component is disabled.

  disableElevation?: boolean; // if true, no elevation is used.

  disableFocusRipple?: boolean; // if true,  the keyboard focus ripple is disabled.

  disableRipple?: boolean;

  fullWidth?: boolean; // If true, the button will take up the full width of its container.

  children?: React.ReactNode; // The content of the component.
}