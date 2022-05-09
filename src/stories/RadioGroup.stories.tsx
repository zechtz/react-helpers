import React from "react";
import { Story } from "@storybook/react";

import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { Props } from "../components/Select/Select";
import { RadioGroup } from "../components";

export default {
  title: "RadioGroup",
  component: RadioGroup,
  argTypes: {
    onchange: { action: "onchange" },
  },
};

const FORM_INITIAL_STATE = {
  gender: "",
};

const FORM_VALIDATION = Yup.object().shape({
  gender: Yup.number().integer().required("Gender is required"),
});

const Template: Story<Props> = (args) => {
  return (
    <Formik
      initialValues={FORM_INITIAL_STATE}
      validationSchema={FORM_VALIDATION}
      onSubmit={(values) => console.log(values)}
      enableReinitialize
    >
      {() => (
        <Form>
          <Field component={RadioGroup} {...args} />
        </Form>
      )}
    </Formik>
  );
};

export const Default = Template.bind({});

const changed = (event: any) => {
  console.log(event);
};

const genderOptions = [
  { id: 1, name: "Male" },
  { id: 2, name: "Female" },
  { id: 3, name: "Other" },
];

Default.args = {
  name: "gender",
  items: genderOptions,
  label: "Select Gender",
  onChange: changed,
};
