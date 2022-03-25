import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import Header from "./index";

export default {
  title: "organisms/Header",
  component: Header,
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />;

export const Component = Template.bind({});

Component.args = {
  location: "East Marredpally, Secunderabad",
};
