export const congestionRouteStatData = {
  labels: [
    "강남",
    "교대",
    "서초",
    "방배",
    "사당",
    "낙성대",
    "서울대입구",
    "봉천",
    "신림",
    "신대방",
    "구로디지털단지",
    "대림",
    "신도림",
  ],
  congestion: [30, 50, 60, 90, 130, 180, 190, 150, 120, 110, 30, 50, 60],
  congestionLevel: [1, 2, 2, 3, 3, 4, 4, 4, 3, 3, 1, 1, 2],
};

export const congestionTrainStatData = {
  labels: [
    "05:30",
    "05:40",
    "05:50",
    "06:00",
    "06:10",
    "06:20",
    "06:30",
    "06:40",
    "06:50",
    "07:00",
    "07:10",
    "07:20",
    "07:30",
    "07:40",
    "07:50",
    "08:00",
    "08:10",
    "08:20",
    "08:30",
    "08:40",
    "08:50",
    "09:00",
    "09:10",
    "09:20",
    "09:30",
    "09:40",
    "09:50",
    "10:00",
    "10:10",
    "10:20",
    "10:30",
    "10:40",
    "10:50",
    "11:00",
    "11:10",
    "11:20",
    "11:30",
    "11:40",
    "11:50",
    "12:00",
    "12:10",
    "12:20",
    "12:30",
    "12:40",
    "12:50",
    "13:00",
    "13:10",
    "13:20",
    "13:30",
    "13:40",
    "13:50",
    "14:00",
    "14:10",
    "14:20",
    "14:30",
    "14:40",
    "14:50",
    "15:00",
    "15:10",
    "15:20",
    "15:30",
    "15:40",
    "15:50",
    "16:00",
    "16:10",
    "16:20",
    "16:30",
    "16:40",
    "16:50",
    "17:00",
    "17:10",
    "17:20",
    "17:30",
    "17:40",
    "17:50",
    "18:00",
    "18:10",
    "18:20",
    "18:30",
    "18:40",
    "18:50",
    "19:00",
    "19:10",
    "19:20",
    "19:30",
    "19:40",
    "19:50",
    "20:00",
    "20:10",
    "20:20",
    "20:30",
    "20:40",
    "20:50",
    "21:00",
    "21:10",
    "21:20",
    "21:30",
    "21:40",
    "21:50",
    "22:00",
    "22:10",
    "22:20",
    "22:30",
    "22:40",
    "22:50",
    "23:00",
    "23:10",
    "23:20",
    "23:30",
    "23:40",
    "23:50",
  ],
  congestion: [
    37, 45, 38, 28, 19, 37, 37, 33, 44, 42, 57, 75, 82, 79, 87, 104, 124, 132,
    142, 113, 89, 88, 105, 95, 108, 94, 71, 44, 55, 37, 53, 45, 51, 42, 46, 41,
    48, 39, 35, 40, 36, 39, 41, 38, 42, 42, 40, 41, 58, 45, 42, 39, 36, 39, 48,
    37, 38, 37, 34, 39, 38, 33, 36, 43, 37, 39, 41, 39, 45, 36, 37, 37, 45, 43,
    47, 45, 59, 58, 49, 50, 46, 43, 31, 28, 23, 19, 20, 19, 22, 20, 20, 17, 21,
    26, 36, 46, 43, 32, 37, 39, 28, 25, 22, 14, 16, 15, 18, 8, 12, 7, 3,
  ],
  congestionLevel: [
    1, 2, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 3, 3, 4, 4, 3, 3, 2, 3, 3, 3,
    3, 2, 2, 2, 1, 2, 2, 2, 2, 2, 1, 2, 2, 1, 2, 1, 1, 1, 2, 1, 2, 2, 1, 2, 2,
    2, 2, 1, 1, 2, 2, 1, 2, 1, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2,
    2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  ],
};

export const congestionCarStatData = [
  {
    time: "05:30",
    data: [
      {
        subwayLine: 2,
        updnLine: 0,
        station: "강남",
        nextStation: "역삼",
        endStation: "외선순환",
        dt: 20220228,
        dow: "MON",
        time: "05:30",
        congestionTrainLevel: 1,
        congestionCarLevel: [
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 2,
          },
          {
            value: 2,
            label: "최다하차",
          },
          {
            value: 2,
            label: "최다하차",
          },
          {
            value: 2,
          },
          {
            value: 2,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
        ],
      },
    ],
  },
  {
    time: "05:40",
    data: [
      {
        subwayLine: 2,
        updnLine: 0,
        station: "강남",
        nextStation: "역삼",
        endStation: "외선순환",
        dt: 20220228,
        dow: "MON",
        time: "05:40",
        congestionTrainLevel: 2,
        congestionCarLevel: [
          {
            value: 2,
          },
          {
            value: 2,
          },
          {
            value: 2,
          },
          {
            value: 2,
            label: "최다하차",
          },
          {
            value: 2,
            label: "최다하차",
          },
          {
            value: 2,
          },
          {
            value: 2,
          },
          {
            value: 2,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
        ],
      },
    ],
  },
  {
    time: "05:50",
    data: [
      {
        subwayLine: 2,
        updnLine: 0,
        station: "강남",
        nextStation: "역삼",
        endStation: "외선순환",
        dt: 20220228,
        dow: "MON",
        time: "05:50",
        congestionTrainLevel: 2,
        congestionCarLevel: [
          {
            value: 2,
          },
          {
            value: 2,
          },
          {
            value: 2,
          },
          {
            value: 2,
            label: "최다하차",
          },
          {
            value: 2,
            label: "최다하차",
          },
          {
            value: 2,
          },
          {
            value: 2,
          },
          {
            value: 2,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
        ],
      },
    ],
  },
  {
    time: "06:00",
    data: [
      {
        subwayLine: 2,
        updnLine: 0,
        station: "강남",
        nextStation: "역삼",
        endStation: "외선순환",
        dt: 20220228,
        dow: "MON",
        time: "06:00",
        congestionTrainLevel: 1,
        congestionCarLevel: [
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
            label: "최다하차",
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
            label: "최다하차",
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
        ],
      },
    ],
  },
  {
    time: "06:10",
    data: [
      {
        subwayLine: 2,
        updnLine: 0,
        station: "강남",
        nextStation: "역삼",
        endStation: "외선순환",
        dt: 20220228,
        dow: "MON",
        time: "06:10",
        congestionTrainLevel: 1,
        congestionCarLevel: [
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
            label: "최다하차",
          },
          {
            value: 1,
            label: "최다하차",
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
        ],
      },
    ],
  },
  {
    time: "06:20",
    data: [
      {
        subwayLine: 2,
        updnLine: 0,
        station: "강남",
        nextStation: "역삼",
        endStation: "외선순환",
        dt: 20220228,
        dow: "MON",
        time: "06:20",
        congestionTrainLevel: 2,
        congestionCarLevel: [
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 2,
          },
          {
            value: 2,
            label: "최다하차",
          },
          {
            value: 2,
            label: "최다하차",
          },
          {
            value: 2,
          },
          {
            value: 2,
          },
          {
            value: 2,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
        ],
      },
    ],
  },
  {
    time: "06:30",
    data: [
      {
        subwayLine: 2,
        updnLine: 0,
        station: "강남",
        nextStation: "역삼",
        endStation: "외선순환",
        dt: 20220228,
        dow: "MON",
        time: "06:30",
        congestionTrainLevel: 2,
        congestionCarLevel: [
          {
            value: 2,
          },
          {
            value: 2,
          },
          {
            value: 2,
          },
          {
            value: 2,
            label: "최다하차",
          },
          {
            value: 2,
            label: "최다하차",
          },
          {
            value: 2,
          },
          {
            value: 2,
          },
          {
            value: 2,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
        ],
      },
    ],
  },
  {
    time: "06:40",
    data: [
      {
        subwayLine: 2,
        updnLine: 0,
        station: "강남",
        nextStation: "역삼",
        endStation: "외선순환",
        dt: 20220228,
        dow: "MON",
        time: "06:40",
        congestionTrainLevel: 1,
        congestionCarLevel: [
          {
            value: 1,
          },
          {
            value: 2,
          },
          {
            value: 1,
          },
          {
            value: 2,
            label: "최다하차",
          },
          {
            value: 2,
            label: "최다하차",
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
        ],
      },
    ],
  },
  {
    time: "06:50",
    data: [
      {
        subwayLine: 2,
        updnLine: 0,
        station: "강남",
        nextStation: "역삼",
        endStation: "외선순환",
        dt: 20220228,
        dow: "MON",
        time: "06:50",
        congestionTrainLevel: 2,
        congestionCarLevel: [
          {
            value: 2,
          },
          {
            value: 2,
          },
          {
            value: 2,
          },
          {
            value: 2,
            label: "최다하차",
          },
          {
            value: 2,
            label: "최다하차",
          },
          {
            value: 2,
          },
          {
            value: 2,
          },
          {
            value: 2,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
        ],
      },
    ],
  },
  {
    time: "07:00",
    data: [
      {
        subwayLine: 2,
        updnLine: 0,
        station: "강남",
        nextStation: "역삼",
        endStation: "외선순환",
        dt: 20220228,
        dow: "MON",
        time: "07:00",
        congestionTrainLevel: 2,
        congestionCarLevel: [
          {
            value: 2,
          },
          {
            value: 2,
          },
          {
            value: 2,
          },
          {
            value: 2,
            label: "최다하차",
          },
          {
            value: 2,
            label: "최다하차",
          },
          {
            value: 2,
          },
          {
            value: 2,
          },
          {
            value: 2,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
        ],
      },
    ],
  },
  {
    time: "07:10",
    data: [
      {
        subwayLine: 2,
        updnLine: 0,
        station: "강남",
        nextStation: "역삼",
        endStation: "외선순환",
        dt: 20220228,
        dow: "MON",
        time: "07:10",
        congestionTrainLevel: 2,
        congestionCarLevel: [
          {
            value: 2,
          },
          {
            value: 2,
          },
          {
            value: 2,
          },
          {
            value: 3,
            label: "최다하차",
          },
          {
            value: 2,
            label: "최다하차",
          },
          {
            value: 2,
          },
          {
            value: 2,
          },
          {
            value: 2,
          },
          {
            value: 2,
          },
          {
            value: 1,
          },
        ],
      },
    ],
  },
  {
    time: "07:20",
    data: [
      {
        subwayLine: 2,
        updnLine: 0,
        station: "강남",
        nextStation: "역삼",
        endStation: "외선순환",
        dt: 20220228,
        dow: "MON",
        time: "07:20",
        congestionTrainLevel: 3,
        congestionCarLevel: [
          {
            value: 2,
          },
          {
            value: 3,
          },
          {
            value: 3,
          },
          {
            value: 3,
            label: "최다하차",
          },
          {
            value: 3,
            label: "최다하차",
          },
          {
            value: 3,
          },
          {
            value: 3,
          },
          {
            value: 2,
          },
          {
            value: 2,
          },
          {
            value: 2,
          },
        ],
      },
    ],
  },
  {
    time: "07:30",
    data: [
      {
        subwayLine: 2,
        updnLine: 0,
        station: "강남",
        nextStation: "역삼",
        endStation: "외선순환",
        dt: 20220228,
        dow: "MON",
        time: "07:30",
        congestionTrainLevel: 3,
        congestionCarLevel: [
          {
            value: 2,
          },
          {
            value: 3,
          },
          {
            value: 3,
          },
          {
            value: 4,
            label: "최다하차",
          },
          {
            value: 3,
            label: "최다하차",
          },
          {
            value: 3,
          },
          {
            value: 3,
          },
          {
            value: 3,
          },
          {
            value: 2,
          },
          {
            value: 2,
          },
        ],
      },
    ],
  },
  {
    time: "07:40",
    data: [
      {
        subwayLine: 2,
        updnLine: 0,
        station: "강남",
        nextStation: "역삼",
        endStation: "외선순환",
        dt: 20220228,
        dow: "MON",
        time: "07:40",
        congestionTrainLevel: 3,
        congestionCarLevel: [
          {
            value: 2,
          },
          {
            value: 2,
          },
          {
            value: 3,
          },
          {
            value: 3,
            label: "최다하차",
          },
          {
            value: 3,
            label: "최다하차",
          },
          {
            value: 3,
          },
          {
            value: 2,
          },
          {
            value: 3,
          },
          {
            value: 2,
          },
          {
            value: 2,
          },
        ],
      },
    ],
  },
  {
    time: "07:50",
    data: [
      {
        subwayLine: 2,
        updnLine: 0,
        station: "강남",
        nextStation: "역삼",
        endStation: "외선순환",
        dt: 20220228,
        dow: "MON",
        time: "07:50",
        congestionTrainLevel: 3,
        congestionCarLevel: [
          {
            value: 3,
          },
          {
            value: 3,
          },
          {
            value: 3,
          },
          {
            value: 3,
            label: "최다하차",
          },
          {
            value: 3,
            label: "최다하차",
          },
          {
            value: 3,
          },
          {
            value: 3,
          },
          {
            value: 3,
          },
          {
            value: 2,
          },
          {
            value: 2,
          },
        ],
      },
    ],
  },
  {
    time: "08:00",
    data: [
      {
        subwayLine: 2,
        updnLine: 0,
        station: "강남",
        nextStation: "역삼",
        endStation: "외선순환",
        dt: 20220228,
        dow: "MON",
        time: "08:00",
        congestionTrainLevel: 3,
        congestionCarLevel: [
          {
            value: 3,
          },
          {
            value: 4,
          },
          {
            value: 4,
          },
          {
            value: 4,
            label: "최다하차",
          },
          {
            value: 4,
            label: "최다하차",
          },
          {
            value: 4,
          },
          {
            value: 3,
          },
          {
            value: 3,
          },
          {
            value: 2,
          },
          {
            value: 2,
          },
        ],
      },
    ],
  },
  {
    time: "08:10",
    data: [
      {
        subwayLine: 2,
        updnLine: 0,
        station: "강남",
        nextStation: "역삼",
        endStation: "외선순환",
        dt: 20220228,
        dow: "MON",
        time: "08:10",
        congestionTrainLevel: 4,
        congestionCarLevel: [
          {
            value: 4,
          },
          {
            value: 4,
          },
          {
            value: 4,
          },
          {
            value: 4,
          },
          {
            value: 4,
            label: "최다하차",
          },
          {
            value: 4,
          },
          {
            value: 4,
            label: "최다하차",
          },
          {
            value: 4,
          },
          {
            value: 3,
          },
          {
            value: 3,
          },
        ],
      },
    ],
  },
  {
    time: "08:20",
    data: [
      {
        subwayLine: 2,
        updnLine: 0,
        station: "강남",
        nextStation: "역삼",
        endStation: "외선순환",
        dt: 20220228,
        dow: "MON",
        time: "08:20",
        congestionTrainLevel: 4,
        congestionCarLevel: [
          {
            value: 4,
          },
          {
            value: 4,
          },
          {
            value: 4,
          },
          {
            value: 4,
          },
          {
            value: 4,
            label: "최다하차",
          },
          {
            value: 4,
          },
          {
            value: 4,
            label: "최다하차",
          },
          {
            value: 4,
          },
          {
            value: 3,
          },
          {
            value: 3,
          },
        ],
      },
    ],
  },
  {
    time: "08:30",
    data: [
      {
        subwayLine: 2,
        updnLine: 0,
        station: "강남",
        nextStation: "역삼",
        endStation: "외선순환",
        dt: 20220228,
        dow: "MON",
        time: "08:30",
        congestionTrainLevel: 4,
        congestionCarLevel: [
          {
            value: 4,
          },
          {
            value: 4,
          },
          {
            value: 4,
          },
          {
            value: 4,
          },
          {
            value: 4,
            label: "최다하차",
          },
          {
            value: 4,
          },
          {
            value: 4,
            label: "최다하차",
          },
          {
            value: 4,
          },
          {
            value: 4,
          },
          {
            value: 3,
          },
        ],
      },
    ],
  },
  {
    time: "08:40",
    data: [
      {
        subwayLine: 2,
        updnLine: 0,
        station: "강남",
        nextStation: "역삼",
        endStation: "외선순환",
        dt: 20220228,
        dow: "MON",
        time: "08:40",
        congestionTrainLevel: 4,
        congestionCarLevel: [
          {
            value: 4,
          },
          {
            value: 4,
          },
          {
            value: 4,
          },
          {
            value: 4,
            label: "최다하차",
          },
          {
            value: 4,
          },
          {
            value: 4,
          },
          {
            value: 4,
            label: "최다하차",
          },
          {
            value: 4,
          },
          {
            value: 4,
          },
          {
            value: 3,
          },
        ],
      },
    ],
  },
  {
    time: "08:50",
    data: [
      {
        subwayLine: 2,
        updnLine: 0,
        station: "강남",
        nextStation: "역삼",
        endStation: "외선순환",
        dt: 20220228,
        dow: "MON",
        time: "08:50",
        congestionTrainLevel: 3,
        congestionCarLevel: [
          {
            value: 2,
          },
          {
            value: 3,
          },
          {
            value: 3,
          },
          {
            value: 3,
            label: "최다하차",
          },
          {
            value: 3,
          },
          {
            value: 3,
          },
          {
            value: 3,
            label: "최다하차",
          },
          {
            value: 3,
          },
          {
            value: 3,
          },
          {
            value: 2,
          },
        ],
      },
    ],
  },
  {
    time: "09:00",
    data: [
      {
        subwayLine: 2,
        updnLine: 0,
        station: "강남",
        nextStation: "역삼",
        endStation: "외선순환",
        dt: 20220228,
        dow: "MON",
        time: "09:00",
        congestionTrainLevel: 3,
        congestionCarLevel: [
          {
            value: 3,
          },
          {
            value: 3,
          },
          {
            value: 3,
          },
          {
            value: 4,
            label: "최다하차",
          },
          {
            value: 3,
          },
          {
            value: 3,
          },
          {
            value: 3,
            label: "최다하차",
          },
          {
            value: 3,
          },
          {
            value: 2,
          },
          {
            value: 2,
          },
        ],
      },
    ],
  },
  {
    time: "09:10",
    data: [
      {
        subwayLine: 2,
        updnLine: 0,
        station: "강남",
        nextStation: "역삼",
        endStation: "외선순환",
        dt: 20220228,
        dow: "MON",
        time: "09:10",
        congestionTrainLevel: 3,
        congestionCarLevel: [
          {
            value: 3,
          },
          {
            value: 3,
          },
          {
            value: 3,
          },
          {
            value: 4,
            label: "최다하차",
          },
          {
            value: 3,
          },
          {
            value: 3,
          },
          {
            value: 3,
            label: "최다하차",
          },
          {
            value: 3,
          },
          {
            value: 3,
          },
          {
            value: 2,
          },
        ],
      },
    ],
  },
  {
    time: "09:20",
    data: [
      {
        subwayLine: 2,
        updnLine: 0,
        station: "강남",
        nextStation: "역삼",
        endStation: "외선순환",
        dt: 20220228,
        dow: "MON",
        time: "09:20",
        congestionTrainLevel: 3,
        congestionCarLevel: [
          {
            value: 3,
          },
          {
            value: 3,
          },
          {
            value: 3,
          },
          {
            value: 4,
            label: "최다하차",
          },
          {
            value: 3,
          },
          {
            value: 3,
          },
          {
            value: 3,
            label: "최다하차",
          },
          {
            value: 3,
          },
          {
            value: 3,
          },
          {
            value: 2,
          },
        ],
      },
    ],
  },
  {
    time: "09:30",
    data: [
      {
        subwayLine: 2,
        updnLine: 0,
        station: "강남",
        nextStation: "역삼",
        endStation: "외선순환",
        dt: 20220228,
        dow: "MON",
        time: "09:30",
        congestionTrainLevel: 3,
        congestionCarLevel: [
          {
            value: 3,
          },
          {
            value: 3,
          },
          {
            value: 4,
          },
          {
            value: 4,
            label: "최다하차",
          },
          {
            value: 3,
          },
          {
            value: 3,
          },
          {
            value: 3,
            label: "최다하차",
          },
          {
            value: 3,
          },
          {
            value: 3,
          },
          {
            value: 2,
          },
        ],
      },
    ],
  },
  {
    time: "09:40",
    data: [
      {
        subwayLine: 2,
        updnLine: 0,
        station: "강남",
        nextStation: "역삼",
        endStation: "외선순환",
        dt: 20220228,
        dow: "MON",
        time: "09:40",
        congestionTrainLevel: 3,
        congestionCarLevel: [
          {
            value: 2,
          },
          {
            value: 3,
          },
          {
            value: 4,
          },
          {
            value: 4,
            label: "최다하차",
          },
          {
            value: 3,
            label: "최다하차",
          },
          {
            value: 3,
          },
          {
            value: 3,
          },
          {
            value: 3,
          },
          {
            value: 3,
          },
          {
            value: 2,
          },
        ],
      },
    ],
  },
  {
    time: "09:50",
    data: [
      {
        subwayLine: 2,
        updnLine: 0,
        station: "강남",
        nextStation: "역삼",
        endStation: "외선순환",
        dt: 20220228,
        dow: "MON",
        time: "09:50",
        congestionTrainLevel: 2,
        congestionCarLevel: [
          {
            value: 2,
          },
          {
            value: 2,
          },
          {
            value: 2,
          },
          {
            value: 3,
            label: "최다하차",
          },
          {
            value: 3,
            label: "최다하차",
          },
          {
            value: 2,
          },
          {
            value: 3,
          },
          {
            value: 3,
          },
          {
            value: 2,
          },
          {
            value: 2,
          },
        ],
      },
    ],
  },
  {
    time: "10:00",
    data: [
      {
        subwayLine: 2,
        updnLine: 0,
        station: "강남",
        nextStation: "역삼",
        endStation: "외선순환",
        dt: 20220228,
        dow: "MON",
        time: "10:00",
        congestionTrainLevel: 2,
        congestionCarLevel: [
          {
            value: 1,
          },
          {
            value: 2,
          },
          {
            value: 2,
          },
          {
            value: 2,
            label: "최다하차",
          },
          {
            value: 2,
            label: "최다하차",
          },
          {
            value: 2,
          },
          {
            value: 2,
          },
          {
            value: 2,
          },
          {
            value: 2,
          },
          {
            value: 1,
          },
        ],
      },
    ],
  },
  {
    time: "10:10",
    data: [
      {
        subwayLine: 2,
        updnLine: 0,
        station: "강남",
        nextStation: "역삼",
        endStation: "외선순환",
        dt: 20220228,
        dow: "MON",
        time: "10:10",
        congestionTrainLevel: 2,
        congestionCarLevel: [
          {
            value: 1,
          },
          {
            value: 2,
          },
          {
            value: 2,
          },
          {
            value: 2,
            label: "최다하차",
          },
          {
            value: 2,
            label: "최다하차",
          },
          {
            value: 2,
          },
          {
            value: 2,
          },
          {
            value: 2,
          },
          {
            value: 2,
          },
          {
            value: 1,
          },
        ],
      },
    ],
  },
  {
    time: "10:20",
    data: [
      {
        subwayLine: 2,
        updnLine: 0,
        station: "강남",
        nextStation: "역삼",
        endStation: "외선순환",
        dt: 20220228,
        dow: "MON",
        time: "10:20",
        congestionTrainLevel: 1,
        congestionCarLevel: [
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 2,
          },
          {
            value: 2,
            label: "최다하차",
          },
          {
            value: 2,
            label: "최다하차",
          },
          {
            value: 2,
          },
          {
            value: 2,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
        ],
      },
    ],
  },
  {
    time: "10:30",
    data: [
      {
        subwayLine: 2,
        updnLine: 0,
        station: "강남",
        nextStation: "역삼",
        endStation: "외선순환",
        dt: 20220228,
        dow: "MON",
        time: "10:30",
        congestionTrainLevel: 2,
        congestionCarLevel: [
          {
            value: 1,
          },
          {
            value: 2,
          },
          {
            value: 2,
          },
          {
            value: 2,
            label: "최다하차",
          },
          {
            value: 2,
            label: "최다하차",
          },
          {
            value: 2,
          },
          {
            value: 2,
          },
          {
            value: 2,
          },
          {
            value: 2,
          },
          {
            value: 1,
          },
        ],
      },
    ],
  },
  {
    time: "10:40",
    data: [
      {
        subwayLine: 2,
        updnLine: 0,
        station: "강남",
        nextStation: "역삼",
        endStation: "외선순환",
        dt: 20220228,
        dow: "MON",
        time: "10:40",
        congestionTrainLevel: 1,
        congestionCarLevel: [
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 2,
          },
          {
            value: 2,
            label: "최다하차",
          },
          {
            value: 2,
            label: "최다하차",
          },
          {
            value: 2,
          },
          {
            value: 2,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
        ],
      },
    ],
  },
  {
    time: "10:50",
    data: [
      {
        subwayLine: 2,
        updnLine: 0,
        station: "강남",
        nextStation: "역삼",
        endStation: "외선순환",
        dt: 20220228,
        dow: "MON",
        time: "10:50",
        congestionTrainLevel: 2,
        congestionCarLevel: [
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 2,
          },
          {
            value: 2,
            label: "최다하차",
          },
          {
            value: 2,
            label: "최다하차",
          },
          {
            value: 2,
          },
          {
            value: 2,
          },
          {
            value: 2,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
        ],
      },
    ],
  },
  {
    time: "11:00",
    data: [
      {
        subwayLine: 2,
        updnLine: 0,
        station: "강남",
        nextStation: "역삼",
        endStation: "외선순환",
        dt: 20220228,
        dow: "MON",
        time: "11:00",
        congestionTrainLevel: 2,
        congestionCarLevel: [
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 2,
          },
          {
            value: 2,
            label: "최다하차",
          },
          {
            value: 2,
            label: "최다하차",
          },
          {
            value: 2,
          },
          {
            value: 2,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
        ],
      },
    ],
  },
  {
    time: "11:10",
    data: [
      {
        subwayLine: 2,
        updnLine: 0,
        station: "강남",
        nextStation: "역삼",
        endStation: "외선순환",
        dt: 20220228,
        dow: "MON",
        time: "11:10",
        congestionTrainLevel: 2,
        congestionCarLevel: [
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 2,
          },
          {
            value: 2,
            label: "최다하차",
          },
          {
            value: 2,
            label: "최다하차",
          },
          {
            value: 2,
          },
          {
            value: 2,
          },
          {
            value: 2,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
        ],
      },
    ],
  },
  {
    time: "11:20",
    data: [
      {
        subwayLine: 2,
        updnLine: 0,
        station: "강남",
        nextStation: "역삼",
        endStation: "외선순환",
        dt: 20220228,
        dow: "MON",
        time: "11:20",
        congestionTrainLevel: 1,
        congestionCarLevel: [
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 2,
            label: "최다하차",
          },
          {
            value: 2,
            label: "최다하차",
          },
          {
            value: 2,
          },
          {
            value: 2,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
        ],
      },
    ],
  },
  {
    time: "11:30",
    data: [
      {
        subwayLine: 2,
        updnLine: 0,
        station: "강남",
        nextStation: "역삼",
        endStation: "외선순환",
        dt: 20220228,
        dow: "MON",
        time: "11:30",
        congestionTrainLevel: 2,
        congestionCarLevel: [
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 2,
          },
          {
            value: 2,
            label: "최다하차",
          },
          {
            value: 2,
            label: "최다하차",
          },
          {
            value: 2,
          },
          {
            value: 2,
          },
          {
            value: 2,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
        ],
      },
    ],
  },
  {
    time: "11:40",
    data: [
      {
        subwayLine: 2,
        updnLine: 0,
        station: "강남",
        nextStation: "역삼",
        endStation: "외선순환",
        dt: 20220228,
        dow: "MON",
        time: "11:40",
        congestionTrainLevel: 1,
        congestionCarLevel: [
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 2,
          },
          {
            value: 2,
            label: "최다하차",
          },
          {
            value: 2,
            label: "최다하차",
          },
          {
            value: 2,
          },
          {
            value: 2,
          },
          {
            value: 2,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
        ],
      },
    ],
  },
  {
    time: "11:50",
    data: [
      {
        subwayLine: 2,
        updnLine: 0,
        station: "강남",
        nextStation: "역삼",
        endStation: "외선순환",
        dt: 20220228,
        dow: "MON",
        time: "11:50",
        congestionTrainLevel: 1,
        congestionCarLevel: [
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 2,
            label: "최다하차",
          },
          {
            value: 2,
            label: "최다하차",
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
        ],
      },
    ],
  },
  {
    time: "12:00",
    data: [
      {
        subwayLine: 2,
        updnLine: 0,
        station: "강남",
        nextStation: "역삼",
        endStation: "외선순환",
        dt: 20220228,
        dow: "MON",
        time: "12:00",
        congestionTrainLevel: 1,
        congestionCarLevel: [
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 2,
          },
          {
            value: 2,
            label: "최다하차",
          },
          {
            value: 2,
            label: "최다하차",
          },
          {
            value: 2,
          },
          {
            value: 2,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
        ],
      },
    ],
  },
  {
    time: "12:10",
    data: [
      {
        subwayLine: 2,
        updnLine: 0,
        station: "강남",
        nextStation: "역삼",
        endStation: "외선순환",
        dt: 20220228,
        dow: "MON",
        time: "12:10",
        congestionTrainLevel: 1,
        congestionCarLevel: [
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 2,
            label: "최다하차",
          },
          {
            value: 2,
            label: "최다하차",
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
        ],
      },
    ],
  },
  {
    time: "12:20",
    data: [
      {
        subwayLine: 2,
        updnLine: 0,
        station: "강남",
        nextStation: "역삼",
        endStation: "외선순환",
        dt: 20220228,
        dow: "MON",
        time: "12:20",
        congestionTrainLevel: 1,
        congestionCarLevel: [
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 2,
          },
          {
            value: 2,
            label: "최다하차",
          },
          {
            value: 2,
            label: "최다하차",
          },
          {
            value: 2,
          },
          {
            value: 2,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
        ],
      },
    ],
  },
  {
    time: "12:30",
    data: [
      {
        subwayLine: 2,
        updnLine: 0,
        station: "강남",
        nextStation: "역삼",
        endStation: "외선순환",
        dt: 20220228,
        dow: "MON",
        time: "12:30",
        congestionTrainLevel: 1,
        congestionCarLevel: [
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 2,
            label: "최다하차",
          },
          {
            value: 2,
            label: "최다하차",
          },
          {
            value: 2,
          },
          {
            value: 2,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
        ],
      },
    ],
  },
  {
    time: "12:40",
    data: [
      {
        subwayLine: 2,
        updnLine: 0,
        station: "강남",
        nextStation: "역삼",
        endStation: "외선순환",
        dt: 20220228,
        dow: "MON",
        time: "12:40",
        congestionTrainLevel: 1,
        congestionCarLevel: [
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 2,
          },
          {
            value: 2,
            label: "최다하차",
          },
          {
            value: 2,
            label: "최다하차",
          },
          {
            value: 2,
          },
          {
            value: 2,
          },
          {
            value: 2,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
        ],
      },
    ],
  },
  {
    time: "12:50",
    data: [
      {
        subwayLine: 2,
        updnLine: 0,
        station: "강남",
        nextStation: "역삼",
        endStation: "외선순환",
        dt: 20220228,
        dow: "MON",
        time: "12:50",
        congestionTrainLevel: 1,
        congestionCarLevel: [
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 2,
            label: "최다하차",
          },
          {
            value: 2,
            label: "최다하차",
          },
          {
            value: 2,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
        ],
      },
    ],
  },
  {
    time: "13:00",
    data: [
      {
        subwayLine: 2,
        updnLine: 0,
        station: "강남",
        nextStation: "역삼",
        endStation: "외선순환",
        dt: 20220228,
        dow: "MON",
        time: "13:00",
        congestionTrainLevel: 1,
        congestionCarLevel: [
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 2,
            label: "최다하차",
          },
          {
            value: 2,
            label: "최다하차",
          },
          {
            value: 2,
          },
          {
            value: 2,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
        ],
      },
    ],
  },
  {
    time: "13:10",
    data: [
      {
        subwayLine: 2,
        updnLine: 0,
        station: "강남",
        nextStation: "역삼",
        endStation: "외선순환",
        dt: 20220228,
        dow: "MON",
        time: "13:10",
        congestionTrainLevel: 1,
        congestionCarLevel: [
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 2,
          },
          {
            value: 2,
            label: "최다하차",
          },
          {
            value: 2,
            label: "최다하차",
          },
          {
            value: 2,
          },
          {
            value: 2,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
        ],
      },
    ],
  },
  {
    time: "13:20",
    data: [
      {
        subwayLine: 2,
        updnLine: 0,
        station: "강남",
        nextStation: "역삼",
        endStation: "외선순환",
        dt: 20220228,
        dow: "MON",
        time: "13:20",
        congestionTrainLevel: 2,
        congestionCarLevel: [
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 2,
          },
          {
            value: 2,
            label: "최다하차",
          },
          {
            value: 2,
            label: "최다하차",
          },
          {
            value: 2,
          },
          {
            value: 2,
          },
          {
            value: 2,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
        ],
      },
    ],
  },
  {
    time: "13:30",
    data: [
      {
        subwayLine: 2,
        updnLine: 0,
        station: "강남",
        nextStation: "역삼",
        endStation: "외선순환",
        dt: 20220228,
        dow: "MON",
        time: "13:30",
        congestionTrainLevel: 2,
        congestionCarLevel: [
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 2,
          },
          {
            value: 2,
            label: "최다하차",
          },
          {
            value: 2,
            label: "최다하차",
          },
          {
            value: 2,
          },
          {
            value: 2,
          },
          {
            value: 2,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
        ],
      },
    ],
  },
  {
    time: "13:40",
    data: [
      {
        subwayLine: 2,
        updnLine: 0,
        station: "강남",
        nextStation: "역삼",
        endStation: "외선순환",
        dt: 20220228,
        dow: "MON",
        time: "13:40",
        congestionTrainLevel: 2,
        congestionCarLevel: [
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 2,
          },
          {
            value: 2,
            label: "최다하차",
          },
          {
            value: 2,
            label: "최다하차",
          },
          {
            value: 2,
          },
          {
            value: 2,
          },
          {
            value: 2,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
        ],
      },
    ],
  },
  {
    time: "13:50",
    data: [
      {
        subwayLine: 2,
        updnLine: 0,
        station: "강남",
        nextStation: "역삼",
        endStation: "외선순환",
        dt: 20220228,
        dow: "MON",
        time: "13:50",
        congestionTrainLevel: 1,
        congestionCarLevel: [
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 2,
          },
          {
            value: 2,
            label: "최다하차",
          },
          {
            value: 2,
            label: "최다하차",
          },
          {
            value: 2,
          },
          {
            value: 2,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
        ],
      },
    ],
  },
  {
    time: "14:00",
    data: [
      {
        subwayLine: 2,
        updnLine: 0,
        station: "강남",
        nextStation: "역삼",
        endStation: "외선순환",
        dt: 20220228,
        dow: "MON",
        time: "14:00",
        congestionTrainLevel: 1,
        congestionCarLevel: [
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 2,
            label: "최다하차",
          },
          {
            value: 2,
            label: "최다하차",
          },
          {
            value: 2,
          },
          {
            value: 2,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
        ],
      },
    ],
  },
  {
    time: "14:10",
    data: [
      {
        subwayLine: 2,
        updnLine: 0,
        station: "강남",
        nextStation: "역삼",
        endStation: "외선순환",
        dt: 20220228,
        dow: "MON",
        time: "14:10",
        congestionTrainLevel: 1,
        congestionCarLevel: [
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
            label: "최다하차",
          },
          {
            value: 1,
            label: "최다하차",
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
        ],
      },
    ],
  },
  {
    time: "14:20",
    data: [
      {
        subwayLine: 2,
        updnLine: 0,
        station: "강남",
        nextStation: "역삼",
        endStation: "외선순환",
        dt: 20220228,
        dow: "MON",
        time: "14:20",
        congestionTrainLevel: 1,
        congestionCarLevel: [
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
            label: "최다하차",
          },
          {
            value: 1,
            label: "최다하차",
          },
          {
            value: 2,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
        ],
      },
    ],
  },
  {
    time: "14:30",
    data: [
      {
        subwayLine: 2,
        updnLine: 0,
        station: "강남",
        nextStation: "역삼",
        endStation: "외선순환",
        dt: 20220228,
        dow: "MON",
        time: "14:30",
        congestionTrainLevel: 2,
        congestionCarLevel: [
          {
            value: 1,
          },
          {
            value: 2,
          },
          {
            value: 2,
          },
          {
            value: 2,
            label: "최다하차",
          },
          {
            value: 2,
            label: "최다하차",
          },
          {
            value: 2,
          },
          {
            value: 2,
          },
          {
            value: 2,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
        ],
      },
    ],
  },
  {
    time: "14:40",
    data: [
      {
        subwayLine: 2,
        updnLine: 0,
        station: "강남",
        nextStation: "역삼",
        endStation: "외선순환",
        dt: 20220228,
        dow: "MON",
        time: "14:40",
        congestionTrainLevel: 1,
        congestionCarLevel: [
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 2,
            label: "최다하차",
          },
          {
            value: 2,
            label: "최다하차",
          },
          {
            value: 2,
          },
          {
            value: 2,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
        ],
      },
    ],
  },
  {
    time: "14:50",
    data: [
      {
        subwayLine: 2,
        updnLine: 0,
        station: "강남",
        nextStation: "역삼",
        endStation: "외선순환",
        dt: 20220228,
        dow: "MON",
        time: "14:50",
        congestionTrainLevel: 1,
        congestionCarLevel: [
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 2,
            label: "최다하차",
          },
          {
            value: 2,
            label: "최다하차",
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
        ],
      },
    ],
  },
  {
    time: "15:00",
    data: [
      {
        subwayLine: 2,
        updnLine: 0,
        station: "강남",
        nextStation: "역삼",
        endStation: "외선순환",
        dt: 20220228,
        dow: "MON",
        time: "15:00",
        congestionTrainLevel: 1,
        congestionCarLevel: [
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 2,
            label: "최다하차",
          },
          {
            value: 2,
            label: "최다하차",
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
        ],
      },
    ],
  },
  {
    time: "15:10",
    data: [
      {
        subwayLine: 2,
        updnLine: 0,
        station: "강남",
        nextStation: "역삼",
        endStation: "외선순환",
        dt: 20220228,
        dow: "MON",
        time: "15:10",
        congestionTrainLevel: 1,
        congestionCarLevel: [
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 2,
            label: "최다하차",
          },
          {
            value: 2,
            label: "최다하차",
          },
          {
            value: 2,
          },
          {
            value: 2,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
        ],
      },
    ],
  },
  {
    time: "15:20",
    data: [
      {
        subwayLine: 2,
        updnLine: 0,
        station: "강남",
        nextStation: "역삼",
        endStation: "외선순환",
        dt: 20220228,
        dow: "MON",
        time: "15:20",
        congestionTrainLevel: 1,
        congestionCarLevel: [
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 2,
            label: "최다하차",
          },
          {
            value: 2,
            label: "최다하차",
          },
          {
            value: 2,
          },
          {
            value: 2,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
        ],
      },
    ],
  },
  {
    time: "15:30",
    data: [
      {
        subwayLine: 2,
        updnLine: 0,
        station: "강남",
        nextStation: "역삼",
        endStation: "외선순환",
        dt: 20220228,
        dow: "MON",
        time: "15:30",
        congestionTrainLevel: 1,
        congestionCarLevel: [
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 2,
            label: "최다하차",
          },
          {
            value: 2,
            label: "최다하차",
          },
          {
            value: 2,
          },
          {
            value: 2,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
        ],
      },
    ],
  },
  {
    time: "15:40",
    data: [
      {
        subwayLine: 2,
        updnLine: 0,
        station: "강남",
        nextStation: "역삼",
        endStation: "외선순환",
        dt: 20220228,
        dow: "MON",
        time: "15:40",
        congestionTrainLevel: 1,
        congestionCarLevel: [
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 2,
            label: "최다하차",
          },
          {
            value: 2,
            label: "최다하차",
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
        ],
      },
    ],
  },
  {
    time: "15:50",
    data: [
      {
        subwayLine: 2,
        updnLine: 0,
        station: "강남",
        nextStation: "역삼",
        endStation: "외선순환",
        dt: 20220228,
        dow: "MON",
        time: "15:50",
        congestionTrainLevel: 1,
        congestionCarLevel: [
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 2,
            label: "최다하차",
          },
          {
            value: 2,
            label: "최다하차",
          },
          {
            value: 2,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
        ],
      },
    ],
  },
  {
    time: "16:00",
    data: [
      {
        subwayLine: 2,
        updnLine: 0,
        station: "강남",
        nextStation: "역삼",
        endStation: "외선순환",
        dt: 20220228,
        dow: "MON",
        time: "16:00",
        congestionTrainLevel: 2,
        congestionCarLevel: [
          {
            value: 2,
          },
          {
            value: 1,
          },
          {
            value: 2,
          },
          {
            value: 2,
            label: "최다하차",
          },
          {
            value: 2,
            label: "최다하차",
          },
          {
            value: 2,
          },
          {
            value: 2,
          },
          {
            value: 2,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
        ],
      },
    ],
  },
  {
    time: "16:10",
    data: [
      {
        subwayLine: 2,
        updnLine: 0,
        station: "강남",
        nextStation: "역삼",
        endStation: "외선순환",
        dt: 20220228,
        dow: "MON",
        time: "16:10",
        congestionTrainLevel: 1,
        congestionCarLevel: [
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 2,
            label: "최다하차",
          },
          {
            value: 2,
            label: "최다하차",
          },
          {
            value: 2,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
        ],
      },
    ],
  },
  {
    time: "16:20",
    data: [
      {
        subwayLine: 2,
        updnLine: 0,
        station: "강남",
        nextStation: "역삼",
        endStation: "외선순환",
        dt: 20220228,
        dow: "MON",
        time: "16:20",
        congestionTrainLevel: 1,
        congestionCarLevel: [
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 2,
          },
          {
            value: 2,
            label: "최다하차",
          },
          {
            value: 2,
            label: "최다하차",
          },
          {
            value: 2,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
        ],
      },
    ],
  },
  {
    time: "16:30",
    data: [
      {
        subwayLine: 2,
        updnLine: 0,
        station: "강남",
        nextStation: "역삼",
        endStation: "외선순환",
        dt: 20220228,
        dow: "MON",
        time: "16:30",
        congestionTrainLevel: 1,
        congestionCarLevel: [
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 2,
          },
          {
            value: 2,
            label: "최다하차",
          },
          {
            value: 2,
            label: "최다하차",
          },
          {
            value: 2,
          },
          {
            value: 2,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
        ],
      },
    ],
  },
  {
    time: "16:40",
    data: [
      {
        subwayLine: 2,
        updnLine: 0,
        station: "강남",
        nextStation: "역삼",
        endStation: "외선순환",
        dt: 20220228,
        dow: "MON",
        time: "16:40",
        congestionTrainLevel: 1,
        congestionCarLevel: [
          {
            value: 2,
          },
          {
            value: 1,
          },
          {
            value: 2,
          },
          {
            value: 2,
            label: "최다하차",
          },
          {
            value: 2,
            label: "최다하차",
          },
          {
            value: 2,
          },
          {
            value: 2,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
        ],
      },
    ],
  },
  {
    time: "16:50",
    data: [
      {
        subwayLine: 2,
        updnLine: 0,
        station: "강남",
        nextStation: "역삼",
        endStation: "외선순환",
        dt: 20220228,
        dow: "MON",
        time: "16:50",
        congestionTrainLevel: 1,
        congestionCarLevel: [
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 2,
            label: "최다하차",
          },
          {
            value: 2,
            label: "최다하차",
          },
          {
            value: 2,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
        ],
      },
    ],
  },
  {
    time: "17:00",
    data: [
      {
        subwayLine: 2,
        updnLine: 0,
        station: "강남",
        nextStation: "역삼",
        endStation: "외선순환",
        dt: 20220228,
        dow: "MON",
        time: "17:00",
        congestionTrainLevel: 1,
        congestionCarLevel: [
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 2,
            label: "최다하차",
          },
          {
            value: 2,
            label: "최다하차",
          },
          {
            value: 2,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
        ],
      },
    ],
  },
  {
    time: "17:10",
    data: [
      {
        subwayLine: 2,
        updnLine: 0,
        station: "강남",
        nextStation: "역삼",
        endStation: "외선순환",
        dt: 20220228,
        dow: "MON",
        time: "17:10",
        congestionTrainLevel: 1,
        congestionCarLevel: [
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 2,
            label: "최다하차",
          },
          {
            value: 2,
            label: "최다하차",
          },
          {
            value: 1,
          },
          {
            value: 2,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
        ],
      },
    ],
  },
  {
    time: "17:20",
    data: [
      {
        subwayLine: 2,
        updnLine: 0,
        station: "강남",
        nextStation: "역삼",
        endStation: "외선순환",
        dt: 20220228,
        dow: "MON",
        time: "17:20",
        congestionTrainLevel: 1,
        congestionCarLevel: [
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 2,
            label: "최다하차",
          },
          {
            value: 2,
            label: "최다하차",
          },
          {
            value: 2,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
        ],
      },
    ],
  },
  {
    time: "17:30",
    data: [
      {
        subwayLine: 2,
        updnLine: 0,
        station: "강남",
        nextStation: "역삼",
        endStation: "외선순환",
        dt: 20220228,
        dow: "MON",
        time: "17:30",
        congestionTrainLevel: 2,
        congestionCarLevel: [
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 2,
          },
          {
            value: 2,
            label: "최다하차",
          },
          {
            value: 2,
            label: "최다하차",
          },
          {
            value: 2,
          },
          {
            value: 2,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
        ],
      },
    ],
  },
  {
    time: "17:40",
    data: [
      {
        subwayLine: 2,
        updnLine: 0,
        station: "강남",
        nextStation: "역삼",
        endStation: "외선순환",
        dt: 20220228,
        dow: "MON",
        time: "17:40",
        congestionTrainLevel: 2,
        congestionCarLevel: [
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 2,
          },
          {
            value: 2,
            label: "최다하차",
          },
          {
            value: 2,
            label: "최다하차",
          },
          {
            value: 2,
          },
          {
            value: 2,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
        ],
      },
    ],
  },
  {
    time: "17:50",
    data: [
      {
        subwayLine: 2,
        updnLine: 0,
        station: "강남",
        nextStation: "역삼",
        endStation: "외선순환",
        dt: 20220228,
        dow: "MON",
        time: "17:50",
        congestionTrainLevel: 1,
        congestionCarLevel: [
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 2,
          },
          {
            value: 2,
            label: "최다하차",
          },
          {
            value: 2,
            label: "최다하차",
          },
          {
            value: 2,
          },
          {
            value: 2,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
        ],
      },
    ],
  },
  {
    time: "18:00",
    data: [
      {
        subwayLine: 2,
        updnLine: 0,
        station: "강남",
        nextStation: "역삼",
        endStation: "외선순환",
        dt: 20220228,
        dow: "MON",
        time: "18:00",
        congestionTrainLevel: 2,
        congestionCarLevel: [
          {
            value: 2,
          },
          {
            value: 1,
          },
          {
            value: 2,
          },
          {
            value: 2,
            label: "최다하차",
          },
          {
            value: 2,
            label: "최다하차",
          },
          {
            value: 2,
          },
          {
            value: 2,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
        ],
      },
    ],
  },
  {
    time: "18:10",
    data: [
      {
        subwayLine: 2,
        updnLine: 0,
        station: "강남",
        nextStation: "역삼",
        endStation: "외선순환",
        dt: 20220228,
        dow: "MON",
        time: "18:10",
        congestionTrainLevel: 2,
        congestionCarLevel: [
          {
            value: 2,
          },
          {
            value: 2,
          },
          {
            value: 2,
          },
          {
            value: 2,
            label: "최다하차",
          },
          {
            value: 2,
            label: "최다하차",
          },
          {
            value: 2,
          },
          {
            value: 2,
          },
          {
            value: 2,
          },
          {
            value: 2,
          },
          {
            value: 1,
          },
        ],
      },
    ],
  },
  {
    time: "18:20",
    data: [
      {
        subwayLine: 2,
        updnLine: 0,
        station: "강남",
        nextStation: "역삼",
        endStation: "외선순환",
        dt: 20220228,
        dow: "MON",
        time: "18:20",
        congestionTrainLevel: 2,
        congestionCarLevel: [
          {
            value: 2,
          },
          {
            value: 1,
          },
          {
            value: 2,
          },
          {
            value: 2,
            label: "최다하차",
          },
          {
            value: 2,
            label: "최다하차",
          },
          {
            value: 2,
          },
          {
            value: 2,
          },
          {
            value: 2,
          },
          {
            value: 2,
          },
          {
            value: 1,
          },
        ],
      },
    ],
  },
  {
    time: "18:30",
    data: [
      {
        subwayLine: 2,
        updnLine: 0,
        station: "강남",
        nextStation: "역삼",
        endStation: "외선순환",
        dt: 20220228,
        dow: "MON",
        time: "18:30",
        congestionTrainLevel: 2,
        congestionCarLevel: [
          {
            value: 2,
          },
          {
            value: 1,
          },
          {
            value: 2,
          },
          {
            value: 2,
            label: "최다하차",
          },
          {
            value: 2,
            label: "최다하차",
          },
          {
            value: 2,
          },
          {
            value: 2,
          },
          {
            value: 2,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
        ],
      },
    ],
  },
  {
    time: "18:40",
    data: [
      {
        subwayLine: 2,
        updnLine: 0,
        station: "강남",
        nextStation: "역삼",
        endStation: "외선순환",
        dt: 20220228,
        dow: "MON",
        time: "18:40",
        congestionTrainLevel: 2,
        congestionCarLevel: [
          {
            value: 2,
          },
          {
            value: 2,
          },
          {
            value: 2,
          },
          {
            value: 2,
            label: "최다하차",
          },
          {
            value: 2,
            label: "최다하차",
          },
          {
            value: 2,
          },
          {
            value: 2,
          },
          {
            value: 2,
          },
          {
            value: 2,
          },
          {
            value: 1,
          },
        ],
      },
    ],
  },
  {
    time: "18:50",
    data: [
      {
        subwayLine: 2,
        updnLine: 0,
        station: "강남",
        nextStation: "역삼",
        endStation: "외선순환",
        dt: 20220228,
        dow: "MON",
        time: "18:50",
        congestionTrainLevel: 2,
        congestionCarLevel: [
          {
            value: 2,
          },
          {
            value: 2,
          },
          {
            value: 2,
          },
          {
            value: 2,
            label: "최다하차",
          },
          {
            value: 2,
            label: "최다하차",
          },
          {
            value: 2,
          },
          {
            value: 2,
          },
          {
            value: 2,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
        ],
      },
    ],
  },
  {
    time: "19:00",
    data: [
      {
        subwayLine: 2,
        updnLine: 0,
        station: "강남",
        nextStation: "역삼",
        endStation: "외선순환",
        dt: 20220228,
        dow: "MON",
        time: "19:00",
        congestionTrainLevel: 2,
        congestionCarLevel: [
          {
            value: 2,
          },
          {
            value: 1,
          },
          {
            value: 2,
          },
          {
            value: 2,
            label: "최다하차",
          },
          {
            value: 2,
            label: "최다하차",
          },
          {
            value: 2,
          },
          {
            value: 2,
          },
          {
            value: 2,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
        ],
      },
    ],
  },
  {
    time: "19:10",
    data: [
      {
        subwayLine: 2,
        updnLine: 0,
        station: "강남",
        nextStation: "역삼",
        endStation: "외선순환",
        dt: 20220228,
        dow: "MON",
        time: "19:10",
        congestionTrainLevel: 1,
        congestionCarLevel: [
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 2,
            label: "최다하차",
          },
          {
            value: 2,
            label: "최다하차",
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
        ],
      },
    ],
  },
  {
    time: "19:20",
    data: [
      {
        subwayLine: 2,
        updnLine: 0,
        station: "강남",
        nextStation: "역삼",
        endStation: "외선순환",
        dt: 20220228,
        dow: "MON",
        time: "19:20",
        congestionTrainLevel: 1,
        congestionCarLevel: [
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
            label: "최다하차",
          },
          {
            value: 2,
            label: "최다하차",
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
        ],
      },
    ],
  },
  {
    time: "19:30",
    data: [
      {
        subwayLine: 2,
        updnLine: 0,
        station: "강남",
        nextStation: "역삼",
        endStation: "외선순환",
        dt: 20220228,
        dow: "MON",
        time: "19:30",
        congestionTrainLevel: 1,
        congestionCarLevel: [
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
            label: "최다하차",
          },
          {
            value: 1,
            label: "최다하차",
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
        ],
      },
    ],
  },
  {
    time: "19:40",
    data: [
      {
        subwayLine: 2,
        updnLine: 0,
        station: "강남",
        nextStation: "역삼",
        endStation: "외선순환",
        dt: 20220228,
        dow: "MON",
        time: "19:40",
        congestionTrainLevel: 1,
        congestionCarLevel: [
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
            label: "최다하차",
          },
          {
            value: 1,
            label: "최다하차",
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
        ],
      },
    ],
  },
  {
    time: "19:50",
    data: [
      {
        subwayLine: 2,
        updnLine: 0,
        station: "강남",
        nextStation: "역삼",
        endStation: "외선순환",
        dt: 20220228,
        dow: "MON",
        time: "19:50",
        congestionTrainLevel: 1,
        congestionCarLevel: [
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
            label: "최다하차",
          },
          {
            value: 1,
            label: "최다하차",
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
        ],
      },
    ],
  },
  {
    time: "20:00",
    data: [
      {
        subwayLine: 2,
        updnLine: 0,
        station: "강남",
        nextStation: "역삼",
        endStation: "외선순환",
        dt: 20220228,
        dow: "MON",
        time: "20:00",
        congestionTrainLevel: 1,
        congestionCarLevel: [
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
            label: "최다하차",
          },
          {
            value: 1,
            label: "최다하차",
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
        ],
      },
    ],
  },
  {
    time: "20:10",
    data: [
      {
        subwayLine: 2,
        updnLine: 0,
        station: "강남",
        nextStation: "역삼",
        endStation: "외선순환",
        dt: 20220228,
        dow: "MON",
        time: "20:10",
        congestionTrainLevel: 1,
        congestionCarLevel: [
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
            label: "최다하차",
          },
          {
            value: 1,
            label: "최다하차",
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
        ],
      },
    ],
  },
  {
    time: "20:20",
    data: [
      {
        subwayLine: 2,
        updnLine: 0,
        station: "강남",
        nextStation: "역삼",
        endStation: "외선순환",
        dt: 20220228,
        dow: "MON",
        time: "20:20",
        congestionTrainLevel: 1,
        congestionCarLevel: [
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
            label: "최다하차",
          },
          {
            value: 1,
            label: "최다하차",
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
        ],
      },
    ],
  },
  {
    time: "20:30",
    data: [
      {
        subwayLine: 2,
        updnLine: 0,
        station: "강남",
        nextStation: "역삼",
        endStation: "외선순환",
        dt: 20220228,
        dow: "MON",
        time: "20:30",
        congestionTrainLevel: 1,
        congestionCarLevel: [
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
            label: "최다하차",
          },
          {
            value: 1,
            label: "최다하차",
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
        ],
      },
    ],
  },
  {
    time: "20:40",
    data: [
      {
        subwayLine: 2,
        updnLine: 0,
        station: "강남",
        nextStation: "역삼",
        endStation: "외선순환",
        dt: 20220228,
        dow: "MON",
        time: "20:40",
        congestionTrainLevel: 1,
        congestionCarLevel: [
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
            label: "최다하차",
          },
          {
            value: 1,
            label: "최다하차",
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
        ],
      },
    ],
  },
  {
    time: "20:50",
    data: [
      {
        subwayLine: 2,
        updnLine: 0,
        station: "강남",
        nextStation: "역삼",
        endStation: "외선순환",
        dt: 20220228,
        dow: "MON",
        time: "20:50",
        congestionTrainLevel: 1,
        congestionCarLevel: [
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
            label: "최다하차",
          },
          {
            value: 1,
            label: "최다하차",
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
        ],
      },
    ],
  },
  {
    time: "21:00",
    data: [
      {
        subwayLine: 2,
        updnLine: 0,
        station: "강남",
        nextStation: "역삼",
        endStation: "외선순환",
        dt: 20220228,
        dow: "MON",
        time: "21:00",
        congestionTrainLevel: 1,
        congestionCarLevel: [
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
            label: "최다하차",
          },
          {
            value: 1,
            label: "최다하차",
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
        ],
      },
    ],
  },
  {
    time: "21:10",
    data: [
      {
        subwayLine: 2,
        updnLine: 0,
        station: "강남",
        nextStation: "역삼",
        endStation: "외선순환",
        dt: 20220228,
        dow: "MON",
        time: "21:10",
        congestionTrainLevel: 1,
        congestionCarLevel: [
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
            label: "최다하차",
          },
          {
            value: 2,
            label: "최다하차",
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
        ],
      },
    ],
  },
  {
    time: "21:20",
    data: [
      {
        subwayLine: 2,
        updnLine: 0,
        station: "강남",
        nextStation: "역삼",
        endStation: "외선순환",
        dt: 20220228,
        dow: "MON",
        time: "21:20",
        congestionTrainLevel: 1,
        congestionCarLevel: [
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
            label: "최다하차",
          },
          {
            value: 2,
            label: "최다하차",
          },
          {
            value: 2,
          },
          {
            value: 2,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
        ],
      },
    ],
  },
  {
    time: "21:30",
    data: [
      {
        subwayLine: 2,
        updnLine: 0,
        station: "강남",
        nextStation: "역삼",
        endStation: "외선순환",
        dt: 20220228,
        dow: "MON",
        time: "21:30",
        congestionTrainLevel: 1,
        congestionCarLevel: [
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 2,
            label: "최다하차",
          },
          {
            value: 2,
            label: "최다하차",
          },
          {
            value: 2,
          },
          {
            value: 2,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
        ],
      },
    ],
  },
  {
    time: "21:40",
    data: [
      {
        subwayLine: 2,
        updnLine: 0,
        station: "강남",
        nextStation: "역삼",
        endStation: "외선순환",
        dt: 20220228,
        dow: "MON",
        time: "21:40",
        congestionTrainLevel: 1,
        congestionCarLevel: [
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
            label: "최다하차",
          },
          {
            value: 1,
            label: "최다하차",
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
        ],
      },
    ],
  },
  {
    time: "21:50",
    data: [
      {
        subwayLine: 2,
        updnLine: 0,
        station: "강남",
        nextStation: "역삼",
        endStation: "외선순환",
        dt: 20220228,
        dow: "MON",
        time: "21:50",
        congestionTrainLevel: 1,
        congestionCarLevel: [
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 2,
            label: "최다하차",
          },
          {
            value: 2,
            label: "최다하차",
          },
          {
            value: 2,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
        ],
      },
    ],
  },
  {
    time: "22:00",
    data: [
      {
        subwayLine: 2,
        updnLine: 0,
        station: "강남",
        nextStation: "역삼",
        endStation: "외선순환",
        dt: 20220228,
        dow: "MON",
        time: "22:00",
        congestionTrainLevel: 1,
        congestionCarLevel: [
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
            label: "최다하차",
          },
          {
            value: 1,
            label: "최다하차",
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
        ],
      },
    ],
  },
  {
    time: "22:10",
    data: [
      {
        subwayLine: 2,
        updnLine: 0,
        station: "강남",
        nextStation: "역삼",
        endStation: "외선순환",
        dt: 20220228,
        dow: "MON",
        time: "22:10",
        congestionTrainLevel: 1,
        congestionCarLevel: [
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
            label: "최다하차",
          },
          {
            value: 1,
            label: "최다하차",
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
        ],
      },
    ],
  },
  {
    time: "22:20",
    data: [
      {
        subwayLine: 2,
        updnLine: 0,
        station: "강남",
        nextStation: "역삼",
        endStation: "외선순환",
        dt: 20220228,
        dow: "MON",
        time: "22:20",
        congestionTrainLevel: 1,
        congestionCarLevel: [
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
            label: "최다하차",
          },
          {
            value: 1,
            label: "최다하차",
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
        ],
      },
    ],
  },
  {
    time: "22:30",
    data: [
      {
        subwayLine: 2,
        updnLine: 0,
        station: "강남",
        nextStation: "역삼",
        endStation: "외선순환",
        dt: 20220228,
        dow: "MON",
        time: "22:30",
        congestionTrainLevel: 1,
        congestionCarLevel: [
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
            label: "최다하차",
          },
          {
            value: 1,
            label: "최다하차",
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
        ],
      },
    ],
  },
  {
    time: "22:40",
    data: [
      {
        subwayLine: 2,
        updnLine: 0,
        station: "강남",
        nextStation: "역삼",
        endStation: "외선순환",
        dt: 20220228,
        dow: "MON",
        time: "22:40",
        congestionTrainLevel: 1,
        congestionCarLevel: [
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
            label: "최다하차",
          },
          {
            value: 1,
            label: "최다하차",
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
        ],
      },
    ],
  },
  {
    time: "22:50",
    data: [
      {
        subwayLine: 2,
        updnLine: 0,
        station: "강남",
        nextStation: "역삼",
        endStation: "외선순환",
        dt: 20220228,
        dow: "MON",
        time: "22:50",
        congestionTrainLevel: 1,
        congestionCarLevel: [
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
            label: "최다하차",
          },
          {
            value: 1,
            label: "최다하차",
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
        ],
      },
    ],
  },
  {
    time: "23:00",
    data: [
      {
        subwayLine: 2,
        updnLine: 0,
        station: "강남",
        nextStation: "역삼",
        endStation: "외선순환",
        dt: 20220228,
        dow: "MON",
        time: "23:00",
        congestionTrainLevel: 1,
        congestionCarLevel: [
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
            label: "최다하차",
          },
          {
            value: 1,
            label: "최다하차",
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
        ],
      },
    ],
  },
  {
    time: "23:10",
    data: [
      {
        subwayLine: 2,
        updnLine: 0,
        station: "강남",
        nextStation: "역삼",
        endStation: "외선순환",
        dt: 20220228,
        dow: "MON",
        time: "23:10",
        congestionTrainLevel: 1,
        congestionCarLevel: [
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
            label: "최다하차",
          },
          {
            value: 1,
            label: "최다하차",
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
        ],
      },
    ],
  },
  {
    time: "23:20",
    data: [
      {
        subwayLine: 2,
        updnLine: 0,
        station: "강남",
        nextStation: "역삼",
        endStation: "외선순환",
        dt: 20220228,
        dow: "MON",
        time: "23:20",
        congestionTrainLevel: 1,
        congestionCarLevel: [
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
            label: "최다하차",
          },
          {
            value: 1,
            label: "최다하차",
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
        ],
      },
    ],
  },
  {
    time: "23:30",
    data: [
      {
        subwayLine: 2,
        updnLine: 0,
        station: "강남",
        nextStation: "역삼",
        endStation: "외선순환",
        dt: 20220228,
        dow: "MON",
        time: "23:30",
        congestionTrainLevel: 1,
        congestionCarLevel: [
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
            label: "최다하차",
          },
          {
            value: 1,
            label: "최다하차",
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
        ],
      },
    ],
  },
  {
    time: "23:40",
    data: [
      {
        subwayLine: 2,
        updnLine: 0,
        station: "강남",
        nextStation: "역삼",
        endStation: "외선순환",
        dt: 20220228,
        dow: "MON",
        time: "23:40",
        congestionTrainLevel: 1,
        congestionCarLevel: [
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
            label: "최다하차",
          },
          {
            value: 1,
            label: "최다하차",
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
        ],
      },
    ],
  },
  {
    time: "23:50",
    data: [
      {
        subwayLine: 2,
        updnLine: 0,
        station: "강남",
        nextStation: "역삼",
        endStation: "외선순환",
        dt: 20220228,
        dow: "MON",
        time: "23:50",
        congestionTrainLevel: 1,
        congestionCarLevel: [
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
            label: "최다하차",
          },
          {
            value: 1,
            label: "최다하차",
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
        ],
      },
    ],
  },
  {
    time: "05:30",
    data: [
      {
        subwayLine: 2,
        updnLine: 1,
        station: "강남",
        nextStation: "교대",
        endStation: "내선순환",
        dt: 20220228,
        dow: "MON",
        time: "05:30",
        congestionTrainLevel: 1,
        congestionCarLevel: [
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
            label: "최다하차",
          },
          {
            value: 1,
          },
          {
            value: 1,
            label: "최다하차",
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
        ],
      },
    ],
  },
  {
    time: "05:40",
    data: [
      {
        subwayLine: 2,
        updnLine: 1,
        station: "강남",
        nextStation: "교대",
        endStation: "내선순환",
        dt: 20220228,
        dow: "MON",
        time: "05:40",
        congestionTrainLevel: 1,
        congestionCarLevel: [
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
            label: "최다하차",
          },
          {
            value: 1,
          },
          {
            value: 1,
            label: "최다하차",
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
        ],
      },
    ],
  },
  {
    time: "05:50",
    data: [
      {
        subwayLine: 2,
        updnLine: 1,
        station: "강남",
        nextStation: "교대",
        endStation: "내선순환",
        dt: 20220228,
        dow: "MON",
        time: "05:50",
        congestionTrainLevel: 1,
        congestionCarLevel: [
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
            label: "최다하차",
          },
          {
            value: 1,
          },
          {
            value: 1,
            label: "최다하차",
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
        ],
      },
    ],
  },
  {
    time: "06:00",
    data: [
      {
        subwayLine: 2,
        updnLine: 1,
        station: "강남",
        nextStation: "교대",
        endStation: "내선순환",
        dt: 20220228,
        dow: "MON",
        time: "06:00",
        congestionTrainLevel: 1,
        congestionCarLevel: [
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
            label: "최다하차",
          },
          {
            value: 1,
          },
          {
            value: 1,
            label: "최다하차",
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
        ],
      },
    ],
  },
  {
    time: "06:10",
    data: [
      {
        subwayLine: 2,
        updnLine: 1,
        station: "강남",
        nextStation: "교대",
        endStation: "내선순환",
        dt: 20220228,
        dow: "MON",
        time: "06:10",
        congestionTrainLevel: 1,
        congestionCarLevel: [
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
            label: "최다하차",
          },
          {
            value: 1,
          },
          {
            value: 1,
            label: "최다하차",
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
        ],
      },
    ],
  },
  {
    time: "06:20",
    data: [
      {
        subwayLine: 2,
        updnLine: 1,
        station: "강남",
        nextStation: "교대",
        endStation: "내선순환",
        dt: 20220228,
        dow: "MON",
        time: "06:20",
        congestionTrainLevel: 1,
        congestionCarLevel: [
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
            label: "최다하차",
          },
          {
            value: 1,
          },
          {
            value: 1,
            label: "최다하차",
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
        ],
      },
    ],
  },
  {
    time: "06:30",
    data: [
      {
        subwayLine: 2,
        updnLine: 1,
        station: "강남",
        nextStation: "교대",
        endStation: "내선순환",
        dt: 20220228,
        dow: "MON",
        time: "06:30",
        congestionTrainLevel: 1,
        congestionCarLevel: [
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
            label: "최다하차",
          },
          {
            value: 1,
          },
          {
            value: 1,
            label: "최다하차",
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
        ],
      },
    ],
  },
  {
    time: "06:40",
    data: [
      {
        subwayLine: 2,
        updnLine: 1,
        station: "강남",
        nextStation: "교대",
        endStation: "내선순환",
        dt: 20220228,
        dow: "MON",
        time: "06:40",
        congestionTrainLevel: 1,
        congestionCarLevel: [
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
            label: "최다하차",
          },
          {
            value: 1,
          },
          {
            value: 1,
            label: "최다하차",
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
        ],
      },
    ],
  },
  {
    time: "06:50",
    data: [
      {
        subwayLine: 2,
        updnLine: 1,
        station: "강남",
        nextStation: "교대",
        endStation: "내선순환",
        dt: 20220228,
        dow: "MON",
        time: "06:50",
        congestionTrainLevel: 1,
        congestionCarLevel: [
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
            label: "최다하차",
          },
          {
            value: 1,
          },
          {
            value: 1,
            label: "최다하차",
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
        ],
      },
    ],
  },
  {
    time: "07:00",
    data: [
      {
        subwayLine: 2,
        updnLine: 1,
        station: "강남",
        nextStation: "교대",
        endStation: "내선순환",
        dt: 20220228,
        dow: "MON",
        time: "07:00",
        congestionTrainLevel: 1,
        congestionCarLevel: [
          {
            value: 1,
          },
          {
            value: 1,
            label: "최다하차",
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
            label: "최다하차",
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
        ],
      },
    ],
  },
  {
    time: "07:10",
    data: [
      {
        subwayLine: 2,
        updnLine: 1,
        station: "강남",
        nextStation: "교대",
        endStation: "내선순환",
        dt: 20220228,
        dow: "MON",
        time: "07:10",
        congestionTrainLevel: 1,
        congestionCarLevel: [
          {
            value: 1,
          },
          {
            value: 1,
            label: "최다하차",
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
            label: "최다하차",
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
        ],
      },
    ],
  },
  {
    time: "07:20",
    data: [
      {
        subwayLine: 2,
        updnLine: 1,
        station: "강남",
        nextStation: "교대",
        endStation: "내선순환",
        dt: 20220228,
        dow: "MON",
        time: "07:20",
        congestionTrainLevel: 1,
        congestionCarLevel: [
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
            label: "최다하차",
          },
          {
            value: 2,
          },
          {
            value: 2,
            label: "최다하차",
          },
          {
            value: 1,
          },
          {
            value: 2,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
        ],
      },
    ],
  },
  {
    time: "07:30",
    data: [
      {
        subwayLine: 2,
        updnLine: 1,
        station: "강남",
        nextStation: "교대",
        endStation: "내선순환",
        dt: 20220228,
        dow: "MON",
        time: "07:30",
        congestionTrainLevel: 1,
        congestionCarLevel: [
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
            label: "최다하차",
          },
          {
            value: 1,
          },
          {
            value: 2,
            label: "최다하차",
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
        ],
      },
    ],
  },
  {
    time: "07:40",
    data: [
      {
        subwayLine: 2,
        updnLine: 1,
        station: "강남",
        nextStation: "교대",
        endStation: "내선순환",
        dt: 20220228,
        dow: "MON",
        time: "07:40",
        congestionTrainLevel: 1,
        congestionCarLevel: [
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
            label: "최다하차",
          },
          {
            value: 1,
          },
          {
            value: 1,
            label: "최다하차",
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
        ],
      },
    ],
  },
  {
    time: "07:50",
    data: [
      {
        subwayLine: 2,
        updnLine: 1,
        station: "강남",
        nextStation: "교대",
        endStation: "내선순환",
        dt: 20220228,
        dow: "MON",
        time: "07:50",
        congestionTrainLevel: 1,
        congestionCarLevel: [
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
            label: "최다하차",
          },
          {
            value: 1,
          },
          {
            value: 2,
            label: "최다하차",
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
        ],
      },
    ],
  },
  {
    time: "08:00",
    data: [
      {
        subwayLine: 2,
        updnLine: 1,
        station: "강남",
        nextStation: "교대",
        endStation: "내선순환",
        dt: 20220228,
        dow: "MON",
        time: "08:00",
        congestionTrainLevel: 2,
        congestionCarLevel: [
          {
            value: 2,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 2,
            label: "최다하차",
          },
          {
            value: 2,
          },
          {
            value: 2,
            label: "최다하차",
          },
          {
            value: 1,
          },
          {
            value: 2,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
        ],
      },
    ],
  },
  {
    time: "08:10",
    data: [
      {
        subwayLine: 2,
        updnLine: 1,
        station: "강남",
        nextStation: "교대",
        endStation: "내선순환",
        dt: 20220228,
        dow: "MON",
        time: "08:10",
        congestionTrainLevel: 2,
        congestionCarLevel: [
          {
            value: 2,
          },
          {
            value: 2,
          },
          {
            value: 2,
          },
          {
            value: 3,
            label: "최다하차",
          },
          {
            value: 2,
          },
          {
            value: 2,
            label: "최다하차",
          },
          {
            value: 2,
          },
          {
            value: 2,
          },
          {
            value: 2,
          },
          {
            value: 2,
          },
        ],
      },
    ],
  },
  {
    time: "08:20",
    data: [
      {
        subwayLine: 2,
        updnLine: 1,
        station: "강남",
        nextStation: "교대",
        endStation: "내선순환",
        dt: 20220228,
        dow: "MON",
        time: "08:20",
        congestionTrainLevel: 2,
        congestionCarLevel: [
          {
            value: 2,
          },
          {
            value: 2,
          },
          {
            value: 2,
          },
          {
            value: 2,
            label: "최다하차",
          },
          {
            value: 2,
          },
          {
            value: 2,
            label: "최다하차",
          },
          {
            value: 2,
          },
          {
            value: 2,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
        ],
      },
    ],
  },
  {
    time: "08:30",
    data: [
      {
        subwayLine: 2,
        updnLine: 1,
        station: "강남",
        nextStation: "교대",
        endStation: "내선순환",
        dt: 20220228,
        dow: "MON",
        time: "08:30",
        congestionTrainLevel: 2,
        congestionCarLevel: [
          {
            value: 2,
          },
          {
            value: 2,
          },
          {
            value: 2,
          },
          {
            value: 3,
            label: "최다하차",
          },
          {
            value: 2,
          },
          {
            value: 2,
            label: "최다하차",
          },
          {
            value: 2,
          },
          {
            value: 2,
          },
          {
            value: 2,
          },
          {
            value: 2,
          },
        ],
      },
    ],
  },
  {
    time: "08:40",
    data: [
      {
        subwayLine: 2,
        updnLine: 1,
        station: "강남",
        nextStation: "교대",
        endStation: "내선순환",
        dt: 20220228,
        dow: "MON",
        time: "08:40",
        congestionTrainLevel: 2,
        congestionCarLevel: [
          {
            value: 2,
          },
          {
            value: 2,
          },
          {
            value: 1,
          },
          {
            value: 2,
            label: "최다하차",
          },
          {
            value: 2,
          },
          {
            value: 2,
            label: "최다하차",
          },
          {
            value: 2,
          },
          {
            value: 2,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
        ],
      },
    ],
  },
  {
    time: "08:50",
    data: [
      {
        subwayLine: 2,
        updnLine: 1,
        station: "강남",
        nextStation: "교대",
        endStation: "내선순환",
        dt: 20220228,
        dow: "MON",
        time: "08:50",
        congestionTrainLevel: 2,
        congestionCarLevel: [
          {
            value: 2,
          },
          {
            value: 2,
            label: "최다하차",
          },
          {
            value: 2,
          },
          {
            value: 2,
            label: "최다하차",
          },
          {
            value: 2,
          },
          {
            value: 2,
          },
          {
            value: 2,
          },
          {
            value: 2,
          },
          {
            value: 1,
          },
          {
            value: 2,
          },
        ],
      },
    ],
  },
  {
    time: "09:00",
    data: [
      {
        subwayLine: 2,
        updnLine: 1,
        station: "강남",
        nextStation: "교대",
        endStation: "내선순환",
        dt: 20220228,
        dow: "MON",
        time: "09:00",
        congestionTrainLevel: 2,
        congestionCarLevel: [
          {
            value: 2,
          },
          {
            value: 2,
            label: "최다하차",
          },
          {
            value: 1,
          },
          {
            value: 2,
            label: "최다하차",
          },
          {
            value: 2,
          },
          {
            value: 2,
          },
          {
            value: 2,
          },
          {
            value: 2,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
        ],
      },
    ],
  },
  {
    time: "09:10",
    data: [
      {
        subwayLine: 2,
        updnLine: 1,
        station: "강남",
        nextStation: "교대",
        endStation: "내선순환",
        dt: 20220228,
        dow: "MON",
        time: "09:10",
        congestionTrainLevel: 1,
        congestionCarLevel: [
          {
            value: 1,
          },
          {
            value: 1,
            label: "최다하차",
          },
          {
            value: 1,
          },
          {
            value: 1,
            label: "최다하차",
          },
          {
            value: 1,
          },
          {
            value: 2,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
        ],
      },
    ],
  },
  {
    time: "09:20",
    data: [
      {
        subwayLine: 2,
        updnLine: 1,
        station: "강남",
        nextStation: "교대",
        endStation: "내선순환",
        dt: 20220228,
        dow: "MON",
        time: "09:20",
        congestionTrainLevel: 1,
        congestionCarLevel: [
          {
            value: 1,
          },
          {
            value: 1,
            label: "최다하차",
          },
          {
            value: 1,
          },
          {
            value: 1,
            label: "최다하차",
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
        ],
      },
    ],
  },
  {
    time: "09:30",
    data: [
      {
        subwayLine: 2,
        updnLine: 1,
        station: "강남",
        nextStation: "교대",
        endStation: "내선순환",
        dt: 20220228,
        dow: "MON",
        time: "09:30",
        congestionTrainLevel: 1,
        congestionCarLevel: [
          {
            value: 1,
          },
          {
            value: 1,
            label: "최다하차",
          },
          {
            value: 1,
          },
          {
            value: 1,
            label: "최다하차",
          },
          {
            value: 1,
          },
          {
            value: 2,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
        ],
      },
    ],
  },
  {
    time: "09:40",
    data: [
      {
        subwayLine: 2,
        updnLine: 1,
        station: "강남",
        nextStation: "교대",
        endStation: "내선순환",
        dt: 20220228,
        dow: "MON",
        time: "09:40",
        congestionTrainLevel: 1,
        congestionCarLevel: [
          {
            value: 1,
          },
          {
            value: 1,
            label: "최다하차",
          },
          {
            value: 1,
          },
          {
            value: 2,
            label: "최다하차",
          },
          {
            value: 1,
          },
          {
            value: 2,
          },
          {
            value: 2,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
        ],
      },
    ],
  },
  {
    time: "09:50",
    data: [
      {
        subwayLine: 2,
        updnLine: 1,
        station: "강남",
        nextStation: "교대",
        endStation: "내선순환",
        dt: 20220228,
        dow: "MON",
        time: "09:50",
        congestionTrainLevel: 1,
        congestionCarLevel: [
          {
            value: 1,
          },
          {
            value: 1,
            label: "최다하차",
          },
          {
            value: 1,
          },
          {
            value: 1,
            label: "최다하차",
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
        ],
      },
    ],
  },
  {
    time: "10:00",
    data: [
      {
        subwayLine: 2,
        updnLine: 1,
        station: "강남",
        nextStation: "교대",
        endStation: "내선순환",
        dt: 20220228,
        dow: "MON",
        time: "10:00",
        congestionTrainLevel: 1,
        congestionCarLevel: [
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
            label: "최다하차",
          },
          {
            value: 1,
          },
          {
            value: 1,
            label: "최다하차",
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
        ],
      },
    ],
  },
  {
    time: "10:10",
    data: [
      {
        subwayLine: 2,
        updnLine: 1,
        station: "강남",
        nextStation: "교대",
        endStation: "내선순환",
        dt: 20220228,
        dow: "MON",
        time: "10:10",
        congestionTrainLevel: 1,
        congestionCarLevel: [
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
            label: "최다하차",
          },
          {
            value: 1,
          },
          {
            value: 1,
            label: "최다하차",
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
        ],
      },
    ],
  },
  {
    time: "10:20",
    data: [
      {
        subwayLine: 2,
        updnLine: 1,
        station: "강남",
        nextStation: "교대",
        endStation: "내선순환",
        dt: 20220228,
        dow: "MON",
        time: "10:20",
        congestionTrainLevel: 1,
        congestionCarLevel: [
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
            label: "최다하차",
          },
          {
            value: 1,
          },
          {
            value: 1,
            label: "최다하차",
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
        ],
      },
    ],
  },
  {
    time: "10:30",
    data: [
      {
        subwayLine: 2,
        updnLine: 1,
        station: "강남",
        nextStation: "교대",
        endStation: "내선순환",
        dt: 20220228,
        dow: "MON",
        time: "10:30",
        congestionTrainLevel: 1,
        congestionCarLevel: [
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
            label: "최다하차",
          },
          {
            value: 1,
          },
          {
            value: 1,
            label: "최다하차",
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
        ],
      },
    ],
  },
  {
    time: "10:40",
    data: [
      {
        subwayLine: 2,
        updnLine: 1,
        station: "강남",
        nextStation: "교대",
        endStation: "내선순환",
        dt: 20220228,
        dow: "MON",
        time: "10:40",
        congestionTrainLevel: 1,
        congestionCarLevel: [
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
            label: "최다하차",
          },
          {
            value: 1,
          },
          {
            value: 1,
            label: "최다하차",
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
        ],
      },
    ],
  },
  {
    time: "10:50",
    data: [
      {
        subwayLine: 2,
        updnLine: 1,
        station: "강남",
        nextStation: "교대",
        endStation: "내선순환",
        dt: 20220228,
        dow: "MON",
        time: "10:50",
        congestionTrainLevel: 1,
        congestionCarLevel: [
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
            label: "최다하차",
          },
          {
            value: 1,
          },
          {
            value: 1,
            label: "최다하차",
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
        ],
      },
    ],
  },
  {
    time: "11:00",
    data: [
      {
        subwayLine: 2,
        updnLine: 1,
        station: "강남",
        nextStation: "교대",
        endStation: "내선순환",
        dt: 20220228,
        dow: "MON",
        time: "11:00",
        congestionTrainLevel: 1,
        congestionCarLevel: [
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
            label: "최다하차",
          },
          {
            value: 1,
          },
          {
            value: 1,
            label: "최다하차",
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
        ],
      },
    ],
  },
  {
    time: "11:10",
    data: [
      {
        subwayLine: 2,
        updnLine: 1,
        station: "강남",
        nextStation: "교대",
        endStation: "내선순환",
        dt: 20220228,
        dow: "MON",
        time: "11:10",
        congestionTrainLevel: 1,
        congestionCarLevel: [
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
            label: "최다하차",
          },
          {
            value: 1,
          },
          {
            value: 1,
            label: "최다하차",
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
        ],
      },
    ],
  },
  {
    time: "11:20",
    data: [
      {
        subwayLine: 2,
        updnLine: 1,
        station: "강남",
        nextStation: "교대",
        endStation: "내선순환",
        dt: 20220228,
        dow: "MON",
        time: "11:20",
        congestionTrainLevel: 1,
        congestionCarLevel: [
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
            label: "최다하차",
          },
          {
            value: 1,
          },
          {
            value: 1,
            label: "최다하차",
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
        ],
      },
    ],
  },
  {
    time: "11:30",
    data: [
      {
        subwayLine: 2,
        updnLine: 1,
        station: "강남",
        nextStation: "교대",
        endStation: "내선순환",
        dt: 20220228,
        dow: "MON",
        time: "11:30",
        congestionTrainLevel: 1,
        congestionCarLevel: [
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 2,
            label: "최다하차",
          },
          {
            value: 2,
          },
          {
            value: 2,
            label: "최다하차",
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
        ],
      },
    ],
  },
  {
    time: "11:40",
    data: [
      {
        subwayLine: 2,
        updnLine: 1,
        station: "강남",
        nextStation: "교대",
        endStation: "내선순환",
        dt: 20220228,
        dow: "MON",
        time: "11:40",
        congestionTrainLevel: 1,
        congestionCarLevel: [
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
            label: "최다하차",
          },
          {
            value: 1,
          },
          {
            value: 2,
            label: "최다하차",
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
        ],
      },
    ],
  },
  {
    time: "11:50",
    data: [
      {
        subwayLine: 2,
        updnLine: 1,
        station: "강남",
        nextStation: "교대",
        endStation: "내선순환",
        dt: 20220228,
        dow: "MON",
        time: "11:50",
        congestionTrainLevel: 1,
        congestionCarLevel: [
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
            label: "최다하차",
          },
          {
            value: 1,
          },
          {
            value: 1,
            label: "최다하차",
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
        ],
      },
    ],
  },
  {
    time: "12:00",
    data: [
      {
        subwayLine: 2,
        updnLine: 1,
        station: "강남",
        nextStation: "교대",
        endStation: "내선순환",
        dt: 20220228,
        dow: "MON",
        time: "12:00",
        congestionTrainLevel: 1,
        congestionCarLevel: [
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
            label: "최다하차",
          },
          {
            value: 1,
          },
          {
            value: 1,
            label: "최다하차",
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
        ],
      },
    ],
  },
  {
    time: "12:10",
    data: [
      {
        subwayLine: 2,
        updnLine: 1,
        station: "강남",
        nextStation: "교대",
        endStation: "내선순환",
        dt: 20220228,
        dow: "MON",
        time: "12:10",
        congestionTrainLevel: 1,
        congestionCarLevel: [
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 2,
            label: "최다하차",
          },
          {
            value: 1,
          },
          {
            value: 2,
            label: "최다하차",
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
        ],
      },
    ],
  },
  {
    time: "12:20",
    data: [
      {
        subwayLine: 2,
        updnLine: 1,
        station: "강남",
        nextStation: "교대",
        endStation: "내선순환",
        dt: 20220228,
        dow: "MON",
        time: "12:20",
        congestionTrainLevel: 1,
        congestionCarLevel: [
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
            label: "최다하차",
          },
          {
            value: 1,
          },
          {
            value: 1,
            label: "최다하차",
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
        ],
      },
    ],
  },
  {
    time: "12:30",
    data: [
      {
        subwayLine: 2,
        updnLine: 1,
        station: "강남",
        nextStation: "교대",
        endStation: "내선순환",
        dt: 20220228,
        dow: "MON",
        time: "12:30",
        congestionTrainLevel: 1,
        congestionCarLevel: [
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 2,
            label: "최다하차",
          },
          {
            value: 2,
          },
          {
            value: 2,
            label: "최다하차",
          },
          {
            value: 2,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
        ],
      },
    ],
  },
  {
    time: "12:40",
    data: [
      {
        subwayLine: 2,
        updnLine: 1,
        station: "강남",
        nextStation: "교대",
        endStation: "내선순환",
        dt: 20220228,
        dow: "MON",
        time: "12:40",
        congestionTrainLevel: 2,
        congestionCarLevel: [
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 2,
          },
          {
            value: 2,
            label: "최다하차",
          },
          {
            value: 2,
          },
          {
            value: 2,
            label: "최다하차",
          },
          {
            value: 2,
          },
          {
            value: 2,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
        ],
      },
    ],
  },
  {
    time: "12:50",
    data: [
      {
        subwayLine: 2,
        updnLine: 1,
        station: "강남",
        nextStation: "교대",
        endStation: "내선순환",
        dt: 20220228,
        dow: "MON",
        time: "12:50",
        congestionTrainLevel: 1,
        congestionCarLevel: [
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
            label: "최다하차",
          },
          {
            value: 1,
          },
          {
            value: 1,
            label: "최다하차",
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
        ],
      },
    ],
  },
  {
    time: "13:00",
    data: [
      {
        subwayLine: 2,
        updnLine: 1,
        station: "강남",
        nextStation: "교대",
        endStation: "내선순환",
        dt: 20220228,
        dow: "MON",
        time: "13:00",
        congestionTrainLevel: 1,
        congestionCarLevel: [
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
            label: "최다하차",
          },
          {
            value: 1,
          },
          {
            value: 1,
            label: "최다하차",
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
        ],
      },
    ],
  },
  {
    time: "13:10",
    data: [
      {
        subwayLine: 2,
        updnLine: 1,
        station: "강남",
        nextStation: "교대",
        endStation: "내선순환",
        dt: 20220228,
        dow: "MON",
        time: "13:10",
        congestionTrainLevel: 1,
        congestionCarLevel: [
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 2,
            label: "최다하차",
          },
          {
            value: 1,
          },
          {
            value: 2,
            label: "최다하차",
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
        ],
      },
    ],
  },
  {
    time: "13:20",
    data: [
      {
        subwayLine: 2,
        updnLine: 1,
        station: "강남",
        nextStation: "교대",
        endStation: "내선순환",
        dt: 20220228,
        dow: "MON",
        time: "13:20",
        congestionTrainLevel: 1,
        congestionCarLevel: [
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 2,
            label: "최다하차",
          },
          {
            value: 2,
          },
          {
            value: 2,
            label: "최다하차",
          },
          {
            value: 2,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
        ],
      },
    ],
  },
  {
    time: "13:30",
    data: [
      {
        subwayLine: 2,
        updnLine: 1,
        station: "강남",
        nextStation: "교대",
        endStation: "내선순환",
        dt: 20220228,
        dow: "MON",
        time: "13:30",
        congestionTrainLevel: 2,
        congestionCarLevel: [
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 2,
          },
          {
            value: 2,
            label: "최다하차",
          },
          {
            value: 2,
          },
          {
            value: 2,
            label: "최다하차",
          },
          {
            value: 2,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
        ],
      },
    ],
  },
  {
    time: "13:40",
    data: [
      {
        subwayLine: 2,
        updnLine: 1,
        station: "강남",
        nextStation: "교대",
        endStation: "내선순환",
        dt: 20220228,
        dow: "MON",
        time: "13:40",
        congestionTrainLevel: 2,
        congestionCarLevel: [
          {
            value: 2,
          },
          {
            value: 2,
          },
          {
            value: 2,
          },
          {
            value: 2,
            label: "최다하차",
          },
          {
            value: 2,
          },
          {
            value: 2,
            label: "최다하차",
          },
          {
            value: 2,
          },
          {
            value: 2,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
        ],
      },
    ],
  },
  {
    time: "13:50",
    data: [
      {
        subwayLine: 2,
        updnLine: 1,
        station: "강남",
        nextStation: "교대",
        endStation: "내선순환",
        dt: 20220228,
        dow: "MON",
        time: "13:50",
        congestionTrainLevel: 1,
        congestionCarLevel: [
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
            label: "최다하차",
          },
          {
            value: 1,
          },
          {
            value: 1,
            label: "최다하차",
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
        ],
      },
    ],
  },
  {
    time: "14:00",
    data: [
      {
        subwayLine: 2,
        updnLine: 1,
        station: "강남",
        nextStation: "교대",
        endStation: "내선순환",
        dt: 20220228,
        dow: "MON",
        time: "14:00",
        congestionTrainLevel: 1,
        congestionCarLevel: [
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 2,
          },
          {
            value: 2,
            label: "최다하차",
          },
          {
            value: 2,
          },
          {
            value: 2,
            label: "최다하차",
          },
          {
            value: 2,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
        ],
      },
    ],
  },
  {
    time: "14:10",
    data: [
      {
        subwayLine: 2,
        updnLine: 1,
        station: "강남",
        nextStation: "교대",
        endStation: "내선순환",
        dt: 20220228,
        dow: "MON",
        time: "14:10",
        congestionTrainLevel: 2,
        congestionCarLevel: [
          {
            value: 2,
          },
          {
            value: 2,
          },
          {
            value: 2,
          },
          {
            value: 2,
            label: "최다하차",
          },
          {
            value: 2,
          },
          {
            value: 2,
            label: "최다하차",
          },
          {
            value: 2,
          },
          {
            value: 2,
          },
          {
            value: 2,
          },
          {
            value: 1,
          },
        ],
      },
    ],
  },
  {
    time: "14:20",
    data: [
      {
        subwayLine: 2,
        updnLine: 1,
        station: "강남",
        nextStation: "교대",
        endStation: "내선순환",
        dt: 20220228,
        dow: "MON",
        time: "14:20",
        congestionTrainLevel: 1,
        congestionCarLevel: [
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 2,
            label: "최다하차",
          },
          {
            value: 2,
          },
          {
            value: 2,
            label: "최다하차",
          },
          {
            value: 2,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
        ],
      },
    ],
  },
  {
    time: "14:30",
    data: [
      {
        subwayLine: 2,
        updnLine: 1,
        station: "강남",
        nextStation: "교대",
        endStation: "내선순환",
        dt: 20220228,
        dow: "MON",
        time: "14:30",
        congestionTrainLevel: 1,
        congestionCarLevel: [
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 2,
            label: "최다하차",
          },
          {
            value: 1,
          },
          {
            value: 2,
            label: "최다하차",
          },
          {
            value: 1,
          },
          {
            value: 2,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
        ],
      },
    ],
  },
  {
    time: "14:40",
    data: [
      {
        subwayLine: 2,
        updnLine: 1,
        station: "강남",
        nextStation: "교대",
        endStation: "내선순환",
        dt: 20220228,
        dow: "MON",
        time: "14:40",
        congestionTrainLevel: 2,
        congestionCarLevel: [
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 2,
            label: "최다하차",
          },
          {
            value: 2,
          },
          {
            value: 2,
            label: "최다하차",
          },
          {
            value: 2,
          },
          {
            value: 2,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
        ],
      },
    ],
  },
  {
    time: "14:50",
    data: [
      {
        subwayLine: 2,
        updnLine: 1,
        station: "강남",
        nextStation: "교대",
        endStation: "내선순환",
        dt: 20220228,
        dow: "MON",
        time: "14:50",
        congestionTrainLevel: 2,
        congestionCarLevel: [
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 2,
          },
          {
            value: 2,
            label: "최다하차",
          },
          {
            value: 2,
          },
          {
            value: 2,
            label: "최다하차",
          },
          {
            value: 2,
          },
          {
            value: 2,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
        ],
      },
    ],
  },
  {
    time: "15:00",
    data: [
      {
        subwayLine: 2,
        updnLine: 1,
        station: "강남",
        nextStation: "교대",
        endStation: "내선순환",
        dt: 20220228,
        dow: "MON",
        time: "15:00",
        congestionTrainLevel: 2,
        congestionCarLevel: [
          {
            value: 2,
          },
          {
            value: 2,
          },
          {
            value: 2,
          },
          {
            value: 2,
            label: "최다하차",
          },
          {
            value: 2,
          },
          {
            value: 2,
            label: "최다하차",
          },
          {
            value: 2,
          },
          {
            value: 2,
          },
          {
            value: 2,
          },
          {
            value: 1,
          },
        ],
      },
    ],
  },
  {
    time: "15:10",
    data: [
      {
        subwayLine: 2,
        updnLine: 1,
        station: "강남",
        nextStation: "교대",
        endStation: "내선순환",
        dt: 20220228,
        dow: "MON",
        time: "15:10",
        congestionTrainLevel: 2,
        congestionCarLevel: [
          {
            value: 2,
          },
          {
            value: 2,
          },
          {
            value: 2,
          },
          {
            value: 2,
            label: "최다하차",
          },
          {
            value: 2,
          },
          {
            value: 2,
            label: "최다하차",
          },
          {
            value: 2,
          },
          {
            value: 2,
          },
          {
            value: 2,
          },
          {
            value: 2,
          },
        ],
      },
    ],
  },
  {
    time: "15:20",
    data: [
      {
        subwayLine: 2,
        updnLine: 1,
        station: "강남",
        nextStation: "교대",
        endStation: "내선순환",
        dt: 20220228,
        dow: "MON",
        time: "15:20",
        congestionTrainLevel: 2,
        congestionCarLevel: [
          {
            value: 1,
          },
          {
            value: 2,
          },
          {
            value: 2,
          },
          {
            value: 2,
            label: "최다하차",
          },
          {
            value: 2,
          },
          {
            value: 2,
            label: "최다하차",
          },
          {
            value: 2,
          },
          {
            value: 2,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
        ],
      },
    ],
  },
  {
    time: "15:30",
    data: [
      {
        subwayLine: 2,
        updnLine: 1,
        station: "강남",
        nextStation: "교대",
        endStation: "내선순환",
        dt: 20220228,
        dow: "MON",
        time: "15:30",
        congestionTrainLevel: 2,
        congestionCarLevel: [
          {
            value: 1,
          },
          {
            value: 2,
          },
          {
            value: 2,
          },
          {
            value: 2,
            label: "최다하차",
          },
          {
            value: 2,
          },
          {
            value: 2,
            label: "최다하차",
          },
          {
            value: 2,
          },
          {
            value: 2,
          },
          {
            value: 2,
          },
          {
            value: 1,
          },
        ],
      },
    ],
  },
  {
    time: "15:40",
    data: [
      {
        subwayLine: 2,
        updnLine: 1,
        station: "강남",
        nextStation: "교대",
        endStation: "내선순환",
        dt: 20220228,
        dow: "MON",
        time: "15:40",
        congestionTrainLevel: 3,
        congestionCarLevel: [
          {
            value: 2,
          },
          {
            value: 2,
          },
          {
            value: 3,
          },
          {
            value: 3,
            label: "최다하차",
          },
          {
            value: 3,
          },
          {
            value: 4,
            label: "최다하차",
          },
          {
            value: 3,
          },
          {
            value: 3,
          },
          {
            value: 2,
          },
          {
            value: 2,
          },
        ],
      },
    ],
  },
  {
    time: "15:50",
    data: [
      {
        subwayLine: 2,
        updnLine: 1,
        station: "강남",
        nextStation: "교대",
        endStation: "내선순환",
        dt: 20220228,
        dow: "MON",
        time: "15:50",
        congestionTrainLevel: 2,
        congestionCarLevel: [
          {
            value: 2,
          },
          {
            value: 2,
          },
          {
            value: 2,
          },
          {
            value: 2,
            label: "최다하차",
          },
          {
            value: 2,
          },
          {
            value: 2,
            label: "최다하차",
          },
          {
            value: 2,
          },
          {
            value: 2,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
        ],
      },
    ],
  },
  {
    time: "16:00",
    data: [
      {
        subwayLine: 2,
        updnLine: 1,
        station: "강남",
        nextStation: "교대",
        endStation: "내선순환",
        dt: 20220228,
        dow: "MON",
        time: "16:00",
        congestionTrainLevel: 2,
        congestionCarLevel: [
          {
            value: 2,
          },
          {
            value: 2,
          },
          {
            value: 2,
          },
          {
            value: 2,
            label: "최다하차",
          },
          {
            value: 2,
          },
          {
            value: 2,
            label: "최다하차",
          },
          {
            value: 2,
          },
          {
            value: 2,
          },
          {
            value: 2,
          },
          {
            value: 1,
          },
        ],
      },
    ],
  },
  {
    time: "16:10",
    data: [
      {
        subwayLine: 2,
        updnLine: 1,
        station: "강남",
        nextStation: "교대",
        endStation: "내선순환",
        dt: 20220228,
        dow: "MON",
        time: "16:10",
        congestionTrainLevel: 2,
        congestionCarLevel: [
          {
            value: 2,
          },
          {
            value: 2,
          },
          {
            value: 2,
          },
          {
            value: 2,
            label: "최다하차",
          },
          {
            value: 2,
          },
          {
            value: 2,
            label: "최다하차",
          },
          {
            value: 2,
          },
          {
            value: 2,
          },
          {
            value: 2,
          },
          {
            value: 2,
          },
        ],
      },
    ],
  },
  {
    time: "16:20",
    data: [
      {
        subwayLine: 2,
        updnLine: 1,
        station: "강남",
        nextStation: "교대",
        endStation: "내선순환",
        dt: 20220228,
        dow: "MON",
        time: "16:20",
        congestionTrainLevel: 2,
        congestionCarLevel: [
          {
            value: 2,
          },
          {
            value: 2,
          },
          {
            value: 2,
          },
          {
            value: 2,
            label: "최다하차",
          },
          {
            value: 2,
          },
          {
            value: 2,
            label: "최다하차",
          },
          {
            value: 2,
          },
          {
            value: 2,
          },
          {
            value: 2,
          },
          {
            value: 1,
          },
        ],
      },
    ],
  },
  {
    time: "16:30",
    data: [
      {
        subwayLine: 2,
        updnLine: 1,
        station: "강남",
        nextStation: "교대",
        endStation: "내선순환",
        dt: 20220228,
        dow: "MON",
        time: "16:30",
        congestionTrainLevel: 2,
        congestionCarLevel: [
          {
            value: 2,
          },
          {
            value: 2,
          },
          {
            value: 2,
          },
          {
            value: 2,
            label: "최다하차",
          },
          {
            value: 2,
          },
          {
            value: 2,
            label: "최다하차",
          },
          {
            value: 2,
          },
          {
            value: 2,
          },
          {
            value: 2,
          },
          {
            value: 2,
          },
        ],
      },
    ],
  },
  {
    time: "16:40",
    data: [
      {
        subwayLine: 2,
        updnLine: 1,
        station: "강남",
        nextStation: "교대",
        endStation: "내선순환",
        dt: 20220228,
        dow: "MON",
        time: "16:40",
        congestionTrainLevel: 2,
        congestionCarLevel: [
          {
            value: 2,
          },
          {
            value: 2,
          },
          {
            value: 2,
          },
          {
            value: 2,
            label: "최다하차",
          },
          {
            value: 2,
          },
          {
            value: 2,
            label: "최다하차",
          },
          {
            value: 2,
          },
          {
            value: 2,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
        ],
      },
    ],
  },
  {
    time: "16:50",
    data: [
      {
        subwayLine: 2,
        updnLine: 1,
        station: "강남",
        nextStation: "교대",
        endStation: "내선순환",
        dt: 20220228,
        dow: "MON",
        time: "16:50",
        congestionTrainLevel: 2,
        congestionCarLevel: [
          {
            value: 2,
          },
          {
            value: 2,
          },
          {
            value: 2,
          },
          {
            value: 2,
            label: "최다하차",
          },
          {
            value: 2,
          },
          {
            value: 2,
            label: "최다하차",
          },
          {
            value: 2,
          },
          {
            value: 2,
          },
          {
            value: 2,
          },
          {
            value: 2,
          },
        ],
      },
    ],
  },
  {
    time: "17:00",
    data: [
      {
        subwayLine: 2,
        updnLine: 1,
        station: "강남",
        nextStation: "교대",
        endStation: "내선순환",
        dt: 20220228,
        dow: "MON",
        time: "17:00",
        congestionTrainLevel: 2,
        congestionCarLevel: [
          {
            value: 2,
          },
          {
            value: 2,
          },
          {
            value: 2,
          },
          {
            value: 2,
            label: "최다하차",
          },
          {
            value: 3,
          },
          {
            value: 3,
            label: "최다하차",
          },
          {
            value: 3,
          },
          {
            value: 2,
          },
          {
            value: 2,
          },
          {
            value: 2,
          },
        ],
      },
    ],
  },
  {
    time: "17:10",
    data: [
      {
        subwayLine: 2,
        updnLine: 1,
        station: "강남",
        nextStation: "교대",
        endStation: "내선순환",
        dt: 20220228,
        dow: "MON",
        time: "17:10",
        congestionTrainLevel: 3,
        congestionCarLevel: [
          {
            value: 3,
          },
          {
            value: 3,
          },
          {
            value: 3,
          },
          {
            value: 3,
            label: "최다하차",
          },
          {
            value: 3,
          },
          {
            value: 4,
            label: "최다하차",
          },
          {
            value: 3,
          },
          {
            value: 3,
          },
          {
            value: 3,
          },
          {
            value: 3,
          },
        ],
      },
    ],
  },
  {
    time: "17:20",
    data: [
      {
        subwayLine: 2,
        updnLine: 1,
        station: "강남",
        nextStation: "교대",
        endStation: "내선순환",
        dt: 20220228,
        dow: "MON",
        time: "17:20",
        congestionTrainLevel: 3,
        congestionCarLevel: [
          {
            value: 3,
          },
          {
            value: 3,
          },
          {
            value: 3,
          },
          {
            value: 3,
            label: "최다하차",
          },
          {
            value: 3,
          },
          {
            value: 3,
            label: "최다하차",
          },
          {
            value: 3,
          },
          {
            value: 3,
          },
          {
            value: 3,
          },
          {
            value: 3,
          },
        ],
      },
    ],
  },
  {
    time: "17:30",
    data: [
      {
        subwayLine: 2,
        updnLine: 1,
        station: "강남",
        nextStation: "교대",
        endStation: "내선순환",
        dt: 20220228,
        dow: "MON",
        time: "17:30",
        congestionTrainLevel: 2,
        congestionCarLevel: [
          {
            value: 2,
          },
          {
            value: 2,
          },
          {
            value: 2,
          },
          {
            value: 2,
            label: "최다하차",
          },
          {
            value: 2,
          },
          {
            value: 2,
            label: "최다하차",
          },
          {
            value: 2,
          },
          {
            value: 2,
          },
          {
            value: 2,
          },
          {
            value: 2,
          },
        ],
      },
    ],
  },
  {
    time: "17:40",
    data: [
      {
        subwayLine: 2,
        updnLine: 1,
        station: "강남",
        nextStation: "교대",
        endStation: "내선순환",
        dt: 20220228,
        dow: "MON",
        time: "17:40",
        congestionTrainLevel: 2,
        congestionCarLevel: [
          {
            value: 2,
          },
          {
            value: 2,
          },
          {
            value: 2,
          },
          {
            value: 2,
            label: "최다하차",
          },
          {
            value: 2,
          },
          {
            value: 3,
            label: "최다하차",
          },
          {
            value: 2,
          },
          {
            value: 2,
          },
          {
            value: 2,
          },
          {
            value: 2,
          },
        ],
      },
    ],
  },
  {
    time: "17:50",
    data: [
      {
        subwayLine: 2,
        updnLine: 1,
        station: "강남",
        nextStation: "교대",
        endStation: "내선순환",
        dt: 20220228,
        dow: "MON",
        time: "17:50",
        congestionTrainLevel: 2,
        congestionCarLevel: [
          {
            value: 2,
          },
          {
            value: 2,
          },
          {
            value: 2,
          },
          {
            value: 2,
          },
          {
            value: 2,
          },
          {
            value: 3,
            label: "최다하차",
          },
          {
            value: 2,
            label: "최다하차",
          },
          {
            value: 3,
          },
          {
            value: 2,
          },
          {
            value: 2,
          },
        ],
      },
    ],
  },
  {
    time: "18:00",
    data: [
      {
        subwayLine: 2,
        updnLine: 1,
        station: "강남",
        nextStation: "교대",
        endStation: "내선순환",
        dt: 20220228,
        dow: "MON",
        time: "18:00",
        congestionTrainLevel: 2,
        congestionCarLevel: [
          {
            value: 2,
          },
          {
            value: 2,
          },
          {
            value: 2,
          },
          {
            value: 2,
          },
          {
            value: 2,
          },
          {
            value: 2,
            label: "최다하차",
          },
          {
            value: 2,
            label: "최다하차",
          },
          {
            value: 3,
          },
          {
            value: 2,
          },
          {
            value: 2,
          },
        ],
      },
    ],
  },
  {
    time: "18:10",
    data: [
      {
        subwayLine: 2,
        updnLine: 1,
        station: "강남",
        nextStation: "교대",
        endStation: "내선순환",
        dt: 20220228,
        dow: "MON",
        time: "18:10",
        congestionTrainLevel: 4,
        congestionCarLevel: [
          {
            value: 3,
          },
          {
            value: 3,
          },
          {
            value: 4,
          },
          {
            value: 4,
          },
          {
            value: 4,
          },
          {
            value: 4,
            label: "최다하차",
          },
          {
            value: 4,
            label: "최다하차",
          },
          {
            value: 4,
          },
          {
            value: 4,
          },
          {
            value: 3,
          },
        ],
      },
    ],
  },
  {
    time: "18:20",
    data: [
      {
        subwayLine: 2,
        updnLine: 1,
        station: "강남",
        nextStation: "교대",
        endStation: "내선순환",
        dt: 20220228,
        dow: "MON",
        time: "18:20",
        congestionTrainLevel: 4,
        congestionCarLevel: [
          {
            value: 4,
          },
          {
            value: 3,
          },
          {
            value: 3,
          },
          {
            value: 4,
          },
          {
            value: 4,
          },
          {
            value: 4,
            label: "최다하차",
          },
          {
            value: 4,
            label: "최다하차",
          },
          {
            value: 4,
          },
          {
            value: 4,
          },
          {
            value: 3,
          },
        ],
      },
    ],
  },
  {
    time: "18:30",
    data: [
      {
        subwayLine: 2,
        updnLine: 1,
        station: "강남",
        nextStation: "교대",
        endStation: "내선순환",
        dt: 20220228,
        dow: "MON",
        time: "18:30",
        congestionTrainLevel: 3,
        congestionCarLevel: [
          {
            value: 3,
          },
          {
            value: 3,
          },
          {
            value: 3,
          },
          {
            value: 3,
            label: "최다하차",
          },
          {
            value: 3,
          },
          {
            value: 3,
            label: "최다하차",
          },
          {
            value: 4,
          },
          {
            value: 4,
          },
          {
            value: 4,
          },
          {
            value: 3,
          },
        ],
      },
    ],
  },
  {
    time: "18:40",
    data: [
      {
        subwayLine: 2,
        updnLine: 1,
        station: "강남",
        nextStation: "교대",
        endStation: "내선순환",
        dt: 20220228,
        dow: "MON",
        time: "18:40",
        congestionTrainLevel: 3,
        congestionCarLevel: [
          {
            value: 3,
          },
          {
            value: 2,
          },
          {
            value: 3,
          },
          {
            value: 3,
            label: "최다하차",
          },
          {
            value: 3,
          },
          {
            value: 3,
            label: "최다하차",
          },
          {
            value: 3,
          },
          {
            value: 3,
          },
          {
            value: 3,
          },
          {
            value: 3,
          },
        ],
      },
    ],
  },
  {
    time: "18:50",
    data: [
      {
        subwayLine: 2,
        updnLine: 1,
        station: "강남",
        nextStation: "교대",
        endStation: "내선순환",
        dt: 20220228,
        dow: "MON",
        time: "18:50",
        congestionTrainLevel: 2,
        congestionCarLevel: [
          {
            value: 2,
          },
          {
            value: 2,
          },
          {
            value: 2,
          },
          {
            value: 3,
            label: "최다하차",
          },
          {
            value: 2,
          },
          {
            value: 3,
            label: "최다하차",
          },
          {
            value: 3,
          },
          {
            value: 3,
          },
          {
            value: 2,
          },
          {
            value: 2,
          },
        ],
      },
    ],
  },
  {
    time: "19:00",
    data: [
      {
        subwayLine: 2,
        updnLine: 1,
        station: "강남",
        nextStation: "교대",
        endStation: "내선순환",
        dt: 20220228,
        dow: "MON",
        time: "19:00",
        congestionTrainLevel: 2,
        congestionCarLevel: [
          {
            value: 2,
          },
          {
            value: 2,
          },
          {
            value: 2,
          },
          {
            value: 2,
            label: "최다하차",
          },
          {
            value: 2,
          },
          {
            value: 2,
            label: "최다하차",
          },
          {
            value: 2,
          },
          {
            value: 2,
          },
          {
            value: 2,
          },
          {
            value: 2,
          },
        ],
      },
    ],
  },
  {
    time: "19:10",
    data: [
      {
        subwayLine: 2,
        updnLine: 1,
        station: "강남",
        nextStation: "교대",
        endStation: "내선순환",
        dt: 20220228,
        dow: "MON",
        time: "19:10",
        congestionTrainLevel: 2,
        congestionCarLevel: [
          {
            value: 2,
          },
          {
            value: 2,
          },
          {
            value: 2,
          },
          {
            value: 2,
            label: "최다하차",
          },
          {
            value: 2,
          },
          {
            value: 2,
            label: "최다하차",
          },
          {
            value: 2,
          },
          {
            value: 2,
          },
          {
            value: 2,
          },
          {
            value: 2,
          },
        ],
      },
    ],
  },
  {
    time: "19:20",
    data: [
      {
        subwayLine: 2,
        updnLine: 1,
        station: "강남",
        nextStation: "교대",
        endStation: "내선순환",
        dt: 20220228,
        dow: "MON",
        time: "19:20",
        congestionTrainLevel: 2,
        congestionCarLevel: [
          {
            value: 1,
          },
          {
            value: 2,
          },
          {
            value: 2,
          },
          {
            value: 2,
            label: "최다하차",
          },
          {
            value: 2,
          },
          {
            value: 2,
            label: "최다하차",
          },
          {
            value: 2,
          },
          {
            value: 2,
          },
          {
            value: 2,
          },
          {
            value: 2,
          },
        ],
      },
    ],
  },
  {
    time: "19:30",
    data: [
      {
        subwayLine: 2,
        updnLine: 1,
        station: "강남",
        nextStation: "교대",
        endStation: "내선순환",
        dt: 20220228,
        dow: "MON",
        time: "19:30",
        congestionTrainLevel: 1,
        congestionCarLevel: [
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 2,
            label: "최다하차",
          },
          {
            value: 1,
          },
          {
            value: 2,
            label: "최다하차",
          },
          {
            value: 2,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
        ],
      },
    ],
  },
  {
    time: "19:40",
    data: [
      {
        subwayLine: 2,
        updnLine: 1,
        station: "강남",
        nextStation: "교대",
        endStation: "내선순환",
        dt: 20220228,
        dow: "MON",
        time: "19:40",
        congestionTrainLevel: 1,
        congestionCarLevel: [
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
            label: "최다하차",
          },
          {
            value: 1,
          },
          {
            value: 2,
            label: "최다하차",
          },
          {
            value: 2,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
        ],
      },
    ],
  },
  {
    time: "19:50",
    data: [
      {
        subwayLine: 2,
        updnLine: 1,
        station: "강남",
        nextStation: "교대",
        endStation: "내선순환",
        dt: 20220228,
        dow: "MON",
        time: "19:50",
        congestionTrainLevel: 1,
        congestionCarLevel: [
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
            label: "최다하차",
          },
          {
            value: 1,
          },
          {
            value: 2,
            label: "최다하차",
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
        ],
      },
    ],
  },
  {
    time: "20:00",
    data: [
      {
        subwayLine: 2,
        updnLine: 1,
        station: "강남",
        nextStation: "교대",
        endStation: "내선순환",
        dt: 20220228,
        dow: "MON",
        time: "20:00",
        congestionTrainLevel: 1,
        congestionCarLevel: [
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
            label: "최다하차",
          },
          {
            value: 1,
          },
          {
            value: 1,
            label: "최다하차",
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
        ],
      },
    ],
  },
  {
    time: "20:10",
    data: [
      {
        subwayLine: 2,
        updnLine: 1,
        station: "강남",
        nextStation: "교대",
        endStation: "내선순환",
        dt: 20220228,
        dow: "MON",
        time: "20:10",
        congestionTrainLevel: 1,
        congestionCarLevel: [
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 2,
          },
          {
            value: 2,
            label: "최다하차",
          },
          {
            value: 2,
          },
          {
            value: 2,
            label: "최다하차",
          },
          {
            value: 1,
          },
          {
            value: 2,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
        ],
      },
    ],
  },
  {
    time: "20:20",
    data: [
      {
        subwayLine: 2,
        updnLine: 1,
        station: "강남",
        nextStation: "교대",
        endStation: "내선순환",
        dt: 20220228,
        dow: "MON",
        time: "20:20",
        congestionTrainLevel: 2,
        congestionCarLevel: [
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 2,
          },
          {
            value: 2,
            label: "최다하차",
          },
          {
            value: 2,
          },
          {
            value: 2,
            label: "최다하차",
          },
          {
            value: 2,
          },
          {
            value: 2,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
        ],
      },
    ],
  },
  {
    time: "20:30",
    data: [
      {
        subwayLine: 2,
        updnLine: 1,
        station: "강남",
        nextStation: "교대",
        endStation: "내선순환",
        dt: 20220228,
        dow: "MON",
        time: "20:30",
        congestionTrainLevel: 1,
        congestionCarLevel: [
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 2,
            label: "최다하차",
          },
          {
            value: 1,
          },
          {
            value: 2,
            label: "최다하차",
          },
          {
            value: 2,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
        ],
      },
    ],
  },
  {
    time: "20:40",
    data: [
      {
        subwayLine: 2,
        updnLine: 1,
        station: "강남",
        nextStation: "교대",
        endStation: "내선순환",
        dt: 20220228,
        dow: "MON",
        time: "20:40",
        congestionTrainLevel: 2,
        congestionCarLevel: [
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 2,
          },
          {
            value: 2,
            label: "최다하차",
          },
          {
            value: 2,
          },
          {
            value: 2,
            label: "최다하차",
          },
          {
            value: 2,
          },
          {
            value: 2,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
        ],
      },
    ],
  },
  {
    time: "20:50",
    data: [
      {
        subwayLine: 2,
        updnLine: 1,
        station: "강남",
        nextStation: "교대",
        endStation: "내선순환",
        dt: 20220228,
        dow: "MON",
        time: "20:50",
        congestionTrainLevel: 1,
        congestionCarLevel: [
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
            label: "최다하차",
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
            label: "최다하차",
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
        ],
      },
    ],
  },
  {
    time: "21:00",
    data: [
      {
        subwayLine: 2,
        updnLine: 1,
        station: "강남",
        nextStation: "교대",
        endStation: "내선순환",
        dt: 20220228,
        dow: "MON",
        time: "21:00",
        congestionTrainLevel: 2,
        congestionCarLevel: [
          {
            value: 1,
          },
          {
            value: 2,
          },
          {
            value: 2,
          },
          {
            value: 2,
          },
          {
            value: 2,
          },
          {
            value: 2,
            label: "최다하차",
          },
          {
            value: 2,
            label: "최다하차",
          },
          {
            value: 2,
          },
          {
            value: 2,
          },
          {
            value: 1,
          },
        ],
      },
    ],
  },
  {
    time: "21:10",
    data: [
      {
        subwayLine: 2,
        updnLine: 1,
        station: "강남",
        nextStation: "교대",
        endStation: "내선순환",
        dt: 20220228,
        dow: "MON",
        time: "21:10",
        congestionTrainLevel: 2,
        congestionCarLevel: [
          {
            value: 2,
          },
          {
            value: 2,
          },
          {
            value: 2,
          },
          {
            value: 2,
            label: "최다하차",
          },
          {
            value: 2,
          },
          {
            value: 2,
            label: "최다하차",
          },
          {
            value: 2,
          },
          {
            value: 2,
          },
          {
            value: 2,
          },
          {
            value: 2,
          },
        ],
      },
    ],
  },
  {
    time: "21:20",
    data: [
      {
        subwayLine: 2,
        updnLine: 1,
        station: "강남",
        nextStation: "교대",
        endStation: "내선순환",
        dt: 20220228,
        dow: "MON",
        time: "21:20",
        congestionTrainLevel: 2,
        congestionCarLevel: [
          {
            value: 2,
          },
          {
            value: 2,
          },
          {
            value: 2,
          },
          {
            value: 2,
          },
          {
            value: 2,
          },
          {
            value: 2,
            label: "최다하차",
          },
          {
            value: 2,
            label: "최다하차",
          },
          {
            value: 2,
          },
          {
            value: 2,
          },
          {
            value: 2,
          },
        ],
      },
    ],
  },
  {
    time: "21:30",
    data: [
      {
        subwayLine: 2,
        updnLine: 1,
        station: "강남",
        nextStation: "교대",
        endStation: "내선순환",
        dt: 20220228,
        dow: "MON",
        time: "21:30",
        congestionTrainLevel: 2,
        congestionCarLevel: [
          {
            value: 1,
          },
          {
            value: 2,
          },
          {
            value: 2,
            label: "최다하차",
          },
          {
            value: 2,
          },
          {
            value: 2,
          },
          {
            value: 2,
            label: "최다하차",
          },
          {
            value: 2,
          },
          {
            value: 2,
          },
          {
            value: 2,
          },
          {
            value: 1,
          },
        ],
      },
    ],
  },
  {
    time: "21:40",
    data: [
      {
        subwayLine: 2,
        updnLine: 1,
        station: "강남",
        nextStation: "교대",
        endStation: "내선순환",
        dt: 20220228,
        dow: "MON",
        time: "21:40",
        congestionTrainLevel: 2,
        congestionCarLevel: [
          {
            value: 1,
          },
          {
            value: 2,
          },
          {
            value: 2,
          },
          {
            value: 2,
            label: "최다하차",
          },
          {
            value: 2,
          },
          {
            value: 2,
            label: "최다하차",
          },
          {
            value: 2,
          },
          {
            value: 2,
          },
          {
            value: 2,
          },
          {
            value: 2,
          },
        ],
      },
    ],
  },
  {
    time: "21:50",
    data: [
      {
        subwayLine: 2,
        updnLine: 1,
        station: "강남",
        nextStation: "교대",
        endStation: "내선순환",
        dt: 20220228,
        dow: "MON",
        time: "21:50",
        congestionTrainLevel: 1,
        congestionCarLevel: [
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 2,
            label: "최다하차",
          },
          {
            value: 2,
          },
          {
            value: 2,
            label: "최다하차",
          },
          {
            value: 2,
          },
          {
            value: 2,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
        ],
      },
    ],
  },
  {
    time: "22:00",
    data: [
      {
        subwayLine: 2,
        updnLine: 1,
        station: "강남",
        nextStation: "교대",
        endStation: "내선순환",
        dt: 20220228,
        dow: "MON",
        time: "22:00",
        congestionTrainLevel: 1,
        congestionCarLevel: [
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
            label: "최다하차",
          },
          {
            value: 2,
            label: "최다하차",
          },
          {
            value: 2,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
        ],
      },
    ],
  },
  {
    time: "22:10",
    data: [
      {
        subwayLine: 2,
        updnLine: 1,
        station: "강남",
        nextStation: "교대",
        endStation: "내선순환",
        dt: 20220228,
        dow: "MON",
        time: "22:10",
        congestionTrainLevel: 2,
        congestionCarLevel: [
          {
            value: 2,
          },
          {
            value: 2,
          },
          {
            value: 2,
          },
          {
            value: 2,
            label: "최다하차",
          },
          {
            value: 2,
          },
          {
            value: 2,
            label: "최다하차",
          },
          {
            value: 2,
          },
          {
            value: 2,
          },
          {
            value: 2,
          },
          {
            value: 2,
          },
        ],
      },
    ],
  },
  {
    time: "22:20",
    data: [
      {
        subwayLine: 2,
        updnLine: 1,
        station: "강남",
        nextStation: "교대",
        endStation: "내선순환",
        dt: 20220228,
        dow: "MON",
        time: "22:20",
        congestionTrainLevel: 1,
        congestionCarLevel: [
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 2,
            label: "최다하차",
          },
          {
            value: 1,
            label: "최다하차",
          },
          {
            value: 2,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
        ],
      },
    ],
  },
  {
    time: "22:30",
    data: [
      {
        subwayLine: 2,
        updnLine: 1,
        station: "강남",
        nextStation: "교대",
        endStation: "내선순환",
        dt: 20220228,
        dow: "MON",
        time: "22:30",
        congestionTrainLevel: 1,
        congestionCarLevel: [
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
            label: "최다하차",
          },
          {
            value: 1,
          },
          {
            value: 1,
            label: "최다하차",
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
        ],
      },
    ],
  },
  {
    time: "22:40",
    data: [
      {
        subwayLine: 2,
        updnLine: 1,
        station: "강남",
        nextStation: "교대",
        endStation: "내선순환",
        dt: 20220228,
        dow: "MON",
        time: "22:40",
        congestionTrainLevel: 1,
        congestionCarLevel: [
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
            label: "최다하차",
          },
          {
            value: 1,
          },
          {
            value: 1,
            label: "최다하차",
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
        ],
      },
    ],
  },
  {
    time: "22:50",
    data: [
      {
        subwayLine: 2,
        updnLine: 1,
        station: "강남",
        nextStation: "교대",
        endStation: "내선순환",
        dt: 20220228,
        dow: "MON",
        time: "22:50",
        congestionTrainLevel: 1,
        congestionCarLevel: [
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
            label: "최다하차",
          },
          {
            value: 1,
          },
          {
            value: 1,
            label: "최다하차",
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
        ],
      },
    ],
  },
  {
    time: "23:00",
    data: [
      {
        subwayLine: 2,
        updnLine: 1,
        station: "강남",
        nextStation: "교대",
        endStation: "내선순환",
        dt: 20220228,
        dow: "MON",
        time: "23:00",
        congestionTrainLevel: 1,
        congestionCarLevel: [
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
            label: "최다하차",
          },
          {
            value: 1,
          },
          {
            value: 1,
            label: "최다하차",
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
        ],
      },
    ],
  },
  {
    time: "23:10",
    data: [
      {
        subwayLine: 2,
        updnLine: 1,
        station: "강남",
        nextStation: "교대",
        endStation: "내선순환",
        dt: 20220228,
        dow: "MON",
        time: "23:10",
        congestionTrainLevel: 1,
        congestionCarLevel: [
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
            label: "최다하차",
          },
          {
            value: 1,
          },
          {
            value: 1,
            label: "최다하차",
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
        ],
      },
    ],
  },
  {
    time: "23:20",
    data: [
      {
        subwayLine: 2,
        updnLine: 1,
        station: "강남",
        nextStation: "교대",
        endStation: "내선순환",
        dt: 20220228,
        dow: "MON",
        time: "23:20",
        congestionTrainLevel: 1,
        congestionCarLevel: [
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
            label: "최다하차",
          },
          {
            value: 1,
          },
          {
            value: 1,
            label: "최다하차",
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
        ],
      },
    ],
  },
  {
    time: "23:30",
    data: [
      {
        subwayLine: 2,
        updnLine: 1,
        station: "강남",
        nextStation: "교대",
        endStation: "내선순환",
        dt: 20220228,
        dow: "MON",
        time: "23:30",
        congestionTrainLevel: 1,
        congestionCarLevel: [
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
            label: "최다하차",
          },
          {
            value: 1,
          },
          {
            value: 1,
            label: "최다하차",
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
        ],
      },
    ],
  },
  {
    time: "23:40",
    data: [
      {
        subwayLine: 2,
        updnLine: 1,
        station: "강남",
        nextStation: "교대",
        endStation: "내선순환",
        dt: 20220228,
        dow: "MON",
        time: "23:40",
        congestionTrainLevel: 1,
        congestionCarLevel: [
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
            label: "최다하차",
          },
          {
            value: 1,
          },
          {
            value: 1,
            label: "최다하차",
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
        ],
      },
    ],
  },
  {
    time: "23:50",
    data: [
      {
        subwayLine: 2,
        updnLine: 1,
        station: "강남",
        nextStation: "교대",
        endStation: "내선순환",
        dt: 20220228,
        dow: "MON",
        time: "23:50",
        congestionTrainLevel: 1,
        congestionCarLevel: [
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
            label: "최다하차",
          },
          {
            value: 1,
          },
          {
            value: 1,
            label: "최다하차",
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
        ],
      },
    ],
  },
];
