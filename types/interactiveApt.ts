export interface Option {
  title: string;
  id: string;
}

export interface AptMeta {
  id: string;
  name: string;
  addr: string;
  householdsCount: number;
  useDate: string;
  lat: number;
  lng: number;
  text?: string;
}

export interface AptSimilarStat {
  selected: AptMeta;
  similar: AptMeta[];
}
