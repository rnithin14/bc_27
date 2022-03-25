import { ComponentMeta, ComponentStory } from "@storybook/react";
import * as React from "react";
import Recommend from "./index";
//import React from "react";

export default {
  title: "Pages/RecommendedJobs",
  component: Recommend,
} as ComponentMeta<typeof Recommend>;

const Template: ComponentStory<typeof Recommend> = (args) => (
  <Recommend {...args} />
);

export const Component = Template.bind({});

