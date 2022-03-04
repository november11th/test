// 객차혼잡도 기본 단위
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

// 진입열차 상태
export enum TrainStatus {
  COMING,
  ARRIVED,
  LEFT,
  MOVING,
  TERMINATED,
  API_ERROR,
}

export interface ICongestionCar {
  subwayLine: number;
  updnLine: Direction;
  station?: string;
  nextStation?: string;
  endStation: string;
  dt: number;
  dow: string;
  time: string;
  congestionTrainLevel: number;
  congestionCarLevel: Array<CarProps>;
}

export interface ICongestionCarStat {
  time: string;
  data: ICongestionCar[];
}
