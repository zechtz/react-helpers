import React, { FC } from "react";
import TextField, { TextFieldProps } from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import PropTypes from "prop-types";

import { useField, useFormikContext } from "formik";

export interface MySelectProps {
  name: string;
  items: Array<any>;
  displayName?: string;
  itemValue?: string;
}

export type Props = MySelectProps & TextFieldProps;

const Select: FC<Props> = ({
  name,
  displayName,
  itemValue,
  items,
  ...otherProps
}) => {
  const { setFieldValue } = useFormikContext();

  const handleChange = (evt: any) => {
    const { value } = evt.target;
    if (evt) {
      setFieldValue(name, value);
    }
  };

  const [field, meta] = useField(name);

  const configSelect = {
    ...field,
    ...otherProps,
    error: false,
    helperText: "",
    fullWidth: true,
    select: true,
    onChange: handleChange,
  };

  if (meta && meta.touched && meta.error) {
    configSelect.error = true;
    configSelect.helperText = meta.error;
  }

  return (
    <TextField {...configSelect}>
      {items.map((item) => (
        <MenuItem
          key={itemValue ? item[itemValue] : item.id}
          value={itemValue ? item[itemValue] : item.id}
        >
          {displayName ? item[displayName] : item.name}
        </MenuItem>
      ))}
    </TextField>
  );
};

Select.defaultProps = {
  select: true,
  variant: "outlined",
};

Select.propTypes = {
  name: PropTypes.string.isRequired,
  items: PropTypes.array.isRequired,
  displayName: PropTypes.string,
  itemValue: PropTypes.string,
  onChange: PropTypes.func,
};

export default Select;
