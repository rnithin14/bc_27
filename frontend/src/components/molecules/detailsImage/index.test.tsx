import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import DetailsImage from "./index";
import image from "../../../assets/images/jobs.svg"


describe("testing DetailsImage", () => {

  it("renders DetailsImage component", () => {
    render(
        <DetailsImage 
          imageCaptionLine1="Enter Location to know"
          imageCaptionLine2="Time Air Quality Index (AQI)"
          image={image} 
        />
    );
    const detailsDataElement = screen.queryByTestId("DetailsImage");
  });
  
});
