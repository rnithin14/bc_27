import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, screen, fireEvent } from "@testing-library/react";
import UploadSuccessfulModal from "./index";

it("renders an Upload Successful Modal", () => {
  render(<UploadSuccessfulModal userName="user" />);
  const testUploadSuccessfulModal = screen.getByTestId("modal");
  expect(testUploadSuccessfulModal).toBeInTheDocument();
});

it("should close the dialog on click of close", () => {
  render(<UploadSuccessfulModal userName="user" />);
  const test = screen.getByTestId("close");
  const text = screen.getByText(/resume/i);
  fireEvent.click(test);

  expect(text).not.toBeVisible();
});
