import * as React from "react";
import { scaleBand, scaleLinear } from "d3-scale";
import Axes from './Axes';
import Bars from './Bars';
import { IBarDatum } from "../interfaces";

interface IProps {
  width: number;
  height: number;
  data: IBarDatum[];
}

const BarChart = (props: IProps) => {
  const { data } = props;
  const margins = { top: 50, right: 20, bottom: 100, left: 60 };
  const maxValue = Math.max(...data.map(d => d.value));

  const xScale = scaleBand()
    .padding(0.5)
    .domain(data.map(d => d.name))
    .range([margins.left, props.width - margins.right]);
  const yScale = scaleLinear()
    .domain([0, maxValue])
    .range([props.height - margins.bottom, margins.top]);

  return (
    <svg width={props.width} height={props.height}>
      <Axes
        scales={{ xScale, yScale }}
        margins={margins}
        svgDimensions={{ width: props.width, height: props.height }}
      />
      <Bars
        scales={{ xScale, yScale }}
        margins={margins}
        data={data}
        maxValue={maxValue}
        svgDimensions={{ width: props.width, height: props.height }}
      />
    </svg>
  );
};

export default BarChart;
