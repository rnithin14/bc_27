import React from "react";
import SearchStep from "./index";
import tick from "../../../assets/icons/tick.svg";

import { ComponentStory, ComponentMeta } from "@storybook/react";
export default {
  title: "molecules/SearchStep",
  component: SearchStep,
} as ComponentMeta<typeof SearchStep>;

const Template: ComponentStory<typeof SearchStep> = (args) => (
  <SearchStep {...args} />
);

export const Default = Template.bind({});

Default.args = {
  heading: "Your Location",
  status: "notdone",
  number: 1,
  icon: tick,
};

export const active = Template.bind({});

active.args = {
  heading: "Your Location",
  status: "current",
  number: 1,
  icon: tick,
};

export const Done = Template.bind({});

Done.args = {
  heading: "Your Location",
  status: "done",
  number: 1,
  icon: tick,
};
