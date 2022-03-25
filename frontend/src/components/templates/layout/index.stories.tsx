import { ComponentMeta, ComponentStory } from "@storybook/react";
import * as React from "react";
import Layout from "./index";

export default {
  title: "templates/Layout",
  component: Layout,
} as ComponentMeta<typeof Layout>;

const Template: ComponentStory<typeof Layout> = (args) => (
  <Layout {...args}></Layout>
);

export const Default = Template.bind({});

Default.args = {
  location: "East Marredpally, Secunderabad",
};
