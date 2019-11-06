import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
describe("App", function () {
    test("should render energy mix", function () {
        var app = render(/>);, expect(app.getByTestId("energyMix")).toBeInTheDocument());
    });
});
//# sourceMappingURL=App.test.js.map