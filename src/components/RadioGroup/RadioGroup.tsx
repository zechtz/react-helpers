import React, { FC } from "react";
import { RadioClasses } from "@mui/material";
import RadioGroup from "@mui/material/RadioGroup";
import PropTypes from "prop-types";

import { FieldProps } from "formik";

import Radio from "./Radio";

export interface Props extends RadioClasses {
  name: string;
  items: Array<any>;
}

type RadioProps = Props & FieldProps;

const BaseRadioGroup: FC<RadioProps> = (props) => {
  const { field, name, items, ...otherProps } = props;

  const fieldName = name || field.name;

  const configureRadioGroup = {
    ...field,
    ...otherProps,
  };

  return (
    <RadioGroup row {...field} {...configureRadioGroup} name={fieldName}>
      {items.map((item) => (
        <Radio
          key={item.id}
          value={item.id}
          checked={field.value === item.id.toString()}
          onChange={field.onChange}
          label={item.name}
          id={fieldName}
          disabled={false}
          inputRef={undefined}
        />
      ))}
    </RadioGroup>
  );
};

BaseRadioGroup.propTypes = {
  name: PropTypes.string.isRequired,
  items: PropTypes.array.isRequired,
};

export default BaseRadioGroup;
