import { ComponentMeta, ComponentStory } from "@storybook/react";
import * as React from "react";
import JobDescription from ".";
import { jobDetailData } from "./props";

export default {
  title: "Organisms/JobDescription",
  component: JobDescription,
} as ComponentMeta<typeof JobDescription>;

const Template: ComponentStory<typeof JobDescription> = (args) => (
  <JobDescription {...args}></JobDescription>
);

export const Default = Template.bind({});

Default.args = {
  ...jobDetailData,
};
