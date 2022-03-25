import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import Upload from "./index";

export default {
  title: "Atoms/Upload",
  component: Upload,
} as ComponentMeta<typeof Upload>;

const Template: ComponentStory<typeof Upload> = (args) => <Upload {...args}/>;

export const Default = Template.bind({});

Default.args = {
  children: "Upload Resume"
};

