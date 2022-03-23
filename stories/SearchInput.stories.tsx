import React, { useState } from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import SearchInput from "../components/interactive/common/SearchInput";

export default {
  title: "Common/SearchInput",
  component: SearchInput,
} as ComponentMeta<typeof SearchInput>;

const Template: ComponentStory<typeof SearchInput> = (args: any) => {
  const options = [
    { title: "강남" },
    { title: "동대문역사문화공원" },
    { title: "을지로3가" },
    { title: "을지로입구" },
    { title: "남한산성입구" },
    { title: "을지로4가" },
    { title: "강변" },
  ];
  const [inputSelectedItem, setInputSelectedItem] = useState({ title: "" });

  return (
    <SearchInput
      placeholder={"출발 역사를 입력해주세요."}
      selectedItem={inputSelectedItem}
      setSelectedItem={setInputSelectedItem}
      options={options}
      onButtonPress={() => {
        console.log("gogo");
      }}
      {...args}
    />
  );
};

export const Normal = Template.bind({});
Normal.args = {};
