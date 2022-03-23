import React from "react";
import IATravelPopularEmdRi from "../../components/interactive/IATravelPopularEmdRi";
import IAAptSimilar from "../../components/interactive/IAAptSimilar";
import IAKickboardHourlyHeat from "../../components/interactive/IAKickboardHourlyHeat";
import IAKickboardStartEndSpot from "../../components/interactive/IAKickboardStartEndSpot";
import IATravelTravelerDaily from "../../components/interactive/IATravelTravelerDaily";
import IACSubwayCongestionTrain from "./IACSubwayCongestionTrain";
import IACSubwayCongestionCar from "./IACSubwayCongestionCar";
import IACSubwayCongestionRoute from "./IACSubwayCongestionRoute";
import IACPoiCongestionHourly from "./IACPoiCongestionHourly";

interface Props {
  id: string;
}
const InteractiveContainer = ({ id }: Props) => {
  switch (id) {
    /* 지하철 */
    case "subwayCongestionCar":
      return <IACSubwayCongestionCar />;
    case "subwayCongestionRoute":
      return <IACSubwayCongestionRoute />;
    case "subwayCongestionTrain":
      return <IACSubwayCongestionTrain />;

    /* 장소 */
    case "poiCongestionHourly":
      return <IACPoiCongestionHourly />;

    /* 주거생활 */
    case "aptSimilar":
      return <IAAptSimilar />;

    /* 여행 */
    case "travelPopularEmdRi":
      return <IATravelPopularEmdRi />;
    case "travelTravelerDaily":
      return <IATravelTravelerDaily />;

    /* 킥보드 */
    case "kickboardHourlyHeat":
      return <IAKickboardHourlyHeat />;
    case "kickboardStartEndSpot":
      return <IAKickboardStartEndSpot />;

    /* 예외 */
    default:
      return <IACSubwayCongestionCar />;
  }
};

export default InteractiveContainer;
