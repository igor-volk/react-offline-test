import * as React from "react";
import { scaleLinear } from "d3-scale";
import { interpolateLab } from "d3-interpolate";
var Bars = function (props) {
    var scales = props.scales, margins = props.margins, data = props.data, svgDimensions = props.svgDimensions, maxValue = props.maxValue;
    var xScale = scales.xScale, yScale = scales.yScale;
    var height = svgDimensions.height;
    var colorScale = scaleLinear()
        .domain([0, maxValue])
        .range(['#f4f141', '#4153f4'])
        .interpolate(interpolateLab);
    var bars = (data.map(function (datum) {
        return React.createElement("rect", { key: datum.fuel, x: xScale(datum.fuel), y: yScale(datum.perc), height: height - margins.bottom - yScale(datum.perc), width: xScale.bandwidth(), fill: colorScale(datum.perc) });
    }));
    return (React.createElement("g", null, bars));
};
export default Bars;
//# sourceMappingURL=Bars.js.map