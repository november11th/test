const DEFAULT_CARD_BACKGROUND_COLOR = "white";
const NUMBER_OF_CARDS_PER_LINE = 4;

const isEvenNumber = (index: number) => index % 2 === 0;
const isOddNumber = (index: number) => !isEvenNumber(index);

export let colorIndex = 0;

export const resetColorIndex = () => {
  colorIndex = 0;
};

const pickColor = (colorList: string[]) => {
  const color = colorList[colorIndex % colorList.length];

  colorIndex++;

  return color;
};

type PatternFunc = ({
  rowIndex,
  columnIndex,
  pickFunc,
  colorList,
}: {
  rowIndex: number;
  columnIndex: number;
  pickFunc: (colorList: string[]) => string;
  colorList: string[];
}) => string;

const evenOddPattern: PatternFunc = ({
  rowIndex,
  columnIndex,
  pickFunc,
  colorList,
}) => {
  switch (rowIndex % 2) {
    case 0: {
      if (isEvenNumber(columnIndex)) return pickFunc(colorList);
      return DEFAULT_CARD_BACKGROUND_COLOR;
    }
    case 1: {
      if (isOddNumber(columnIndex)) return pickFunc(colorList);
      return DEFAULT_CARD_BACKGROUND_COLOR;
    }
    default:
      return DEFAULT_CARD_BACKGROUND_COLOR;
  }
};

const seventhRowPattern: PatternFunc = ({
  rowIndex,
  columnIndex,
  pickFunc,
  colorList,
}) => {
  switch (rowIndex % 7) {
    case 0: {
      if (isEvenNumber(columnIndex)) return pickFunc(colorList);
      return DEFAULT_CARD_BACKGROUND_COLOR;
    }
    case 1: {
      if (columnIndex === 1) return pickFunc(colorList);
      return DEFAULT_CARD_BACKGROUND_COLOR;
    }
    case 2: {
      if (columnIndex === 3) return pickFunc(colorList);
      return DEFAULT_CARD_BACKGROUND_COLOR;
    }
    case 3: {
      if (columnIndex === 0) return pickFunc(colorList);
      return DEFAULT_CARD_BACKGROUND_COLOR;
    }
    case 4: {
      if (isOddNumber(columnIndex)) return pickFunc(colorList);
      return DEFAULT_CARD_BACKGROUND_COLOR;
    }
    case 5: {
      if (columnIndex === 2) return pickFunc(colorList);
      return DEFAULT_CARD_BACKGROUND_COLOR;
    }
    case 6: {
      if (columnIndex === 0 || columnIndex === 3) return pickFunc(colorList);
      return DEFAULT_CARD_BACKGROUND_COLOR;
    }
    default:
      return DEFAULT_CARD_BACKGROUND_COLOR;
  }
};

export type InsightCardListColorPatterns = "evenOdd" | "seven";

export const getColor = (
  index: number,
  colorList: string[],
  pattern: InsightCardListColorPatterns,
  numberOfCardPerLine: number = NUMBER_OF_CARDS_PER_LINE
) => {
  const rowIndex = Math.floor(index / numberOfCardPerLine);
  const columnIndex = index % numberOfCardPerLine;

  const patternFunc: { [key in InsightCardListColorPatterns]: PatternFunc } = {
    evenOdd: evenOddPattern,
    seven: seventhRowPattern,
  };

  return patternFunc[pattern]({
    rowIndex,
    columnIndex,
    pickFunc: pickColor,
    colorList,
  });
};
