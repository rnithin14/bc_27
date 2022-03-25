import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import Button from ".";
import userEvent from "@testing-library/user-event";

describe("Button Tests", () => {
  it("Renders a button", () => {
    const handleClick = jest.fn();
    render(
      <Button variant="contained" onClick={handleClick}>
        Button
      </Button>
    );
    const button = screen.getByTestId("button");
    expect(button).toBeInTheDocument();

    userEvent.click(button);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
