import * as React from "react";
function ResultRenderer(props) {
    var View = props.View;
    var _a = props.service("https://api.carbonintensity.org.uk/generation"), loading = _a.loading, result = _a.result, error = _a.error;
    if (loading) {
        return React.createElement("div", { "data-testid": "result-loading" }, "Loading...");
    }
    if (error.length > 0) {
        return React.createElement("div", { "data-testid": "result-error" }, error);
    }
    return (React.createElement(View, { data: result }));
}
export default ResultRenderer;
//# sourceMappingURL=ResultRenderer.js.map