import * as React from "react";
import { scaleLinear } from "d3-scale";
import { interpolateLab } from "d3-interpolate";
import { IBarDatum, IScales, IMargins, ISVGDimensions } from "../interfaces";

interface IProps {
  scales: IScales
  margins: IMargins
  data: IBarDatum[];
  maxValue: number;
  svgDimensions: ISVGDimensions;
}

const Bars = (props: IProps) => {
  const { scales, margins, data, svgDimensions, maxValue } = props;
  const { xScale, yScale } = scales;
  const { height } = svgDimensions;

  const colorScale = scaleLinear<string>()
    .domain([0, maxValue])
    .range(['#f4f141', '#4153f4'])
    .interpolate(interpolateLab);

  const bars = (
    data.map((datum: IBarDatum) =>
      <rect
        data-testid={datum.name}
        key={datum.name}
        x={xScale(datum.name)}
        y={yScale(datum.value)}
        height={height - margins.bottom - yScale(datum.value)}
        width={xScale.bandwidth()}
        fill={colorScale(datum.value)}
      />
    )
  )

  return (
    <g>{bars}</g>
  )
};

export default Bars;
