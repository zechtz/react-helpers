import React, { FC, ReactNode } from "react";
import Button, { ButtonProps } from "@mui/material/Button";
import PropTypes from "prop-types";

export interface Props extends ButtonProps {
  children: ReactNode;
}

const BaseButton: FC<Props> = ({ children, ...otherProps }) => {
  const buttonConfig: ButtonProps = {
    variant: "contained",
    color: "primary",
    fullWidth: true,
    ...otherProps,
  };

  return <Button {...buttonConfig}>{children}</Button>;
};

BaseButton.defaultProps = {
  variant: "contained",
  color: "primary",
};

BaseButton.propTypes = {
  variant: PropTypes.oneOf(["text", "outlined", "contained"]),
  color: PropTypes.oneOf([
    "inherit",
    "primary",
    "secondary",
    "success",
    "error",
  ]),
  onClick: PropTypes.func,
};

export default BaseButton;
