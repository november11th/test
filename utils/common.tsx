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

/* --------- 시간 함수 --------- */

// 330(330분) => 06:30
export const minuteToTime = (minute: number) => {
  const hh = `${("0" + Math.floor(minute / 60)).slice(-2)}`;
  const mm = `${("0" + (minute % 60)).slice(-2)}`;

  return `${hh}:${mm}`;
};
