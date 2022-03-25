import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import Card from "./index";
import { cardData } from "./props";
import { userEvent } from "@storybook/testing-library";

describe("Card molecule", () => {
  it("Renders horizontal card molecule", () => {
    const handleClick = jest.fn();

    render(<Card {...cardData} onClick={handleClick} />);
    const card = screen.getByTestId("card");

    const image = screen.getAllByTestId("Image");

    expect(image).toHaveLength(4);

    expect(screen.getByText(cardData.company)).toBeInTheDocument();
    expect(screen.getByText(cardData.location)).toBeInTheDocument();
    expect(screen.getByText(cardData.postTime)).toBeInTheDocument();
    expect(screen.getByText(cardData.skill)).toBeInTheDocument();

    userEvent.click(card);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("Renders horizontal card molecule with button", () => {
    const handleClick = jest.fn();
    const data = { ...cardData };
    data.orientation = "horizontalButton";

    render(<Card {...data} onSave={handleClick} onApply={handleClick} />);

    const image = screen.getAllByTestId("Image");

    expect(image).toHaveLength(2);

    expect(screen.getByText(cardData.company)).toBeInTheDocument();
    expect(screen.getByText(cardData.location)).toBeInTheDocument();
    expect(screen.getByText(cardData.postTime)).toBeInTheDocument();
    expect(screen.getByText(cardData.skill)).toBeInTheDocument();

    const buttons = screen.getAllByTestId("button");
    userEvent.click(buttons[0]);
    userEvent.click(buttons[1]);

    expect(handleClick).toHaveBeenCalledTimes(2);
  });
});
