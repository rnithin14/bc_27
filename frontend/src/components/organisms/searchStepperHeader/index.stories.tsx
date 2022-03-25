import React from "react";
import SearchStepperHeader from "./index";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import tick from "../../../assets/icons/tick.svg";

export default {
  title: "Organisms/SearchStepperHeader",
  component: SearchStepperHeader,
} as ComponentMeta<typeof SearchStepperHeader>;

const Template: ComponentStory<typeof SearchStepperHeader> = (args) => (
  <SearchStepperHeader {...args} />
);

export const Default = Template.bind({});

Default.args = {
    currentPage: 1,
    stepperHeadings: ["Your Location", "Job Location", "Your Skills" ]
};
