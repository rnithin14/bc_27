import { ComponentMeta, ComponentStory } from "@storybook/react";
import * as React from "react";
import Icon from "./index";
import { ReactSVG } from "react-svg";
import back from "../../../assets/icons/back.svg";

export default {
  title: "Atoms/Icon",
  component: Icon,
} as ComponentMeta<typeof Icon>;

const Template: ComponentStory<typeof Icon> = (args) => <Icon {...args} />;

export const Default = Template.bind({});

Default.args = {
  src: back,
};
