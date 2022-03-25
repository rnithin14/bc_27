import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import DetailsData from "./index";

describe("testing DetailsData", () => {

  it("renders DetailsData component", () => {
    render(
        <DetailsData   
            values={["23","123"]}
            valuesTag={["Hyderabad", "Mumbai"]}
            labelLine1={"Real Time Air Quality Index(AQI)"}
            labelLine2={"in this location"}
        />
    );
    const detailsDataElement = screen.queryByTestId("DetailsData");
  });
  
});
