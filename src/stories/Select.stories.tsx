import React from "react";
import { Story } from "@storybook/react";
import { Select } from "../components";

import { Form, Formik } from "formik";
import * as Yup from "yup";
import { Props } from "../components/Select/Select";

export default {
  title: "Select",
  component: Select,
  argTypes: {
    onchange: { action: "onchange" },
  },
};

const FORM_INITIAL_STATE = {
  gender: "",
};

const FORM_VALIDATION = Yup.object().shape({
  gender: Yup.string().required("Gender is required"),
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
          <Select {...args} />
        </Form>
      )}
    </Formik>
  );
};

export const Default = Template.bind({});

const genderList = [
  { id: 1, name: "Male" },
  { id: 2, name: "Female" },
];

Default.args = {
  name: "gender",
  items: genderList,
  label: "Select Gender",
};
