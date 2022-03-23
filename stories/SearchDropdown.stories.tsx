import React, { useState } from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import SearchDropdown from "../components/interactive/common/SearchDropdown";

export default {
  title: "Common/SearchDropdown",
  component: SearchDropdown,
} as ComponentMeta<typeof SearchDropdown>;

const Template: ComponentStory<typeof SearchDropdown> = (args: any) => {
  const options = [
    { title: "강남" },
    { title: "동대문역사문화공원" },
    { title: "을지로3가" },
    { title: "을지로입구" },
    { title: "남한산성입구" },
    { title: "을지로4가" },
    { title: "강변" },
  ];
  const [dropdownSelectedItem, setDropdownSelectedItem] = useState(options[0]);

  return (
    <SearchDropdown
      selectedItem={dropdownSelectedItem}
      setSelectedItem={setDropdownSelectedItem}
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
