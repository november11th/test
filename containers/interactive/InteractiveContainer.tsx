import React from "react";
import IACTravelPopularEmdr from "./IACTravelPopularEmdr";
import IACSubwayCongestionTrain from "./IACSubwayCongestionTrain";
import IACSubwayCongestionCar from "./IACSubwayCongestionCar";
import IACSubwayCongestionRoute from "./IACSubwayCongestionRoute";
import IACPoiCongestionHourly from "./IACPoiCongestionHourly";
import IACAptSimilar from "./IACAptSimilar";
import IACKickboardHourlyHeat from "./IACKickboardHourlyHeat";
import IACKickboardStartEndSpot from "./IACKickboardStartEndSpot";
import IACTravelTravelerDaily from "./IACTravelTravelerDaily";
import { InteractiveType } from "../../types/insight";

interface Props {
  id: InteractiveType;
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
      return <IACAptSimilar />;

    /* 여행 */
    case "travelPopularEmdr":
      return <IACTravelPopularEmdr />;
    case "travelTravelerDaily":
      return <IACTravelTravelerDaily />;

    /* 킥보드 */
    case "kickboardHourlyHeat":
      return <IACKickboardHourlyHeat />;
    case "kickboardStartEndSpot":
      return <IACKickboardStartEndSpot />;

    /* 예외 */
    default:
      return <IACSubwayCongestionCar />;
  }
};

export default InteractiveContainer;
