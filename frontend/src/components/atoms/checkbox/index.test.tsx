import {render, screen } from "@testing-library/react";
import React from "react";
import "@testing-library/jest-dom/extend-expect";
import Checkbox from "./index";


describe("testing checkbox", () => {
  it("should render checkbox atom", () => {
    render(<Checkbox label="Distance"  check={true} />);
    const testImage = screen.getByTestId("Checkbox");
    expect(testImage).toBeInTheDocument();
  });
  
});

