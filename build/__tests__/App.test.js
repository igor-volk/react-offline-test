import "@testing-library/jest-dom/extend-expect";
import * as React from "react";
import { render } from "@testing-library/react";
import App from "../App";
describe("App", function () {
    test("should render ok", function () {
        var app = render(React.createElement(App, null));
        expect(app).toBeDefined();
    });
});
//# sourceMappingURL=App.test.js.map