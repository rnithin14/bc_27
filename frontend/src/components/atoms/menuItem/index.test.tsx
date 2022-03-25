import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import MenuItem from ".";
import userEvent from "@testing-library/user-event";
import { menuItemData } from "./props";
import { MemoryRouter } from "react-router-dom";

describe("Menu Item Tests", () => {
  it("Renders a Menu Item", () => {
    const handleClick = jest.fn();
    render(
      <MemoryRouter>
        <MenuItem {...menuItemData} onClick={handleClick}>
          Item
        </MenuItem>
      </MemoryRouter>
    );
    const menuItem = screen.getByTestId("menu-item");
    expect(menuItem).toBeInTheDocument();
    expect(menuItem).toHaveTextContent("Item");

    userEvent.click(menuItem);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
