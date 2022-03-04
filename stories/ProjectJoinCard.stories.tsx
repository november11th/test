import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import ProjectJoinCard from "../components/intro/ProjectJoinCard";

export default {
  title: "Intro/ProjectJoinCard",
  component: ProjectJoinCard,
} as ComponentMeta<typeof ProjectJoinCard>;

export const Normal: ComponentStory<typeof ProjectJoinCard> = () => (
  <div style={{ display: "grid", width: "956px", height: "412px" }}>
    <ProjectJoinCard />
  </div>
);
