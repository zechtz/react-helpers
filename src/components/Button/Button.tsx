import React, { FC, ReactNode } from "react";

import Button, { ButtonProps } from "@mui/material/Button";

interface BtnProps extends ButtonProps {
  children: ReactNode;
}

const BaseButton: FC<BtnProps> = ({ children, ...otherProps }) => {
  const buttonConfig: ButtonProps = {
    variant: "contained",
    color: "primary",
    fullWidth: true,
    ...otherProps,
  };

  return <Button {...buttonConfig}>{children}</Button>;
};

export default BaseButton;
