import * as React from "react";
import * as d3 from "d3";
import { select as d3Select } from "d3-selection";
import { Axis as D3Axis, AxisScale } from "d3-axis";

import "./styles/Axis.css";

interface IProps<T> {
  axisFunc(scale: AxisScale<T>): D3Axis<T>;
  axisDir: string;
  scale: d3.AxisScale<T>;
  translate: string;
  tickSize: number;
}

class Axis<T> extends React.Component<IProps<T>> {
  constructor(props: IProps<T>) {
    super(props);
  }

  private axisElement: SVGGElement | null;

  public componentDidMount() {
    this.renderAxis()
  }

  public componentDidUpdate() {
    this.renderAxis()
  }

  private renderAxis() {
    const { axisFunc, scale, tickSize } = this.props;

    const axis = axisFunc(scale)
      .tickSize(-tickSize)
      .tickPadding(12)
      .ticks([4]);

    d3Select(this.axisElement).call(axis)
  }

  public render() {
    return (
      <g
        className={`Axis Axis-${this.props.axisDir}`}
        ref={(el) => { this.axisElement = el; }}
        transform={this.props.translate}
      />
    )
  }
}

export default Axis;
