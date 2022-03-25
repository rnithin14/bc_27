import React from "react";
import InputField from ".";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";

import { ComponentStory, ComponentMeta } from "@storybook/react";
export default {
  title: "Atoms/InputField",
  component: InputField,
} as ComponentMeta<typeof InputField>;

const Template: ComponentStory<typeof InputField> = (args) => (
  <InputField {...args} />
);

export const Default = Template.bind({});

Default.args = {
  startAdorment: <LocationOnOutlinedIcon />,
  location: "East Marredpally, Secunderabad",
};
