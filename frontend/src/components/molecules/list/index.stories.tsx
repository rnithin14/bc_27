import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import List from ".";
import { listData } from "./props";

export default {
  title: "Molecules/List",
  component: List,
} as ComponentMeta<typeof List>;

const Template: ComponentStory<typeof List> = (args) => <List {...args} />;

export const Default = Template.bind({});

Default.args = {
  ...listData,
};
