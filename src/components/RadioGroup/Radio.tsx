import React from "react";

import MUIRadio, { RadioProps } from "@mui/material/Radio";
import FormControlLabel from "@mui/material/FormControlLabel";
import PropTypes from "prop-types";

export interface Props extends RadioProps {
  checked: boolean;
  disabled: boolean;
  inputRef: any;
  label: string;
}

export const Radio: React.FC<Props> = ({
  checked,
  color,
  disabled,
  id,
  inputRef,
  label,
  onChange,
  value,
}) => (
  <FormControlLabel
    control={
      <MUIRadio
        checked={checked}
        color={color}
        disabled={disabled}
        id={id}
        inputRef={inputRef}
        value={value}
        onChange={onChange}
        data-testid="radio"
      />
    }
    label={label}
    labelPlacement="end"
  />
);

Radio.propTypes = {
  id: PropTypes.string,
  inputRef: PropTypes.any,
  checked: PropTypes.bool.isRequired,
  disabled: PropTypes.bool.isRequired,
  label: PropTypes.string.isRequired,
};
export default Radio;
