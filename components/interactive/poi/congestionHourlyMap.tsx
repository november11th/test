import styled from "@emotion/styled";
import ReactDOMServer from "react-dom/server";
import Text from "../../elements/Text";
import Map from "../common/Map";
import MapInfoWindow from "../common/MapInfoWindow";

const PoiName = styled(Text)`
  &.copy-case7 {
    font-weight: 700;
  }
`;
const Address = styled(Text)``;

const Window = (data: any) => {
  const { poiName, address } = data;
  return (
    <MapInfoWindow>
      <PoiName type={"copy"} scale={"7"}>
        {poiName}
      </PoiName>
      <Address type={"copy"} scale={"7"}>
        {address}
      </Address>
    </MapInfoWindow>
  );
};

class CongestionHourlyMap extends Map {
  addWindow(data: any) {
    this.addMarker("poi", data.lat, data.lng);
    this.addInfoWindow(
      data.lat,
      data.lng,
      ReactDOMServer.renderToString(<Window {...data} />)
    );
  }
  removeWindow() {
    this.removeMarker();
    this.removeInfoWindow();
  }
}
export default CongestionHourlyMap;
