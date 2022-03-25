import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import UploadResume from ".";


it("renders an Upload Resume atom", () => {
  render(<UploadResume children="Upload Resume"/>);
  const testUploadResume = screen.getByTestId("UploadResume");
  expect(testUploadResume).toBeInTheDocument();
});
