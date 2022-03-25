import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import LandingPage from '.';
import image from "../../../assets/images/stay.svg"
import work from "../../../assets/images/work.svg"


export default {
  title: 'Templates/LandingPage',
  component: LandingPage,
} as ComponentMeta<typeof LandingPage>;

const Template: ComponentStory<typeof LandingPage> = (args) => (
  <LandingPage {...args} />
);

export const HomePage_Component_Input_Not_Set = Template.bind({});

HomePage_Component_Input_Not_Set.args = {
  currentPage: 1,
  searchLabel: "Where do you stay ?",
  autocompleteOptions: ["East Marredpally, Secunderabad"],
  isInputSet: false,
  inputValues: [""],
  inputValuesResult: ["894"],
  isInputValueChip: false,
  imageCaptionLine1: "Enter Location to know",
  imageCaptionLine2: "Time Air Quality Index (AQI)",
  image: image,
  autocompletePlaceholder:"Enter your location",
  detailsLabelLine1: "Real Time Air Quality Index(AQI)",
  detailsLabelLine2: "in this location"
};

export const HomePage_Component_Input_Set = Template.bind({});

HomePage_Component_Input_Set.args = {
  currentPage: 1,
  searchLabel: "Where do you stay ?",
  autocompleteOptions: ["East Marredpally, Secunderabad"],
  isInputSet: true,
  inputValues: [""],
  inputValuesResult: ["894"],
  isInputValueChip: false,
  imageCaptionLine1: "Enter Location to know",
  imageCaptionLine2: "Time Air Quality Index (AQI)",
  image: image,
  autocompletePlaceholder:"Enter your location",
  detailsLabelLine1: "Real Time Air Quality Index(AQI)",
  detailsLabelLine2: "in this location"
};

export const JobLocationPage_Component_Input__Not_Set = Template.bind({});

JobLocationPage_Component_Input__Not_Set.args = {
  currentPage: 2,
  searchLabel: "Where do you want to work?",
  autocompleteOptions: ["Hyderabad", "Mumbai"],
  isInputSet: false,
  inputValues: ["Hyderabad", "Mumbai"],
  inputValuesResult: ["894", "953"],
  isInputValueChip: true,
  imageCaptionLine1: "Enter Location to know",
  imageCaptionLine2: "Time Air Quality Index (AQI)",
  image: work,
  autocompletePlaceholder:"Enter your job location",
  detailsLabelLine1: "Real Time Air Quality Index(AQI)",
  detailsLabelLine2: "in this location"
};

export const JobLocationPage_Component_Input_Set = Template.bind({});

JobLocationPage_Component_Input_Set.args = {
  currentPage: 2,
  searchLabel: "Where do you want to work?",
  autocompleteOptions: ["Hyderabad", "Mumbai"],
  isInputSet: true,
  inputValues: ["Hyderabad", "Mumbai"],
  inputValuesResult: ["894", "953"],
  isInputValueChip: true,
  imageCaptionLine1: "Enter Location to know",
  imageCaptionLine2: "Time Air Quality Index (AQI)",
  image: work,
  autocompletePlaceholder:"Enter your job location",
  detailsLabelLine1: "Real Time Air Quality Index(AQI)",
  detailsLabelLine2: "in this location"
};