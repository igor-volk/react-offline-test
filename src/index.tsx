import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "./App";

ReactDOM.render(
  <App />,
  document.getElementById("reactMountPoint"),
);

declare let module: { hot: any };

if (module.hot) {
  module.hot.accept("./App", () => {
    const NewApp = require("./App").default;

    ReactDOM.render(<NewApp />, document.getElementById("reactMountPoint"));
  });
}
