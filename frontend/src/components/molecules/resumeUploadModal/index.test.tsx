import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, screen, fireEvent } from "@testing-library/react";
import ResumeUploadModel from "./index";

it("renders an Upload Successful Modal", () => {
  render(<ResumeUploadModel onChange={jest.fn()} onClick={jest.fn()} />);
  const testResumeUploadModel = screen.getByTestId("modal");
  expect(testResumeUploadModel).toBeInTheDocument();
});
it("should close the dialog on click of close", () => {
  render(<ResumeUploadModel onChange={jest.fn()} onClick={jest.fn()} />);
  const test = screen.getByTestId("close");
  const text = screen.getByText(/upload resume/i);
  fireEvent.click(test);
  expect(text).not.toBeVisible();
});
