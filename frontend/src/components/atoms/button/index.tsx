import { Button as MuiButton } from "@mui/material";
import React from "react";

import { CustomButtonProps } from "./props";

const Button: React.FC<CustomButtonProps> = ({
  startIcon,
  endIcon,
  children,
  variant,
  className,
  onClick,
}) => (
  <MuiButton
    startIcon={startIcon}
    endIcon={endIcon}
    data-testid="button"
    onClick={onClick}
    variant={variant}
    className={className}
  >
    {children}
  </MuiButton>
);

export default Button;
