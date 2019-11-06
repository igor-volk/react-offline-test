import * as React from "react";
import ResultRenderer from "./components/ResultRenderer";
import dataService from "./services/dataService";
import EnergyMix from "./components/EnergyMix";
export default (function () { return (React.createElement("div", null,
    React.createElement("h1", null, "UK Energy Mix"),
    React.createElement(ResultRenderer, { service: dataService, View: EnergyMix }))); });
//# sourceMappingURL=App.js.map