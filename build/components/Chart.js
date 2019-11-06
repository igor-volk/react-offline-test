import * as React from "react";
import BarChart from "./BarChart";
export var Chart = function (props) {
    return (React.createElement("div", { "data-testid": "energyMix-chart" },
        React.createElement(BarChart, { width: 800, height: 500, data: props.data.generationmix })));
};
//# sourceMappingURL=Chart.js.map