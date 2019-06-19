// Test away!
import React from "react";
import renderer from "react-test-renderer"; // 1: install this npm module as a dev dependency
import { render } from "@testing-library/react"; // << install this
import "@testing-library/react/cleanup-after-each";

import Control from "./Controls";
import Dashboard from "../dashboard/Dashboard";
import { fireEvent } from "@testing-library/react/dist";

describe("<Control />", () => {
  it("runs tests", () => {
    expect(true).toBe(true);
  });

  it("should match snapshot", () => {
    const { container } = render(<Control />);
    expect(container).toMatchSnapshot();
  });

  it("should toggle the correct button actions", () => {
    const { getByText } = render(<Dashboard />);

    const closeGate = getByText(/Closed/);
    const lockGate = getByText(/Locked/);
  });
});
