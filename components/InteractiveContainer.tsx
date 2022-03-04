import { useState } from "react";
import SubwayLineSelector from "../components/interactive/subway/SubwayLineSelector";
import Text from "../components/elements/Text";
import PlayController from "../components/interactive/subway/PlayController";
import CongestionLevel from "../components/interactive/subway/CongestionLevel";
import CongestionCarStat from "../components/interactive/subway/CongestionCarStat";
import SearchInput from "../components/interactive/SearchInput";
import SearchDropdown from "../components/interactive/SearchDropdown";
import { congestionCarStatData } from "../temp_data/interactiveSubway";

const options = [
  { title: "강남" },
  { title: "동대문역사문화공원" },
  { title: "을지로3가" },
  { title: "을지로입구" },
  { title: "남한산성입구" },
  { title: "을지로4가" },
  { title: "강변" },
];

const InteractiveContainer = () => {
  const [selectedLineIndex, setSelectedLine] = useState(0);
  const [inputSelectedItem, setInputSelectedItem] = useState({ title: "" });
  const [dropdownSelectedItem, setDropdownSelectedItem] = useState(options[0]);

  return (
    <>
      <SearchInput
        placeholder={"출발 역사를 입력해주세요."}
        selectedItem={inputSelectedItem}
        setSelectedItem={setInputSelectedItem}
        options={options}
        onButtonPress={() => {
          console.log("gogo");
        }}
      />
      <SearchDropdown
        selectedItem={dropdownSelectedItem}
        setSelectedItem={setDropdownSelectedItem}
        options={options}
        onButtonPress={() => {
          console.log("gogogo");
        }}
      />

      <SubwayLineSelector
        list={["1", "2"]}
        selectedIndex={selectedLineIndex}
        setIndex={setSelectedLine}
      />
      <CongestionCarStat data={congestionCarStatData} />
    </>
  );
};

export default InteractiveContainer;
