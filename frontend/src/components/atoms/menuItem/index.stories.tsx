import { ComponentMeta, ComponentStory } from "@storybook/react";
import * as React from "react";
import MenuItem from ".";
import { menuItemData } from "./props";

export default {
  title: "Atoms/MenuItem",
  component: MenuItem,
} as ComponentMeta<typeof MenuItem>;

const Template: ComponentStory<typeof MenuItem> = (args) => (
  <MenuItem {...args}>Link</MenuItem>
);

export const Default = Template.bind({});

Default.args = { ...menuItemData };
