import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, screen, waitFor } from "@testing-library/react";
import SearchStepHeader from "./index";
import tick from "../../../assets/icons/tick.svg";

describe("testing searchStep", () => {

  it("renders a SearchStep component", () => {
    render(
      <SearchStepHeader currentPage={1} stepperHeadings={["Your Location", "Job Location", "Your Skills" ]} />
    );
    const searchStepHeaderElement = screen.queryByTestId("SearchStepHeader");
  });
  
});
