import * as React from "react";
import { scaleBand, scaleLinear } from "d3-scale";
import Axes from './Axes';
import Bars from './Bars';
var BarChart = function (props) {
    var data = props.data;
    var margins = { top: 50, right: 20, bottom: 100, left: 60 };
    var maxValue = Math.max.apply(Math, data.map(function (d) { return d.perc; }));
    var xScale = scaleBand()
        .padding(0.5)
        .domain(data.map(function (d) { return d.fuel; }))
        .range([margins.left, props.width - margins.right]);
    var yScale = scaleLinear()
        .domain([0, maxValue])
        .range([props.height - margins.bottom, margins.top]);
    return (React.createElement("svg", { width: props.width, height: props.height },
        React.createElement(Axes, { scales: { xScale: xScale, yScale: yScale }, margins: margins, svgDimensions: { width: props.width, height: props.height } }),
        React.createElement(Bars, { scales: { xScale: xScale, yScale: yScale }, margins: margins, data: data, maxValue: maxValue, svgDimensions: { width: props.width, height: props.height } })));
};
export default BarChart;
//# sourceMappingURL=BarChart.js.map