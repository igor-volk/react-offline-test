import "@testing-library/jest-dom/extend-expect";
import * as React from "react";
import { render } from "@testing-library/react";

import ResultRenderer from "../../components/ResultRenderer";

describe("ResultRenderer", () => {
  describe("AND loading has NOT finished", () => {
    test("it should render loading", () => {
      const mockService = (endpoint: "") => ({
        loading: true,
        error: "",
        result: undefined
      });
      const View = () => (<div data-testid="result-view"></div>);
      const comp = render(<ResultRenderer service={mockService} View={View} />);

      expect(comp.getByTestId("result-loading")).toBeInTheDocument();
    });
  });

  describe("AND loading has finished", () => {
    describe("with an error", () => {
      test("it should show error", () => {
        const mockService = (endpoint: "") => ({
          loading: false,
          error: "Some error",
          result: undefined
        });
        const View = () => (<div data-testid="result-view"></div>);
        const comp = render(<ResultRenderer service={mockService} View={View} />);

        expect(comp.getByTestId("result-error")).toBeInTheDocument();
      })
    })

    describe("with success", () => {
      test("it should render the supplied view", () => {
        const mockService = (endpoint: "") => ({
          loading: false,
          error: "",
          result: { from: new Date(), to: new Date(), generationmix: [{ fuel: "coal", perc: 0 }]}
        });
        const View = () => (<div data-testid="result-view"></div>)
        const comp = render(<ResultRenderer service={mockService} View={View} />);

        expect(comp.getByTestId("result-view")).toBeInTheDocument();
      });
    })
  })
});
