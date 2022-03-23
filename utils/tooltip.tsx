import ReactDOM from "react-dom";
import { theme } from "../styles/theme";

export const getOrCreateTooltip = (chart: any) => {
  let tooltipEl = chart.canvas.parentNode.querySelector("div");

  if (!tooltipEl) {
    tooltipEl = document.createElement("div");
    tooltipEl.style.background = theme.colors.white;
    tooltipEl.style.borderRadius = "4px";
    tooltipEl.style.boxShadow = `0 2px 10px 5px rgba(0, 0, 0, 0.06)`;
    // tooltipEl.style.color = "white";
    // tooltipEl.style.width = "160px";
    // tooltipEl.style.height = "60px";
    tooltipEl.style.opacity = 1;
    tooltipEl.style.pointerEvents = "none";
    tooltipEl.style.position = "absolute";
    tooltipEl.style.transform = "translate(-50%, 0)";
    tooltipEl.style.transition = "all .1s ease";

    const table = document.createElement("table");
    table.style.margin = "0px";
    tooltipEl.appendChild(table);
    chart.canvas.parentNode.appendChild(tooltipEl);
  }
  return tooltipEl;
};
