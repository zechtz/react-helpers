import React from "react";
import { Story } from "@storybook/react";
import { TextField } from "../components";

import { Form, Formik } from "formik";
import * as Yup from "yup";
import { Props } from "../components/TextField/TextField";

export default {
  title: "TextField",
  component: TextField,
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
          <TextField {...args} />
        </Form>
      )}
    </Formik>
  );
};

export const Default = Template.bind({});

Default.args = {
  name: "gender",
  label: "Add Gender",
};
