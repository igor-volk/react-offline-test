import * as d3 from "d3";

export interface IFuel {
  fuel: string;
  perc: number;
};

export interface IEnergyMix {
  from: Date;
  to: Date;
  generationmix: IFuel[];
};

export interface IServiceResult {
  loading: boolean;
  error: string;
  result?: IEnergyMix;
}

export interface IScales {
  xScale: d3.ScaleBand<string>;
  yScale: d3.ScaleLinear<number, number>;
}

export interface IMargins {
  top: number;
  right: number;
  bottom: number;
  left: number;
}

export interface ISVGDimensions {
  width: number;
  height: number;
}

export interface IService {
  (endpoint: string) : IServiceResult
}

export interface IDataViewProps {
  data: any;
}

export interface IBarDatum {
  name: string;
  value: number;
}
