/* 지역명 */
export const makeEmdrName = (emdName: string, riName: string) => {
  return riName === "" ? emdName : `${emdName} ${riName}`;
};

/* 지역명 */
export const makeCtpSigName = (ctpName: string, sigName: string) => {
  return sigName === "" ? ctpName : `${ctpName} ${sigName}`;
};
