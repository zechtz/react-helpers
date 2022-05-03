import React, { FC, ReactNode } from "react";

import { Button as MuiButton, ButtonProps } from "@mui/material";

interface BtnProps extends ButtonProps {
  children: ReactNode;
}

const Button: FC<BtnProps> = ({ children, ...otherProps }) => {
  const buttonConfig: ButtonProps = {
    variant: "contained",
    color: "primary",
    fullWidth: true,
    ...otherProps,
  };

  return <MuiButton {...buttonConfig}>{children}</MuiButton>;
};

export default Button;
