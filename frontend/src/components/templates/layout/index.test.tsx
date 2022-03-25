import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import Template from "./index";
import { MemoryRouter } from "react-router-dom";

describe("testing Template Layout", () => {
  it("Testing Header Compoment", () => {
    render(
      <MemoryRouter initialEntries={["/dashboard"]}>
        <Template location="Hyderabad" />
      </MemoryRouter>
    );
    const HeaderElement = screen.getByTestId(/Header/i);
    expect(HeaderElement).toBeInTheDocument();
  });

  it("Renders side menu", () => {
    render(
      <MemoryRouter initialEntries={["/dashboard"]}>
        <Template location="Hyderabad" />
      </MemoryRouter>
    );
    const menuItems = screen.getAllByTestId("menu-item");
    expect(menuItems[0]).toHaveAttribute("href", "/dashboard");
    expect(menuItems[1]).toHaveAttribute("href", "/searchJob");
    expect(menuItems[2]).toHaveAttribute("href", "/jobs/saved");
  });
});
