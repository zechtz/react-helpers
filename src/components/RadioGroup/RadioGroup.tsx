import React, { FC, ReactNode } from "react";

import RadioGroup, { RadioGroupProps } from "@mui/material/RadioGroup";
import BaseRadio from "./Radio";

interface Field {
  name?: string;
  value?: string;
  onChange?: any;
}

interface RdioGroupProps extends RadioGroupProps {
  children: ReactNode;
  name: string;
  itemValue: string;
  options: Array<any>;
  field: Field;
}

const BaseRadioGroup: FC<RdioGroupProps> = ({
  field,
  name,
  itemValue,
  options,
  onChange,
  children,
  ...otherProps
}) => {
  const fieldName = name || field.name;

  const configureRadioGroup = {
    name,
    color: "primary",
    ...otherProps,
  };

  return (
    <RadioGroup row {...configureRadioGroup} name={fieldName}>
      {options.map((option) => (
        <BaseRadio
          key={option.id}
          value={option.id}
          checked={field.value === option.id.toString()}
          onChange={field.onChange}
          label={option.name}
          id={fieldName}
        />
      ))}
    </RadioGroup>
  );
};

export default BaseRadioGroup;
