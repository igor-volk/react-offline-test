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
        return React.createElement("rect", { "data-testid": datum.name, key: datum.name, x: xScale(datum.name), y: yScale(datum.value), height: height - margins.bottom - yScale(datum.value), width: xScale.bandwidth(), fill: colorScale(datum.value) });
    }));
    return (React.createElement("g", null, bars));
};
export default Bars;
//# sourceMappingURL=Bars.js.map