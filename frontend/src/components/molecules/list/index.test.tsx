import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import List from "./index";
import { listData } from "./props";
import userEvent from "@testing-library/user-event";

it("Renders a card mollecule", () => {
  const handleClick = jest.fn();
  render(<List {...listData} onClick={handleClick} />);
  const button = screen.getByTestId("card").querySelector("button");
  const image = screen.getAllByTestId("Image");

  expect(image).toHaveLength(2);

  expect(screen.getByText(listData.company)).toBeInTheDocument();
  expect(screen.getByText(listData.rate)).toBeInTheDocument();

  if (button) userEvent.click(button);
  expect(handleClick).toHaveBeenCalledTimes(1);
});
