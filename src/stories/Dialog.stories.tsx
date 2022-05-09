import React, { useState } from "react";
import { Story } from "@storybook/react";
import { Dialog } from "../components";
import { Props } from "../components/Dialog/Dialog";

export default {
  title: "Dialog",
  component: Dialog,
};

const Template: Story<Props> = (args) => {
  return (
    <>
      <Dialog {...args}></Dialog>
    </>
  );
};

export const Default = Template.bind({});
Default.args = {
  fullWidth: true,
  maxWidth: "md",
  open: false,
  onCancel: () => console.log("cancel"),
  title: "Create/Update Role",
  children: <h2>Dialog Content</h2>,
};
