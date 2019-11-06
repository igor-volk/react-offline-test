import * as React from "react";
import * as d3Axis from "d3-axis";

import Axis from "./Axis";
import { IScales, IMargins, ISVGDimensions } from "../interfaces";

interface IProps {
  scales: IScales;
  margins: IMargins;
  svgDimensions: ISVGDimensions;
}

export default ({ scales, margins, svgDimensions }: IProps) => {
  const { height, width } = svgDimensions;

  const xProps = {
    axisFunc: d3Axis.axisBottom,
    axisDir: "Bottom",
    scale: scales.xScale as d3Axis.AxisScale<string>,
    translate: `translate(0, ${height - margins.bottom})`,
    tickSize: height - margins.top - margins.bottom,
  };

  const yProps = {
    axisFunc: d3Axis.axisLeft,
    axisDir: "Left",
    scale: scales.yScale as d3Axis.AxisScale<number>,
    translate: `translate(${margins.left}, 0)`,
    tickSize: width - margins.left - margins.right,
  };

  return (
    <g>
      <Axis<string> {...xProps} />
      <Axis<number> {...yProps} />
    </g>
  );
};
