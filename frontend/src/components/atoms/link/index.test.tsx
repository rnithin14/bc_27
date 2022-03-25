import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { cleanup, render, screen } from "@testing-library/react";
import Link from ".";

afterEach(cleanup);

describe("Testing Link", () => {
  it("renders Link", () => {
    render(<Link children="skip"/>);
    expect(screen.getByTestId("Link")).toBeInTheDocument();
  });
});
