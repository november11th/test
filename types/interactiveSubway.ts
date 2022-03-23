import { Dow } from "./common";

// 칸혼잡도 기본 단위
export interface CarProps {
  value: number;
  label?: string;
  carNum?: string;
}

export interface CarHeatProps {
  data: Array<CarProps>;
}

// 방향
export enum Direction {
  UP,
  DOWN,
}

export interface CongestionCar {
  subwayLine: number;
  updnLine: Direction;
  station?: string;
  nextStation?: string;
  endStation: string;
  dt: number;
  dow: Dow;
  time: string;
  congestionTrainLevel: number;
  congestionCarLevel: Array<CarProps>;
}

export interface CongestionCarStat {
  time: string;
  data: CongestionCar[];
}

export interface CongestionTrainStat {
  dow: Dow;
  dt: string;
  station: string;
  nextStation: string;
  subwayLine: number;
  updnline: number;
  time: string[];
  congestionTrain: number[];
  congestionTrainLevel: number[];
}

export interface CongestionRouteStat {
  dow: Dow;
  dt: string;
  fromStation: string;
  toStation: string;
  subwayLine: number[];
  time: string[];
  station: string[];
  congestionTrain: number[];
  congestionTrainLevel: number[];
}

export interface Option {
  title: string;
  station?: string;
}
