import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import Link from "./index";

export default {
  title: "Atoms/Link",
  component: Link,
} as ComponentMeta<typeof Link>;

const Template: ComponentStory<typeof Link> = (args) => (
  <Link {...args} />
);

export const Default = Template.bind({});

Default.args = {
    children: "skip",
    handleClick: () => {},
    component: "button",
    variant: "subtitle1"
};
