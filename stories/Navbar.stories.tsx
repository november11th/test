import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import Navbar from "../components/layout/navbar/Navbar";

export default {
  title: "Layout/Navbar",
  component: Navbar,
} as ComponentMeta<typeof Navbar>;

export const Normal: ComponentStory<typeof Navbar> = () => <Navbar />;
