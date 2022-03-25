import { ComponentMeta, ComponentStory } from "@storybook/react";
import * as React from "react";
import DetailsImage from './index';
import image from "../../../assets/images/jobs.svg"


export default {
  title: "Molecules/DetailsImage",
  component: DetailsImage,
} as ComponentMeta<typeof DetailsImage>;

const Template: ComponentStory<typeof DetailsImage> = (args) => <DetailsImage {...args}/>;

export const Default = Template.bind({});

Default.args = {
  imageCaptionLine1: "Enter Location to know",
  imageCaptionLine2: "Time Air Quality Index (AQI)",
  image: image
};
