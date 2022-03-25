import React from "react";
import AvatarIcon from ".";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Atoms/Avatar",
  component: AvatarIcon,
} as ComponentMeta<typeof AvatarIcon>;

const Template: ComponentStory<typeof AvatarIcon> = (args) => (
  <AvatarIcon {...args} />
);
export const Default = Template.bind({});
Default.args = {
  children: "1",
  sx: { bgcolor: "primary.300" },
};
