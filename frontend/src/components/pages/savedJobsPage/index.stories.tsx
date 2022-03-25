import { ComponentMeta, ComponentStory } from "@storybook/react";
import * as React from "react";
import SavedJobsPage from "./index";

export default {
  title: "pages/SavedJobsPage",
  component: SavedJobsPage,
} as ComponentMeta<typeof SavedJobsPage>;

const Template: ComponentStory<typeof SavedJobsPage> = (args) => (
  <SavedJobsPage {...args}></SavedJobsPage>
);

export const Default = Template.bind({});

Default.args = {
  userLocation: "East Marredpally, Secunderabad",
};
