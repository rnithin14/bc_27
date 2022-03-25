import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import Image from "./index";
import jobs from "../../../assets/images/jobs.svg"


it("renders an image", () => {
  render(<Image src = {jobs} alt = "Image"></Image>);
  const testImage = screen.getByTestId("Image");
  expect(testImage).toBeInTheDocument();
});
