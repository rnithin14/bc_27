import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import BasicChip from "./index";

export default {
  title: "Atoms/Chip",
  component: BasicChip,
} as ComponentMeta<typeof BasicChip>;

const Template: ComponentStory<typeof BasicChip> = (args) => (
  <BasicChip {...args} />
);

export const Default = Template.bind({});

Default.args = {
  label: "10-20 Kms",
  handleDelete: () => {},
};
