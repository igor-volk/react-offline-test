import "@testing-library/jest-dom/extend-expect";
import * as React from "react";
import { render } from "@testing-library/react";
import dataService from "../../services/dataService";
import ResultRenderer from "../../components/ResultRenderer";
describe("ResultRenderer", function () {
    describe("AND loading has NOT finished", function () {
        test("it should render loading", function () {
            var comp = render(React.createElement(ResultRenderer, { service: dataService }));
            expect(comp.getByTestId("result-loading")).toBeInTheDocument();
        });
    });
    describe("AND loading has finished", function () {
        describe("with an error", function () {
            test("it should show error", function () {
                var mockService = function (endpoint) { return ({
                    loading: false,
                    error: "Some error",
                    result: undefined
                }); };
                var comp = render(React.createElement(ResultRenderer, { service: mockService }));
                expect(comp.getByTestId("result-error")).toBeInTheDocument();
            });
        });
        describe("with success", function () {
            test("it should draw a chart", function () {
                var mockService = function (endpoint) { return ({
                    loading: false,
                    error: "",
                    result: { from: new Date(), to: new Date(), generationmix: [{ fuel: "coal", perc: 0 }] }
                }); };
                var comp = render(React.createElement(ResultRenderer, { service: mockService }));
                expect(comp.getByTestId("energyMix-chart")).toBeInTheDocument();
            });
        });
    });
});
//# sourceMappingURL=EnergyMix.test.js.map
