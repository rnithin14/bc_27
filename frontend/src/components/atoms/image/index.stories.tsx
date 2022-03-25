import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import Image from "./index";
import jobs from "../../../assets/images/jobs.svg";

export default {
  title: "Atoms/Image",
  component: Image,
} as ComponentMeta<typeof Image>;

const Template: ComponentStory<typeof Image> = (args) => <Image {...args} />;

export const Default = Template.bind({});

Default.args = {
  src: jobs,
  alt: "Image",
};
