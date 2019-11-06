import * as React from "react";
import useDataFetching from "./useDataFetching";
import { Chart } from './Chart';
function EnergyMix() {
    var _a = useDataFetching("https://api.carbonintensity.org.uk/generatio"), loading = _a.loading, result = _a.result, error = _a.error;
    if (loading || error) {
        return loading ? "Loading..." : error;
    }
    return (React.createElement(Chart, { data: result.generationmix }));
}
export default EnergyMix;
//# sourceMappingURL=EnergyHooks.js.map