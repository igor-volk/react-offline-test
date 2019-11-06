var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import * as React from "react";
import * as d3Axis from "d3-axis";
import Axis from "./Axis";
export default (function (_a) {
    var scales = _a.scales, margins = _a.margins, svgDimensions = _a.svgDimensions;
    var height = svgDimensions.height, width = svgDimensions.width;
    var xProps = {
        axisFunc: d3Axis.axisBottom,
        axisDir: "Bottom",
        scale: scales.xScale,
        translate: "translate(0, " + (height - margins.bottom) + ")",
        tickSize: height - margins.top - margins.bottom,
    };
    var yProps = {
        axisFunc: d3Axis.axisLeft,
        axisDir: "Left",
        scale: scales.yScale,
        translate: "translate(" + margins.left + ", 0)",
        tickSize: width - margins.left - margins.right,
    };
    return (React.createElement("g", null,
        React.createElement(Axis, __assign({}, xProps)),
        React.createElement(Axis, __assign({}, yProps))));
});
//# sourceMappingURL=Axes.js.map