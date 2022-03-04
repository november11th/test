import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import Footer from "../components/layout/footer/Footer";

export default {
  title: "Layout/Footer",
  component: Footer,
} as ComponentMeta<typeof Footer>;

export const Normal: ComponentStory<typeof Footer> = () => <Footer />;
