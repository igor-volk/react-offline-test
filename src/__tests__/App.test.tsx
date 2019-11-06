import "@testing-library/jest-dom/extend-expect";
import * as React from "react";
import { render } from "@testing-library/react";

import App from "../App";

describe("App", () => {
  test("should render ok", () => {
    const app = render(<App />);

    expect(app).toBeDefined();
  });
});
