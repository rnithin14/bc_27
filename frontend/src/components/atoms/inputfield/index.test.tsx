import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, screen, fireEvent } from "@testing-library/react";
import InputField from ".";

describe("testing InputField", () => {
  it("Testing InputField Compoment", () => {
    render(<InputField location="Hyderabad" />);
    const inputElement = screen.getByTestId(/inputField/i);
    expect(inputElement).toBeInTheDocument();
  });

  it("should render input ", () => {
    render(<InputField onChange={jest.fn()} location="Mumbai" />);
    const field = screen.getByTestId("inputField").querySelector("input");
    expect(field).toBeInTheDocument();
    if (field) {
      fireEvent.change(field, { target: { value: "Pune" } });
      expect(field.value).toBe("Pune");
    }
  });
});
