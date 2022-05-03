import React, { FC } from "react";

import Radio, { RadioProps } from "@mui/material/Radio";
import FormControlLabel from "@mui/material/FormControlLabel";

interface RdioProps extends RadioProps {
  checked: boolean;
  label: string;
  value: any;
}

export const BaseRadio: FC<RdioProps> = ({
  checked,
  color,
  disabled,
  id,
  label,
  inputRef,
  onChange,
  value,
}) => (
  <FormControlLabel
    control={
      <Radio
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
export default BaseRadio;
