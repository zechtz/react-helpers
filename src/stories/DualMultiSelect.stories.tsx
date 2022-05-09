import React from "react";
import { Story } from "@storybook/react";
import { DualMultiSelect } from "../components";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import { Props } from "../components/DualMultiSelect/DualMultiSelect";

export default {
  title: "DualMultiSelect",
  component: DualMultiSelect,
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
          <DualMultiSelect {...args} />
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
const selectedGender = [{ id: 1, name: "Male" }];

Default.args = {
  selectedItems: selectedGender,
  label: "Select Gender",
  items: genderList,
  rightLabel: "Selected Gender",
};
