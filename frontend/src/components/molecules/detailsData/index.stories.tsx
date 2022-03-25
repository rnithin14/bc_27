import { ComponentMeta, ComponentStory } from "@storybook/react";
import * as React from "react";
import DetailsData from './index';


export default {
  title: "Molecules/DetailsData",
  component: DetailsData,
} as ComponentMeta<typeof DetailsData>;

const Template: ComponentStory<typeof DetailsData> = (args) => <DetailsData {...args}/>;

export const Default = Template.bind({});

Default.args = {
  values: ["23","123"],
  valuesTag: ["Hyderabad", "Mumbai"],
  labelLine1: "Real Time Air Quality Index(AQI)",
  labelLine2: "in this location"
};
