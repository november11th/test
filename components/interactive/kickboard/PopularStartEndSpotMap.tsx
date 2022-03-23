import Map from "../common/Map";
import ReactDOMServer from "react-dom/server";
import MapInfoWindow from "../common/MapInfoWindow";
import MapInfoTag from "../common/MapInfoTag";
import styled from "@emotion/styled";
import { theme } from "../../../styles/theme";

const Div = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

interface Props {
  data: any;
  selectedTypeIdx: number;
}
const Window = ({ data, selectedTypeIdx }: Props) => {
  const { rnk } = data;
  const text = selectedTypeIdx === 0 ? "승차" : "하차";
  return (
    <MapInfoWindow>
      <Div>
        <MapInfoTag type={"ranking"} ranking={rnk} />
        <MapInfoTag type={"text"} text={text} color={theme.colors.gray6e} />
      </Div>
    </MapInfoWindow>
  );
};

class PopularStartEndSpotMap extends Map {
  addWindow(data: any, selectedTypeIdx: number) {
    data
      ?.slice()
      .reverse()
      .forEach((x: any, i: number) => {
        this.addMarker(String(i), x.lat, x.lng);
        this.addInfoWindow(
          x.lat,
          x.lng,
          ReactDOMServer.renderToString(
            <Window data={x} selectedTypeIdx={selectedTypeIdx} />
          )
        );
      });
  }
  removeWindow() {
    this.removeMarker();
    this.removeInfoWindow();
  }
}
export default PopularStartEndSpotMap;
