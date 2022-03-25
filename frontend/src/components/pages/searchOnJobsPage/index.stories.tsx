import { ComponentMeta, ComponentStory } from "@storybook/react";
import * as React from "react";
import SearchOnJobsPage from "./index";

export default {
  title: "Pages/SearchOnJobsPage",
  component: SearchOnJobsPage,
} as ComponentMeta<typeof SearchOnJobsPage>;

const Template: ComponentStory<typeof SearchOnJobsPage> = (args) => (
  <SearchOnJobsPage {...args} />
);

export const Component = Template.bind({});
