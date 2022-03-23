import { Dow } from "./common";

export interface CongestionHourly {
  time: string[];
  congestion: number[];
  congestionLevel: number[];
}

export interface CongestionHourlyStat {
  dow: Dow;
  date: string;
  poiId: string;
  poiName: string;
  poiType: number;
  stat: CongestionHourly;
  today: CongestionHourly;
  todayPred: CongestionHourly;
}

export interface PoiMeta {
  poiId: string;
  poiName: string;
  poiType: number;
  address: string;
  category: string;
  lat: number;
  lng: number;
  congestionLevel: number;
}

export interface Option {
  title: string;
}
