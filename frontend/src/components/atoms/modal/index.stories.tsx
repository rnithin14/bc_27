import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import Modal from "./index";

export default {
  title: "Atoms/Modal",
  component: Modal,
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => (
  <Modal isOpen={true}></Modal>
);

export const Default = Template.bind({});
