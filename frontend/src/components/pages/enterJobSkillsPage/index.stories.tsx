import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import EnterJobSkillsPage from "./index";

export default {
  title: "Pages/EnterJobSkillsPage",
  component: EnterJobSkillsPage,
} as ComponentMeta<typeof EnterJobSkillsPage>;

const Template: ComponentStory<typeof EnterJobSkillsPage> = (args) => (
  <EnterJobSkillsPage />
);

export const Default = Template.bind({});
