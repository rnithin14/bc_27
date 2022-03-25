import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import Checkbox from "./index";

export default {
  title: "Atoms/Checkbox",
  component: Checkbox,
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = (args) => (
  <Checkbox {...args} />
);

export const Default = Template.bind({});

Default.args = {
  label: "Green Commute",
  check: true,
  onChange: () => {},
};
