import { ComponentMeta, ComponentStory } from "@storybook/react";
import * as React from "react";
import Autocomplete from './index';

export default {
  title: "Organisms/Autocomplete",
  component: Autocomplete,
} as ComponentMeta<typeof Autocomplete>;

const Template: ComponentStory<typeof Autocomplete> = (args) => <Autocomplete {...args}/>;

export const Default = Template.bind({});

Default.args = {
  autocompleteOptions: [{
    formatted: "Bowenpally, Hyderabad - 500011, TG, India",
    lat: "17.4755371",
    lon: "78.4792282"
    }],
  numberOfInputs: 1,
  isInputValueChip: false,
  placeholder: "Enter your location"
};
