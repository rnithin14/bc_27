import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import UploadSuccessful from "./index";

export default {
  title: "molecules/ResumeUploadModal",
  component: UploadSuccessful,
} as ComponentMeta<typeof UploadSuccessful>;

const Template: ComponentStory<typeof UploadSuccessful> = (args) => (
  <UploadSuccessful {...args} />
);

export const Default = Template.bind({});

Default.args = {};
