import * as React from "react";
import ResultRenderer from "./components/ResultRenderer";
import dataService from "./services/dataService";
import EnergyMix from "./components/EnergyMix";

export default () => (
  <div>
    <h1>UK Energy Mix</h1>
    <ResultRenderer service={dataService} View={EnergyMix}/>
  </div>
);
