import { ComponentMeta, ComponentStory } from "@storybook/react";
import * as React from "react";
import SideMenu from ".";
import { sideMenuData } from "./props";

export default {
  title: "Organisms/SideMenu",
  component: SideMenu,
} as ComponentMeta<typeof SideMenu>;

const Template: ComponentStory<typeof SideMenu> = (args) => (
  <SideMenu {...args}></SideMenu>
);

export const Default = Template.bind({});

Default.args = {
  ...sideMenuData,
};
