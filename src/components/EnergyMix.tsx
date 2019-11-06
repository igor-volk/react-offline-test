import * as React from "react";
import { format } from "date-fns";
import { IBarDatum, IDataViewProps, IEnergyMix, IFuel } from "../interfaces";
import BarChart from "./BarChart";

import "./styles/EnergyMix.css";

interface IProps {
  data: IEnergyMix;
}

const adaptData = (fuels: IFuel[]): IBarDatum[] => fuels.map(item => ({
  name: item.fuel,
  value: item.perc
}));

const EnergyMix: React.FunctionComponent<IDataViewProps> = (props: IProps) => {
  return (
    <div data-testid="energyMix-chart">
      <table>
        <tr>
          <th>From:</th>
          <td>{format(new Date(props.data.from), "yyyy-MM-dd, hh:mm bbbb")}</td>
        </tr>
        <tr>
          <th>To:</th>
          <td>{format(new Date(props.data.to), "yyyy-MM-dd, hh:mm bbbb")}</td>
        </tr>
      </table>
      <BarChart
        width={800}
        height={500}
        data={adaptData(props.data.generationmix)}
      />
    </div>
  )
};

export default EnergyMix;
