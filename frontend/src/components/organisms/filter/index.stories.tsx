import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import Filter from "./index";

export default {
  title: "organisms/Filter",
  component: Filter,
} as ComponentMeta<typeof Filter>;

const Template: ComponentStory<typeof Filter> = (args) => <Filter {...args} />;

export const primary = Template.bind({});
