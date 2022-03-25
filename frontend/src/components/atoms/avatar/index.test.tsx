import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import Avatar from "./index";

it("renders a avatar", () => {
  render(<Avatar children="S" />);
  const ReactElement = screen.getByTestId("avatar");
  expect(ReactElement).toBeInTheDocument();
});
