import { Story } from "@storybook/react";
import React from "react";
import { Button } from "../components";
import { Props } from "../components/Button/Button";

export default {
  title: "Button",
  component: Button,
};

const Template: Story<Props> = (args) => <Button {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  children: "Press Me",
  size: "large",
  variant: "contained",
  color: "primary",
};
