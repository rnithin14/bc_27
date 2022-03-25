import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import Button from ".";

export default {
  title: "Atoms/Button",
  component: Button,
  argTypes: {
    variant: {
      control: "radio",
      options: ["text", "outlined", "contained","secondary","filter"],
    },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});

Default.args = {
  variant: "contained",
  children: "Button",
};
