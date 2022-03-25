import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import SideMenu from ".";
import { sideMenuData } from "./props";
import { MemoryRouter } from "react-router-dom";
import { useStyledMenu } from "./hooks";
import { ActiveMenuItem, StyledMenuItem } from "./styles";

describe("Menu Side Menu", () => {
  it("Renders side menu", () => {
    render(
      <MemoryRouter initialEntries={["/dashboard"]}>
        <SideMenu {...sideMenuData}></SideMenu>
      </MemoryRouter>
    );
    const menuItems = screen.getAllByTestId("menu-item");
    const ActiveStyledMenu = useStyledMenu("/dashboard", "/dashboard");
    const StyledMenu = useStyledMenu("/dashboard", "");

    expect(menuItems[0]).toHaveAttribute("href", "/dashboard");
    expect(menuItems[1]).toHaveAttribute("href", "/searchJob");
    expect(menuItems[2]).toHaveAttribute("href", "/jobs/saved");

    expect(ActiveStyledMenu).toEqual(ActiveMenuItem);
    expect(StyledMenu).toEqual(StyledMenuItem);

    expect(menuItems.length).toBe(8);
  });
});
