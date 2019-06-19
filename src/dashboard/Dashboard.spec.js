// Test away!
import React from "react";
import renderer from "react-test-renderer"; // 1: install this npm module as a dev dependency
import { render } from "@testing-library/react"; // << install this
import "@testing-library/react/cleanup-after-each";
import "jest-dom/extend-expect";

import Dashboard from "../dashboard/Dashboard";

describe("Dashboard tests", () => {
  it("renders", () => {
    render(<Dashboard />);
  });

  it("should match snapshot", () => {
    const { container } = render(<Dashboard />);
    expect(container).toMatchSnapshot();
  });
});
