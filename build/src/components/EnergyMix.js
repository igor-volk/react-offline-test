import * as React from "react";
import dataService from "../services/dataService";
import { Chart } from "./Chart";
function EnergyMix() {
    var _a = dataService("https://api.carbonintensity.org.uk/generation"), loading = _a.loading, result = _a.result, error = _a.error;
    if (loading) {
        return React.createElement("div", null, "Loading...");
    }
    if (error.length > 0) {
        return React.createElement("div", null, error);
    }
    return (React.createElement(Chart, { data: result }));
}
export default EnergyMix;
//# sourceMappingURL=ResultRenderer.js.map
