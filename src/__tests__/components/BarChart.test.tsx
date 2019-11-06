import "@testing-library/jest-dom/extend-expect";
import * as React from "react";
import { render } from "@testing-library/react";

import BarChart from "../../components/BarChart";

describe("Bar Chart", () => {
  test("it should render bars", () => {
    const fakeData = [
      { name: "First bar", value: 20 },
      { name: "Second bar", value: 40 }
    ];
    const comp = render(<BarChart width={500} height={300} data={fakeData}/>);

    expect(comp.getByTestId("First bar")).toBeInTheDocument();
    expect(comp.getByTestId("Second bar")).toBeInTheDocument();
  });
});
