import React from "react";

import ButtonBase from "@mui/material/ButtonBase";

interface BtnProps {
  children: React.ReactNode;
}

const BaseButton = ({ children, ...otherProps }: BtnProps) => {
  const buttonConfig = {
    variant: "contained",
    color: "primary",
    fullWidth: true,
    ...otherProps,
  };

  return <ButtonBase {...buttonConfig}>{children}</ButtonBase>;
};

export default BaseButton;
