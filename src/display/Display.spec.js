// Test away!
import React from "react";
import renderer from "react-test-renderer"; // 1: install this npm module as a dev dependency
import { render } from "@testing-library/react"; // << install this
import "@testing-library/react/cleanup-after-each";
import "jest-dom/extend-expect";

import Control from "../controls/Controls";
import Display from "./Display";
import Dashboard from "../dashboard/Dashboard";
import { fireEvent } from "@testing-library/react/dist";

describe("Dashboard tests", () => {
  it("renders", () => {
    render(<Dashboard />);
  });

  it("should match snapshot", () => {
    const { container } = render(<Display />);
    expect(container).toMatchSnapshot();
  });

  it("should display the correct colors and word", () => {
    const { getByText } = render(<Display />);

    const openGreen = getByText(/open/i);
    const unlockedGreen = getByText(/unlocked/i);

    expect(openGreen).toHaveClass("green-led");
    expect(unlockedGreen).toHaveClass("green-led");
  });

  it("should display the correct colors and word on <Dashboard />", () => {
    const { getByText } = render(<Dashboard />);

    const openGreen = getByText(/open/i);
    const unlockedGreen = getByText(/unlocked/i);

    expect(openGreen).toHaveClass("green-led");
    expect(unlockedGreen).toHaveClass("green-led");

    // testing closing / locked
    const closeGate = getByText(/close gate/i);

    fireEvent.click(closeGate);
    const closedRed = getByText(/closed/i);
    expect(closedRed).toHaveClass("red-led");
    const lockGate = getByText(/lock gate/i);

    fireEvent.click(lockGate);
    const redLocked = getByText(/locked/i);
    expect(redLocked).toHaveClass("red-led");

    // testing unlock / open
    const unlockGate = getByText(/unlock gate/i);

    fireEvent.click(unlockGate);
    expect(unlockedGreen).toHaveClass("green-led");

    const openGate = getByText(/open gate/i);

    fireEvent.click(openGate);
    expect(openGreen).toHaveClass("green-led");
  });
});
