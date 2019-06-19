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
});

describe("open and close the gate", () => {
  it("should open gate", () => {
    const { getByText } = render(<Dashboard />);
    const openGate = getByText(/Close Gate/);
    fireEvent.click(openGate);
  });

  it("should close gate", () => {
    const { getByText } = render(<Dashboard />);
    const lockGate = getByText(/Lock Gate/);

    fireEvent.click(lockGate);
  });
});

describe("should lock and unlock gate", () => {
  it("should lock the gate", () => {
    const { getByText } = render(<Dashboard />);
    const closeGate = getByText(/Close Gate/);
    const lockGate = getByText(/Lock Gate/);

    fireEvent.click(closeGate);
    getByText(/Open Gate/);

    fireEvent.click(lockGate);
    getByText(/Unlock Gate/);
  });

  it("should unlock", () => {
    const { getByText } = render(<Dashboard />);
    const closeGate = getByText(/Close Gate/);
    const lockGate = getByText(/Lock Gate/);

    fireEvent.click(closeGate);
    getByText(/Open Gate/);

    fireEvent.click(lockGate);
    getByText(/Unlock Gate/);
  });
});
