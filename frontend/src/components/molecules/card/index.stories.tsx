import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import Card from ".";
import { cardData } from "./props";

export default {
  title: "Molecules/Card",
  component: Card,
  argTypes: {
    orientation: {
      control: "radio",
      options: ["horizontal", "vertical", "horizontalButton"],
    },
  },
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const Default = Template.bind({});

Default.args = {
  ...cardData,
};
