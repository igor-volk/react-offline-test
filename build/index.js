import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "./App";
ReactDOM.render(React.createElement(App, null), document.getElementById("reactMountPoint"));
if (module.hot) {
    module.hot.accept("./App", function () {
        var NewApp = require("./App").default;
        ReactDOM.render(React.createElement(NewApp, null), document.getElementById("reactMountPoint"));
    });
}
//# sourceMappingURL=index.js.map