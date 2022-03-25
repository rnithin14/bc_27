import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import Icon from "./index";
import back from '../../../assets/icons/back.svg';


it("renders mui icons", () => {
  render(<Icon src = {back} />);
  const testIcon = screen.getByTestId("Icon");
  expect(testIcon).toBeInTheDocument();
});
