import React, { FC } from "react";
import TextField, { TextFieldProps } from "@mui/material/TextField";
import PropTypes from "prop-types";
import { useField } from "formik";

export interface MyTextFieldProps {
  name: string;
}

export type Props = MyTextFieldProps & TextFieldProps;

const BaseTextField: FC<Props> = ({ name, ...otherProps }) => {
  const [field, meta] = useField(name);

  const configTextField = {
    ...field,
    ...otherProps,
    error: false,
    helperText: "",
    fullWidth: true,
  };

  if (meta && meta.touched && meta.error) {
    configTextField.error = true;
    configTextField.helperText = meta.error;
  }

  return <TextField {...configTextField} />;
};

BaseTextField.defaultProps = {
  type: "text",
  variant: "outlined",
};

BaseTextField.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
};

export default BaseTextField;
