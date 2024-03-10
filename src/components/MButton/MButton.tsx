import { FC } from "react";
import Button from "@mui/material/Button";
import MButtonProps from "./MButtonProps";


export const MButton: FC<MButtonProps> = ({
  variant,
  label = "Button",
  color,
  size,
  ...rest
}) => {

  return (
    <Button variant={variant} color={color} size={size} {...rest}>
      {label}
    </Button>
  );
};
