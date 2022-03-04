import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import NavbarSearchInput from "../components/layout/navbar/NavbarSearchInput";

export default {
  title: "Layout/NavbarSearchInput",
  component: NavbarSearchInput,
} as ComponentMeta<typeof NavbarSearchInput>;

const Template: ComponentStory<typeof NavbarSearchInput> = (args) => (
  <NavbarSearchInput {...args} />
);

export const WhiteTheme = Template.bind({});
WhiteTheme.args = {
  navBarTheme: "white",
};
WhiteTheme.parameters = {
  backgrounds: { default: "light" },
};

export const BlackTheme = Template.bind({});
BlackTheme.args = {
  navBarTheme: "black",
};
BlackTheme.parameters = {
  backgrounds: { default: "dark" },
};
