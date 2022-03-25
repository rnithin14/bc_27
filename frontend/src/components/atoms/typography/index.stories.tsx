import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import MuiTypography from "./index";

export default {
  title: "Atoms/Typography",
  component: MuiTypography,
  argTypes: {
    color: { control: "color" },
    variant: {
      control: "select",
      options: [
        "h1",
        "h2",
        "h3",
        "subtitle1",
        "subtitle2",
        "body1",
        "body2",
        "caption1",
        "caption2",
      ],
    },
  },
} as ComponentMeta<typeof MuiTypography>;

const Template: ComponentStory<typeof MuiTypography> = (args) => (
  <MuiTypography {...args} />
);

export const Default = Template.bind({});

Default.args = {
  variant: "h1",
  children: "GreenCommute",
  color: "0B6D62",
};
