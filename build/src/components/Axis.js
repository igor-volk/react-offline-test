var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import * as React from "react";
import { select as d3Select } from "d3-selection";
import "./styles/Axis.css";
var Axis = /** @class */ (function (_super) {
    __extends(Axis, _super);
    function Axis(props) {
        return _super.call(this, props) || this;
    }
    Axis.prototype.componentDidMount = function () {
        this.renderAxis();
    };
    Axis.prototype.componentDidUpdate = function () {
        this.renderAxis();
    };
    Axis.prototype.renderAxis = function () {
        var _a = this.props, axisFunc = _a.axisFunc, scale = _a.scale, tickSize = _a.tickSize;
        // @ts-ignore
        var axis = axisFunc(scale)
            .tickSize(-tickSize)
            .tickPadding(12)
            .ticks([4]);
        d3Select(this.axisElement).call(axis);
    };
    Axis.prototype.render = function () {
        var _this = this;
        return (React.createElement("g", { className: "Axis Axis-" + this.props.axisDir, ref: function (el) { _this.axisElement = el; }, transform: this.props.translate }));
    };
    return Axis;
}(React.Component));
export default Axis;
//# sourceMappingURL=Axis.js.map