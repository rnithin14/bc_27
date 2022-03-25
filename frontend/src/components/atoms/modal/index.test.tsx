import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import Modal from "./index";

it("Renders a Modal", () => {
  const onclose = jest.fn();
  render(<Modal isOpen={true} onClose={onclose}></Modal>);
  const modalElement = screen.getByTestId("modal");
  expect(modalElement).toBeInTheDocument();
});
