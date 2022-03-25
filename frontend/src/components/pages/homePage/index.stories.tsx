import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import HomePage from "./index";


export default {
  title: "Pages/HomePage",
  component: HomePage,
} as ComponentMeta<typeof HomePage>;

const Template: ComponentStory<typeof HomePage> = (args) => <HomePage />;

export const Default = Template.bind({});

Default.args = {

};
