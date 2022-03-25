import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, screen, fireEvent } from "@testing-library/react";
import Header from "./index";

describe("testing HeaderField", () => {
  it("Testing InputField Compoment", () => {
    render(<Header location="Hyderabad" />);
    const HeaderElement = screen.getByTestId(/Header/i);
    expect(HeaderElement).toBeInTheDocument();
  });

  it("should render input ", () => {
    render(<Header onChange={jest.fn()} location="Mumbai" />);
    const field = screen.getByTestId("inputField").querySelector("input");
    expect(field).toBeInTheDocument();
    if (field) {
      fireEvent.change(field, { target: { value: "Pune" } });
      expect(field.value).toBe("Pune");
    }
  });
});
