import React from "react";
import ReactDOMServer from "react-dom/server";
import styled from "@emotion/styled";
import Text from "../../elements/Text";
import Map from "../common/Map";
import MapInfoTag from "../common/MapInfoTag";
import MapInfoWindow from "../common/MapInfoWindow";
import { theme } from "../../../styles/theme";
import { getHashtagArray } from "../../../utils/common";
import MapInfoHashtag from "../common/MapInfoHashtag";

const Div = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const StyledMapInfoHashtag = styled(MapInfoHashtag)`
  margin-top: 4px;
`;
const SelectedWindow = (data: any) => {
  const { name, text } = data;
  const hashtag = getHashtagArray(text);

  return (
    <MapInfoWindow>
      <Div>
        <MapInfoTag type={"text"} text={"기준"} color={theme.colors.pointEb} />
        <Text type={"copy"} scale={"6"}>
          {name}
        </Text>
      </Div>
      <StyledMapInfoHashtag hashtagArray={hashtag} />
    </MapInfoWindow>
  );
};

interface Props {
  data: any;
  index: number;
}
const SimilarWindow = ({ data, index }: Props) => {
  const { name } = data;
  return (
    <MapInfoWindow>
      <Div>
        <MapInfoTag type={"ranking"} ranking={index + 1} />
        <Text type={"copy"} scale={"6"}>
          {name}
        </Text>
      </Div>
    </MapInfoWindow>
  );
};

class SimilarAptMap extends Map {
  addSelectedWindow(data: any) {
    this.addMarker(String("i"), data.lat, data.lng, "emphasis");
    this.addInfoWindow(
      data.lat,
      data.lng,
      ReactDOMServer.renderToString(<SelectedWindow {...data} />)
    );
  }

  addSimilarWindow(data: any, index: number) {
    this.addMarker(String(index), data.lat, data.lng, "normal");
    this.addInfoWindow(
      data.lat,
      data.lng,
      ReactDOMServer.renderToString(<SimilarWindow data={data} index={index} />)
    );
  }
}

export default SimilarAptMap;
