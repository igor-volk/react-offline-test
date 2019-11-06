import * as React from "react";
import { format } from "date-fns";
import BarChart from "./BarChart";
import "./styles/EnergyMix.css";
var adaptData = function (fuels) { return fuels.map(function (item) { return ({
    name: item.fuel,
    value: item.perc
}); }); };
var EnergyMix = function (props) {
    return (React.createElement("div", { "data-testid": "energyMix-chart" },
        React.createElement("table", null,
            React.createElement("tr", null,
                React.createElement("th", null, "From:"),
                React.createElement("td", null, format(new Date(props.data.from), "yyyy-MM-dd, hh:mm bbbb"))),
            React.createElement("tr", null,
                React.createElement("th", null, "To:"),
                React.createElement("td", null, format(new Date(props.data.to), "yyyy-MM-dd, hh:mm bbbb")))),
        React.createElement(BarChart, { width: 800, height: 500, data: adaptData(props.data.generationmix) })));
};
export default EnergyMix;
//# sourceMappingURL=EnergyMix.js.map