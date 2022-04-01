export const DOWINENGLISH = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];
export const DOWINKOREAN = ["월", "화", "수", "목", "금", "토", "일"];
export const HDAYINBOOLEAN = [false, true];
export const HDAYINKOREAN = ["평일", "주말"];
export const RIDETYPEINKOREAN = ["승차", "하차"];

// 현재 URL을 클립보드에 복사하고 알림
export const copyCurrentURL = () => {
  let currentUrl = window.document.location.href;
  let t = document.createElement("textarea");
  document.body.appendChild(t);
  t.value = currentUrl;
  t.select();
  document.execCommand("copy");
  document.body.removeChild(t);

  alert("링크가 복사되었습니다.");
};

// #시니어#수서역 => ['시니어', '수서역']
export const getHashtagArray = (text: string) => {
  const array = text.split("#");
  array.shift();
  return array;
};

export function timeout(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

/* --------- 시간/날짜 함수 --------- */

const makeCalendarNum = (item: number | string) => {
  return (Number(item) > 9 ? "" : "0") + item.toString();
};

// 20210309 -> 2021, 3, 9
export const getYmd = (dt: string | number) => {
  const [yyyy, mm, dd] = [
    Number(String(dt).substr(0, 4)),
    Number(String(dt).substr(4, 2)),
    Number(String(dt).substr(6, 2)),
  ];
  return { yyyy: yyyy, mm: mm, dd: dd };
};

// 현재 요일 Index (월:0 ~ 일:6)
export const getTodayDowIdx = () => {
  const jsDow = new Date().getDay();
  if (jsDow > 0) return jsDow - 1;
  else return 6;
};

// 오늘의 요일 '월'
export const getTodayDow = () => {
  const idx = getTodayDowIdx();
  return DOWINKOREAN[idx];
};

// yyyymmdd -> 월
export const getDow = (dt: string | number) => {
  const dow = ["일", "월", "화", "수", "목", "금", "토"];
  const [yyyy, mm, dd] = [
    Number(String(dt).substr(0, 4)),
    Number(String(dt).substr(4, 2)),
    Number(String(dt).substr(6, 2)),
  ];
  const date = new Date(yyyy, mm - 1, dd);
  return dow[date.getDay()];
};

// MON -> '월'
export const dowMap = {
  MON: "월",
  TUE: "화",
  WED: "수",
  THU: "목",
  FRI: "금",
  SAT: "토",
  SUN: "일",
};

// yyyymmdd -> true | false
export const getHdayBoolean = (dt: string | number) => {
  if (getDow(dt) === "토" || getDow(dt) === "일") return true;
  return false;
};

// 330(330분) => 06:30
export const minuteToTime = (minute: number) => {
  const hh = `${("0" + Math.floor(minute / 60)).slice(-2)}`;
  const mm = `${("0" + (minute % 60)).slice(-2)}`;

  return `${hh}:${mm}`;
};

// 15:40 -> 오후 3시 40분
export const getMeridiemhhmm = (time: string) => {
  const hour = Number(/\d+(?=:)/.exec(time));

  let meridiem;
  if (hour < 12) {
    meridiem = "오전";
  } else if (time == "12:00") {
    meridiem = "정오";
  } else {
    meridiem = "오후";
  }

  let hh;
  if (hour > 12) {
    hh = hour - 12;
  } else {
    hh = hour;
  }
  const mm = time.slice(-2);

  return [meridiem, hh.toString(), mm.toString()];
};

// 13:00 -> 13
export const getHour = (time: string) => {
  const hour = Number(/\d+(?=:)/.exec(time)); //05 -> 5
  return hour.toString();
};

// 1865(1860초) -> 3시간 1분 5초
export const secondToDuration = (second: number, format?: string) => {
  const hh = second >= 3600 ? `${Math.floor(second / 3600)}시간 ` : "";
  const mm = second % 3600 >= 60 ? `${Math.floor((second % 3600) / 60)}분` : "";
  const ss = second > 0 ? `${Math.floor((second % 3600) % 60)}초` : "";

  switch (format) {
    case "HH":
      return `${hh}`;
    case "HHMM":
      return `${hh}${mm}`;
    case "HHMMSS":
      return `${hh}${mm}${ss}`;
    default:
      return `${hh}${mm}${ss}`;
  }
};

// yyyymmdd 2일 전 -> yyyy.mm.dd
export const addDate = (
  dt: string | number,
  days: number,
  split: string = "."
) => {
  const result = new Date(getYmd(dt).yyyy, getYmd(dt).mm - 1, getYmd(dt).dd);
  result.setDate(result.getDate() + days);

  return getYyyymmdd(result, split);
};

// new Date() => yyyymmdd
export const getYyyymmdd = (date: Date, split: string = "") => {
  const year = date.getFullYear();
  const month = 1 + date.getMonth();
  const day = date.getDate();

  return [year, makeCalendarNum(month), makeCalendarNum(day)].join(split);
};

// 전월 => yyyymm
export const getLastYyyymm = (date: Date, split: string = "") => {
  const year = date.getFullYear();
  const month = date.getMonth(); // 1을 더하지 않음

  return [year, makeCalendarNum(month)].join(split);
};

// 현월 => yyyymm
export const getPresentYyyymm = (date: Date, split: string = "") => {
  const year = date.getFullYear();
  const month = date.getMonth() + 1; // 1을 더함

  return [year, makeCalendarNum(month)].join(split);
};

// 달의 첫번째 날짜 2022.02.01
export const getFirstDayOfMonth = (yyyymm: string, split: string = "") => {
  const yyyy = yyyymm.substr(0, 4);
  const mm = yyyymm.substr(4, 2);

  return [yyyy, mm, "01"].join(split);
};

// 달의 마지막 날짜 2022.02.28
export const getLastDayOfMonth = (yyyymm: string, split: string = "") => {
  const yyyy = yyyymm.substr(0, 4);
  const mm = yyyymm.substr(5, 2);

  const yyyyNew = mm === "12" ? String(yyyy + 1) : yyyy;
  const mmNew = mm === "12" ? "01" : makeCalendarNum(Number(mm) + 1);
  const nextMonthFirstDay = [yyyyNew, mmNew, "01"].join("");

  return addDate(nextMonthFirstDay, -1, split);
};
