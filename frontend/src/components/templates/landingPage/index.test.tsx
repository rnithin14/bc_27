import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import LandingPage from "./index";
import image from "../../../assets/images/stay.svg"


describe("testing LandingPage", () => {

  it("renders LandingPage template", () => {
    render(
      <LandingPage   
        currentPage={1}
        searchLabel={"Where do you stay ?"}
        autocompleteOptions={["Hyderabad", "Mumbai", "Chennai"]}
        isInputSet={true}
        detailsLabelLine1={"Real Time Air Quality Index(AQI) in this location"}
        detailsLabelLine2={"in this location"}
        inputValues={["Hyderabad", "Mumbai"]}
        inputValuesResult={["123","34"]}
        isInputValueChip={false}
        autocompletePlaceholder="Enter your location"
        imageCaptionLine1={"Enter Location to know"}
        imageCaptionLine2={"Time Air Quality Index (AQI)"}
        image={image}
      />
    );
    const landingPageElement = screen.queryByTestId("LandingPage");
  });
  
});
