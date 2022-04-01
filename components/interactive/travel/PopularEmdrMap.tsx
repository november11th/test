import Map from "../common/Map";
import ReactDOMServer from "react-dom/server";
import styled from "@emotion/styled";
import Text from "../../elements/Text";
import MapInfoWindow from "../common/MapInfoWindow";
import MapInfoTag from "../common/MapInfoTag";
import { makeEmdrName } from "../../../utils/interactiveTravel";
import { secondToDuration } from "../../../utils/common";

const Div = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Window = (data: any) => {
  const { ranking, emdName, riName, averageVisitDuration } = data;
  return (
    <MapInfoWindow>
      <Div>
        <MapInfoTag type={"ranking"} ranking={ranking} />
        <Text type={"copy"} scale={"6"}>
          {makeEmdrName(emdName, riName)}
        </Text>
      </Div>
      <Text type={"copy"} scale={"7"}>
        평균 체류 시간: {secondToDuration(averageVisitDuration, "HHMM")}
      </Text>
    </MapInfoWindow>
  );
};

class PopularEmdrMap extends Map {
  addWindow(data: any) {
    data
      ?.slice()
      .reverse()
      .forEach((x: any, i: number) => {
        this.addMarker(String(i), x.point.lat, x.point.lng);
        this.addInfoWindow(
          x.point.lat,
          x.point.lng,
          ReactDOMServer.renderToString(<Window {...x} />)
        );
        this.addPolygon(x.polygon);
      });
  }
}

export default PopularEmdrMap;
